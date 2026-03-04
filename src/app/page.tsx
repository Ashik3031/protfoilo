import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { LatestWorkSection } from "@/components/LatestWorkSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <IntroSection />
      <LatestWorkSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
