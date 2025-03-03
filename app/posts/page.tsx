import React from "react";
import ViewUserButton from "../components/Posts/ViewUserButton";
import CardList from "../components/Posts/CardList";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface iPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(baseURL, {
    cache: "no-store",
    next: { revalidate: 3600 },
  });
  const posts: iPosts[] = await response.json();

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="bg-pink-500">Post tailwind ye</h1> {/* with tailwind */}
      {posts.map((post) => {
        return (
          <div className="rounded-md outline-1 outline-blue-400" key={post.id}>
            <CardList>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <br />
              <ViewUserButton userId={post.userId} />
              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
              {/* Client side component, the rest is server side */}
            </CardList>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
