"use client"

export default function OurBlog() {
    return (
        <div className="flex flex-col items-center text-center py-16 px-4">
            <span className="text-[#614FB5] mb-4 font-semibold text-[16px] leading-8">Our blog</span>
            <h2 className="text-[48px] font-semibold mb-4 text-black">Stories and interviews</h2>
            <p className="text-[#535862] max-w-2xl mb-8 font-[400] text-[20px] leading-[30px]">
                Subscribe to learn about new product features, the latest in technology,
                solutions, and updates.
            </p>

            <div className="flex gap-4 max-w-md w-full">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border rounded-lg"
                />
                <button className="px-6 py-2 bg-[#886FFF] text-white rounded-lg">
                    Get started
                </button>
            </div>

            <p className="text-sm text-[#535862] mt-4 font-[400]">
                We care about your data in our{' '}
                <a href="#" className="underline">privacy policy</a>.
            </p>
        </div>
    );
}
