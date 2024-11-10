import Tag from "@/components/ui/Tag";
import Image from "next/image";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";

const getData = async (id: string) => {
  const res = await fetch(
    `http://localhost:3000/api/post/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
};

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let post: PostTypes | null = null;
  try {
    post = await getData(id);
    console.log("Fetched Post Data:", post);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post || !post.id) {
    return <div>Post not found</div>;
  }

  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          fill
          alt="image for blog"
          src={post.image_path}
          className="object-cover"
        />
      </div>

      <Tag text={post.tags} />
      <h2 className="text-4xl font-extrabold uppercase text-tertiary my-3">
        {post.title}
      </h2>

      <p className="text-xl my-3"></p>

      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside className="md:sticky md:top-3/4">
          <span className="uppercase text-2xl font-extrabold text-tertiary">
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>

        <article>
          <div className="mt-5 flex gap-5 items-center">
            <Image
              src={post.authorImage}
              width={500}
              height={500}
              alt={`Image of ${post.authorName}`}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{post.authorName}</span>
              <span>{formatDate(post.publishDate)}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;