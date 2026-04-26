import { HeroSection } from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

function Page() {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutMe id="aboutme"></AboutMe>
      <Projects id="projects"></Projects>
      <Skills id="skills"></Skills>
      <Footer id="footer"></Footer>

    </>
  );
}

export default Page;
