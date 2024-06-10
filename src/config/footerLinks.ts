export type FooterLink = {
  name: string;
  links: {
    name: string;
    href: string;
  }[];
};

export const footerLinks: FooterLink[] = [
  {
    name: "Shop",
    links: [
      {
        name: "Cameras",
        href: "/",
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
        name: "Brands",
        href: "/",
      },
      {
        name: "Extreme",
        href: "/",
      },
    ],
  },
  {
    name: "Used",
    links: [
      {
        name: "Buy & Sell",
        href: "/",
      },
      {
        name: "Policy",
        href: "/",
      },
      {
        name: "Report Fraud",
        href: "/",
      },
    ],
  },
  {
    name: "About",
    links: [
      {
        name: "Contact",
        href: "/",
      },
      {
        name: "Our Story",
        href: "/",
      },
      {
        name: "Blog",
        href: "/",
      },
    ],
  },
];
