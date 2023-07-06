import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs1',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2022-12-26',
    content: '# This is the first post.'
};

function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        p(paragraph) {
          const { node } = paragraph;
    
          if (node.children[0].tagName === 'img') {
            const image = node.children[0];
    
            return (
              <div className={classes.image}>
                <Image
                  src={`/images/posts/${post.slug}/${image.properties.src}`}
                  alt={image.alt}
                  width={600}
                  height={300}
                />
              </div>
            );
          }
    
          return <p>{paragraph.children}</p>;
        },
    
        code(code) {
          const { className, children } = code;
          const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
          return (
            <SyntaxHighlighter
              style={atomDark}
              language={language}
              children={children}
            />
          );
        },
      };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    );
    
}

export default PostContent;
