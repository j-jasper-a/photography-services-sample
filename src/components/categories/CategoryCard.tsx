import { Category } from "@/config/categories";
import { ArrowRight as RightArrowIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ name, description, href, image }: Category) => {
  return (
    <Link href={href} className="group relative h-fit">
      <div className="relative aspect-square md:aspect-[4/3]">
        <Image
          className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-125"
          src={image}
          alt={name}
          width={512}
          height={512}
        />
        <div className="absolute left-0 top-0 hidden h-full w-full bg-gradient-to-b from-dark/0 via-dark/0 to-dark/70 md:block" />
      </div>
      <div className="bottom-0 left-0 flex w-full items-center justify-between md:absolute md:block md:items-start md:justify-normal md:p-6">
        <p className="text-xl font-medium md:text-4xl md:font-semibold md:text-light">
          {name}
        </p>
        <div className="flex items-center justify-between">
          <p className="hidden text-light opacity-75 md:block">{description}</p>
          <RightArrowIcon
            size={32}
            className="text-brand transition-all duration-500 group-hover:-translate-x-12"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
