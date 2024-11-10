import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import { formatDate } from "@/utils/formatDate";
import { blogData } from "@/constants/blogData";
import { PostTypes } from "@/types/postTypes";

interface TopPostProps {
  posts: PostTypes[];
}

const TopPost: React.FC<TopPostProps> = ({ posts }) => {
  const topPost = blogData.filter(post => post.topPost === true);

  return (
    <section aria-labelledby="top-post">
      <div className="w-full text-center">
        <h2
          id="top-post"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Notices
        </h2>
      </div>

      <div className="flex h-full gap-12 items-center">
        {topPost.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <article>
              <div className="relative cursor-pointer">
                {post.image_path && (
                  <Image
                    src={post.image_path}
                    width={800}
                    height={800}
                    alt={`Image for ${post.title}`}
                  />
                )}
                <Overlay />
              </div>
              <div className="w-full flex justify-center">
                <Tag text={post.tags.join(", ")} />
              </div>

              <h3 className="font-extrabold uppercase text-tertiary text-center">
                {post.title}
              </h3>

              <div className="flex gap-3 justify-center mt-2">
                <span className="font-light">
                  By: {post.authorName}
                </span>
                <span className="italic font-light">
                  {formatDate(post.publishDate)}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopPost;