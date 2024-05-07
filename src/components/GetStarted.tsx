import React from "react";

type Props = {};

const GetStarted = (props: Props) => {
  const offers = [
    "Tailored Solutions",
    "User-Friendly Interface",
    "Integration Capabilities",
    "Access all features",
    "Support and Training",
    "Innovative Features",
    "Data Security",
  ];

  return (
    <div className="flex flex-col bg-[#f2f4ef] items-center lg:py-20 py-8 lg:mx-32 mx-8 gap-24 rounded-lg mb-40 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center px-4 lg:gap-0 gap-6">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl lg:text-5xl font-medium">
            Start your transformation today!
          </h3>
          <p className="text-sm max-w-[75%]">
            Are you ready to revolutionize the way you do business? Unitech is
            your catalyst for success, combining innovation, seamless
            integration, and tailored solutions.
          </p>
        </div>
        <div className="flex group whitespace-nowrap bg-[#b9e97d] text-sm py-3 px-5 items-center gap-2 rounded-[4px] cursor-pointer hover:bg-white hover:border border-black transition ease-linear duration-400">
          Get Started
        </div>
      </div>

      <div className="flex w-full wrapper gap-10 mx-32">
        {offers.map((item) => (
          <div
            className="flex items-center text-sm whitespace-nowrap gap-2 bg-[#e9ece4] rounded-3xl px-4 pr-10 py-2 box-border"
            key={item}
          >
            <img
              src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg"
              alt={item}
            />
            <span>{item}</span>
          </div>
        ))}
        {offers.map((item) => (
          <div
            className="flex items-center text-sm whitespace-nowrap gap-2 bg-[#e9ece4] rounded-3xl px-4 pr-10 py-2 box-border"
            key={item}
          >
            <img
              src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg"
              alt={item}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
