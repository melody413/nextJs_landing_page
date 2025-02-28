"use client"
import OurBlog from "@/components/blog/OurBlog";
import RecentBlog from "@/components/blog/RecentBlog";
import AllBlog from "@/components/blog/AllBlog";
import UseCase from "@/components/UseCase";

export default function Blog() {
    return (
        <div>
            <OurBlog />
            <RecentBlog />
            <AllBlog />
            <UseCase />
        </div>
    );
}
