"use client"
import Image from "next/image";

export default function SignUpSection() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-400 to-[#886FFF] p-16 rounded-3xl my-16 relative flex justify-center items-center">
            <Image className="sm:flex hidden absolute top-0 -translate-y-[90px] -translate-x-[50px] left-0" src="/images/up-hand.png" alt="" width={168} height={191} priority />
            <Image className="sm:flex hidden absolute bottom-0 translate-y-[75px] translate-x-[50px] right-0" src="/images/down-hand.png" alt="" width={168} height={191} priority />
            <div className="flex flex-col items-center text-white space-y-6 max-w-2xl">
                <h1 className="text-4xl font-[600] text-center">
                    Start Searching Smarter with AI-Powered Company Search!
                </h1>
                <p className="text-xl">
                    Sign up today and experience the future of intelligent search.
                </p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                        Sign Up with Google
                    </button>
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                        Sign Up with Apple
                    </button>
                </div>
            </div>
        </div>
    );
}
