import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";

const Page = async () => {
  const result = await wisp.getPosts({ limit: "all" });
  return (
    <div className="container mx-auto px-5">
      <Header />
      <BlogPostsPreview posts={result.posts} />
    </div>
  );
};

export default Page;
