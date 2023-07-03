import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2022-12-26',
    content: '# This is the first post.'
};

function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    console.log(imagePath);

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </article>
    );
    
}

export default PostContent;