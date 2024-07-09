import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
  ### this phase of me will tell, where I lead in life.
  oh! and I love black holes and space exploration.
  ![Black Hole](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fi4rkq65rr1j41.jpg%3Fauto%3Dwebp%26s%3D908a53f07b891baef24d56a178afe37b090db939&f=1&nofb=1&ipt=13d0c0e52691ed0d35009a829d2d47480c0f0b217dc80d04dff8bbfb16095025&ipo=images "a title")
`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "black holes and computers",
    openGraph: {
      title: "About Me",
      description: "black holes and computers",
      images: [
        signOgImageUrl({
          title: "kamalika",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
