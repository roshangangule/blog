import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/all-posts";
import { Fragment } from "react";
import Head from "next/head";

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs1',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for production',
        date: '2022-12-26'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for production',
        date: '2022-12-26'
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React framework for production',
        date: '2022-12-26'
    }
];

function AllPostsPage(props) {
    return <Fragment>
            <Head>
                <title>All Posts</title>
                <meta 
                    name="description" 
                    content="A list of all programming-related tutorials and posts!"
                />
            </Head>
            <AllPosts posts={props.posts}/>
        </Fragment>
}

export default AllPostsPage;

export function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: {
            posts: posts
        }
    }
}