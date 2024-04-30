import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import { CircleX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Params {
  slug: string;
}

const Page = async ({ params: { slug } }: { params: Params }) => {
  const result = await wisp.getPosts({ limit: "all", tags: [slug] });
  return (
    <div className="container mx-auto px-5">
      <Header />
      <Link href="/">
        <Badge className="px-2 py-1">
          <CircleX className="inline-block w-4 h-4 mr-2" />
          Posts tagged with <strong className="mx-2">#{slug}</strong>{" "}
        </Badge>
      </Link>
      <BlogPostsPreview posts={result.posts} />
    </div>
  );
};

export default Page;
