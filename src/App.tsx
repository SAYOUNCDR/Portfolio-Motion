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
// import ProfessionalCommandModal from "./Components/ProfessionalCommandModal";
import Contributions from "./Components/Contributions";

function App() {
  return (
    <>
      {/* Main content */}
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


}

export default App;
