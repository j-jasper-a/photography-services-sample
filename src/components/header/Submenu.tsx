import Link from "next/link";

const Submenu = ({ submenu }: any) => {
  return (
    <div className="absolute left-0 top-full w-screen bg-light text-dark">
      <div className="mx-auto grid w-2/3 max-w-screen-2xl grid-cols-3 justify-between gap-6 py-8">
        {submenu.map((submenuItem: any) => (
          <div key={submenuItem.name} className="w-fit justify-self-center">
            <p className="mb-4 w-fit border-b-[1px] border-dark text-xl font-medium uppercase">
              {submenuItem.name}
            </p>
            <ul>
              {submenuItem.menuItems.map((item: any) => (
                <li key={item.name}>
                  <Link
                    className="transition-all duration-300 hover:text-brand"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
