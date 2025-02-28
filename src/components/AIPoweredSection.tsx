"use client";
import Image from "next/image";

export default function AIPoweredSection() {
  return (
    <div className="flex flex-col">
      <div className="max-w-[917px] mx-auto text-center pt-24 pb-16 px-4">
        <h1 className="text-6xl mb-2 text-black font-[600] leading-[80px]">
          Find Companies Instantly with{" "}
          <span className="text-[#7C3AED]">AI-Powered</span> Search
        </h1>

        <p className="text-[#414651] my-16 text-[20px]">
          Tired of manual research? Our AI-driven search tool finds the most
          relevant companies, and insights in seconds.
        </p>

        <div className="border-2 border-[#886FFF] rounded-xl p-3 shadow-sm">
          <div className="w-full p-3 mb-4 rounded-lg border border-[#E9EAEB] gap-4 flex flex-col justify-start items-start">
            <p className="text-[#717680] text-[16px] text-left">
              Find iOS engineers in New York, working on a ios app with more than
              100K downloads.
            </p>
            <div className="flex justify-end w-full">
              <button className="bg-[#7C65E8] text-white px-4 py-2 rounded-lg hover:bg-[#6D28D9] flex items-center gap-2">
                <svg
                  className="w-4 h-4 rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-[#414651]">
                Shipping & Logistics Companies
              </button>
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-[#414651]">
                Affiliate Marketing Companies
              </button>
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-[#414651]">
                IT Companies
              </button>
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-[#414651]">
                Accounting Firms
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image src="/images/ai-powered.png" alt="ai-powered" width={1300} height={1136} priority />
      </div>
    </div>
  );
}
