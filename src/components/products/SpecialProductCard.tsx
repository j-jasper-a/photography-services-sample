"use client";

import { SetStateAction, useState } from "react";
import { SpecialProduct } from "@/config/products";
import {
  ArrowRightLeft as ComparisonIcon,
  Heart as HeartIcon,
  Star as StarIcon,
  Timer as TimerIcon,
} from "lucide-react";
import Image from "next/image";

const SpecialProductCard = ({
  name,
  brand,
  priceOne: basePriceOne,
  priceTwo: basePriceTwo,
  rating,
  saleDuration,
  image,
}: SpecialProduct) => {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(basePriceOne);
  const [activeKit, setActiveKit] = useState(1);

  const handleIncrease = () => {
    if (amount < 5) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      updatePrice(activeKit, newAmount);
    }
  };

  const handleDecrease = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      updatePrice(activeKit, newAmount);
    }
  };

  const handleKitChange = (kit: SetStateAction<number>) => {
    setActiveKit(kit);
    updatePrice(kit, amount);
  };

  const updatePrice = (kit: SetStateAction<number>, amount: number) => {
    const newPrice = kit === 1 ? basePriceOne * amount : basePriceTwo * amount;
    setPrice(newPrice);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

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
      <div className="flex flex-col gap-2">
        <div className="relative flex items-center justify-between rounded-full border-[1px] border-dark/50">
          <div
            className={`absolute -z-10 h-full w-1/2 rounded-full bg-brand transition-all duration-500 ${
              activeKit === 1 ? "left-0" : "left-1/2"
            }`}
          />
          <button
            onClick={() => handleKitChange(1)}
            className={`w-1/2 py-2 transition-all duration-500 ${
              activeKit === 1 ? "text-white" : "text-dark"
            }`}
          >
            1 Lens Kit
          </button>
          <button
            onClick={() => handleKitChange(2)}
            className={`w-1/2 py-2 transition-all duration-500 ${
              activeKit === 2 ? "text-white" : "text-dark"
            }`}
          >
            2 Lens Kit
          </button>
        </div>
        <div className="flex items-center justify-between rounded-full border-[1px] border-dark/50">
          <button
            onClick={handleDecrease}
            className="rounded-l-full bg-brand px-4 py-2 text-light transition-all duration-500 hover:bg-red-700"
          >
            -
          </button>
          <span className="text-xl">{amount}</span>
          <button
            onClick={handleIncrease}
            className="rounded-r-full bg-brand px-4 py-2 text-light transition-all duration-500 hover:bg-red-700"
          >
            +
          </button>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1">
          <TimerIcon size={20} className="text-brand" />
          <span>{saleDuration}</span>
        </div>
        <span className="text-xl font-medium">{formatPrice(price)}</span>
      </div>
    </div>
  );
};

export default SpecialProductCard;
