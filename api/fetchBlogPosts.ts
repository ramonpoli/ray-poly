
import { BlogPostInformationFile } from "@/types/Types";
import { readdirSync } from "fs";

export const fetchBlogPosts = (): BlogPostInformationFile[] | undefined => {
  try {
    const blogPostsInformation = readdirSync(`./app/blog/[blog-id]/(blog-articles)`);
    return blogPostsInformation.map((blogPostInformation) => {
      const blogPostInformationFile = require(`../app/blog/[blog-id]/(blog-articles)/${blogPostInformation}`);
      return {
        title: blogPostInformationFile.default.title,
        description: blogPostInformationFile.default.description,
        image: blogPostInformationFile.default.image,
        slug: blogPostInformation.replace(".ts", "")
      }
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }
};