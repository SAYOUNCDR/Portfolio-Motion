import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import AboutContent from "./Components/About/ContentAbout";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/About/Skills";
import Newsletter from "./Components/LiveFeatures/Newsletter";
import Footer from "./Components/Layout/Footer";
import BottomBlur from "./Components/Layout/BottomBlur";
import Contributions from "./Components/Social/Contributions";
import GithubHeatmap from "./Components/Social/GithubHeatmap";
import { Routes, Route } from "react-router-dom";
import ContributionsPage from "./Pages/ContributionsPage";
import ProjectsPage from "./Pages/ProjectsPage"
import BlogsPage from "./Pages/BlogsPage";
import BlogDetail from "./Components/Blogs/BlogDetail";
import { SpeedInsights } from "@vercel/speed-insights/react";
import BottomDockMode from "./Components/Navigation/BottomDockMode";
import LivePingOverlay from "./Components/LiveFeatures/LivePingOverlay";
import Loader from "./Components/Layout/Loader";
import { useState } from "react";
import AboutMe from "./Components/About/AboutMe";
import Experience from "./Components/About/Experience";
import LeftSideLabel from "./Components/Layout/LeftSideLabel";
import BackgroundPattern from "./Components/Layout/BackgroundPattern";
import HorizonGlow from "./Components/Layout/HorizonGlow";
import ScrollToTop from "./Components/LiveFeatures/ScrollToTop";
import RightSideLabel from "./Components/Layout/RightSideLabel";

const HomePage = () => {
  return (
    <div>
      <main className="min-h-screen max-w-3xl mx-auto flex items-center flex-col">
        <AboutMe />
        <AboutContent />
        <Projects limit={2} showViewAll={true} />
        <Experience />
        <Contributions limit={3} showViewAll={true} />
        <GithubHeatmap username="SAYOUNCDR" />
        <Blogs />
        <Skills />
        <Newsletter />
        <Footer />
      </main>
      <BottomBlur />
      <SpeedInsights />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <ScrollToTop />
      <LivePingOverlay />
      <RightSideLabel />
      <LeftSideLabel />
      <BackgroundPattern />
      <HorizonGlow />
      <BottomDockMode />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contributions" element={<ContributionsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
