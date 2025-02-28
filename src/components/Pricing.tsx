"use client"
import Image from "next/image";
import { Tag } from "./Tag";

export default function Pricing() {
    return (
        <div className="flex flex-col items-center py-16 px-4">
            <Tag text="Pricing" />

            <h2 className="max-w-sm text-[42px] leading-[56px] font-[600] text-center mb-4 text-black">
                Our Plans Scale with your Business
            </h2>

            <p className="text-[#667085] text-[18px] text-center max-w-xl mb-12">
                We understand that as your business grows, your needs evolve. That&apos;s
                why our flexible plans are designed to adapt and scale seamlessly.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full mt-8">
                {/* Free Plan */}
                <div className="border rounded-3xl p-8 relative">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-2 rounded-full">
                        <Image src="/images/pricing-purchase.png" alt="" width={75} height={75} priority />
                    </div>
                    <h3 className="font-medium text-[18px] leading-[28px] mb-4 text-[#475467]">Free Plan</h3>
                    <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-bold text-[#101828]">$0</span>
                        <span className="text-[#475467] ml-2">per month</span>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-[#475467]">
                            ✅ Limited daily searches
                        </li>
                        <li className="flex items-center text-[#475467]">
                            ✅ Basic company information (name, website, industry)
                        </li>
                        <li className="flex items-center text-[#475467]">
                            ✅ Standard search filters (location & industry)
                        </li>
                        <li className="flex items-center text-[#475467]">
                            ✅ Export up to 5 results per search
                        </li>
                        <li className="flex items-center text-[#475467]">
                            ✅ AI-powered search assistance
                        </li>
                    </ul>
                    <button className="w-full mt-8 py-3 bg-[#7C65E8] text-white rounded-lg hover:bg-purple-600 transition-colors">
                        Choose
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="border rounded-3xl p-8 relative">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-2 rounded-full">
                        <Image src="/images/pricing-user.png" alt="" width={75} height={75} priority />
                    </div>
                    <h3 className="font-medium text-[18px] leading-[28px] mb-4 text-[#475467]">Pro Plan</h3>
                    <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-bold text-[#101828]">$99</span>
                        <span className="text-[#475467] ml-2">per month</span>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center text-[#475467]">
                            🚀 Unlimited searches
                        </li>
                        <li className="flex items-center text-[#475467]">
                            🚀 Detailed company insights (size, funding, key contacts, etc.)
                        </li>
                        <li className="flex items-center text-[#475467]">
                            🚀 Advanced search filters (revenue, employee count, funding stage, etc.)
                        </li>
                        <li className="flex items-center text-[#475467]">
                            🚀 Priority AI processing for faster results
                        </li>
                        <li className="flex items-center text-[#475467]">
                            🚀 Export unlimited results (CSV & Excel)
                        </li>
                        <li className="flex items-center text-[#475467]">
                            🚀 Access to premium support
                        </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                        💡 Try it for free—no credit card required!
                    </p>
                    <button className="w-full mt-4 py-3 bg-white border-2 border-[#7C65E8] text-[#56437C] rounded-lg hover:bg-purple-50 transition-colors">
                        Get Started for Free
                    </button>
                </div>
            </div>

            <p className="mt-12 flex items-center text-[#667085] text-[18px]">
                Would you like any adjustments or additional feature highlights? 🚀
            </p>
        </div>
    );
}
