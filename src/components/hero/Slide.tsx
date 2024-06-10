import { Slide as SlideType } from "@/config/slides";
import { ArrowRight as RightArrowIcon } from "lucide-react";
import Image from "next/image";

const Slide = ({ image, heading, subheading }: SlideType) => {
  return (
    <div className="relative flex h-[80vh] flex-col justify-end overflow-hidden md:h-[70vh]">
      <div className="absolute -z-10 h-full w-full">
        <Image
          className="h-full w-full object-cover"
          src={image}
          alt={heading}
          width={3840}
          height={2160}
        />
      </div>
      <div className="absolute h-full w-full bg-gradient-to-b from-dark/0 via-dark/0 to-dark/90 md:block" />
      <div className="z-10 mx-auto mb-32 flex w-full max-w-screen-2xl flex-col px-6 md:gap-2">
        <p className="text-2xl font-semibold uppercase text-light md:text-6xl md:font-bold">
          {heading}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-lg text-light md:text-xl md:font-medium">
            {subheading}
          </span>
          <RightArrowIcon size={48} className="text-brand" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
