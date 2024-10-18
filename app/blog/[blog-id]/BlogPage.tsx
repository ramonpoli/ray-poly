'use client';

import { BlogPost } from "@/types/Types";
import { FC, Fragment } from "react";
import Markdown from "react-markdown";
import styles from "./BlogPage.module.scss";

type Props = {
  blogPost: BlogPost;
}
const BlogPage: FC<Props> = ({ blogPost }) => {
  return <Fragment>
    <h1>{blogPost.title}</h1>
    <div className={styles.BlogArticle}>
      <Markdown >{blogPost.content}</Markdown>
    </div>
  </Fragment>
}

export default BlogPage;