import Image from "next/image";
import Logo from "../common/Logo";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Map as MapIcon,
  Watch as WatchIcon,
  Phone as PhoneIcon,
  Mail as EmailIcon,
} from "lucide-react";
import { footerLinks } from "@/config/footerLinks";
import Link from "next/link";
import { extraFooterLinks } from "@/config/extraFooterLinks";
import { paymentMethods } from "@/config/paymentMethods";

const Footer = () => {
  return (
    <footer className="hidden w-full bg-dark text-light md:block">
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-8">
        <div className="grid w-full grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-full w-auto">
              <Image
                className="absolute h-full w-full object-cover"
                src="/assets/images/footer/map.webp"
                alt="location"
                width={512}
                height={512}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">Come visit us!</p>
              <div className="flex items-center gap-4">
                <MapIcon className="text-brand" />
                <p className="opacity-50">71 Park Lane, London SW43 2LW</p>
              </div>
              <div className="flex items-center gap-4">
                <WatchIcon className="text-brand" />
                <p className="opacity-50">Sunday to Friday 8:00 - 21:00</p>
              </div>
            </div>
          </div>
          <Logo className="h-auto w-24 self-center justify-self-center md:order-none" />
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">
              Join our newsletter for exclusive offers!
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-light px-4 py-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent text-sm font-light text-dark outline-none placeholder:text-sm placeholder:text-dark placeholder:opacity-60"
                />
              </div>
              <div className="overflow-hidden bg-light px-4 py-2">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-transparent text-sm font-light text-dark outline-none placeholder:text-sm placeholder:text-dark placeholder:opacity-60"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <InstagramIcon size={28} className="bg-brand p-1 text-dark" />
              <FacebookIcon
                size={28}
                className="bg-brand fill-dark p-1 text-dark"
              />
              <TwitterIcon
                size={28}
                className="bg-brand fill-dark p-1 text-dark"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-1 w-full max-w-[1488px] bg-light/30" />
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-3 px-6 py-8">
        <div className="grid w-full grid-cols-3 gap-20">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <p className="text-xl font-medium">{link.name}</p>
              <div className="grid grid-flow-col grid-rows-3 gap-2">
                {link.links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="opacity-50 hover:opacity-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-fit items-center gap-2 justify-self-center">
          <button className="w-20 border-[1px] border-brand bg-brand py-2 text-xl font-medium text-dark">
            USD $
          </button>
          <button className="w-20 border-[1px] border-light/50 py-2 text-xl font-medium text-dark text-light/50">
            EUR €
          </button>
        </div>
        <div className="flex w-fit flex-col gap-4 justify-self-end">
          <p className="text-xl font-medium">Contact Information</p>
          <div className="flex items-center gap-4">
            <PhoneIcon className="text-brand" />
            <p className="opacity-50">+972 123-456-78</p>
          </div>
          <div className="flex items-center gap-4">
            <EmailIcon className="text-brand" />
            <p className="opacity-50">name@camera.com</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-6 py-8">
        <div className="grid grid-cols-3 items-center">
          <p className="text-sm font-light opacity-40">
            © 2023 PIXEL. <br /> All Rights Reserved
          </p>
          <div className="flex w-fit items-center gap-2 justify-self-center">
            {paymentMethods.map((item) => (
              <Image
                key={item.name}
                className="h-auto w-9"
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
              />
            ))}
          </div>
          <div className="flex w-fit gap-4 justify-self-end">
            {extraFooterLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light opacity-40"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
