export type Product = {
  name: string;
  brand: string;
  originalPrice: string;
  discountedPrice: string;
  rating: number;
  saleDuration: string;
  description: string[];
  image: string;
};

export type SpecialProduct = {
  name: string;
  brand: string;
  priceOne: number;
  priceTwo: number;
  rating: number;
  saleDuration: string;
  image: string;
};

export const specialProduct: SpecialProduct = {
  name: "2 Lens Kit",
  brand: "Canon",
  priceOne: 1799,
  priceTwo: 3000,
  rating: 4.8,
  saleDuration: "17h 31m",
  image: "/assets/images/products/lens.webp",
};

export const products: Product[] = [
  {
    name: "EOS R6",
    brand: "Canon",
    originalPrice: "$3,899",
    discountedPrice: "$3,699",
    rating: 4.6,
    saleDuration: "2h 27m",
    description: [
      "45MP Full-Frame CMOS Sensor",
      "Sensor-Shift Image Stabilization",
      "DIGIC X Image Processor",
      "8K30 Raw Video",
    ],
    image: "/assets/images/products/dslr.webp",
  },
  {
    name: "Mavic 3",
    brand: "DJI",
    originalPrice: "$1,749",
    discountedPrice: "$1,599",
    rating: 4.7,
    saleDuration: "21h 3m",
    description: [
      '20MP 4/3" CMOS Hasselblad',
      "4K Slow Motion at 120 fps",
      "f/2.8 to f/11 Adjustable Aperture",
      "DJI RC Remote Included",
    ],
    image: "/assets/images/products/drone.webp",
  },
  {
    name: "Carbon Fiber Tripod",
    brand: "Benro",
    originalPrice: "$380",
    discountedPrice: "$319",
    rating: 4.2,
    saleDuration: "3h 45m",
    description: [
      "Load Capacity: 26.4 lb",
      'Max Height: 64.2"',
      'Min Height: 18.1"',
      'Folded Length: 16.1"',
    ],
    image: "/assets/images/products/tripod.webp",
  },
  {
    name: "HERO 11 Black Mini",
    brand: "GoPro",
    originalPrice: "$349",
    discountedPrice: "$289",
    rating: 4.4,
    saleDuration: "7h 38m",
    description: [
      "24.7MP Improved Performance",
      "Smooth 5.0 Image Stabilization",
      "8x Slow-Motion Video",
      "5.3K60/2.7K240 Video",
    ],
    image: "/assets/images/products/action-camera.webp",
  },
];
