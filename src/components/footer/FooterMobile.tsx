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

const FooterMobile = () => {
  return (
    <footer className="w-full bg-dark text-light md:hidden">
      <div className="flex flex-col gap-6 p-6">
        <Logo className="mx-auto h-auto w-24" />
        <p className="text-xl font-medium">Come visit us!</p>
        <div className="flex justify-between">
          <div className="flex items-start gap-2">
            <MapIcon className="text-brand" />
            <p className="opacity-50">71 Park Lane, London SW43 2LW</p>
          </div>
          <div className="flex items-start gap-2">
            <WatchIcon className="text-brand" />
            <p className="opacity-50">Sunday to Friday 8:00 - 21:00</p>
          </div>
        </div>
        <div className="relative aspect-[4/1]">
          <Image
            className="absolute h-full w-full object-cover"
            src="/assets/images/footer/map.webp"
            alt="location"
            width={512}
            height={512}
          />
        </div>
        <div className="flex justify-between">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-4">
              <p className="text-xl font-medium">{link.name}</p>
              <div className="flex flex-col">
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
        <p className="text-xl font-medium">Contact Information</p>
        <div className="flex w-fit flex-col gap-2 justify-self-end">
          <div className="flex items-center gap-4">
            <PhoneIcon className="text-brand" />
            <p className="opacity-50">+972 123-456-78</p>
          </div>
          <div className="flex items-center gap-4">
            <EmailIcon className="text-brand" />
            <p className="opacity-50">name@camera.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center text-xl font-medium">
            Join our newsletter!
          </p>
          <div className="bg-light px-4 py-2">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-sm font-light text-dark outline-none placeholder:text-sm placeholder:text-dark placeholder:opacity-60"
            />
          </div>
          <div className="bg-light px-4 py-2">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent text-sm font-light text-dark outline-none placeholder:text-sm placeholder:text-dark placeholder:opacity-60"
            />
          </div>
        </div>
        <button className="w-full border-[1px] border-brand bg-brand p-2 font-light uppercase text-light transition-all duration-300 hover:bg-red-700 md:w-36 md:text-xl md:font-medium">
          Sign Up
        </button>
        <div className="mx-auto flex items-center gap-4">
          <InstagramIcon size={28} className="bg-light p-1 text-dark" />
          <FacebookIcon
            size={28}
            className="bg-light fill-dark p-1 text-dark"
          />
          <TwitterIcon size={28} className="bg-light fill-dark p-1 text-dark" />
        </div>
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-between gap-4">
              {extraFooterLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-light opacity-40"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex w-fit items-center gap-4">
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
            <p className="text-xs font-light opacity-40">
              © 2023 PIXEL. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
