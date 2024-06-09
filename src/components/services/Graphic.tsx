import Image from "next/image";

const Graphic = () => {
  return (
    <Image
      className="hidden md:block"
      src={"/assets/images/services/services.webp"}
      alt="Services"
      width={3840}
      height={2160}
    />
  );
};

export default Graphic;
