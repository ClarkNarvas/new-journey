import Link from "next/link";
import getPosts from "../../components/getPosts";
import PostPreviews from "../../components/postPreviews";

export default function Home() {
  const posts = getPosts();
  const previews = posts.map((post) => (
    <PostPreviews key={post.slug} {...post} /> // Use parentheses to return JSX
  ));

  return (
    <main>
      <h1 className="fs-xl2">All Posts</h1>
      <div>{previews}</div>
    </main>
  );
}
