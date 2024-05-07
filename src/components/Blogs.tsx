import React from "react";
import { blogs } from "@/lib/constants";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-5 md:px-20 mb-40">
      <span className="text-sm self-start">Our Blogs</span>
      <h2 className="text-4xl font-medium leading-[120%] self-start mb-[20px]">
        Articles & Resource
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <BlogCard
            image={blog.image}
            content={blog.content}
            key={blog.content}
          />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ image, content }: { image: string; content: string }) => {
  return (
    <div className="flex flex-col rounded-md border">
      <img src={image} alt="blog" className="rounded-t-lg" />
      <div className="flex flex-col pt-6 pb-8 px-6 gap-3">
        <div className="flex items-center gap-2">
          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg"
            alt="date"
          />
          <span className="text-xs">March 21, 2024</span>
        </div>
        <p className="text-lg max-w-[95%]">{content}</p>
        <a href="#" className="text-sm mt-4">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Blogs;
