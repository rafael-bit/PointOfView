import Overlay from "../ui/Overlay";
import Link from "next/link";
import { PostTypes } from "@/types/postTypes";

const BlogCard: React.FC<{ post: PostTypes }> = ({ post }) => {
  return (
    <article className="relative overflow-hidden flex">
      <div className="w-[1000px] h-24 relative">
        <Overlay />
      </div>

      <div className="absolute top-0 w-full h-full p-5">
        <Link
          href={`/blog/${post.id}`}
          className="absolute bottom-0 right-0 bg-black p-5 text-white rounded-tl-lg z-6 cursor-pointer hover:underline"
        >
          <h3 className="text-lg font-bold text-white">
            {post.title}
          </h3>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;