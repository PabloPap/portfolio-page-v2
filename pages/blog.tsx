import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

type Post = {
  title: string;
  slug: string;
  published_at: string;
  custom_excerpt: string;
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v4/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`,
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error('Could not fetch data');
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });

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

  // useEffect(() => {});

  return (
    <>
      <div className="blog__hero">
        <Link href="/">
          <a className="arrow">
            <img src="/img/arrow-left.svg" alt="arrow left" />
          </a>
        </Link>
        <div className="blog__hero--container">
          <h1>A place for my stories</h1>
        </div>
      </div>
      <div className="blog">
        {posts.map((post, index) => {
          return (
            <Link href="/post/[slug]" as={`/post/${post.slug}`} key={post.slug}>
              <a className="blog__link">
                <ul className="blog__list">
                  <li className="blog__post">
                    <div className="blog__post--date">
                      <h2>{formatDate(post.published_at)}</h2>
                    </div>

                    <div className="blog__post--title">
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
