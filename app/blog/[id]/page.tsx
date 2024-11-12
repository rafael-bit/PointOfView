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
      <div className="w-full h-32 rounded-2xl bg-gray-700"></div>
      <div className="flex pl-10 pb-7 gap-7 -mt-12">
        <Image
          src={post.authorImage}
          width={500}
          height={500}
          alt={`Image of ${post.authorName}`}
          className="rounded-full w-32 h-32 object-cover"
        />
        <div className="flex flex-col justify-between h-24">
          <h5 className="text-2xl font-bold text-white">{post.authorName}</h5>
          <span>Tags: <Tag text={post.tags} /></span>
        </div>
      </div>
      <h2 className="text-4xl font-extrabold uppercase my-3 text-center">
        {post.title}
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="w-1/2 h-[400px] relative mb-5">
          <Image
            fill
            alt="image for blog"
            src={post.image_path}
            className="object-cover"
          />
        </div>
        <p className="text-md my-3 w-1/2">{post.paragraph}</p>
      </div>

      <div className="flex md:gap-20 gap-5 relative mt-10 justify-evenly items-center">
        <aside className="md:sticky md:top-3/4 flex items-end gap-3">
          <span className="text-xl font-bold text-black">
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-600 mt-2">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>

        <article>
          <div className="mt-5 flex gap-5 items-center">
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