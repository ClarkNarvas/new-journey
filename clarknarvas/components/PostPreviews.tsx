import Link from "next/link"
import { postMetadata } from "./PostMetadata";

const PostPreviews = (props: postMetadata) => {
    return ( <div className="p-2">
      <Link href={`/posts/${props.slug}`}>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
      </Link>
    </div> )
};
  


  export default PostPreviews;