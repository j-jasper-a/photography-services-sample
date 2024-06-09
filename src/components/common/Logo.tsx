import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link className={`flex ${className}`} href="/">
      <Image
        className="w-full"
        src="/assets/images/brand-logo.svg"
        width={512}
        height={512}
        alt="Pixel logo"
      />
    </Link>
  );
};

export default Logo;
