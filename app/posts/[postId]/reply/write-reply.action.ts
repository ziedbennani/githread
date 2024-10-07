"use server";

import { getUser } from "@/src/query/user.query";
import { prisma } from "@/lib/prisma";
import { WritePostFormValues } from "@/app/write/WritePostForm";

export const createReply = async (
  postId: string,
  values: WritePostFormValues
) => {
  const user = await getUser();
  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
      parentId: postId,
    },
  });
  return postId;
};
