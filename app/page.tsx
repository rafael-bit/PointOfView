import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";
import prisma from "@/lib/prismadb";
const Home = async () => {
  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });
  return (
    <>
      <LatestPost posts={posts} />
      <Hero posts={posts} />
      <div className="w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-3">
        <TopPost posts={posts} />
      </div>
    </>
  );
};

export default Home;
