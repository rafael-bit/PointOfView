import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";
import prisma from "@/lib/prismadb";
import { PostTypes } from "@/types/postTypes";

const Home = async () => {
  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });
  
  const formattedPosts: PostTypes[] = posts.map((post) => ({
    id: post.id,
    title: post.title,
    image_path: post.img ?? "",
    paragraph: post.desc ?? "",
    featured: post.featured ?? false,
    topPost: post.topPost ?? false,
    latestPost: post.latestPost ?? false,
    tags: post.tags ?? [],
    authorImage: post.user?.image ?? "",
    authorName: post.user?.name ?? "",
    publishDate: post.createdAt.toISOString(),
  }));


  return (
    <>
      <LatestPost />
      <Hero />
      <div className="w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-3">
        <TopPost posts={formattedPosts} />
      </div>
    </>
  );
};

export default Home;