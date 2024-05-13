import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

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

    posts.sort((a, b) => {
      // Compare date strings directly
      if (b.date > a.date) return 1;
      if (b.date < a.date) return -1;
      return 0;
    });

    return posts
  }

  export default getPosts;