"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";
import { PostTypes } from "@/types/postTypes";
import { blogData } from "@/constants/blogData";

const LatestPost: React.FC = () => {
  const posts: PostTypes[] = blogData;

  const latestPost = posts
    .filter((post) => post.latestPost === true)
    .sort((a, b) =>
      new Date(b.publishDate || "").getTime() - new Date(a.publishDate || "").getTime()
    )
    .slice(0, 5);

  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  return (
    <section className="col-span-2" aria-labelledby="latest-post">
      <div className="w-full text-center">
      </div>

      <div className="flex flex-col gap-10 h-full">
        {latestPost.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard post={post} key={id} />
        ))}
        {visibleBlogs < latestPost.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              text="Show more"
              aria="Show more blog post"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPost;