import Link from 'next/link';
import React from 'react';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

type Post = {
  title: string;
  slug: string;
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`,
  ).then((res) => res.json());

  const posts = res.posts;
  return posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    <div className="blog">
      <h1>Coming Soon</h1>
    </div>
    // <>
    //   <div className="hero">
    //     <div className="hero__container">
    //       <h1 className="hero__container--par">
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
    //         reprehenderit inventore animi consectetur, explicabo nostrum
    //         cupiditate esse.
    //       </h1>
    //       <div className="hero__container--links">
    //         <a href="#">
    //           <span>Browse projects</span>
    //         </a>
    //         <a href="#">
    //           <span>A little about me</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="blog">
    //     <h1>hello to my blog</h1>
    //     <ul>
    //       {posts.map((post, index) => {
    //         return (
    //           <li key={index}>
    //             <Link href="/post/[slug]" as={`/post/${post.slug}`}>
    //               <a>{post.title}</a>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </>
  );
};

export default Blog;
