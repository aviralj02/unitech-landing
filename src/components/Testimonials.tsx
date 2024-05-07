import { reviews } from "@/lib/constants";
import React from "react";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="flex flex-col items-center px-5 md:px-20 mb-40">
      <span className="text-sm self-start">Testimonials</span>
      <div className="flex justify-between w-full">
        <h2 className="text-4xl font-medium leading-[120%] self-start">
          Customer Reviews
        </h2>

        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center p-2 hover:bg-[#b9e97d] rounded-full transition border duration-300 h-fit">
            <img
              src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc13e6bd9eb26fb954bc01_arrow-left.svg"
              alt="left-arrow"
            />
          </button>
          <button className="flex items-center justify-center p-2 hover:bg-[#b9e97d] rounded-full transition border duration-300 h-fit">
            <img
              src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbd7264d431200f9ecde39_ic-btn-arrow.svg"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-10 mt-10 items-center">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col w-full max-w-xl gap-8 border rounded-lg p-10"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="rounded-full w-16"
                />
                <div className="flex flex-col">
                  <h4 className="text-base">{review.name}</h4>
                  <p className="text-sm">{review.company}</p>
                </div>
              </div>

              <img src={review.logo} alt="" className="grayscale" />
            </div>

            <div className="text-[#333] text-base">{review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
