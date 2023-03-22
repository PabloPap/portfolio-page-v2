export type Post = {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  customPublicationDate: string;
  tags: string;
  content: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};
