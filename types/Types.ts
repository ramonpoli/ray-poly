export type BlogPostInformation = {
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
};

export type BlogPost = BlogPostInformation & {
  content: string;
};

export type BlogPostInformationFile = BlogPostInformation & {
  slug: string;
};

export type FeatureCardType = {
  image: {
    src: string | React.ReactNode;
    alt: string;
  };
  title: string;
  content?: string;
  href?: string;
};

export type ProjectType = {
  image: {
    src: string | React.ReactNode;
    alt: string;
  };
  title: string;
  description: string;
};
