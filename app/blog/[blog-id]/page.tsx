'use client'
import { FC, useEffect, useState } from "react";
import Markdown from "react-markdown";


type Props = {
  params: { "blog-id": string };
};
const BlogPage: FC<Props> = ({ params }) => {
  const [blogPost, setBlogPost] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const blogPostRead = await fetch((`./${params["blog-id"]}.md`));
      if (blogPostRead) {
        const blogPost = await blogPostRead.text();
        setBlogPost(blogPost);
      }
    };
    if (!blogPost) {
      fetchBlogPost();
    }
  }, [blogPost, params]);
  return (
    <div>
      <h1>Blog Page: {params["blog-id"]}</h1>
      {blogPost ? <Markdown>{blogPost}</Markdown> : null}
    </div>
  );
};
export default BlogPage;