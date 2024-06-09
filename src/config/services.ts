export type Service = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export const services: Service[] = [
  {
    name: "Image Editing",
    description:
      "Learn the basics of Adobe Lightroom and elevate your photos to a new standard.",
    href: "/",
    image: "/assets/images/services/image-editing.webp",
  },
  {
    name: "Composition",
    description:
      "Master the art of creating visually appealing photography that tells a story, with practical tips and examples.",
    href: "/",
    image: "/assets/images/services/composition.webp",
  },
];
