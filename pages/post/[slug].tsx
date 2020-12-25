import Link from 'next/link';
import { useRouter } from 'next/router';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug: string) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`,
  ).then((res) => res.json());

  const posts = res.posts;

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
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {/* <Link href="/">
        <a>Go back</a>
      </Link> */}
      <div className="hero">
        <div className="hero__container">
          <h1 className="hero__container--par">{post.title}</h1>
        </div>
      </div>
      <div
        className="blog"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </>
  );
};

export default Post;
