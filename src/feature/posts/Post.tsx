import { PostHome } from "@/src/query/post.query";
import React from "react";
import { PostLayout } from "./PostLayout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, MessageSquare, Share } from "lucide-react";

type PostProps = {
  post: PostHome;
};

export const Post = ({ post }: PostProps) => {
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
      <Link href={`/post/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>
      <div className="flex gap-2 items-center">
        <Button size="icon" variant="ghost">
          <Heart size={20} />
        </Button>
        <Button size="icon" variant="ghost">
          <MessageCircle size={20} />
        </Button>
      </div>

      <div>
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}>
          {post._count.likes} likes
        </Link>
        {" . "}
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}>
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
