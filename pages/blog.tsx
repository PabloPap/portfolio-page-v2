import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Header from '../components/header';

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
    <>
      < Header />
      <div className={styles.container}>
        <h1>hello to my blog</h1>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Blog;
