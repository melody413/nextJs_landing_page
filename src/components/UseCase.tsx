"use client"
import Image from "next/image";
import { Tag } from "./Tag";

export default function UseCase() {
    return (
        <div className="flex flex-col items-center text-center max-w-7xl mt-20">
            <Tag text="Use Cases" />
            <h2 className="text-[42px] leading-[56px] font-[600] mb-4 text-black">
                Unlock Smarter Company Search
            </h2>
            <p className="text-[#667085] text-[18px] leading-[28px] max-w-2xl">
                Whether you&apos;re in sales, marketing, recruiting, or research, our AI-powered tool helps you find the right companies faster—saving time and effort! 🚀
            </p>
            <div className="mt-10 xl:flex grid grid-cols-3 gap-10 items-center justify-center">
                <div className="col-span-3">
                    <div className="flex items-start gap-2">
                        <Image src="/icons/fly.png" className="mt-1" alt="" width={18} height={18} priority />
                        <div className="text-[#475467] text-[16px] leading-[24px] text-left">
                            <p className="font-[600]">
                                Recruiters & HR Professionals:
                            </p>
                            <p className="font-[400]">
                                Search for companies hiring in specific domains.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Image src="/icons/fly.png" className="mt-1" alt="" width={18} height={18} priority />
                        <div className="text-[#475467] text-[16px] leading-[24px] text-left">
                            <p className="font-[600]">
                                Business Analysts:
                            </p>
                            <p className="font-[400]">
                                Gather industry insights in a structured format.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src="/images/use-case.png" className="col-span-3" alt="use case" width={667} height={390} priority />
                <div className="col-span-3">
                    <div className="flex items-start gap-2">
                        <Image src="/icons/fly.png" className="mt-1" alt="" width={18} height={18} priority />
                        <div className="text-[#475467] text-[16px] leading-[24px] text-left">
                            <p className="font-[600]">
                                Prospect Researchers:
                            </p>
                            <p className="font-[400]">
                                Find potential clients with ease.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Image src="/icons/fly.png" className="mt-1" alt="" width={18} height={18} priority />
                        <div className="text-[#475467] text-[16px] leading-[24px] text-left">
                            <p className="font-[600]">
                                Sales & Marketing Teams:
                            </p>
                            <p className="font-[400]">
                                Identify leads and target the right companies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
