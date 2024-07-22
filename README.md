# A Next.js 14 Blog using Server Components - Backed by Wisp CMS<!-- omit in toc -->

[![Demo Travel Blog on Next.js 14](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/32432ccf-57a8-4992-8c51-e5a47e110018.png/public "Demo Travel Blog on Next.js 14")](https://nextjs-blog-cms-wisp.vercel.app/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Wisp-CMS/nextjs-blog-cms-wisp/) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWisp-CMS%2Fnextjs-blog-cms-wisp&env=NEXT_PUBLIC_BLOG_ID&envDescription=Blog%20ID%20obtained%20from%20the%20Setup%20Page%20on%20Wisp%20CMS&demo-title=Demo%20Travel%20Blog&demo-description=Demo%20travel%20blog%20using%20Nextjs%2014%20Server%20Component&demo-url=https%3A%2F%2Fnextjs-blog-cms-wisp.vercel.app%2F&demo-image=https%3A%2F%2Fimagedelivery.net%2FlLmNeOP7HXG0OqaG97wimw%2Fclvlugru90000o4g8ahxp069s%2F32432ccf-57a8-4992-8c51-e5a47e110018.png%2Fpublic)

**Featured Links**

- [Demo Blog](https://nextjs-blog-cms-wisp.vercel.app/)
- [Feature Walkthrough](https://youtu.be/7wVYAGhDmdY)
- [Editing Experience](https://youtu.be/uSKO8J38T98)
- [Documentation](https://www.wisp.blog/docs/next-js-blog-starter-kit/overview)
- [Video Tutorial](https://www.wisp.blog/docs/next-js-blog-starter-kit/running-blog)

This is a [Next.js](https://nextjs.org/docs/getting-started/installation), [Tailwind CSS](https://tailwindcss.com/), [Shadcn](https://ui.shadcn.com/) blogging starter template. This version is using Next.js 14 App Router with [React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components) and uses [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp) for publishing blog posts.

Probably the most feature-rich Next.js blog template out there that is easily configurable and customizable. It's perfect as an upgrade from blogs using Jekyll, Hugo, Gatsby, Contentlayer, or ContentCollections.

## About Wisp

Wisp is a modern CMS for adding blogs to websites. It features an intuitive, medium-like editorial experience so that you can focus on writing instead of getting distracted by markdown.

## Features

- Beautiful blog starter kit with server rendering using Next.js 14 Server Components
- Responsive layout for mobile devices
- Filter blog posts by tags
- About page
- Light & dark mode
- Automatic hierarchical sitemap generation
- Automatic Open Graph image generation
- Automatic [Related Posts suggestions](https://www.wisp.blog/blog/suggesting-related-blog-post-with-ai-content-recommendation)
- RSS Feed

## Technologies

- [Next.js 14](https://nextjs.org/) using App Router & TypeScript
- [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp) to manage blog posts
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [Shadcn UI](https://ui.shadcn.com/) for UI components
- [ESLint](https://eslint.org/) for static analysis
- [TypeScript](https://www.typescriptlang.org/) for type safety
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)

## Step-by-step Video Tutorial

We've now included a 3-part video tutorial to help you run this blog on your computer:

![3-part Video Tutorial to Launch Nextjs Blog](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/2a92b7b6-9b11-4e41-8719-bad7be99b912.png/public "3-part Video Tutorial to Launch Nextjs Blog")

- [Part 1: Running the Next JS blog (15 min)](https://www.wisp.blog/docs/next-js-blog-starter-kit/running-blog?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp)
- [Part 2: Personalizing Your Next.js Blog (15 min)](https://www.wisp.blog/docs/next-js-blog-starter-kit/personalizing-blog?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp)
- [Part 3: Deploying Your Next.js Blog (15 min)](https://www.wisp.blog/docs/next-js-blog-starter-kit/deploying-blog?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp)

## Quick Start Guide

First, install the dependencies:

```bash
npm i
```

Then, copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Note: You will need to populate the `NEXT_PUBLIC_BLOG_ID` variable with the Blog ID obtained from wisp after you've created an account.

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Help

Full documentation on how to get started on wisp as well as this starter kit is available on [wisp's documentation site](https://www.wisp.blog/docs/next-js-blog-starter-kit/overview?utm_source=github&utm_medium=web&utm_campaign=nextjs-blog-cms-wisp)

