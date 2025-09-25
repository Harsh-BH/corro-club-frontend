export default function HowItWorks() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
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
          <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-6">
            <div className="flex items-center gap-3">
              <button className="h-8 w-8 rounded-full border border-black/10 grid place-items-center">‹</button>
              <div className="flex-1 grid grid-cols-3 gap-4">
                {[
                  { name: "Adidas", color: "bg-black text-white" },
                  { name: "Decathlon", color: "bg-blue-600 text-white" },
                  { name: "Firstcry", color: "bg-pink-500 text-white" },
                ].map((b) => (
                  <div key={b.name} className="rounded-xl border border-black/10 p-4 flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full grid place-items-center ${b.color}`}> </div>
                    <div className="font-medium">{b.name}</div>
                  </div>
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
                {[
                  { label: "₹ 500" },
                  { label: "₹ 1000", active: true },
                  { label: "₹ 2500" },
                ].map((x) => (
                  <button
                    key={x.label}
                    className={`h-12 rounded-xl border text-sm font-medium ${
                      x.active ? "border-green-600 bg-green-50" : "border-black/15 hover:bg-black/5"
                    }`}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-8 text-center">
              <div className="text-4xl font-bold">150 <span className="text-amber-500 text-lg align-top">₹</span></div>
              <div className="text-black/70 mt-1">Corra Coins Earned</div>
            </div>

            <div className="mt-6">
              <button className="w-full h-12 rounded-xl bg-green-700 text-white font-medium hover:bg-green-800">
                Earn Coins Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


