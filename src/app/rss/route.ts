export const revalidate = 60 * 60; // 1 hour

import { NextResponse } from "next/server";
import RSS from "rss";
import urlJoin from "url-join";
import { wisp } from "../../lib/wisp";
import { config } from "@/config";

const baseUrl = config.baseUrl;

export async function GET() {
  const result = await wisp.getPosts({ limit: 20 });

  const posts = result.posts.map((post) => {
    return {
      title: post.title,
      description: post.description || "",
      url: urlJoin(baseUrl, `/blog/${post.slug}`),
      date: post.publishedAt || new Date(),
    };
  });

  const feed = new RSS({
    title: config.blog.name,
    description: config.blog.metadata.description,
    site_url: baseUrl,
    feed_url: urlJoin(baseUrl, "/rss"),
    pubDate: new Date(),
  });
  posts.forEach((post) => {
    feed.item(post);
  });

  const xml: string = feed.xml({ indent: true });

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
