import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import { projects } from "./data/projects";

function App() {
  const deProjects = projects.filter((p) => p.category === "de");
  const sweProjects = projects.filter((p) => p.category === "swe");

  return (
    <div className="min-h-screen bg-bg text-ink">
      <TopBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection id="de" title="Data Engineering" projects={deProjects} />
        <ProjectSection id="swe" title="Software Engineering" projects={sweProjects} />
        <ContactSection />
      </main>
    </div>);
}

export default App;
