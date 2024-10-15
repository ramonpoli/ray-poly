
import { BlogPost } from "@/types/Types";
import { FC } from "react";
import BlogPage from "./BlogPage";
import { Metadata } from "next";

type Props = {
  params: { "blog-id": string };
};

const fetchBlogPost = async (blogId: string): Promise<BlogPost | undefined> => {
  try {

    const blogPostInformation = await import(`./\(blog-articles\)/${blogId}.ts`);
    if (blogPostInformation) {
      const blogPostRead = await fetch(`${process.env.SERVER_URL}/blog-articles/${blogId}.md`);
      if (blogPostRead) {
        const blogPostContent = await blogPostRead.text();
        return ({
          title: blogPostInformation.default.title,
          description: blogPostInformation.default.title,
          content: blogPostContent
        });
      }
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const blogId = params["blog-id"];
  const blogPostInformation = await import(`./\(blog-articles\)/${blogId}.ts`);

  return blogPostInformation ? {
    title: blogPostInformation.default.title,
    description: blogPostInformation.default.description,
  } : {
    title: "Blog Page",
  }
}

const Page: FC<Props> = async ({ params }) => {
  const blogId = params["blog-id"];
  const blogPost = await fetchBlogPost(blogId);

  return blogPost ? (
    <BlogPage blogPost={blogPost} />
  ) : <h1>Blog Page: No blog post found</h1>;
};
export default Page;