import Hero from "@/components/Hero/Hero";

const title = "E-commerce website";
const description = "Complete e-commerce website with landing page, shop page with all the products and individual product page, along with an about us page.";

export const metadata = {
  title,
  description,
  tags: ['e-commerce', 'website', 'web development', 'web developer', 'SEO', 'shop']
};

export default function ECommerceWebsitePage() {
  return (
    <div>
      <Hero title={title}
        subtitle={description}
        image={{
          src: '/boilerplate.png',
          alt: 'boilerplate e-commerce website image'
        }}
      />
    </div>
  );
}