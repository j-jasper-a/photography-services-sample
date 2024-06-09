import { Seller } from "@/config/sellers";

import Image from "next/image";
import SellerTag from "./SellerTag";

const SellerCard = ({ name, identity, tag, description, avatar }: Seller) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 shrink-0 md:h-20 md:w-20">
          <Image
            src={avatar}
            alt={name}
            width={512}
            height={512}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden h-full flex-col justify-between md:flex">
          <p className="text-base md:font-medium">{name}</p>
          <p className="text-sm font-light">{identity}</p>
          <SellerTag tag={tag} />
        </div>
        {/* ⬇️ Mobile-only */}
        <div className="flex h-full w-full flex-col justify-between md:hidden">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg">{name}</p>
            <SellerTag tag={tag} />
          </div>
          <p className="font-light">{identity}</p>
        </div>
        {/* ⬆️ Mobile-only */}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1 md:grid-cols-1 md:gap-0">
        {description.map((point) => (
          <div
            key={point}
            className="flex text-xs font-light opacity-70 md:text-sm"
          >
            <span className="px-2">•</span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerCard;
