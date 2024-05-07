import React from "react";
import { trustedComapanies } from "@/lib/constants";

type Props = {};

const Trusted = (props: Props) => {
  return (
    <div className="flex flex-col mb-36 overflow-x-hidden">
      <h2 className="text-center text-base mb-8">
        Trusted by Visionaries, Embraced by Leading Companies Worldwide
      </h2>

      <div className="flex w-full wrapper gap-10 grayscale">
        {trustedComapanies.map((item) => (
          <div key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="object-cover max-w-80 px-5 h-10"
            />
          </div>
        ))}
        {trustedComapanies.map((item) => (
          <div key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="object-cover max-w-80 px-5 h-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;
