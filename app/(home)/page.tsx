import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Post } from "@/src/feature/posts/Post";
import { getLatestPosts } from "@/src/query/post.query";
import React from "react";

export default async function Home() {
  const session = await getAuthSession();

  const posts = await getLatestPosts();
  return (
    <div className="divide-y divide-muted">
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
