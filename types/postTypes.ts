export interface User {
  image: string;
  name: string;
}

export interface PostTypes {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost?: boolean;
  latestPost?: boolean;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
}
