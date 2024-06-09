import Link from "next/link";
import {
  ShoppingCart as CartIcon,
  User as UserIcon,
  Search as SearchIcon,
} from "lucide-react";

const Actions = () => {
  return (
    <div className="flex text-brand">
      <Link href="/">
        <UserIcon size={32} />
      </Link>
      <Link href="/">
        <CartIcon size={32} />
      </Link>
      <Link href="/">
        <SearchIcon size={32} />
      </Link>
    </div>
  );
};

export default Actions;
