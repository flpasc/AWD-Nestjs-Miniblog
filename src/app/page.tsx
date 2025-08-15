import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function Home() {
  const blogData = await fetchAllPosts();
  return (
    <div>
      <h1>Mini Blog</h1>
      <Suspense>
        <div>
          {blogData.map((post) => (
            <article key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </article>
          ))}
        </div>
      </Suspense>
    </div>
  );
}
