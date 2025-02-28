"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col bg-[#7C65E8] sm:p-12 p-6 sm:px-24 gap-9 relative overflow-hidden">
            <p className="text-[#8974ea] xl:block hidden text-[150px] leading-[180px] font-[600] absolute -top-14 right-52">
                QUIIB
            </p>
            <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-[#FBFBFB] font-[600] text-[36px] leading-[48px] max-w-[518px]">
                    Boost your sales with our powerful software
                </p>
                <button className="bg-[#F9F5FF] rounded-[12px] py-3 px-5 text-[#7C65E8]">
                    Get Started
                </button>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <Image src="/images/footer-logo.png" alt="footer-logo" width={80} height={80} priority />
                </div>

                <nav className="flex gap-8 flex-wrap">
                    <Link href="/" className="text-white hover:opacity-80">
                        Home
                    </Link>
                    <Link href="#" className="text-white hover:opacity-80">
                        Features
                    </Link>
                    <Link href="#" className="text-white hover:opacity-80">
                        Pricing
                    </Link>
                    <Link href="#" className="text-white hover:opacity-80">
                        Testimonials
                    </Link>
                    <Link href="#" className="text-white hover:opacity-80">
                        Help
                    </Link>
                </nav>
                <div className="text-white">© 2077 Quib</div>
            </div>
        </div>
    );
}
