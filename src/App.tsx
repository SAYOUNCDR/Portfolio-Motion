import "./App.css";
import Blogs from "./Components/Blogs";
import AboutContent from "./Components/ContentAbout";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import BottomBlur from "./Components/BottomBlur";
import Contributions from "./Components/Contributions";
import GithubHeatmap from "./Components/GithubHeatmap";
import { Routes, Route } from "react-router-dom";
import ContributionsPage from "./Pages/ContributionsPage";
import ProjectsPage from "./Pages/ProjectsPage"
import BlogsPage from "./Pages/BlogsPage";
import BlogDetail from "./Components/BlogDetail";
import { SpeedInsights } from "@vercel/speed-insights/react";
import BottomDockMode from "./Components/BottomDockMode";
import LivePingOverlay from "./Components/LivePingOverlay";
import Loader from "./Components/Loader";
import { useState } from "react";
import AboutMe from "./Components/AboutMe";
import SideLabel from "./Components/SideLabel";
import LeftSideLabel from "./Components/LeftSideLabel";
import BackgroundPattern from "./Components/BackgroundPattern";
import HorizonGlow from "./Components/HorizonGlow";
import ScrollToTop from "./Components/ScrollToTop";

const HomePage = () => {
  return (
    <div>
      <main className="min-h-screen max-w-3xl mx-auto flex items-center flex-col py-5">
        <AboutMe />
        <AboutContent />
        <Projects limit={2} showViewAll={true} />
        <Skills />
        <Contributions limit={2} showViewAll={true} />
        <GithubHeatmap username="SAYOUNCDR" />
        <Blogs />
        <Newsletter />
        <BottomDockMode />
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
      <SideLabel />
      <LeftSideLabel />
      <BackgroundPattern />
      <HorizonGlow />
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
