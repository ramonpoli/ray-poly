'use client'
import { FC } from "react";
import { BlogPostInformationFile } from "@/types/Types";
import { useRouter } from "next/navigation";
import styles from "./BlogPage.module.scss";

type Props = {
  blogPosts: BlogPostInformationFile[];
}
const BlogPage: FC<Props> = ({ blogPosts }) => {
  const router = useRouter()
  const BlogPost: FC<{ children: React.ReactNode, href: string }> = ({ children, href }) => {
    return <div onClick={() => { router.push(href) }} className={styles.BlogPost} >{children}</div>
  }
  return <div>
    {blogPosts.map((blog) => {
      return <BlogPost key={blog.slug} href={`/blog/${blog.slug}`}>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
      </BlogPost>
    })}
  </div>
}
export default BlogPage;