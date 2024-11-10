import Posts from "@/components/shared/Posts";
import TopPost from "@/components/shared/TopPost";
import prisma from "@/lib/prismadb";
import { PostTypes } from "@/types/postTypes";

const page = async () => {
  const posts = await prisma.blog.findMany({
    include: {
      user: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });

  const formattedPosts: PostTypes[] = posts.map(post => ({
    id: post.id,
    title: post.title,
    image_path: post.img ?? "",
    paragraph: post.desc ?? "",
    featured: post.featured ?? false,
    topPost: post.topPost ?? false,
    latestPost: post.latestPost ?? false,
    tags: Array.isArray(post.tags) ? post.tags : [],
    authorImage: post.user?.image ?? "",
    authorName: post.user?.name ?? "",
    publishDate: post.createdAt.toISOString(),
  }));

  return (
    <div>
      <div className="w-[95%] max-w-[1450px] mx-auto overflow-y-hidden h-fit mt-10 max-lg:space-y-7">
        <Posts posts={formattedPosts} />
        <TopPost posts={formattedPosts} />
      </div>
    </div>
  );
};

export default page;