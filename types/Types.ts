export type BlogPostInformation = {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
}

export type BlogPost = BlogPostInformation & {
  content: string;
}

export type BlogPostInformationFile = BlogPostInformation & {
  slug: string;
}