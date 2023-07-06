import { getPostData, getPostsFiles } from "../../lib/posts-util";
import PostContent from "../components/posts/post-details/post-content";

function PostDetailsPage(props) {
    return <PostContent post = {props.post}/>
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFiles = getPostsFiles();
    const slugs = postFiles.map((fileName) => (
        fileName.replace(/\.md$/,'')
    ));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug }})),
        fallback: 'blocking'
    }
}

export default PostDetailsPage;

