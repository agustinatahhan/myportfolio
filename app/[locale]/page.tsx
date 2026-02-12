import Contact from "./contact/page";
import ProjectAppSection from "./appProjects/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function HomePage() {
  return (
    <>
      <span id="top" aria-hidden className="block h-0 w-0" />
      <Home />
      <Skills />
      <Projects />
      <ProjectAppSection />
      <Contact />
    </>
  );
}
