"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 50,
    suffix: "+",
    text: "Clients",
  },
  {
    num: 30,
    suffix: "%",
    text: "Completed Projects",
  },
  {
    num: 90,
    suffix: "%",
    text: "Quality Products",
  },
];

const Stats = () => {
  return (
    <section className="py-8 bg-white text-[#88765c]">
      <div className="container border md:border border-gray-900 mx-auto px-4 py-7">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {" "}
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <span className="text-4xl xl:text-6xl font-extrabold">
                {item.suffix}
              </span>
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-[#3D342A] `}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
