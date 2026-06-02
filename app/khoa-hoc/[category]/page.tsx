"use client";

import { useParams, notFound } from "next/navigation";
import { CategoryLanding } from "@/components/category-landing";
import { ContactSection } from "@/components/contact-section";
import { findCategory } from "@/lib/site-config";

export default function CategoryPage() {
  const params = useParams();
  const slug = typeof params.category === "string" ? params.category : "";
  const category = findCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <CategoryLanding category={category!} />
      <div className="section-divider mx-6" />
      <ContactSection />
    </>
  );
}
