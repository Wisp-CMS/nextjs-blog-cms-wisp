"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <div className="text-sm text-muted-foreground">
        © {config.blog.copyright} {new Date().getFullYear()}
      </div>
      <div>
        <Link href="/rss">
          <Button variant="ghost" className="p-2">
            <Rss className="w-4 h-4" />
          </Button>
        </Link>
        <DarkModeToggle />
      </div>
    </section>
  );
};
