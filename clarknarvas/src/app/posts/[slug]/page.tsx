import Image from "next/image";
import fs from  "fs";
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';


const getPostContent = (slug: string) => {

  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}





export default function Home(props: any) {


  const slug = props.params.slug;
  const content = getPostContent(slug);
  
  return (
    <main>
      <h1 className="fs-xl2 fw-bold">{content.data.title}</h1>
      <div className="post-content">
        <Markdown>{content.content}</Markdown>
      </div>
    </main>
  );
}
