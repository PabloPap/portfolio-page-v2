import { ApolloProvider } from '@apollo/client';
import { client } from '@/utils/index.tsx';
import { gql } from '@apollo/client';

import type { Post, Category } from './types';
import BlogHome from '@/blog/blogHome';

interface Props {
  posts: Post;
  categories: Category;
}

const Blog: React.FC<Props> = ({ posts, categories }) => {
  return (
    <ApolloProvider client={client}>
      <BlogHome posts={posts} categories={categories} />
    </ApolloProvider>
  );
};

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query BlogHome {
        posts(orderBy: createdAt_DESC, first: 3) {
          # featuredImage
          customPublicationDate
          excerpt
          publishedAt
          slug
          tags
          title
          content
        }
        categories(first: 4) {
          id
          name
          slug
        }
      }
    `,
  });

  return {
    props: {
      posts: data?.posts,
      categories: data?.categories,
      error: error ? error.message : null,
    },
    revalidate: 300,
  };
}

export default Blog;
