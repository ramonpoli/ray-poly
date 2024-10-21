import { fetchBlogPosts } from '@/api/fetchBlogPosts';
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

  const blogPosts = fetchBlogPosts();
  return [
    {
      url: `${process.env.SERVER_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SERVER_URL}/about`,
      lastModified: new Date(),
    },
    ...blogPosts?.map((blogPost) => ({
      url: `${process.env.SERVER_URL}/blog/${blogPost.slug}`,
      lastModified: new Date(),
    })) ?? [],
  ];
}


