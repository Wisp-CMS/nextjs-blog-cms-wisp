import { BlogPostContent } from "@/components/BlogPostContent";
import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

const Page = async ({ params: { slug } }: { params: Params }) => {
  const result = await wisp.getPost(slug);

  if (!result || !result.post) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <Header />
      <BlogPostContent post={result.post} />
    </div>
  );
};

export default Page;
