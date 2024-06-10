import NavigationBar from "./NavigationBar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-dark">
      <div className="mx-auto flex max-w-screen-2xl flex-col">
        <TopBar />
        <NavigationBar />
      </div>
    </div>
  );
};

export default Header;
