"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Hamburger from "../../public/hamburger.png";
import Cross from "../../public/cross.png";
import Image from "next/image";

type Props = {};

type NavLink = {
  title: string;
  to: string;
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      (document.querySelector(".mob-menu")! as HTMLDivElement).style.cssText =
        "transform: translateY(0%);";
    } else {
      (document.querySelector(".mob-menu")! as HTMLDivElement).style.cssText =
        "transform: translateY(-140%);";
    }
  }, [isOpen]);

  const navLinks: NavLink[] = [
    {
      title: "About us",
      to: "/",
    },
    {
      title: "Features",
      to: "/",
    },
    {
      title: "Blogs",
      to: "/",
    },
    {
      title: "Careers",
      to: "/",
    },
    {
      title: "Pricing",
      to: "/",
    },
    {
      title: "Contact",
      to: "/",
    },
  ];
  return (
    <div className="w-full bg-[#f2f4ef]">
      <div className="flex justify-between items-center text-sm font-medium py-4 px-5 max-w-[1360px] mx-auto bg-[#f2f4ef]">
        <a href="/">
          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65f975acedcccd076f5248e7_Unitech.svg"
            loading="lazy"
            alt="Unitech"
          />
        </a>

        <div className="hidden lg:flex gap-10 ml-20">
          {navLinks.map((link: NavLink) => (
            <Link href={link.to} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="cursor-pointer">Cart (0)</div>
          <div className="hidden lg:flex group bg-[#b9e97d] py-3 px-5 items-center gap-2 rounded-[4px] cursor-pointer hover:bg-[#222b27] hover:text-white transition ease-in-out duration-300">
            Get Started{" "}
            <img
              src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65f97a784f551949d13887e6_ic-arrow.svg"
              loading="lazy"
              width="Auto"
              alt="Arrow"
              className="group-hover:invert duration-300 transition ease-in-out"
            />
          </div>

          {/* MOBILE MENU */}
          <div
            className="flex lg:hidden"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {isOpen ? (
              <Image src={Cross} alt="menu" width={14} />
            ) : (
              <Image src={Hamburger} alt="menu" width={24} />
            )}
          </div>
        </div>
      </div>

      <div className="absolute mob-menu mt-14 top-0 bg-white flex lg:hidden flex-col items-center w-full p-5 font-medium gap-4 z-10">
        {navLinks.map((link: NavLink) => (
          <Link href={link.to} key={link.title}>
            {link.title}
          </Link>
        ))}
        <div className="flex w-full justify-center group bg-[#b9e97d] py-3 px-5 items-center gap-2 rounded-[4px] cursor-pointer hover:bg-[#222b27] hover:text-white transition ease-in-out duration-300">
          Get Started{" "}
          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65f97a784f551949d13887e6_ic-arrow.svg"
            loading="lazy"
            width="Auto"
            alt="Arrow"
            className="group-hover:invert duration-300 transition ease-in-out"
          />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
