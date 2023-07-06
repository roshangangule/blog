import { Fragment } from "react";
import Hero from "./components/home-page/hero";
import FeaturedPosts from "./components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";


function HomePage(props) {
    const { posts } = props;
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={posts}/>
        </Fragment>
    );
}

export default HomePage;


export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        }
    }
}