
import { BlogPost } from "@/types/Types";
import { FC } from "react";
import BlogPage from "./BlogPage";


const fetchBlogPost = async (blogId: string): Promise<BlogPost | undefined> => {
  try {

    const blogPostInformation = await import(`./\(blog-articles\)/${blogId}.ts`);
    if (blogPostInformation) {
      const blogPostRead = await fetch(`${process.env.SERVER_URL}/blog-articles/${blogId}.md`);
      if (blogPostRead) {
        const blogPostContent = await blogPostRead.text();
        return ({ ...blogPostInformation, content: blogPostContent });
      }
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }
};
type Props = {
  params: { "blog-id": string };
};
const Page: FC<Props> = async ({ params }) => {
  const blogId = params["blog-id"];
  const blogPost = await fetchBlogPost(blogId);

  return blogPost ? (
    <BlogPage blogPost={blogPost} />
  ) : <h1>Blog Page: No blog post found</h1>;
};
export default Page;