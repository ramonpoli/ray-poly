import { fetchBlogPosts } from "@/api/fetchBlogPosts";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = fetchBlogPosts();
  return [
    {
      url: `${process.env.SERVER_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.SERVER_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.SERVER_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.SERVER_URL}/services/e-commerce-website`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...(blogPosts?.map((blogPost) => ({
      url: `${process.env.SERVER_URL}/blog/${blogPost.slug}`,
      lastModified: new Date(),
    })) ?? []),
    {
      url: `${process.env.SERVER_URL}/forms.html`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
