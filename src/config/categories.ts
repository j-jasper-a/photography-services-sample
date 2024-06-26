export type Category = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: "Cameras",
    description: "Browse through our selection of cameras",
    href: "/",
    image: "/assets/images/categories/cameras.webp",
  },
  {
    name: "Lenses",
    description: "Find the sharpest lens for your photoshoot",
    href: "/",
    image: "/assets/images/categories/lenses.webp",
  },
  {
    name: "Accessories",
    description: "Highest quality accessories to fit your gear",
    href: "/",
    image: "/assets/images/categories/accessories.webp",
  },
  {
    name: "Studio",
    description: "The best studio equipment for your photoshoot",
    href: "/",
    image: "/assets/images/categories/studio.webp",
  },
];
