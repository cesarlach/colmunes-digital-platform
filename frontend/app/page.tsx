import Header from "@/components/layout/Header";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/home/AboutSection";
import Indicators from "@/components/home/Indicators";
import ImpactStats from "@/components/home/ImpactStats";
import Projects from "@/components/home/Projects";
import GallerySection from "@/components/gallery/GallerySection";
import ProgramsSection from "@/components/programs/ProgramsSection";
import HouseModelSection from "@/components/houses/HouseModelSection";
import FeaturedProject from "@/components/projects/FeaturedProject";
import MissionBanner from "@/components/home/MissionBanner";
import Impact from "@/components/impact/Impact";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Indicators />
      <AboutSection />
      <ProgramsSection />
      <FeaturedProject />
      <MissionBanner />
      <HouseModelSection />
      <Projects />
      <GallerySection />
      <Impact />
      <ImpactStats />
      <Footer />
      <Testimonials />
    </>
  );
}