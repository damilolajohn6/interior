"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HomePortfolio from "@/components/Portfolio";
import Stats from "@/components/stats";
import TestimonialCarousel from "@/components/Testimonial";
import QuoteForm from "@/components/QuoteForm";

const categories = [
  "Houses",
  "Offices",
  "Residential",
  "Color Crafting",
  "Specialty Designs",
];

const portfolioItems = [
  {
    id: 1,
    category: "Houses",
    src: "/assets/po1.jpg",
    title: "Lounge",
  },
  {
    id: 2,
    category: "Residential",
    src: "/assets/po2.jpg",
    title: "Bedroom",
  },
  {
    id: 3,
    category: "Apartment",
    src: "/assets/po3.jpg",
    title: "Modern Minimalist Apartment",
  },
  {
    id: 4,
    category: "Offices",
    src: "/assets/homeab.jpg",
    title: "Offices",
  },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="container mx-auto py-10 px-10">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <div className="flex gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                className={`text-sm font-medium ${
                  selectedCategory === category ? "underline" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-6">
          {displayedItems.map((item) => (
            <div key={item.id}>
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="mt-2 text-center font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 py-6">
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              className={`border px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-gray-800 text-white"
                  : "bg-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        <div className="flex justify-end">
          <Button className="border px-4 py-2 rounded">
            Schedule a Consultation
          </Button>
        </div>
      </div>
      <HomePortfolio />
      <QuoteForm />
      <Stats />
      <TestimonialCarousel />
    </div>
  );
};

export default GalleryPage;
