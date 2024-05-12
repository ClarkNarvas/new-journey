import Image from "next/image";
import fs from  "fs";
import Link from "next/link"
import matter from "gray-matter"



export default function Home() {

  const getPosts = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const mdPosts = files.filter((file) => file.endsWith(".md"));
    const slugs = mdPosts.map((file) => file.replace(".md", " "));

    const posts = mdPosts.map((fileName) => {
      const content = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(content); // what does this do?

      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        slug: fileName.replace(".md", " ")
      }

    })
    return posts
  }
  
  const posts = getPosts();
  const postPreviews = posts.map((post) => (
    <div className="p-2">
      <Link href={`/posts/${post.slug}`}>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      </Link>
    </div>
  ));
  

  return (
    <main>
      <h1 className="fs-xl2">All Posts</h1>
      <div>{postPreviews}</div>
    </main>
  );
}
