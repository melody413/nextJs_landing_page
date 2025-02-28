"use client";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    title: string;
    author: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
}

export default function RecentBlog() {
    const blogPosts: BlogPost[] = [
        {
            title: "UX review presentations",
            author: "Olivia Rhye",
            date: "20 Jan 2025",
            description:
                "How do you create compelling presentations that wow your colleagues and impress your managers?",
            image: "/images/blog/1.png",
            tags: ["Design", "Research", "Presentation"],
        },
        {
            title: "Migrating to Linear 101",
            author: "Phoenix Baker",
            date: "19 Jan 2025",
            description:
                "Linear helps streamline software projects, sprints, tasks, and bu...",
            image: "/images/blog/2.png",
            tags: ["Design", "Research"],
        },
        {
            title: "Building your API stack",
            author: "Lana Steiner",
            date: "18 Jan 2025",
            description:
                "The rise of RESTful APIs has been met by a rise in tools for c...",
            image: "/images/blog/3.png",
            tags: ["Software", "Research"],
        },
    ];

    return (
        <section className="max-w-7xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-8 text-[#181D27]">
                Recent blog posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Featured Post (Larger) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="block group">
                        <Image
                            src={blogPosts[0].image}
                            alt={blogPosts[0].title}
                            className="object-cover w-full"
                            width={592}
                            height={248}
                        />
                        <div className="space-y-3 mt-4">
                            <div className="flex items-center gap-2 text-[#6941C6]">
                                <span className="text-sm">{blogPosts[0].author}</span>
                                <span className="text-sm">•</span>
                                <span className="text-sm">{blogPosts[0].date}</span>
                            </div>
                            <Link
                                href="#"
                                className="flex w-full justify-between items-center"
                            >
                                <h3 className="text-xl font-semibold text-black">
                                    {blogPosts[0].title}
                                </h3>
                                <Image src="/icons/arrow.png" width={12} height={12} alt="" />
                            </Link>
                            <p className="text-gray-600">{blogPosts[0].description}</p>
                            <div className="flex gap-2">
                                {blogPosts[0].tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 rounded-full text-sm ${tag === "Design"
                                            ? "bg-purple-100 text-purple-700"
                                            : tag === "Research"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-gray-100 text-[#C11574]"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Posts (Smaller) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-8 gap-8">
                    {blogPosts.slice(1).map((post, index) => (
                        <div key={index} className="flex gap-4 group xl:flex-nowrap flex-wrap">
                            <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={320}
                                    height={200}
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[#6941C6]">
                                    <span className="text-sm">{post.author}</span>
                                    <span className="text-sm">•</span>
                                    <span className="text-sm">{post.date}</span>
                                </div>
                                <h3 className="font-semibold text-black">{post.title}</h3>
                                <p className="text-sm text-gray-600">{post.description}</p>
                                <div className="flex">
                                    <div className="mt-2 flex gap-2">
                                        {post.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`px-3 py-1 rounded-full text-sm ${tag === "Design"
                                                    ? "bg-purple-100 text-purple-700"
                                                    : tag === "Research"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : tag === "Software"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
