"use client"
import Image from "next/image";

interface BlogPost {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
}

export default function AllBlog() {
    const blogPosts: BlogPost[] = [
        {
            image: "/images/blog/details/1.png",
            author: "Alec Whitten",
            date: "17 Jan 2025",
            title: "Bill Walsh leadership lessons",
            description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            tags: [{
                name: "Leadership",
                color: "#6941C6"
            }, {
                name: "Management",
                color: "#363F72"
            }]
        },
        {
            image: "/images/blog/details/2.png",
            author: "Demi Wilkinson",
            date: "16 Jan 2025",
            title: "PM mental models",
            description: "Mental models are simple expressions of complex processes or relationships.",
            tags: [{
                name: "Product",
                color: "#026AA2"
            }, {
                name: "Research",
                color: "#3538CD"
            }, {
                name: "Frameworks",
                color: "#B93815"
            }]
        },
        {
            image: "/images/blog/details/3.png",
            author: "Candice Wu",
            date: "15 Jan 2024",
            title: "What is wireframing?",
            description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            tags: [{
                name: "Design",
                color: "#6941C6"
            }, {
                name: "Research",
                color: "#3538CD"
            }]
        },
        {
            image: "/images/blog/details/4.png",
            author: "Natali Craig",
            date: "14 Jan 2024",
            title: "How collaboration makes us better designers",
            description: "Collaboration can make our teams stronger, and our individual designs better.",
            tags: [{
                name: "Design",
                color: "#6941C6"
            }, {
                name: "Research",
                color: "#3538CD"
            }]
        },
        {
            image: "/images/blog/details/5.png",
            author: "Drew Cano",
            date: "13 Jan 2024",
            title: "Our top 10 Javascript frameworks to use",
            description: "JavaScript frameworks make development easy with extensive features and functionalities.",
            tags: [{
                name: "Sofware",
                color: "#067647"
            }, {
                name: "Tools",
                color: "#C11574"
            }, {
                name: "SaaS",
                color: "#C11574"
            }]
        },
        {
            image: "/images/blog/details/6.png",
            author: "Orlando Diggs",
            date: "12 Jan 2024",
            title: "Podcast: Creating a better CX Community",
            description: "Starting a community doesn’t need to be complicated, but how do you get started?",
            tags: [{
                name: "Podcasts",
                color: "#6941C6"
            }, {
                name: "Customer Success",
                color: "#363F72"
            }]
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 mt-8">
            <h1 className="text-[24px] leading-8 font-semibold mb-8 text-[#181D27]">All blog posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="object-cover rounded-lg w-full h-full"
                                width={384}
                                height={240}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-sm text-[#6941C6] font-semibold">
                                <span>{post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-start justify-between">
                                <h2 className="text-xl font-semibold text-[#181D27] flex items-center max-w-xs">
                                    {post.title}
                                </h2>
                                <Image src="/icons/arrow.png" width={12} height={12} alt="" className="mt-2" />
                            </div>
                            <p className="text-[#535862] text-[16px] leading-6">{post.description}</p>
                            <div className="flex">
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {post.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-0.5 text-sm rounded-full bg-gray-100 border font-medium"
                                            style={{
                                                color: tag.color,
                                                borderColor: tag.color
                                            }}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-between border-t border-t-[#E9EAEB] mt-16 pt-6 mb-12">
                <button className="text-[#535862] flex items-center gap-2">
                    <Image src="/icons/arrow-left.png" width={14} height={14} alt="" />
                    <span className="font-semibold sm:block hidden">
                        Previous
                    </span>
                </button>
                <div className="flex gap-1">
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center bg-[#FAFAFA]">1</button>
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center">2</button>
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center">3</button>
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center">...</button>
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center">8</button>
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center">9</button>
                    <button className="text-[#252B37] font-medium text-sm w-10 h-10 items-center justify-center">10</button>
                </div>
                <button className="text-[#535862] flex items-center gap-2">
                    <span className="font-semibold sm:block hidden">
                        Next
                    </span>
                    <Image src="/icons/arrow-right.png" width={14} height={14} alt="" />
                </button>
            </div>
        </div>
    );
}
