import Link from "next/link";
import {
  ShoppingCart as CartIcon,
  User as UserIcon,
  Search as SearchIcon,
} from "lucide-react";

const Actions = () => {
  return (
    <div className="flex gap-2 justify-self-end text-brand md:gap-6">
      <Link
        href="/"
        className="hidden transition-all duration-300 hover:text-light md:block"
      >
        <UserIcon size={32} />
      </Link>
      <Link href="/" className="transition-all duration-300 hover:text-light">
        <CartIcon size={32} />
      </Link>
      <Link href="/" className="transition-all duration-300 hover:text-light">
        <SearchIcon size={32} />
      </Link>
    </div>
  );
};

export default Actions;
