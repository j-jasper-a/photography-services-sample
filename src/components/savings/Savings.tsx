"use client";

import useIsDesktop from "@/utils/useIsDesktop";
import Graphic from "./Graphic";
import Buttons from "./Buttons";
import Sellers from "./Sellers";

const Savings = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col gap-4 p-6">
      <p className="text-xl font-semibold md:text-4xl">
        {isDesktop ? "Featured savings" : "Used gear to new possibilities"}
      </p>
      <p className="md:hidden">
        We offer a reliable platform for buying and selling used photography
        gear.
      </p>
      <div className="gap-6 md:grid md:grid-cols-[2fr_2.7fr]">
        <Graphic />
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <p className="hidden text-xl font-semibold md:block md:text-4xl">
              Turn used gear into new possibilities
            </p>
            <p className="hidden md:block">
              We offer a reliable platform for buying and selling used
              photography gear. Whether you&apos;re a beginner looking for
              affordable equipment or a professional photographer in search of
              high-end gear at a discounted price, we&apos;ve got you covered.
            </p>
          </div>
          <Sellers />
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default Savings;
