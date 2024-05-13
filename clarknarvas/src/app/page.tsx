import Link from "next/link";
import getPosts from "../components/getPosts";
import PostPreviews from "../components/PostPreviews";

export default function Home() {
  const posts = getPosts();
  const previews = posts.map((post) => (
    <PostPreviews key={post.slug} {...post} /> // Use parentheses to return JSX
  ));

  return (
    <div className="container-narrow">
      <div>{previews}</div>
    </div>
  );
}
