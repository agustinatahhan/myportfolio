import About from "./about/page";
import Home from "./home/page";
import Projects from "./projects/page";


export default function HomePage() {

  return (
    <>
          <span id="top" aria-hidden className="block h-0 w-0" />

      <Home />
      <About />
      <Projects />
    </>
  );
}
