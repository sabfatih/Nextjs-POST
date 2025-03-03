import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Testing</h1>
      <br />
      <Link
        href="/posts"
        className="w-3 h-2 shadow-lg hover:bg-violet-400 transition-all mx-8 rounded-md p-2"
      >
        Post Page
      </Link>
      <br />
      <br />
      <Link
        href="/albums"
        className="w-3 h-2 shadow-lg hover:bg-violet-400 transition-all mx-8 rounded-md p-2"
      >
        Album Page
      </Link>
    </>
  );
}
