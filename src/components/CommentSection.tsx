"use client";

import { useQuery } from "@tanstack/react-query";
import { wisp } from "@/lib/wisp";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

interface CommentSectionProps {
  slug: string;
}

export function CommentSection({ slug }: CommentSectionProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["comments", slug],
    queryFn: () => wisp.getComments({ slug, page: 1, limit: "all" }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data?.config.enabled) {
    return null;
  }

  return (
    <div className="my-8">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">Add Comments</h2>
      <CommentForm slug={slug} config={data.config} />
      <h2 className="mb-8 mt-16 text-2xl font-bold tracking-tight">Comments</h2>
      <CommentList
        comments={data.comments}
        pagination={data.pagination}
        config={data.config}
        isLoading={isLoading}
      />
    </div>
  );
}
