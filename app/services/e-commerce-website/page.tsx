import ECommerceWebsitePage from "./ECommerceWebsitePage";

const title = "E-commerce website";
const description = "Complete e-commerce website with landing page, shop page with all the products and individual product page, along with an about us page.";

export const metadata = {
  title,
  description,
  tags: ['e-commerce', 'website', 'web development', 'web developer', 'SEO', 'shop']
};

export default function Page() {
  return (
    <ECommerceWebsitePage title={title} description={description} />
  );
}