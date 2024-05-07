import React from "react";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row px-5 md:px-20 gap-10 items-center mb-40">
      <div className="flex flex-col items-start">
        <h3 className="text-[28px] font-medium leading-p[150%] mb-3">
          The unity of innovation and execution
        </h3>
        <p className="text-[#333]">
          At Unitech, we believe in the power of unity – where groundbreaking
          ideas and meticulous execution come together to propel your vision
          forward.
        </p>

        <div className="mt-8 px-5">
          <div>
            <h4 className="text-base">1. Innovation Redefined</h4>
            <p className="text-[#333]">
              Our platform serves as a breeding ground for pioneering solutions,
              keeping you at the forefront of progress.
            </p>
            <hr className="my-8" />
          </div>
          <div>
            <h4 className="text-base">2. Precision in Execution</h4>
            <p className="text-[#333]">
              Every feature is meticulously crafted to ensure seamless
              integration and impactful outcomes.
            </p>
            <hr className="mt-8" />
          </div>
        </div>

        <button className="text-sm border border-black hover:border-[#b9e97d] hover:bg-[#b9e97d] transition ease-linear duration-300 py-[14px] px-[22px] font-medium rounded mt-10">
          Explore More
        </button>
      </div>
      <div className="max-w-2xl">
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660290b4a19f921db8d839c4_execution-p-800.jpg"
          alt=""
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Section2;
