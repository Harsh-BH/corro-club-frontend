"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [redeemAmount, setRedeemAmount] = useState<number>(100);

  useEffect(() => {
    try {
      const authed = typeof window !== "undefined" && !!localStorage.getItem("auth");
      if (!authed) router.replace("/verify?redirect=dashboard");
    } catch {
      router.replace("/verify?redirect=dashboard");
    }
  }, [router]);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 animate-fade-up">
        {/* Back */}
        <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black rounded-lg border border-black/10 px-3 py-2 bg-white/70 backdrop-blur">
          <span className="rotate-180">➔</span> Back
        </button>
        <h1 className="text-3xl sm:text-4xl font-bold">Welcome, Rohit!</h1>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold">6969</div>
              <div className="text-amber-700 font-medium">Corra Coins</div>
            </div>
            <div className="text-black/60">10 Redeemed</div>
          </div>
          <div className="mt-4 text-black/70">6969 Earned</div>
        </section>

        <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Get Cashback Now!</h2>
            <div className="text-green-700 font-semibold">₹{redeemAmount}</div>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min={50}
              max={500}
              step={50}
              value={redeemAmount}
              onChange={(e) => setRedeemAmount(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-black/60"><span>₹50</span><span>₹500</span></div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="font-semibold">Transaction History</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <div className="font-medium">Earned Coins</div>
                <div className="text-black/60 text-sm">Swiggy</div>
              </div>
              <div className="text-green-700 font-semibold">+₹200</div>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <div className="font-medium">Redeemed</div>
                <div className="text-black/60 text-sm">Amazon</div>
              </div>
              <div className="text-rose-600 font-semibold">-₹150</div>
            </li>
          </ul>
        </section>

        <div className="mt-8">
          <button
            onClick={() => router.push(`/redeem?amount=${redeemAmount}`)}
            className="w-full h-12 rounded-xl bg-green-700 text-white font-medium hover:bg-green-800"
          >
            Get ₹{redeemAmount} Cashback →
          </button>
        </div>
      </main>
    </div>
  );
}


