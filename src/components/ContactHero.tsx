"use client";
import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/cont.jpg"
          alt="Contact"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className="rounded-lg"
        />

        {/* Overlay for Better Readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      </div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#000000]">
          We’d Love to Hear From You!
        </h1>
      </div>
    </div>
  );
}
