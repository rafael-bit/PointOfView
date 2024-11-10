export interface User {
  image: string;
  name: string;
}

export type PostTypes = {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  latestPost: boolean | null;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
};