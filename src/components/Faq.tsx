"use client"
import Accordion from "./Accordion";

export default function Faq() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col items-center mb-12">
                <button className="bg-white text-[#7C65E8] px-6 py-2 rounded-full border border-[#7C65E8] mb-6">
                    Ask Away your Queries
                </button>
                <h1 className="text-[42px] text-black font-[600]">Frequently Asked Questions</h1>
            </div>

            <div className="space-y-4">
                <Accordion
                    title="What kind of company data can I search for?"
                    content="You can search for companies based on industry, location, and other relevant criteria. Our AI retrieves structured insights to help you find the right businesses quickly."
                />
                <Accordion
                    title="How accurate is the information provided by the AI?"
                />
                <Accordion
                    title="Do I need technical skills to use this tool?"
                />
                <Accordion
                    title="Is there a free version available?"
                />
                <Accordion
                    title="Is this free?"
                />
            </div>
        </div>
    );
}
