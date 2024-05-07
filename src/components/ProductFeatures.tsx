import React from "react";

type Props = {};

type Feature = {
  title: string;
  content: string;
};

const ProductFeatures = (props: Props) => {
  const features1: Feature[] = [
    {
      title: "Analyze your Data",
      content:
        "Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.",
    },
    {
      title: "Collaborate Securely",
      content:
        "Our platform provides a secure environment for seamless teamwork, ensuring information at every step.",
    },
    {
      title: "Insight Reach",
      content:
        "Harness the power of data-driven insights to reach your target audience effectively, with advanced analytics.",
    },
  ];

  const features2: Feature[] = [
    {
      title: "Easy and Intuitive",
      content:
        "Navigating through our platform is a breeze, thanks to its user-friendly design and straightforward features.",
    },
    {
      title: "Power of Flow",
      content:
        "Our streamlined platform empowers you to automate tasks, and achieve more with less effort.",
    },
    {
      title: "Smart Sync",
      content:
        "With Smart Sync, experience effortless collaboration and productivity, no matter where you are.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5 md:px-20 mb-40">
      <span className="text-sm self-start">Features</span>
      <h2 className="text-5xl font-medium leading-[120%] self-start mb-[20px]">
        Powerful Features
      </h2>

      <div className="grid grid-cols-1 gap-8 feature-grid">
        <div className="flex flex-col md:flex-row lg:flex-col gap-8">
          {features1.map((item: Feature) => (
            <FeatureCard
              title={item.title}
              content={item.content}
              key={item.title}
            />
          ))}
        </div>

        <div className="bg-[#b9e97d] rounded-lg w-full flex flex-col justify-end items-center">
          <img
            src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602a15e0acd4b09478fd837_iPhone%2015%20Pro%20(1).svg"
            alt="mobile"
            className="object-cover pt-10"
          />
        </div>

        <div className="flex flex-col md:flex-row lg:flex-col gap-8">
          {features2.map((item: Feature) => (
            <FeatureCard
              title={item.title}
              content={item.content}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col p-8 gap-3 bg-[#f7f8f5] rounded-lg">
      <h4 className="font-medium text-[22px]">{title}</h4>
      <p className="text-[#333] text-base">{content}</p>
    </div>
  );
};

export default ProductFeatures;
