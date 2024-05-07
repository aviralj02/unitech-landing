import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col items-center md:pt-20 pt-10 mb-10 bg-[#f2f4ef]">
      <h1 className="font-semibold text-3xl md:text-[55px] leading-[120%] text-center mb-[15px]">
        Explore the unitech experience
      </h1>
      <p className="text-base max-w-[45%] text-center">
        We invite you to explore a realm where innovation is second nature, and
        intuitive solutions pave the way for transformative success.
      </p>

      <div className="mt-10 mb-5 sm:flex hidden gap-2">
        <input
          type="email"
          placeholder="Email Address"
          className="hero-input outline-none rounded-lg text-xs w-80"
        />
        <div className="flex bg-[#b9e97d] py-3 px-6 text-sm items-center rounded-[4px] cursor-pointer hover:bg-[#222b27] hover:text-white transition ease-in-out duration-300">
          Request Demo
        </div>
      </div>

      <p className="text-sm leading-[150%] sm:block hidden">
        Personalized solutions for your specific requirements.
      </p>

      <div className="mt-20 relative flex items-center justify-center w-full">
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6607a563094a6c4d5d6f311a_hero%20image.svg"
          loading="eager"
          alt="Hero Main Image"
          className="px-6"
        />
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c0e54a024e711e8671c0_hero-1.svg"
          loading="eager"
          alt="Hero Graph"
          className="hidden lg:block absolute bottom-0 left-40 z-1 rounded-lg"
        />
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c1b91c6484534258e8da_hero-2.svg"
          loading="eager"
          alt="Hero Graph"
          className="hidden lg:block absolute -top-8 right-28 z-1 rounded-lg"
        />
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c16f5c310ea51dbbfe83_hero-3.svg"
          loading="eager"
          alt="Hero Graph"
          className="hidden lg:block absolute bottom-0 right-44 z-1 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
