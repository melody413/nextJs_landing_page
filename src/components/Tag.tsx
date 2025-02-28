"use client"

export function Tag({ text }: { text: string }) {
    return (
        <button className="bg-white text-[#7C65E8] px-6 py-2 rounded-full border border-[#7C65E8] mb-6">
            { text }
        </button>
    );
}
