import { BlogPostContent } from "@/components/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { slug },
}: {
  params: Params;
}) {
  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image, generatedOgImage] : [generatedOgImage],
    },
  };
}
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
      <Footer />
    </div>
  );
};

export default Page;
