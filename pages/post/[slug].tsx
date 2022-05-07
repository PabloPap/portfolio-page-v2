import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Prism from 'prismjs';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v4/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`,
  );
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  const posts = data.posts;
  return posts[0];
}

// Ghost CMS request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = () => {
  // paths -> slugs which are allowed
  return {
    paths: [],
    fallback: true,
  };
};

type Post = {
  title: string;
  html: string;
  slug: string;
};

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <h1 className="spinner">Loading...</h1>;
  }

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);

  return (
    <>
      <div className="post__hero">
        <Link href="/blog">
          <a className="arrow">
            <img src="/img/arrow-left.svg" alt="arrow left" />
          </a>
        </Link>
        <div className="post__hero--container">
          <h1>{post.title}</h1>
        </div>
      </div>
      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </>
  );
};

export default Post;
