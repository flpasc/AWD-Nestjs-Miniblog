import LikeButton from "@/app/components/LikeButton";
import { BASE_URL } from "@/app/page";
import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

type PostProps = { params: Promise<{ id: string }> };

const fetchPost = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default async function Post({ params }: PostProps) {
  const { id } = await params;
  const post = await fetchPost(parseInt(id));

  return (
    <div>
      <Suspense>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <LikeButton />
        <div>
          <Link href={`/posts/${parseInt(id) - 1}`}>Prev Post</Link>
          <Link href={`/posts/${parseInt(id) + 1}`}>Next Post</Link>
        </div>
      </Suspense>
    </div>
  );
}
