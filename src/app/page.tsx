"use client";

import { useState } from "react";
import FinanceCalculator from "@/components/FinanceCalculator";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import PriceList from "@/components/PriceList";
import Hero from "@/components/Hero";

export default function Home() {
  const [selectedAmount, setSelectedAmount] = useState<number | undefined>(undefined); // No default amount

  const handlePriceSelection = (item: { productValue: number; transferAmount: number; firstPayment: number }) => {
    setSelectedAmount(item.productValue);
  };

  return (
    <div className="bg-white text-primary min-h-screen">
      <Hero />
      <main className="container mx-auto px-4">
        <PriceList onSelect={handlePriceSelection} />
        <FinanceCalculator initialAmount={selectedAmount} />
        <Features />
        <FAQ />
      </main>
    </div>
  );
}