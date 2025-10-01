"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Brand = { key: string; name: string; color: string; rate: number };

const BRANDS: Brand[] = [
  { key: "adidas", name: "Adidas", color: "bg-black text-white", rate: 0.15 },
  { key: "decathlon", name: "Decathlon", color: "bg-blue-600 text-white", rate: 0.12 },
  { key: "firstcry", name: "Firstcry", color: "bg-pink-500 text-white", rate: 0.1 },
];

export default function HowItWorks() {
  const router = useRouter();
  const [selected, setSelected] = useState<Brand>(BRANDS[0]);
  const [amount, setAmount] = useState<number>(1000);
  const presetValues = [500, 1000, 2500];
  const coins = useMemo(() => Math.round(amount * selected.rate), [amount, selected]);
  const [coinAnimKey, setCoinAnimKey] = useState(0);

  function handleSelectBrand(b: Brand) {
    setSelected(b);
    setCoinAnimKey((k) => k + 1);
  }

  function handleSetAmount(v: number) {
    setAmount(v);
    setCoinAnimKey((k) => k + 1);
  }
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">How to Earn Corra Coins?</h2>
          <ol className="space-y-8">
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-green-700 text-white grid place-items-center font-semibold">1</div>
              <div>
                <div className="font-semibold text-lg">Show latest purchase</div>
                <p className="text-black/70">Upload receipt of latest order to verify details.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-green-700 text-white grid place-items-center font-semibold">2</div>
              <div>
                <div className="font-semibold text-lg">Earn Corra Coins</div>
                <p className="text-black/70">Get coins in your Corra Wallet. Convert to cash for next transaction.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-green-700 text-white grid place-items-center font-semibold">3</div>
              <div>
                <div className="font-semibold text-lg">100% Cashback</div>
                <p className="text-black/70">Upload proof of next transaction & get Corra coins to cash.</p>
                <p className="mt-2 text-green-700 font-semibold">1 CorraCoin = ₹1</p>
              </div>
            </li>
          </ol>
        </div>
        <div id="brands" className="w-full">
          <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-6 animate-fade-up delay-100">
            <div className="flex items-center gap-3">
              <button className="h-8 w-8 rounded-full border border-black/10 grid place-items-center">‹</button>
              <div className="flex-1 grid grid-cols-3 gap-4">
                {BRANDS.map((b) => (
                  <button
                    key={b.key}
                    className={`rounded-xl border p-4 flex items-center gap-3 text-left ${
                      selected.key === b.key ? "border-green-600 bg-green-50" : "border-black/10 hover:bg-black/5"
                    }`}
                    onClick={() => handleSelectBrand(b)}
                  >
                    <div className={`h-10 w-10 rounded-full grid place-items-center ${b.color} transition-transform duration-200 ${selected.key === b.key ? "scale-110" : "scale-100"}`}> </div>
                    <div className="font-medium transition-colors duration-200">{b.name}</div>
                  </button>
                ))}
              </div>
              <button className="h-8 w-8 rounded-full border border-black/10 grid place-items-center">›</button>
            </div>

            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 p-4 text-sm">
              <ul className="list-disc pl-5 space-y-1">
                <li>Your purchase must be within 1 month</li>
                <li>Earned coins will be available for cashback on next purchase</li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="text-sm font-medium mb-2">Transaction Value</div>
              <div className="grid grid-cols-3 gap-3">
                {presetValues.map((v) => (
                  <button
                    key={v}
                    onClick={() => handleSetAmount(v)}
                    className={`h-12 rounded-xl border text-sm font-medium ${
                      amount === v ? "border-green-600 bg-green-50" : "border-black/15 hover:bg-black/5"
                    }`}
                  >
                    ₹ {v}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                <input
                  type="number"
                  className="w-full h-12 rounded-xl border border-black/15 px-4 outline-none focus:border-green-600"
                  value={amount}
                  onChange={(e) => handleSetAmount(Number(e.target.value || 0))}
                  min={0}
                />
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-8 text-center">
              <div key={coinAnimKey} className="text-4xl font-bold inline-block animate-coin-pop">{coins} <span className="text-amber-500 text-lg align-top">₹</span></div>
              <div className="text-black/70 mt-1">Corra Coins Earned</div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => router.push(`/upload?brand=${selected.key}&amount=${amount}`)}
                className="w-full h-12 rounded-xl bg-green-700 text-white font-medium hover:bg-green-800"
              >
                Earn Coins Now →
              </button>
              <button
                onClick={() => {
                  try {
                    const isAuthed = typeof window !== "undefined" && !!localStorage.getItem("auth");
                    if (isAuthed) {
                      router.push("/dashboard");
                    } else {
                      router.push("/verify?redirect=dashboard");
                    }
                  } catch {
                    router.push("/verify?redirect=dashboard");
                  }
                }}
                className="mt-3 w-full h-12 rounded-xl border border-black/15 text-green-700 font-medium hover:bg-green-50"
              >
                Already Earned? Convert To Cash →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


