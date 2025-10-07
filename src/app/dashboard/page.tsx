"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Coins, History } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface WalletScreenProps {
  onBack: () => void;
  onContinueToUpload: () => void;
}

export function WalletScreen({ onBack, onContinueToUpload }: WalletScreenProps) {
  
  // Mock data based on your wireframe
  const userData = {
    phoneNumber: "****6789", // Last 4 digits of registered phone number
    totalCoins: 6969,
    earned: 6969,
    redeemed: 10
  };

  const transactionHistory = [
    {
      id: 1,
      type: "earned",
      brand: "Swiggy",
      amount: 200,
      date: "2 days ago",
      logo: "🍔"
    },
    {
      id: 2,
      type: "redeemed",
      brand: "Amazon",
      amount: 150,
      date: "5 days ago",
      logo: "📦"
    },
    {
      id: 3,
      type: "earned",
      brand: "Myntra",
      amount: 300,
      date: "1 week ago",
      logo: "👕"
    }
  ];

  const handleGetCashback = () => {
    onContinueToUpload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-green-50/50">
      {/* Header */}
      <div className="py-6 flex justify-center">
        <Image src="/corro_logo.png" alt="Corra Club" width={96} height={96} />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Welcome Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome, {userData.phoneNumber}!
            </h2>
            <p className="text-sm text-gray-600">
              This is your Corra Wallet. You can redeem upto <span className="font-bold">50%</span> of coins & earn more by showing your recent purchase
            </p>
          </div>

          {/* Enhanced Wallet Details Card with Achievement Animations */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <Card className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-3 border-yellow-300 shadow-2xl relative overflow-hidden">
              {/* Floating Achievement Particles */}
              <motion.div
                animate={{ 
                  y: [-10, -20, -10],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute top-4 right-4 text-2xl"
              >
                ✨
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [-15, -25, -15],
                  x: [-5, 5, -5],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-6 left-4 text-xl"
              >
                🎉
              </motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-4 right-6 text-lg"
              >
                💎
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-8, -18, -8],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute bottom-6 left-6 text-lg"
              >
                🌟
              </motion.div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 animate-pulse"></div>

              <CardContent className="p-6 relative z-10">
                <div className="text-center mb-4">
                  {/* Enhanced CC Logo */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 20px rgba(250, 204, 21, 0.4)",
                        "0 0 30px rgba(250, 204, 21, 0.6)",
                        "0 0 20px rgba(250, 204, 21, 0.4)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl border-3 border-yellow-200 relative overflow-hidden mx-auto mb-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full"></div>
                    <span className="text-yellow-900 font-black text-lg relative z-10 drop-shadow-lg">CC</span>
                  </motion.div>

                  {/* Prominent Coin Count */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-yellow-700 via-amber-600 to-orange-600 bg-clip-text drop-shadow-lg mb-1">
                      {userData.totalCoins.toLocaleString()}
                    </h1>
                    <motion.p 
                      animate={{ 
                        textShadow: [
                          "0 2px 4px rgba(251, 146, 60, 0.3)",
                          "0 4px 8px rgba(251, 146, 60, 0.5)",
                          "0 2px 4px rgba(251, 146, 60, 0.3)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                      className="text-xl font-bold text-orange-600 tracking-wide"
                    >
                      Corra Coins
                    </motion.p>
                  </motion.div>
                </div>
                
                {/* Stats Section with Enhanced Design */}
                <div className="flex justify-between items-center border-t-2 border-amber-200 pt-4 mt-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center flex-1"
                  >
                    <div className="text-xl font-bold text-green-600 mb-1">{userData.earned.toLocaleString()}</div>
                    <div className="text-sm font-medium text-gray-600 flex items-center justify-center gap-1">
                      <span>💰</span>
                      <span>Earned</span>
                    </div>
                  </motion.div>
                  
                  <div className="w-px h-10 bg-amber-300 mx-4"></div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-center flex-1"
                  >
                    <div className="text-xl font-bold text-blue-600 mb-1">{userData.redeemed}</div>
                    <div className="text-sm font-medium text-gray-600 flex items-center justify-center gap-1">
                      <span>🎁</span>
                      <span>Redeemed</span>
                    </div>
                  </motion.div>
                </div>
              </CardContent>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-200/40 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-tl-full"></div>
            </Card>
          </motion.div>



          {/* Transaction History */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <History className="w-5 h-5 text-blue-600" />
                Transaction History
              </h3>
              
              <div className="space-y-3">
                {transactionHistory.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                        {transaction.logo}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {transaction.type === 'earned' ? 'Earned Coins' : 'Redeemed'}
                        </p>
                        <p className="text-sm text-gray-500">{transaction.brand}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${transaction.type === 'earned' ? 'text-green-600' : 'text-red-500'}`}>
                        {transaction.type === 'earned' ? '+' : '-'}₹{transaction.amount}
                      </p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Primary CTA */}
          <Button
            onClick={handleGetCashback}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Cashback Now →
          </Button>

          {/* Secondary CTA */}
          <Button
            variant="outline"
            className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 text-base font-semibold rounded-lg flex items-center justify-center gap-2"
          >
            <span>Earn More</span>
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-sm border border-yellow-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full"></div>
              <span className="text-yellow-900 font-bold text-xs relative z-10 drop-shadow-sm">CC</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  return (
    <WalletScreen
      onBack={() => router.push("/")}
      onContinueToUpload={() => router.push("/redeem")}
    />
  );
}