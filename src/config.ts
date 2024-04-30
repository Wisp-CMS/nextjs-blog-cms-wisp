const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  return {
    blog: {
      name: "Travel.",
      copyright: "Samantha",
    },
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
