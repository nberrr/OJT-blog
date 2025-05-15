export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  week: string;
  src: string;
  images: string[];
  description: string;
  content: string;
}

export type BlogPosts = {
  [key: string]: BlogPost;
} 