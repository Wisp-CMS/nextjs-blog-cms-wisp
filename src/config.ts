const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Travel.";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Samantha";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Travel with Samantha";

  return {
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
      },
    },
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
