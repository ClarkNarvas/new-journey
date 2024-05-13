import Image from "next/image";
import fs from  "fs";
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPosts from "../../../components/getPosts";
import PageHeader from "../../../components/page-header";


const getPostContent = (slug: string) => {

  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}


export const generateStaticPages = async () => {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


export default function BlogPost(props: any) {
  const slug = props.params.slug;
  const content = getPostContent(slug);



  
  return (
    <main>
      <PageHeader title={content.data.title} date={content.data.date} slug={props.params.slug}  />
      <div className="post-content">
        <Markdown>{content.content}</Markdown>
      </div>
    </main>
  );
}

