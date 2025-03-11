import Image from "next/image";
import React from "react";

interface RoomCollageProps {
  images: string[];
  centerImageIndex: number;
}

const RoomCollage: React.FC<RoomCollageProps> = ({
  images,
  centerImageIndex,
}) => {
  const centerImage = images[centerImageIndex];
  const leftImage =
    images[(centerImageIndex - 1 + images.length) % images.length];
  const rightImage = images[(centerImageIndex + 1) % images.length];

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mt-8 items-center">
      {/* Left Image */}
      <div className="relative flex-1 md:w-1/3 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white"></div>
        <Image
          src={leftImage}
          alt="Left Room View"
          width={300}
          height={400}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Center Image - Larger & Offset for Aesthetic */}
      <div className="relative flex-[1.5] md:w-1/2 overflow-hidden md:-mt-8 lg:-mt-16">
        <Image
          src={centerImage}
          alt="Center Room View"
          width={500}
          height={400}
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Image */}
      <div className="relative flex-1 md:w-1/3 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        <Image
          src={rightImage}
          alt="Right Room View"
          width={300}
          height={400}
          className="w-full h-auto object-cover rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default RoomCollage;
