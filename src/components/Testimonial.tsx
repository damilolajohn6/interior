"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Interior Design Testimonials
const testimonials = [
  {
    name: "Sarah Williams",
    role: "Homeowner",
    quote:
      "Our home has been completely transformed! The attention to detail and creativity in the design made our space feel luxurious and cozy at the same time.",
    avatar: "/assets/avatar.jpg",
  },
  {
    name: "James Anderson",
    role: "Luxury Apartment Developer",
    quote:
      "An incredible team with a true passion for interior aesthetics. Their designs added value to our properties and impressed our buyers instantly.",
    avatar: "/assets/avatar.jpg",
  },
  {
    name: "Emily Carter",
    role: "Restaurant Owner",
    quote:
      "The ambiance they created for my restaurant is simply stunning. Customers constantly compliment the interior, and it has enhanced our brand’s identity.",
    avatar: "/assets/avatar.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Corporate Office Manager",
    quote:
      "Our office was dull and uninspiring, but now it feels fresh, modern, and inviting. Employee productivity has noticeably increased!",
    avatar: "/assets/avatar.jpg",
  },
  {
    name: "Jessica Brown",
    role: "Hotel Manager",
    quote:
      "The luxurious yet functional designs have elevated the guest experience in our hotel. Every space feels warm and inviting.",
    avatar: "/assets/avatar.jpg",
  },
];

const TestimonialCarousel: React.FC = () => {
  return (
    <section className="py-10 w-full bg-white">
      <div className="container mx-auto px-4">
        <h2 className=" text-3xl font-bold text-[#C4B299] mb-6">
          What Our Clients Are Saying
        </h2>

        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-3">
                  <Card className=" shadow-lg rounded-lg">
                    <CardContent className="p-6 text-center flex flex-col items-center">
                      <div className="w-40 h-40 mb-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={1400}
                          height={1400}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <p className="text-lg py-12 italic text-gray-700 mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
