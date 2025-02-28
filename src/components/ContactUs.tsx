export default function ContactUs() {
    return (
        <div className="w-full px-4 py-8">
            <div className="inline-block rounded-full px-6 py-2 border border-[#7C65E8] text-[#7C65E8] mb-4">
                Contact Us
            </div>

            <h1 className="text-[42px] text-black font-[600] mb-4">We&apos;d love to hear from you</h1>
            <p className="text-[#667085] mb-12 text-[18px]">Our friendly team is always here to chat.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Methods */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    {/* Chat to sales */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="bg-[#7C65E8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">Chat to sales</h3>
                        <p className="text-gray-600 mb-2">Speak to our friendly team.</p>
                        <a href="mailto:sales@untitledui.com" className="text-[#7C65E8] hover:underline">sales@untitledui.com</a>
                    </div>

                    {/* Chat with Support */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="bg-[#7C65E8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">Chat with Support</h3>
                        <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+15550000000" className="text-[#7C65E8] hover:underline">+1 (555) 000-0000</a>
                    </div>

                    {/* Visit us */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="bg-[#7C65E8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">Visit us</h3>
                        <p className="text-gray-600 mb-2">Visit our office HQ.</p>
                        <p className="text-[#7C65E8]">100 Smith Street<br />Collingwood VIC 3066 AU</p>
                    </div>

                    {/* Call us */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="bg-[#7C65E8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-black">Call us</h3>
                        <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+15550000000" className="text-[#7C65E8] hover:underline">+1 (555) 000-0000</a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7C65E8] focus:border-[#7C65E8]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7C65E8] focus:border-[#7C65E8]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7C65E8] focus:border-[#7C65E8]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="flex">
                            <select className="text-black px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-[#7C65E8] focus:border-[#7C65E8]">
                                <option>US</option>
                            </select>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-[#7C65E8] focus:border-[#7C65E8]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            placeholder="e.g. Type here"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#7C65E8] focus:border-[#7C65E8]"
                        />
                    </div>

                    <button className="w-32 bg-[#7C65E8] text-white px-6 py-2 rounded-lg hover:bg-[#7C65E8] transition-colors">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
