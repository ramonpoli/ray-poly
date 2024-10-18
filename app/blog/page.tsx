import { BlogPostInformationFile } from "@/types/Types";
import { readdirSync } from "fs";
import BlogPage from "./BlogPage";

const fetchBlogPosts = (): BlogPostInformationFile[] | undefined => {
  try {
    const blogPostsInformation = readdirSync(`./app/blog/[blog-id]/(blog-articles)`);
    return blogPostsInformation.map((blogPostInformation) => {
      const blogPostInformationFile = require(`./[blog-id]/(blog-articles)/${blogPostInformation}`);
      return {
        title: blogPostInformationFile.default.title,
        description: blogPostInformationFile.default.description,
        slug: blogPostInformation.replace(".ts", "")
      }
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }
};
const Page = () => {
  const blogPosts = fetchBlogPosts();
  return <div>{blogPosts ? <BlogPage blogPosts={blogPosts} /> : 'Blog posts not found'}</div>;
};
export default Page;