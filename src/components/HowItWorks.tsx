"use client";
import Image from "next/image";
import { Tag } from "./Tag";

export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center py-16 px-4">
            <Tag text="How It Works" />

            <h2 className="text-[42px] leading-[56px] font-[600] text-center mb-4 text-black">
                Getting Started is Easy
            </h2>

            <p className="text-[#667085] text-center max-w-xl mb-8 text-[18px] leading-[28px]">
                Effortlessly search for companies with AI-powered automation. Just type
                your query, let AI do the work, and get structured insights in seconds!
            </p>

            <div className="text-[18px] leading-[28px] font-medium mb-12 text-black">
                Find Company Data in 3 Simple Steps
            </div>

            <div className="bg-[#7C65E8] rounded-3xl p-12 w-full max-w-5xl relative lg:px-32">
                <Image
                    src="/images/how-it-works-up.png"
                    alt=""
                    className="lg:flex hidden absolute top-0 right-0 -translate-y-[90px] translate-x-[60px]"
                    width={167}
                    height={187}
                    priority
                />
                <Image
                    src="/images/how-it-works-down.png"
                    alt=""
                    className="lg:flex hidden absolute bottom-0 left-0 translate-y-[65px] -translate-x-[40px]"
                    width={167}
                    height={187}
                    priority
                />
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <div className="flex flex-col items-start text-white text-center">
                        <div className="mb-4 rounded-full p-2 bg-white">
                            <Image
                                src="/icons/plus.png"
                                alt=""
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <h3 className="text-[24px] leading-[32px] font-[600] mb-2 text-left">Enter Your Query</h3>
                        <p className="text-white/80 text-left">
                            Type your search request in the AI chat.
                        </p>
                    </div>

                    <div className="flex flex-col items-start text-white text-center">
                        <div className="mb-4 rounded-full p-2 bg-white">
                            <Image
                                src="/icons/list.png"
                                alt=""
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <h3 className="text-[24px] leading-[32px] font-[600] mb-2 text-left">AI Searches the Web</h3>
                        <p className="text-white/80 text-left">
                            Our AI scans and retrieves relevant company data.
                        </p>
                    </div>

                    <div className="flex flex-col items-start text-white text-center">
                        <div className="mb-4 rounded-full p-2 bg-white">
                            <Image
                                src="/icons/extension.png"
                                alt=""
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <h3 className="text-[24px] leading-[32px] font-[600] mb-2 text-left">
                            Get Organized Results
                        </h3>
                        <p className="text-white/80 text-left">
                            View structured insights in easy-to-read tables.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
