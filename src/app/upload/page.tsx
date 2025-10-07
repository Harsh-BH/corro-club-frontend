"use client";

import { Suspense, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ALL_BRANDS, type Brand } from "@/data/brands";
import Image from "next/image";
import { Info } from "lucide-react";
import { motion } from "motion/react";


export default function UploadPage() {
  return (
    <Suspense fallback={<div className="py-10">Loading…</div>}>
      <UploadContent />
    </Suspense>
  );
}

function UploadContent() {
  const params = useSearchParams();
  const [selected, setSelected] = useState<Brand>(ALL_BRANDS[0]);
  const [amount, setAmount] = useState<string>("500");
  const [fileName, setFileName] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);
  function getRewardPercentage(brand: string) {
    const rewardRates: { [key: string]: number } = {
      'Adidas': 10,
      'Decathlon': 8,
      'Firstcry': 12,
      'Urban Company': 15,
      'Myntra': 7,
      'Nykaa': 9,
      'Pharmeasy': 11,
      'Wakefit': 13
    };
    return rewardRates[brand] || 10; // Default to 10% if brand not found
  }
  const coins = useMemo(() => {
    const amt = Number(amount);
    if (Number.isNaN(amt)) return 0;
    return Math.round(amt * (getRewardPercentage(selected.name) / 100));
  }, [amount, selected]);
  
  // Brand carousel state
  const ITEMS_PER_PAGE = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(ALL_BRANDS.length / ITEMS_PER_PAGE);
  const [showAllBrands, setShowAllBrands] = useState(false);
  
  // Overlay pagination state
  const OVERLAY_PER_PAGE = 8;
  const [overlayPage, setOverlayPage] = useState(0);
  const overlayTotalPages = Math.ceil(ALL_BRANDS.length / OVERLAY_PER_PAGE);
  const overlayBrands = useMemo(
    () => ALL_BRANDS.slice(overlayPage * OVERLAY_PER_PAGE, overlayPage * OVERLAY_PER_PAGE + OVERLAY_PER_PAGE),
    [overlayPage]
  );

  // Pagination helpers
  function prevPage() {
    setPage(p => (p - 1 + totalPages) % totalPages);
  }
  function nextPage() {
    setPage(p => (p + 1) % totalPages);
  }

  function handleSelectBrand(b: Brand) {
    setSelected(b);
  }

  useEffect(() => {
    const brandKey = params.get("brand");
    const amt = params.get("amount");
    if (brandKey) {
      const found = ALL_BRANDS.find((b) => b.key === brandKey);
      if (found) setSelected(found);
    }
    if (amt && !Number.isNaN(Number(amt))) setAmount(String(amt));
  }, [params]);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }

  const canContinue = Boolean(fileName);

  

  return (
    <>
      <h1 className="text-center text-3xl sm:text-4xl font-bold">
        Upload Receipt for {selected.name}
      </h1>
      <p className="text-center text-black/70 mt-2">
        Upload your {selected.name} purchase receipt
      </p>

      {/* Removed old inline stepper (now in layout) */}

      <section className="mt-10 rounded-2xl border border-black/10 shadow-soft bg-white animate-fade-up delay-100 relative">
        <div className="px-6 py-6 border-b border-black/10 text-center">
        <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Earn Corra Coins
                    </h2>
                    {/* CC Logo */}
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full"></div>
                      <span className="text-yellow-900 font-bold text-xs relative z-10 drop-shadow-sm">CC</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Upload your order receipt and get rewards instantly
                  </p>
                </div>
        </div>
        <div className="p-6">
          {/* Brand selector */}
          <div className="mb-6">
            <div className="text-sm font-medium mb-2">Select a brand</div>
            <div className="flex items-center gap-3">
              <button 
                onClick={prevPage}
                aria-label="Previous brands"
                className="h-8 w-8 rounded-full border border-black/10 grid place-items-center hover:bg-black/5 hover:scale-110 transition-all duration-500 ease-out group/prev"
              >
                <span className="group-hover/prev:-translate-x-0.5 transition-transform duration-300 ease-out">‹</span>
              </button>

              {/* Smooth scrolling brands container */}
              <div className="flex-1 overflow-hidden">
                <div 
                  className="flex gap-4 transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${page * (100 / ITEMS_PER_PAGE)}%)` }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="flex gap-4 min-w-full">
                      {ALL_BRANDS.slice(pageIndex * ITEMS_PER_PAGE, pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE).map(b => (
                        <button
                          key={b.key}
                          className={`flex-1 rounded-lg border-2 p-4 flex flex-col items-center gap-3 text-center transition-all duration-500 ease-out mt-4 mb-4 ml-2 mr-4${
                            selected.key === b.key 
                              ? "border-green-600 bg-green-50 scale-105 shadow-md" 
                              : "border-black/10 hover:bg-black/5 hover:scale-102 hover:border-green-300"
                          }`}
                          onClick={() => handleSelectBrand(b)}
                        >
                          <div
                            className={`h-12 w-12  grid place-items-center overflow-hidden  transition-all duration-500 ease-out  ${
                              selected.key === b.key ? "ring-green-300" : ""
                            }`}
                          >
                            {b.icon ? (
                              <Image
                                src={b.icon}
                                alt={b.name}
                                width={48}
                                height={48}
                              />
                            ) : (
                              <span className="text-xs font-semibold text-neutral-700">{b.short}</span>
                            )}
                          </div>
                          <div className={`font-medium text-sm transition-colors duration-500 ease-out ${
                            selected.key === b.key ? "text-green-700" : "text-gray-700"
                          }`}>
                            {b.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={nextPage}
                aria-label="Next brands"
                className="h-8 w-8 rounded-full border border-black/10 grid place-items-center hover:bg-black/5 hover:scale-110 transition-all duration-500 ease-out group/next"
              >
                <span className="group-hover/next:translate-x-0.5 transition-transform duration-300 ease-out">›</span>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-3 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to brand set ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`relative h-3 w-3 rounded-full transition-all duration-500 ease-out hover:scale-125 group/dot  ${
                    page === i 
                      ? "bg-green-600 scale-125 shadow-md" 
                      : "bg-black/20 hover:bg-black/30 hover:scale-110"
                  }`}
                >
                  {/* Animated ring effect for active dot */}
                  {page === i && (
                    <div className="absolute inset-0 rounded-full ring-2 ring-green-400 opacity-50 animate-ping" />
                  )}
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover/dot:opacity-30 transition-opacity duration-300 ease-out" />
                </button>
              ))}
            </div>

            {/* View all brands CTA */}
            <div className="mt-4 relative inline-block">
              <button
                onClick={() => {
                  setShowAllBrands(s => !s);
                  if (!showAllBrands) setOverlayPage(0);
                }}
                className="text-sm font-medium text-green-600 hover:text-green-700 hover:underline flex items-center gap-1 transition-colors duration-300"
              >
                {showAllBrands ? "Hide brands" : "View all brands"}
                <span
                  className={`transition-transform text-xs ${showAllBrands ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>

              {showAllBrands && (
                <div className="absolute left-0 z-30 mt-2 w-72 rounded-xl border border-black/10 bg-white shadow-lg p-3">
                  <div className="grid grid-cols-2 gap-3">
                    {overlayBrands.map(b => (
                      <button
                        key={b.key}
                        className={`rounded-md border-2 p-1.5 flex items-center gap-1.5 text-left text-xs transition-all duration-300 ease-out ${
                          selected.key === b.key
                            ? "border-green-600 bg-green-50"
                            : "border-black/10 hover:bg-black/5 hover:border-green-300"
                        }`}
                        onClick={() => {
                          handleSelectBrand(b);
                          setShowAllBrands(false);
                          setPage(Math.floor(ALL_BRANDS.indexOf(b) / ITEMS_PER_PAGE));
                        }}
                      >
                        <div
                          className={`h-6 w-6 rounded-full grid place-items-center overflow-hidden ring-1 ring-black/10 ${b.color || "bg-gray-100"}`}
                        >
                          <Image
                            src={b.icon}
                            alt={b.name}
                            width={24}
                            height={24}
                            className="h-4 w-4 object-contain"
                            unoptimized
                            draggable={false}
                          />
                        </div>
                        <span className="truncate text-xs">{b.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Pagination inside dropdown */}
                  {overlayTotalPages > 1 && (
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        onClick={() =>
                          setOverlayPage(p => (p - 1 + overlayTotalPages) % overlayTotalPages)
                        }
                        className="h-7 px-2 text-xs rounded border border-black/10 hover:bg-black/5 hover:scale-110 transition-all duration-300 ease-out group/overlay-prev"
                      >
                        <span className="group-hover/overlay-prev:-translate-x-0.5 transition-transform duration-200 ease-out">‹</span>
                      </button>
                      <div className="flex gap-1">
                        {Array.from({ length: overlayTotalPages }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setOverlayPage(i)}
                            className={`relative h-2.5 w-2.5 rounded-full transition-all duration-400 ease-out hover:scale-125 group/overlay-dot ${
                              overlayPage === i
                                ? "bg-green-600 scale-125 shadow-sm"
                                : "bg-black/20 hover:bg-black/30 hover:scale-110"
                            }`}
                            aria-label={`Overlay page ${i + 1}`}
                          >
                            {/* Animated ring for active overlay dot */}
                            {overlayPage === i && (
                              <div className="absolute inset-0 rounded-full ring-1 ring-green-400 opacity-40 animate-ping" />
                            )}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          setOverlayPage(p => (p + 1) % overlayTotalPages)
                        }
                        className="h-7 px-2 text-xs rounded border border-black/10 hover:bg-black/5 hover:scale-110 transition-all duration-300 ease-out group/overlay-next"
                      >
                        <span className="group-hover/overlay-next:translate-x-0.5 transition-transform duration-200 ease-out">›</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

                          {/* Reward Percentage Card */}
                          <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.3
                  }}
                  className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-xl p-4 text-center shadow-lg relative overflow-hidden"
                >
                  {/* Celebratory sparkles */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-2 right-4 text-yellow-400 text-xl"
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, -360, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    className="absolute top-3 left-4 text-yellow-400 text-lg"
                  >
                    🎉
                  </motion.div>
                  
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                    className="absolute bottom-2 right-6 text-yellow-400 text-sm"
                  >
                    💰
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-center space-x-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                  <motion.span 
                      className="text-3xl font-bold text-green-700 bg-white/80 px-3 py-1 rounded-lg backdrop-blur-sm border border-green-200 shadow-sm"
                      animate={{ 
                        scale: [1, 1.05, 1] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {getRewardPercentage(selected.name)}%
                    </motion.span>
                    <span className="text-green-700 font-medium">
                      worth rewards on purchase from {selected.name}
                    </span>
                  </motion.div>
                </motion.div>



          {/* Dropzone */}
          <div className="mt-6">
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
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
              className={`block rounded-2xl border-2 border-dashed px-6 py-12 text-center text-black/70 cursor-pointer transition-colors ${
                dragging || previewUrl
                  ? "border-green-500 bg-green-50"
                  : "border-black/15 hover:bg-black/5"
              }`}
            >
              <input
                type="file"
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={onFileChange}
              />
              {previewUrl ? (
                <div className="animate-fade-in">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    width={400}
                    height={224}
                    className="mx-auto max-h-56 rounded-xl"
                  />
                  <div className="mt-3 text-sm">
                    Selected: <span className="font-medium">{fileName}</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mx-auto h-12 w-12 rounded-full border border-black/20 grid place-items-center text-2xl">
                    ↥
                  </div>
                  <div className="mt-3 font-medium">
                    Click to upload or drag and drop
                  </div>
                  <div className="text-xs text-black/50">PNG, JPG up to 10MB</div>
                </>
              )}
            </label>
          </div>

<div className="mt-4 flex justify-center">
          <button className="h-11 px-4 rounded-xl border border-black/15 bg-white hover:bg-black/5 flex items-center gap-2 transition active:scale-95">
              <span className="h-6 w-6 rounded-md border border-black/15 grid place-items-center">
                📷
              </span>
              Take Photo
            </button>

          </div>



          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left mt-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Info className="w-4 h-4 text-blue-600" />
                      <p className="text-sm text-blue-800 font-medium">Before You Upload:</p>
                    </div>
                    <ul className="text-sm text-blue-700 ml-6 space-y-1">
                      <li>• Snap a clear photo of your receipt from selected brand</li>
                      <li>• Make sure the Total Amount, Order Date & Order Id are clearly visible</li>
                      <li>• Make sure your receipt is from the last 1 month 🗓️</li>
                    </ul>
                  </div>
                </div>

          {/* Amount */}
          <div className="mt-6">
            <label className="text-sm font-medium">
              Transaction Value (₹)
            </label>
            <div className="mt-1 relative">
              <input
                className="w-full h-12 rounded-xl border border-black/15 px-4 pr-10 outline-none focus:border-green-600 transition"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                inputMode="numeric"
              />
              <button className="absolute right-2.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-md border border-black/15 grid place-items-center text-xs">
                ↻
              </button>
            </div>
          </div>



          {/* Coins available (below Transaction Value) */}
          <div className="mt-6 relative rounded-2xl bg-amber-50 border border-amber-200 p-8 text-center overflow-hidden">
            {/* Sparkles */}
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute -top-2 left-4 h-5 w-5 text-amber-500/70 animate-pulse" aria-hidden>
              <path d="M12 2l2.5 6 6.5 2.5-6.5 2.5L12 21l-2.5-8L3 10.5 9.5 8 12 2z" fill="currentColor"/>
            </svg>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute -bottom-2 right-4 h-5 w-5 text-amber-500/70 animate-bounce" aria-hidden>
              <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="flex items-center justify-center gap-3 animate-coin-pop">
              <span className="text-4xl font-bold">{coins}</span>
              <motion.div 
                className="relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full"></div>
                  <span className="text-yellow-900 font-bold text-sm relative z-10 drop-shadow-sm">CC</span>
                </div>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
            <div className="text-black/70 mt-1">Corra Coins Available</div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-center gap-3">

            <button
              onClick={() => {
                if (!canContinue) return;
                // Navigate to phone step instead of showing overlay
                const url = `/upload/phone?brand=${encodeURIComponent(
                  selected.key
                )}&amount=${encodeURIComponent(amount)}`;
                window.location.href = url;
              }}
              className={`flex-1 h-12 rounded-xl text-white font-medium transition ${
                canContinue
                  ? "bg-green-700 hover:bg-green-800 active:scale-95"
                  : "bg-black/20 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
