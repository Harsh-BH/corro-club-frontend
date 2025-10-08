"use client";

import BackButton from "@/components/BackButton";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function VerifyPhonePage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">Loading…</div>}>
      <VerifyContent />
    </Suspense>
  );
}

function VerifyContent() {
  const router = useRouter();
  const params = useSearchParams();
  const brand = params.get("brand") || "brand";
  const amount = params.get("amount") || "";
  const redirect = params.get("redirect") || "";
  const [phone, setPhone] = useState("");

  function handleContinue() {
    router.push(`/verify/otp?brand=${encodeURIComponent(brand)}&amount=${encodeURIComponent(amount)}&phone=${encodeURIComponent(phone)}&redirect=${encodeURIComponent(redirect)}`);
  }

  return (
    <div className="font-sans bg-white min-h-screen">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-up">
        <BackButton />
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold px-4">Enter Contact Details</h1>
        <p className="text-center text-black/70 mt-2 text-sm sm:text-base px-4">Verify your mobile number to continue</p>

        <section className="mt-8 sm:mt-10 rounded-2xl border border-black/10 shadow-soft bg-white p-6 sm:p-8 text-center animate-fade-up delay-100">
          <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-700 text-white grid place-items-center text-xl sm:text-2xl">📞</div>
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold">Enter Your Mobile Number</h2>
          <p className="mt-1 text-black/70 text-sm sm:text-base">We&apos;ll send you a verification code to confirm your identity</p>

          <div className="mt-6 text-left">
            <label className="text-sm font-medium">Mobile Number</label>
            <div className="mt-1 flex rounded-xl border border-black/15 overflow-hidden">
              <span className="px-3 grid place-items-center text-black/70 border-r border-black/10 text-sm sm:text-base">+91</span>
              <input
                className="flex-1 h-12 px-3 outline-none text-base"
                placeholder="7015706108"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="numeric"
              />
            </div>
            <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 p-3 text-xs sm:text-sm">
              Your privacy is protected. We use your mobile number only for verification and updates about your Corra Coins.
            </div>
          </div>

          <div className="mt-6">
            <button onClick={handleContinue} className="w-full h-12 rounded-xl bg-green-700 text-white font-medium hover:bg-green-800 touch-target">Send OTP</button>
          </div>
        </section>
      </main>
    </div>
  );
}


