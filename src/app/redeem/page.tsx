"use client";

import Header from "@/components/Header";
import BackButton from "@/components/BackButton";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type Brand = { key: string; name: string; color: string };
const BRANDS: Brand[] = [
  { key: "adidas", name: "Adidas", color: "bg-black text-white" },
  { key: "decathlon", name: "Decathlon", color: "bg-blue-600 text-white" },
  { key: "firstcry", name: "Firstcry", color: "bg-pink-500 text-white" },
];

export default function RedeemPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">Loading…</div>}>
      <RedeemContent />
    </Suspense>
  );
}

function RedeemContent() {
  const router = useRouter();
  const params = useSearchParams();
  const [selected, setSelected] = useState<Brand>(BRANDS[0]);
  const [amount, setAmount] = useState<string>(String(Number(params.get("amount") || 100)));
  const [upiId, setUpiId] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    const a = params.get("amount");
    if (a && !Number.isNaN(Number(a))) setAmount(String(a));
  }, [params]);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }

  const canContinue = Boolean(fileName && upiId && Number(amount) > 0);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 animate-fade-up">
        <BackButton />
        <h1 className="text-center text-3xl sm:text-4xl font-bold">Claim Cashback</h1>
        <p className="text-center text-black/70 mt-2">Redeem ₹{amount} from your Corra Coins</p>

        {/* Stepper */}
        <div className="mt-6 flex items-center justify-center gap-12 text-sm">
          {[
            { label: "Upload Receipt", active: true },
            { label: "Verify Details", active: false },
            { label: "Submit", active: false },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className={`h-9 w-9 rounded-full grid place-items-center text-white ${s.active ? "bg-green-700" : "bg-black/30"}`}>{i + 1}</div>
              <span className="text-black/70">{s.label}</span>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-black/10 shadow-soft bg-white animate-fade-up delay-100">
          <div className="px-6 py-6 border-b border-black/10">
            <h2 className="text-xl sm:text-2xl font-semibold">Upload Receipt for {selected.name}</h2>
            <p className="text-black/70 mt-2">Upload a clear photo of your purchase receipt to claim cashback</p>
          </div>
          <div className="p-6">
            {/* Brand selector */}
            <div className="mb-6">
              <div className="text-sm font-medium mb-2">Select a brand</div>
              <div className="flex items-center gap-3">
                <button className="h-9 w-9 rounded-full border border-black/15 grid place-items-center">‹</button>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {BRANDS.map((b) => (
                    <button
                      key={b.key}
                      onClick={() => setSelected(b)}
                      className={`rounded-xl border p-4 flex items-center gap-3 text-left transition transform duration-200 ${
                        selected.key === b.key ? "border-green-600 bg-green-50" : "border-black/15 hover:bg-black/5"
                      }`}
                    >
                      <span className={`h-10 w-10 rounded-full ${b.color} grid place-items-center transition-transform duration-200 ${selected.key === b.key ? "scale-110" : "scale-100"}`} />
                      <span className="font-medium transition-colors">{b.name}</span>
                    </button>
                  ))}
                </div>
                <button className="h-9 w-9 rounded-full border border-black/15 grid place-items-center">›</button>
              </div>
              <div className="mt-2 text-sm text-black/60">View all brands ▾</div>
            </div>

            {/* Upload Requirements */}
            <div className="rounded-xl border border-blue-200 bg-blue-50 text-blue-700 p-4 text-sm">
              <ul className="list-disc pl-5 space-y-1">
                <li>Make sure the receipt photo is clear</li>
                <li>PNG or JPG up to 10MB</li>
              </ul>
            </div>

            {/* Dropzone */}
            <div className="mt-6">
              <label
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) {
                    setFileName(file.name);
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                  }
                }}
                className={`block rounded-2xl border-2 border-dashed px-6 py-12 text-center text-black/70 cursor-pointer transition-colors drop-shadow-soft ${
                  dragging || previewUrl ? "border-green-500 bg-green-50" : "border-black/15 hover:bg-black/5"
                }`}
              >
                <input type="file" accept="image/png,image/jpeg" className="hidden" onChange={onFileChange} />
                {previewUrl ? (
                  <div className="animate-fade-in">
                    <img src={previewUrl} alt="Preview" className="mx-auto max-h-56 rounded-xl drop-shadow-soft" />
                    <div className="mt-3 text-sm">Selected: <span className="font-medium">{fileName}</span></div>
                  </div>
                ) : (
                  <>
                    <div className="mx-auto h-12 w-12 rounded-full border border-black/20 grid place-items-center text-2xl">↥</div>
                    <div className="mt-3 font-medium">Click to upload or drag and drop</div>
                    <div className="text-xs text-black/50">PNG, JPG up to 10MB</div>
                  </>
                )}
              </label>
            </div>

            {/* Amount */}
            <div className="mt-6">
              <label className="text-sm font-medium">Transaction Value (₹)</label>
              <div className="mt-1 relative">
                <input
                  className="w-full h-12 rounded-xl border border-black/15 px-4 pr-10 outline-none focus:border-green-600 transition"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  inputMode="numeric"
                />
                <button className="absolute right-2.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-md border border-black/15 grid place-items-center text-xs">↻</button>
              </div>
            </div>

            {/* UPI ID */}
            <div className="mt-4">
              <label className="text-sm font-medium">UPI ID</label>
              <input
                className="mt-1 w-full h-12 rounded-xl border border-black/15 px-4 outline-none focus:border-green-600 transition"
                placeholder="Enter your UPI ID (e.g., name@paytm)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>

            {/* Notes */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="rounded-lg bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3">
                Verifying your transaction will take 2–3 business days
              </div>
              <div className="rounded-lg bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3">
                You can get cashback on earned Corra Coins on purchase
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="h-11 px-4 rounded-xl border border-black/15 bg-white hover:bg-black/5 flex items-center gap-2 transition active:scale-95">
                <span className="h-6 w-6 rounded-md border border-black/15 grid place-items-center">📷</span>
                Take Photo
              </button>
              <button
                onClick={() => {
                  if (!canContinue) return;
                  router.push(`/redeem/success?amount=${encodeURIComponent(amount)}`);
                }}
                className={`flex-1 h-12 rounded-xl text-white font-medium transition ${
                  canContinue ? "bg-green-700 hover:bg-green-800 active:scale-95" : "bg-black/20 cursor-not-allowed"
                }`}
              >
                Continue to Verify
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


