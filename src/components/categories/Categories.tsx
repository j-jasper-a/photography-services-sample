"use client";

import { categories } from "@/config/categories";
import CategoryCard from "./CategoryCard";
import useIsDesktop from "@/utils/useIsDesktop";

const Categories = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="mx-auto max-w-screen-2xl p-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {categories
          .slice(0, isDesktop ? 3 : categories.length)
          .map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
      </div>
    </section>
  );
};

export default Categories;
