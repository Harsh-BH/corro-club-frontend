import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
        <Hero />
        <HowItWorks />
      </main>
    </div>
  );
}
