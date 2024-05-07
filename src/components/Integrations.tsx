import React from "react";

type Props = {};

const Integrations = (props: Props) => {
  const integrations = [
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029886b68690c68a3ff49a_ic-Layers.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885c99f7af534956e42_ic-Boltshift.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885cb785f539dc1446f_ic-connectify.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298856d31544936b7277b_ic-infinita.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298850253a5007ec435cb_ic-sybcflow.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885d9caab4371d48eef_ic-datafuse.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298851dcae241671538b7_ic-linkworx.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885469cbfb12bca9a8d_ic-FocalPoint.svg",
    "https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298862cf92a81a16afbc4_ic-aqua.svg",
  ];

  return (
    <div className="integrations pt-[170px] pb-[155px] flex flex-col items-center text-center px-4 gap-24 mb-40">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-white text-3xl">
          Integrating Your Workflow with Unitech&apos;s
        </h3>
        <p className="text-white text-base max-w-[65%]">
          In the dynamic landscape of business operations, the key to unlocking
          optimal efficiency lies in the seamless integration of your workflow.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <div className="flex items-center justify-center p-3 bg-[#b9e97d] rounded-full">
            <img
              src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbd7264d431200f9ecde39_ic-btn-arrow.svg"
              alt="right-arrow"
            />
          </div>
          <span className="text-white text-sm">Explore Integrations</span>
        </div>
      </div>

      <div className="flex gap-8 sm:gap-14 flex-wrap justify-center">
        {integrations.map((item, i) => (
          <div key={i}>
            <img src={item} alt={`int${i}`} className="w-12 sm:w-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
