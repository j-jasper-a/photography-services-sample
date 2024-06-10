import { Menu as MenuIcon } from "lucide-react";
import Logo from "../common/Logo";
import Actions from "./Actions";

const TopBar = () => {
  return (
    <div className="grid grid-cols-3 items-center p-6 md:flex md:justify-between">
      <button className="md:hidden">
        <MenuIcon size={32} className="text-light" />
      </button>
      <Logo className="w-20 justify-self-center md:w-32" />
      <Actions />
    </div>
  );
};

export default TopBar;
