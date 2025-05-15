import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { BlogPost } from './types';
import { blogPosts } from './blogPosts';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get all blog posts sorted by date (newest first)
export function getAllBlogPosts() {
  return Object.values(blogPosts).sort((a, b) => {
    const dateA = new Date(a.date.split('-')[0]);
    const dateB = new Date(b.date.split('-')[0]);
    return dateB.getTime() - dateA.getTime();
  });
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

// Function to handle image paths
export function getImagePath(path: string): string {
  // If the path starts with /uploads, return as is
  if (path.startsWith('/uploads')) {
    return path;
  }
  
  // If the path already has an extension, return it as is
  if (path.match(/\.(jpg|jpeg|png|webp)$/i)) {
    return path;
  }
  
  // If no extension, default to .jpg
  return `${path}.jpg`;
}

// Get featured blog post (most recent)
export function getFeaturedPost(): BlogPost {
  const posts = getAllBlogPosts();
  return posts[0];
}

// Get recent blog posts (excluding featured)
export function getRecentPosts(count: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  // Remove the first (featured) post and get the next 'count' posts
  return posts.slice(1, count + 1);
}
