import React from "react";
import { socials, footerInfo } from "@/lib/constants";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#222b27] w-full">
      <div className="flex flex-col lg:flex-row pt-20 pb-24 px-5 justify-center gap-10 lg:gap-80">
        <div className="flex flex-col max-w-56 w-full gap-4">
          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fa7505a4cb99600cee404e_w-unitech.svg"
            alt="logo-footer"
            className="w-36"
          />
          <span className="text-[#627b70] text-base">
            4517 Washington Ave. Manchester, Kentucky 39495
          </span>

          <span className="text-[#627b70] text-base mt-2">
            info@example.com
          </span>

          <div className="flex gap-5">
            {socials.map((item) => (
              <div className={item.className} key={item.name}>
                <img src={item.logo} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4">
          {footerInfo.map((item) => (
            <div className="flex flex-col gap-4" key={item.header}>
              <h5 className="text-white text-sm">{item.header}</h5>
              <ul className="mb-6">
                {item.content.map((point, i) => (
                  <li
                    key={i}
                    className="mb-3 text-[#627b70] text-sm hover:text-[#b9e97d] transition duration-300 ease-in-out cursor-pointer"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-[#627b70]" />
      <div className="text-[#627b70] text-sm flex flex-col md:flex-row justify-between py-4 px-20">
        <span>© 2024 unitech. All Rights Reserved.</span>
        <span>Designed by Nixar. Powered by Webflow.</span>
      </div>
    </div>
  );
};

export default Footer;
