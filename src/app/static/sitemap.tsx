import { config } from "@/config";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";

const staticPaths = ["about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = staticPaths.map((path) => ({
    url: urlJoin(config.baseUrl, path),
    lastModified: new Date(),
    priority: 0.9,
  }));
  return paths;
}
