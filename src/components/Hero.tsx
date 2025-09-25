type Brand = { key: string; name: string; short: string; color: string };

const brands: Brand[] = [
  { key: "adi", name: "Adidas", short: "Adi", color: "bg-black text-white" },
  { key: "dec", name: "Decathlon", short: "Dec", color: "bg-blue-600 text-white" },
  { key: "fir", name: "Firstcry", short: "Fir", color: "bg-pink-500 text-white" },
  { key: "urb", name: "Urbanic", short: "Urb", color: "bg-purple-600 text-white" },
  { key: "myn", name: "Myntra", short: "Myn", color: "bg-amber-400 text-black" },
  { key: "nyk", name: "Nykaa", short: "Nyk", color: "bg-rose-500 text-white" },
  { key: "pha", name: "Pharmacy", short: "Pha", color: "bg-green-500 text-white" },
  { key: "wak", name: "Wakefit", short: "Wak", color: "bg-indigo-500 text-white" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            One Club. <span className="text-green-700">Many</span> <span className="text-green-700">Brands.</span> Infinite Rewards.
          </h1>
          <div className="mt-10 flex items-center gap-10">
            <div>
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm text-black/60">30+ Brands<br/>Tie-ups</div>
            </div>
            <div>
              <div className="text-3xl font-bold">∞ XX</div>
              <div className="text-sm text-black/60">Earn coins from<br/>all brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold flex items-baseline gap-1"><span className="text-green-700">₹</span> 1 INR</div>
              <div className="text-sm text-black/60">Convert to Cash<br/>or next purchase</div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[360px] w-[360px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full border border-black/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] w-[240px] rounded-full border border-black/10" />

              {/* Center logo with ripple */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="center-pulse h-24 w-24 rounded-full bg-green-700 text-white grid place-items-center text-2xl font-bold shadow-lg">C</div>
              </div>

              {/* Orbiting brands arranged evenly around the 300px ring (radius 150px) */}
              <div className="absolute inset-0">
                {brands.map((b, index) => {
                  const angle = (360 / brands.length) * index;
                  const isLeft = angle > 90 && angle < 270;
                  return (
                    <div
                      key={b.key}
                      className="group absolute left-[55%] top-[55%] -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-150px) rotate(${-angle}deg)` }}
                    >
                      <div className={`relative ${b.color} h-12 w-12 rounded-full grid place-items-center text-sm font-semibold brand-orbit`}>{b.short}</div>
                      <div
                        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white text-black border border-black/10 shadow px-3 py-1 text-xs opacity-0 scale-95 transition duration-200 group-hover:opacity-100 group-hover:scale-100 ${
                          isLeft ? "right-[56px] origin-right" : "left-[56px] origin-left"
                        }`}
                      >
                        {b.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


