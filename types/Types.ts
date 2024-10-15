export type BlogPostInformation = {
  title: string;
  description: string;
}

export type BlogPost = BlogPostInformation & {
  content: string;
}