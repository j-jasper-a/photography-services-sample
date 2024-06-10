import Categories from "@/components/categories/Categories";
import SectionBreak from "@/components/common/SectionBreak";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Savings from "@/components/savings/Savings";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="mt-20 md:mt-40">
      {/* <Hero /> */}
      <SectionBreak />
      <Categories />
      <SectionBreak />
      <Services />
      <SectionBreak />
      <Products />
      <SectionBreak />
      <Savings />
    </main>
  );
}
