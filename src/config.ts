const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  return {
    blog: {
      name: "Travel.",
      copyright: "Samantha",
      metadata: {
        title: {
          absolute: "Travel with Samantha",
          default: "Travel with Samantha",
          template: "%s - Travel with Samantha",
        },
      }
    },
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
