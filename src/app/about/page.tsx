import AboutHero from '@/components/AboutHero'
import CompletedProjects from '@/components/CompletedProject'
import AboutUs from '@/components/HomeAbout'
import HomePortfolio from '@/components/Portfolio'
import TestimonialCarousel from '@/components/Testimonial'


const AboutPage = () => {
  return (
    <div className='py-10 mx-auto'>
      <AboutHero />
      <AboutUs />
      <HomePortfolio />
      <CompletedProjects />
      <TestimonialCarousel />
    </div>
  )
}

export default AboutPage