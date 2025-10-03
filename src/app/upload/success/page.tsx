"use client";

import BackButton from "@/components/BackButton";
import { useRouter, useSearchParams } from "next/navigation";

export default function UploadSuccessPage() {
  const router = useRouter();
  const params = useSearchParams();
  const brand = params.get("brand") || "";
  const amount = Number(params.get("amount") || 0);
  const coins = Number.isFinite(amount) && amount > 0 ? Math.round(amount) : 0;

  return (
    <div className="font-sans bg-white min-h-screen">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 animate-fade-up text-center">
        <BackButton className="mb-4" />
        <section className="mt-6 rounded-2xl border border-black/10 shadow-soft bg-white p-10">
          <div className="mx-auto h-16 w-16 rounded-full bg-green-100 text-green-700 grid place-items-center text-3xl">✓</div>
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold">Receipt Verified!</h1>
          <p className="mt-2 text-black/70">
            {brand ? `You earned ${coins} Corra Coins for your ${brand} purchase.` : `You earned ${coins} Corra Coins.`}
          </p>

          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-4">
            🎉 Coins have been credited to your wallet
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="h-12 rounded-xl bg-green-700 text-white font-medium hover:bg-green-800"
            >
              Back to Wallet
            </button>
            <button
              onClick={() => router.push("/upload")}
              className="h-12 rounded-xl border border-black/15"
            >
              Upload Another Receipt
            </button>
          </div>
          <div className="mt-6 text-sm text-black/60">Track your earnings in the Transaction History</div>
        </section>
      </main>
    </div>
  );
}


