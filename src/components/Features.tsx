import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-5 md:px-20 mb-28">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1st Card */}
        <div className="bg-[#f6ebd3] flex flex-col pt-10 pl-10 rounded-lg f-card-1">
          <div className="flex items-center gap-3 ">
            <div className="bg-white rounded-full flex items-center p-2">
              <img
                src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693834e7943c65361375_ic-automation.svg"
                alt="l1"
              />
            </div>
            <h3 className="text-[22px] font-medium">Intelligent Automation</h3>
          </div>
          <p className="text-base max-w-[95%] mt-2">
            Harness the power of smart automation to streamline repetitive tasks
            and boost operational efficiency.
          </p>

          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04fcc998910faad931_gp-automation.svg"
            alt="f1"
            className="rounded-lg object-cover object-top w-full mt-10 lg:mt-20 h-[310px] lg:h-auto"
          />
        </div>

        {/* 2nd Card */}
        <div className="bg-[#e1e3d4] flex flex-col pt-10 pl-10 rounded-lg">
          <div className="flex items-center gap-3 ">
            <div className="bg-white rounded-full flex items-center p-2">
              <img
                src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693823f3e07c502c2434_ic-architecture.svg"
                alt="l2"
              />
            </div>
            <h3 className="text-[22px] font-medium">Scalable Architecture</h3>
          </div>
          <p className="text-base max-w-[95%] mt-2">
            Seamlessly adapt to changing demands, ensuring sustained success as
            your business evolves.
          </p>

          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04469cbfb12ba29854_gp-architecture.svg"
            alt="f2"
            className="rounded-lg object-cover object-top w-full mt-10 h-[310px] lg:h-auto"
          />
        </div>

        {/* 3rd Card */}
        <div className="bg-[#d8c4d4] flex flex-col pt-10 pl-10 rounded-lg">
          <div className="flex items-center gap-3 ">
            <div className="bg-white rounded-full flex items-center p-2">
              <img
                src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693829abfc8a69a9a096_ic-edge.svg"
                alt="l3"
              />
            </div>
            <h3 className="text-[22px] font-medium">Cutting-Edge Innovation</h3>
          </div>
          <p className="text-base max-w-[95%] mt-2">
            Access the latest technologies, continuous innovation and features
            that empower you to lead in a dynamic market.
          </p>

          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04353929331e59526f_gp-innovation.svg"
            alt="f3"
            className="rounded-lg object-cover object-top w-full mt-10 h-[310px] lg:h-auto"
          />
        </div>

        {/* 4th Card */}
        <div className="bg-[#b8ddec] flex flex-col lg:flex-row lg:items-center pt-10 lg:pt-0 pl-10 rounded-lg f-card-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 ">
              <div className="bg-white rounded-full flex items-center p-2">
                <img
                  src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693986d258c6d318a6f8_ic-interface.svg"
                  alt="l4"
                />
              </div>
              <h3 className="text-[22px] font-medium">
                Intuitive User Interface
              </h3>
            </div>
            <p className="text-base max-w-[95%] mt-2">
              Navigate effortlessly through Unitech, focusing on your goals
              without unnecessary complexity.
            </p>
          </div>

          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04233cd4dbbcac49d3_gp-interface.svg"
            alt="f4"
            className="rounded-lg object-cover object-top w-full mt-10 lg:ml-10 h-[310px] lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
