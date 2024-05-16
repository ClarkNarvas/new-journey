
import Link from "next/link"
import { postMetadata } from "./PostMetadata";
import { parse } from 'date-fns';
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import formatDateText from "./formatDate";
import Image from "next/image";

const PageHeader = (props: postMetadata) => {
    const formattedDate = formatDateText(props.date);
    return (
    <div className="container mx-auto">
    <div className="pt-10 pb-10 text-center p-4">
        <h1 className="text-7xl brand-font">{props.title}</h1>
        {props.date && ( <p className="mt-5 mb-10"> {formattedDate}</p> ) }
    </div> 

    {props.image && (
        <div className="page-header-image">
            <Image
                src={props.image}
                alt="Picture of the author"
                width="1250"
                height="700"
                style={{
                    width:'100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'cover'
                }}
            />
        </div>
    )}
</div>)
};


export default PageHeader;