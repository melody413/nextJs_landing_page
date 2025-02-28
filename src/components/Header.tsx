"use client"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[100] fixed top-4 sm:left-20 left-0 sm:right-20 right-0 bg-white shadow-lg border border-[#E9EAEB] rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="logo" width={48} height={48} priority />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-[#414651] hover:text-gray-900 font-medium text-[18px] leading-[28px]"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-[#414651] hover:text-gray-900 font-medium text-[18px] leading-[28px]"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-[#414651] hover:text-gray-900 font-medium text-[18px] leading-[28px]"
            >
              Testimonials
            </Link>
            <Link
              href="#"
              className="text-[#414651] hover:text-gray-900 font-medium text-[18px] leading-[28px]"
            >
              Pricing
            </Link>
          </nav>

          {/* Login Button */}
          <div>
            <button className="bg-[#7C65E8] text-white px-6 py-2 rounded-lg hover:bg-[#7C3AED]">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
