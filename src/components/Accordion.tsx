"use client";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";

export default function Accordion({
    title,
    content = "",
}: {
    title: string;
    content?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="pb-4 lg:w-[890px] md:w-[600px] w-full">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h3
                    className={cn(
                        "text-[20px] transition-all duration-300",
                        isOpen ? "text-[#7C65E8]" : "text-black"
                    )}
                >
                    {title}
                </h3>
                {isOpen ? (
                    <Image src="/icons/up.png" alt="" width={14} height={9} priority />
                ) : (
                    <Image src="/icons/down.png" alt="" width={14} height={9} priority />
                )}
            </div>
            <p
                className={cn(
                    "mt-2 text-gray-700 border-l-4 border-[#614FB5] pl-4 text-[20px] leading-[30px] transition-all duration-300 delay-0 overflow-hidden",
                    isOpen ? "max-h-[400px]" : "max-h-0"
                )}
            >
                {content}
            </p>
        </div>
    );
}
