import Hero from "./components/Hero";
import About from "./components/About";
import DashboardPreview from "./components/DashboardPreview";
import BackendFlow from "./components/BackendFlow";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import Monitoring from "./components/Monitoring";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import RealWorldUseCases from "./components/RealWorldUseCases";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Hero / First Impression */}
      <Hero />

      {/* What the project is */}
      <About />

      {/* After-login experience */}
      <DashboardPreview />

      <RealWorldUseCases />

      {/* How backend works */}
      <BackendFlow />

      {/* System design */}
      <ArchitectureDiagram />

      {/* Production readiness */}
      <Monitoring />

      {/* Tools & technologies */}
      <TechStack />

      {/* Call to action */}
      <Footer />
    </>
  );
}
