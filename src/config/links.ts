export type Link = {
  name: string;
  href: string;
  submenu?: Submenu[];
};

export type Submenu = {
  name: string;
  menuItems: Link[];
};

export const links: Link[] = [
  {
    name: "Brands",
    href: "/",
  },
  {
    name: "Cameras",
    href: "/",
    submenu: [
      {
        name: "Digital",
        menuItems: [
          {
            name: "DSLR",
            href: "/",
          },
          {
            name: "Mirrorless",
            href: "/",
          },
          {
            name: "Compact",
            href: "/",
          },
          {
            name: "Medium Format",
            href: "/",
          },
        ],
      },
      {
        name: "Film",
        menuItems: [
          {
            name: "35mm",
            href: "/",
          },
          {
            name: "Medium Format",
            href: "/",
          },
          {
            name: "Large Format",
            href: "/",
          },
          {
            name: "Instant",
            href: "/",
          },
          {
            name: "Disposable",
            href: "/",
          },
        ],
      },
      {
        name: "Video",
        menuItems: [
          {
            name: "Camcorder",
            href: "/",
          },
          {
            name: "Pro-Consumer",
            href: "/",
          },
          {
            name: "Super Chip",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    name: "Lenses",
    href: "/",
  },
  {
    name: "Accessories",
    href: "/",
  },
  {
    name: "Studio",
    href: "/",
  },
  {
    name: "Extreme",
    href: "/",
  },
  {
    name: "Used",
    href: "/",
  },
];
