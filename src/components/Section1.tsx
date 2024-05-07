import React from "react";

type Props = {};

const Section1 = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row px-5 md:px-20 gap-10 items-center mb-40">
      <div className="max-w-2xl">
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66028d748dc21e687b1b2e48_evolution.jpg"
          alt=""
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-[28px] font-medium leading-p[150%] mb-3">
          Initiating your business evolution with unitech
        </h3>
        <p className="text-[#333]">
          It&apos;s the catalyst for the evolution of your business. Seamlessly
          integrate groundbreaking solutions that lay the foundation for your
          upward trajectory.
        </p>

        <ul className="mt-8 text-[#333] flex flex-col gap-4">
          <li className="pointers">Smart Solutions for Intelligent Growth</li>
          <li className="pointers">Innovate for Industry Leadership</li>
          <li className="pointers">Intuitive Design, Effortless Progress</li>
          <li className="pointers">Scalability at Your Fingertips</li>
        </ul>

        <button className="text-sm border border-black hover:border-[#b9e97d] hover:bg-[#b9e97d] transition ease-linear duration-300 py-[14px] px-[22px] font-medium rounded mt-10">
          Discover Now
        </button>
      </div>
    </div>
  );
};

export default Section1;
