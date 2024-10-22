'use client';

import { BlogPost } from "@/types/Types";
import { FC } from "react";
import Markdown from "react-markdown";
import styles from "./BlogPage.module.scss";
import Image from "next/image";

type Props = {
  blogPost: BlogPost;
}
const BlogPage: FC<Props> = ({ blogPost }) => {
  return (
    <div className={styles.BlogPage}>
      <h1>{blogPost.title}</h1>
      {blogPost.image && <div className={styles.ImageContainer}>
        <Image src={blogPost.image} alt={blogPost.title} layout={'fill'} objectFit="contain" />
      </div>
      }
      <div className={styles.BlogArticle}>
        <Markdown >{blogPost.content}</Markdown>
      </div>
    </div>
  )
}

export default BlogPage;