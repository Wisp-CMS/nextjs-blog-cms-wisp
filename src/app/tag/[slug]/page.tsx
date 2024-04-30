import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import { CircleX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";

interface Params {
  slug: string;
}

const Page = async ({
  params: { slug },
  searchParams,
}: {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, tags: [slug], page });
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <Link href="/">
        <Badge className="px-2 py-1">
          <CircleX className="inline-block w-4 h-4 mr-2" />
          Posts tagged with <strong className="mx-2">#{slug}</strong>{" "}
        </Badge>
      </Link>
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination
        pagination={result.pagination}
        basePath={`/tag/${slug}/?page=`}
      />
    </div>
  );
};

export default Page;
