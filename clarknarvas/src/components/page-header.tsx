
import Link from "next/link"
import { postMetadata } from "./PostMetadata";
import { parse } from 'date-fns';
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import formatDateText from "./formatDate";

const PageHeader = (props: postMetadata) => {
    const formattedDate = formatDateText(props.date);
    return (
    <div className="pt-10 pb-10 text-center">
        <h1 className="text-7xl brand-font">{props.title}</h1>
        <p className="mt-5"> {formattedDate}</p>
    </div> )
};


export default PageHeader;