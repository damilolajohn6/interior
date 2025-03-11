import React from "react";
import RoomCollage from "./PhotoCollage";

const AboutHero = () => {
  const roomImages = [
    "/assets/ab1.jpg",
    "/assets/ab2.jpg",
    "/assets/ab3.jpg",
  ];
 
  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center pb-0 md:pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#A28E66] italic font-bold max-w-4xl leading-tight">
          Redefining Spaces, Enriching Lifestyles Interiors Tailored to Reflect
          You.
        </h1>
      </div>

      {/* Room Collage */}
      <RoomCollage images={roomImages} centerImageIndex={1} />

      {/* Decorative Text - Aligned to the Right */}
      <div className="flex justify-end mt-1 md:mt-14">
        <div className="max-w-3xl text-right text-[#746B5F] text-sm md:text-base leading-relaxed relative">
          {/* Star Divider */}
          <div className="flex justify-center items-center mb-3">
            <div className="w-1/4 border-t border-[#746B5F]"></div>
            <span className="mx-2 text-lg text-[#746B5F]">★</span>
            <div className="w-1/4 border-t border-[#746B5F]"></div>
          </div>

          {/* Text Content */}
          <p className="">
            Crafting luxurious, personalized interiors that turn houses into
            timeless sanctuaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
