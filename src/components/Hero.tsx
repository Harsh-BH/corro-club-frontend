

import Image from "next/image";

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 grid grid-cols-1 gap-14 items-center justify-items-center">
        <div className="animate-fade-up text-center">
          <div className="flex justify-center">
            <Image
              src="/corro_logo.png"
              alt="Corra Club"
              width={72}
              height={72}
              className="mx-auto mb-6 rounded-full"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            One Club.
            <span className="text-green-700"> Many Brands.</span>
            <br className="hidden sm:block" />
            Infinite Rewards.
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-black/60 max-w-3xl mx-auto">
            <span className="text-green-700 font-semibold">Corra Club</span> - A multi-brand loyalty program with all your beloved brands. Get cashback on all transactions
          </p>

          <div className="mt-8">
            <form className="w-full max-w-xl md:max-w-2xl mx-auto">
              <div className="flex items-stretch rounded-full shadow-md overflow-hidden border border-black/10 bg-white">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 outline-none text-base placeholder-black/40 focus:text-black focus:placeholder-black/30"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 sm:px-8 py-4 font-semibold hover:bg-green-800 transition-colors"
                >
                  Get Early Access
                </button>
              </div>
            </form>
            <div className="mt-4">
              <a href="#earn" className="group inline-flex items-center gap-2 text-black/70 hover:text-green-700 transition-colors underline decoration-black/20 underline-offset-4">
                Earn Rewards Now <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] animate-fade-up delay-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[360px] w-[360px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full border border-black/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[240px] w-[240px] rounded-full border border-black/10" />

              {/* Center logo with ripple */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="center-pulse h-24 w-24 rounded-full bg-green-700 text-white grid place-items-center text-2xl font-bold shadow-lg">C</div>
              </div>

              {/* Orbiting brands arranged evenly around the 300px ring (radius 150px) */}
              <div className="absolute inset-0 animate-rotate-slow">
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
                        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white text-black border border-black/10 shadow px-3 py-1 text-xs transition duration-200 ${
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

          {/* Side callouts */}
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-96 lg:-translate-x-[28rem] xl:-translate-x-[32rem] hidden md:block w-28">
            <div className="text-3xl font-bold leading-none">30+</div>
            <div className="text-sm text-black/60 leading-snug">Selected<br/>Brands</div>
          </div>
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-96 lg:translate-x-[28rem] xl:translate-x-[32rem] text-right hidden md:block w-40">
            <div className="text-base md:text-lg text-black leading-snug">Get cash back<br/><span className="text-green-700 font-semibold">on each</span><br/><span className="text-green-700 font-semibold">purchase</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}


