import "./App.css";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Blogs";
import BottomDock from "./Components/BottomDock";
import AboutContent from "./Components/ContentAbout";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import BottomBlur from "./Components/BottomBlur";
import Contributions from "./Components/Contributions";
import { Routes, Route } from "react-router-dom";
import ContributionsPage from "./ContributionsPage";
import ProjectsPage from "./ProjectsPage";
// import ProfessionalCommandModal from "./Components/ProfessionalCommandModal";

const HomePage = () => {
  return (
    <>
      <main className="min-h-screen bg-black max-w-3xl mx-auto flex items-center flex-col py-5">
        <AboutMe />
        <AboutContent />
        <Skills />
        {/* <div className="relative w-full">
          <ProfessionalCommandModal />
        </div> */}

        <Projects />
        <Contributions />
        <Blogs />
        <Newsletter />

        <BottomDock />
        <Footer />
      </main>
      <BottomBlur />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contributions" element={<ContributionsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
