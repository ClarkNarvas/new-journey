import Link from "next/link";
import { postMetadata } from "./PostMetadata";
import Image from "next/image";
import formatDateText from "./formatDate";

const PostPreviews = (props: postMetadata) => {
  const formattedDate = formatDateText(props.date);

  return (
    <div className="p-2 mb-5 border-b pb-6">
      <Link href={`/posts/${props.slug}`}>
        <h1 className="text-5xl brand-font mb-3">{props.title}</h1>
      </Link>
      <p>{formattedDate}</p>
    </div>
  );
};

export default PostPreviews;
