"use client"
import AIPoweredSection from "@/components/AIPoweredSection";
import Features from "@/components/Features";
import UseCase from "@/components/UseCase";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import SignUpSection from "@/components/SignUpSection";
import Faq from "@/components/Faq";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="flex flex-col gap-8">
        <AIPoweredSection />
        <Features />
        <UseCase />
        <HowItWorks />
        <Pricing />
        <SignUpSection />
        <Faq />
        <ContactUs />
      </main>
    </div>
  );
}
