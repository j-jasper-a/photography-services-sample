import { links } from "@/config/links";
import Link from "next/link";

const NavigationBar = () => {
  const columns = links.length;

  return (
    <nav className="hidden md:block">
      <ul className={`grid grid-cols-${columns} uppercase text-light`}>
        {links.map((link) => (
          <li key={link.name} className="w-full hover:bg-brand">
            <Link className="text-xl font-medium" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
