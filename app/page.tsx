import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
