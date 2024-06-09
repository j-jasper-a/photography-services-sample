import { Product } from "@/config/products";
import {
  ArrowRightLeft as ComparisonIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Timer as TimerIcon,
} from "lucide-react";
import Image from "next/image";

const ProductCard = ({
  name,
  brand,
  originalPrice,
  discountedPrice,
  rating,
  saleDuration,
  description,
  image,
}: Product) => {
  return (
    <div className="flex w-[300px] flex-col p-4 md:w-full">
      <div className="flex items-center gap-2 self-end">
        <button>
          <HeartIcon
            size={24}
            className="text-dark opacity-60 transition-all duration-300 hover:opacity-100"
          />
        </button>
        <button className="group relative">
          <ComparisonIcon
            size={24}
            className="text-dark opacity-60 transition-all duration-300 group-hover:opacity-100"
          />
          <div className="group-hover pointer-events-none absolute -bottom-1 right-0 whitespace-nowrap bg-light py-2 text-sm font-light opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:right-[130%] group-hover:opacity-100">
            <span className="opacity-70">Add to comparison</span>
          </div>
        </button>
      </div>
      <div className="aspect-square overflow-hidden">
        <Image
          className="h-full w-full object-contain"
          src={image}
          alt={name}
          width={512}
          height={512}
        />
      </div>
      <div className="flex justify-between">
        <p className="text-xl font-medium">{name}</p>
        <div className="flex items-center gap-1">
          <StarIcon size={16} className="fill-brand text-brand" />
          <p className="opacity-70">{rating}</p>
        </div>
      </div>
      <p>{brand}</p>
      <div className="mt-2">
        {description.map((point) => (
          <div key={point} className="flex text-sm font-light opacity-70">
            <span className="px-2">•</span>
            <span>{point}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1">
          <TimerIcon size={20} className="text-brand" />
          <span>{saleDuration}</span>
        </div>
        <div className="relative">
          <span className="absolute -top-4 right-0 line-through opacity-40">
            {originalPrice}
          </span>
          <span className="text-xl font-medium">{discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
