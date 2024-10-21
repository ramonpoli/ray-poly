
import { fetchBlogPosts } from "@/api/fetchBlogPosts";
import BlogPage from "./BlogPage";

const Page = () => {
  const blogPosts = fetchBlogPosts();
  return <div>{blogPosts ? <BlogPage blogPosts={blogPosts} /> : 'Blog posts not found'}</div>;
};
export default Page;