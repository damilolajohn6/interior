import AboutUs from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import HomePortfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/stats";
import TestimonialCarousel from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="bg-[#F4EFE6]">
      <HomeHero />
      <AboutUs />

      

      <Process />
      <HomePortfolio />
      <Stats />

      <TestimonialCarousel />
    </div>
  );
}
