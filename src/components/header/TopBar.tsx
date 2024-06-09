import Logo from "../common/Logo";
import Actions from "./Actions";

const TopBar = () => {
  return (
    <div className="flex justify-between">
      <Logo className="w-32" />
      <Actions />
    </div>
  );
};

export default TopBar;
