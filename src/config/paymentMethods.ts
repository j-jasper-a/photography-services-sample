export type PaymentMethod = {
  name: string;
  image: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    name: "American Express",
    image: "/assets/images/footer/american-express.png",
  },
  {
    name: "MasterCard",
    image: "/assets/images/footer/mastercard.png",
  },
  {
    name: "PayPal",
    image: "/assets/images/footer/paypal.png",
  },
  {
    name: "Visa",
    image: "/assets/images/footer/visa.png",
  },
  {
    name: "Apple Pay",
    image: "/assets/images/footer/apple-pay.png",
  },
];
