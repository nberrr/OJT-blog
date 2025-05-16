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

// Get featured blog post (Week 10)
export function getFeaturedPost(): BlogPost {
  return blogPosts["week-10"];
}

// Get recent blog posts (including featured)
export function getRecentPosts(count: number = 3): BlogPost[] {
  const posts = getAllBlogPosts();
  // Get the most recent posts, including Week 10
  return posts.slice(0, count);
}

// Get the latest blog post (based on week number)
export function getLatestPost(): BlogPost {
  const posts = Object.values(blogPosts);
  return posts.reduce((latest, current) => {
    const latestWeekNum = parseInt(latest.week.replace(/\D/g, ''));
    const currentWeekNum = parseInt(current.week.replace(/\D/g, ''));
    return currentWeekNum > latestWeekNum ? current : latest;
  });
}
