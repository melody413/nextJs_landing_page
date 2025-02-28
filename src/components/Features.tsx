"use client"
import Image from "next/image";
import { Tag } from "./Tag";

export default function Features() {
    return (
        <div className="flex flex-col items-center text-center w-full">
            <Tag text="Features" />
            <h2 className="text-[42px] leading-[56px] font-[500] mb-4 text-black">
                Why Choose
                <span className="text-[#7C65E8]">
                    &nbsp;Quiib?
                </span>
            </h2>
            <p className="text-[#414651] text-[18px] leading-[28px] max-w-2xl">
                Explore powerful features that make property management, client collaboration, and team efficiency seamless
            </p>
            <div className="mt-10 flex flex-col gap-10 w-full">
                <div className="border border-[#E9EAEB] bg-[#F1F1FA] rounded-3xl p-8 relative min-h-[288px] w-full overflow-hidden">
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-[#344054] font-[600] text-[24px] leading-[36px]">
                            AI-Powered Web Search
                        </p>
                        <p className="text-[#344054] font-[600] text-[16px] leading-[24px] max-w-md text-left">
                            Collaborate with your team privately while engaging publicly with buyers and clients.
                        </p>
                        <button className="bg-[#7C65E8] py-2.5 px-4 rounded-lg font-semibold text-[16px] leading-[24px] text-[#FFFFFF]">
                            Learn More
                        </button>
                    </div>
                    <Image className="absolute lg:flex hidden top-0 right-0" src="/images/features/bg1.png" alt="" width={458} height={288} priority />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex items-center justify-center">
                        <Image src="/images/features/bg2.png" alt="" width={584} height={488} priority />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/images/features/bg3.png" alt="" width={584} height={488} priority />
                    </div>
                </div>
                <div className="overflow-hidden border border-[#E9EAEB] bg-[#F1F1FA] rounded-3xl px-20 py-12 relative min-h-[288px] w-full flex justify-end">
                    <Image className="absolute lg:flex hidden top-0 left-0" src="/images/features/bg4.png" alt="" width={658} height={288} priority />
                    <div className="flex flex-col gap-5 items-start">
                        <p className="text-[#344054] font-[600] text-[24px] leading-[36px]">
                            Comprehensive Company Search
                        </p>
                        <p className="text-[#344054] font-[600] text-[16px] leading-[24px] max-w-md text-left">
                            Stay updated with instant alerts for inquiries, viewings, and team updates.
                        </p>
                        <button className="bg-[#7C65E8] py-2.5 px-4 rounded-lg font-semibold text-[16px] leading-[24px] text-[#FFFFFF]">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
