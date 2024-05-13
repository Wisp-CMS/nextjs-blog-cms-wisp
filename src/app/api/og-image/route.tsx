import { verifyOgImageSignature } from "@/lib/og-image";
import type { NextRequest } from "next/server";
import { loadFonts } from "./fonts";
import { generateBannerImage } from "./template";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title");
  if (!title) {
    return new Response("Missing title", { status: 400 });
  }
  const label = searchParams.get("label") || undefined;
  const brand = searchParams.get("brand") || undefined;
  const signature = searchParams.get("s") || "";

  const verified = verifyOgImageSignature(
    {
      title,
      label,
      brand,
    },
    signature
  );
  if (!verified) {
    return new Response("Invalid request", { status: 400 });
  }

  const fonts = await loadFonts();

  return generateBannerImage({ title, label, brand }, fonts);
}
