export type Seller = {
  name: string;
  identity: string;
  tag: string;
  description: string[];
  avatar: string;
};

export const sellers: Seller[] = [
  {
    name: "Tom Smith",
    identity: "Handmade Accessories",
    tag: "PIXEL Verified",
    description: ["Camera Bags", "Grips & Rigs", "Professional Straps"],
    avatar: "/assets/images/savings/tom-smith.webp",
  },
  {
    name: "Emily Wong",
    identity: "Optics Enthusiast",
    tag: "PIXEL Verified",
    description: [
      "Unique Lenses",
      "ND & UV Filters",
      "Special Effect Filters",
      "Lens Accessories",
    ],
    avatar: "/assets/images/savings/emily-wong.webp",
  },
  {
    name: "George Duke",
    identity: "Vintage Collector",
    tag: "PIXEL Verified",
    description: ["60s and 70s Film Cameras", "Old Prints", "Disposables"],
    avatar: "/assets/images/savings/george-duke.webp",
  },
];
