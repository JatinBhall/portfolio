import AboutSection from "@/components/home/aboutSection";
import ContactSection from "@/components/home/contactSection";
import HeroSection from "@/components/home/heroSection";
import ProjectsSection from "@/components/home/projectsSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[200px] pb-[200px]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
