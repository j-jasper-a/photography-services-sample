import { Service } from "@/config/services";
import { ArrowRight as RightArrowIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ name, description, href, image }: Service) => {
  return (
    <div className="flex h-fit flex-col items-center gap-4 md:grid md:grid-cols-2 md:gap-6">
      <Link
        href={href}
        className="group aspect-[4/1] overflow-hidden md:relative md:aspect-auto md:h-full md:w-full"
      >
        <Image
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 md:absolute"
          src={image}
          alt={name}
          width={512}
          height={512}
        />
      </Link>
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium">{name}</p>
          <p>{description}</p>
        </div>
        <Link
          href={href}
          className="group flex w-fit items-center gap-4 border-b-[1px] border-dark/70 transition-all duration-300 hover:gap-1 hover:border-brand"
        >
          <span className="text-dark/70 transition-all duration-300 group-hover:text-brand">
            Read More
          </span>
          <RightArrowIcon className="text-brand" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
