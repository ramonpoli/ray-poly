'use client';
import InterpolatedRows from "@/components/InterpolatedRows/InterpolatedRows";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Services() {
  const router = useRouter();
  return (
    <Fragment>
      <h1>Services</h1>
      <br />
      <InterpolatedRows
        rows={[
          {
            text: "E-commerce website. Click to learn more.",
            image: {
              url: "/boilerplate.png",
              alt: "Ramon Polidura at Greenwich Park",
            },
            onClick: () => {
              router.push("/services/e-commerce-website");
            }
          },
        ]}
      /></Fragment>
  );
}
