import Link from 'next/link';
import React from 'react';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

type Post = {
  title: string;
  slug: string;
  published_at: string;
  custom_excerpt: string;
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`,
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

const formatDate = (date: string) => {
  let parseBlogDate = Date.parse(date);
  let createDate = new Date(parseBlogDate);
  let postDate = createDate.getDate();
  let postMonth = createDate.toLocaleString('default', { month: 'short' });
  let postYear = createDate.getFullYear();

  return postMonth + ' ' + postDate + ', ' + postYear;
};

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    // <div className="blog">
    //   <h1>Coming Soon</h1>
    // </div>
    <>
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__container--par">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            reprehenderit inventore animi consectetur, explicabo nostrum
            cupiditate esse.
          </h1>
          <div className="hero__container--links">
            <a href="#">
              <span>Browse projects</span>
            </a>
            <a href="#">
              <span>A little about me</span>
            </a>
          </div>
        </div>
      </div>
      <div className="blog">
        {posts.map((post, index) => {
          return (
            <Link href="/post/[slug]" as={`/post/${post.slug}`} key={post.slug}>
              <a className="">
                <ul className="blog__list">
                  <li className="blog__post">
                    <div className="blog__post--date">
                      <h2>{formatDate(post.published_at)}</h2>
                    </div>

                    <div className="blog__post--title">
                      {/* <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                        <a className="">{post.title}</a>
                      </Link> */}
                      <p> {post.title}</p>
                    </div>

                    <div className="blog__post--preview">
                      <p>{post.custom_excerpt}</p>
                    </div>
                  </li>
                </ul>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
