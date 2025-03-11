import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <section className="bg-[#C4B299] w-full ">
      {/* <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
      </div> */}
      <div className="container px-6 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2> */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/homeab.jpg"
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-[#3D342A]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            At Opulent Spaces, we excel in designing refined, tailored interiors
            that redefine spaces and enrich lifestyles. Our goal is
            straightforward: to transform residences into sanctuaries that
            embody your individuality, taste, and dreams.
          </p>
          <p className="text-lg mb-6">
            With extensive experience in interior design and a dedication to
            creating bespoke solutions, we serve homeowners, newlyweds, and
            discerning individuals who value elegance, practicality, and
            understated luxury. Every project we embark on is a partnership—a
            shared journey to bring your vision to reality while surpassing
            expectations.
          </p>
          <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li>
              <span className="font-bold">Tailored Designs:</span> We blend
              creativity and functionality to design spaces that are as
              practical as they are stunning.
            </li>
            <li>
              <span className="font-bold">Attention to Detail:</span> From the
              perfect color palette to bespoke furniture, every detail is
              thoughtfully curated.
            </li>
            <li>
              <span className="font-bold">Client-Centric Approach:</span> Your
              needs, preferences, and lifestyle are at the center of every
              decision we make.
            </li>
            <li>
              <span className="font-bold">Experience and Expertise:</span> Our
              team has a proven track record of delivering high-end, luxurious
              interiors.
            </li>
          </ul>
          <Button className="mt-6 px-6 py-3 bg-white hover:bg-amber-900 text-[#3D342A] font-semibold rounded-md shadow-md hover:bg-opacity-80">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
