import "./App.css";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Blogs";
import BottomDock from "./Components/BottomDock";
import AboutContent from "./Components/ContentAbout";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Newsletter from "./Components/Newsletter";
// import ProfessionalCommandModal from "./Components/ProfessionalCommandModal";

function App() {
  return (
    <>
      {/* Arrow pinned to top-left (points toward neko cat) */}
      <img
        alt="arrow"
        loading="lazy"
        width={100}
        height={100}
        decoding="async"
        className="relative top-6 left-7 size-12"
        src="../public/arrow.gif"
      />

      {/* Main content */}
      <main className="min-h-screen bg-black max-w-3xl mx-auto flex items-center flex-col py-5">
        <AboutMe />
        <AboutContent />
        <Skills />
        {/* <div className="relative w-full">
          <ProfessionalCommandModal />
        </div> */}

        <Projects />
        <Blogs />
        <Newsletter />

        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <h1>YO</h1>
        <BottomDock />

      </main>
    </>
  );


}

export default App;
