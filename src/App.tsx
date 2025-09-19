import "./App.css";
import BottomDock from "./Components/BottomDock";

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
        className="fixed top-6 left-7 size-12"
        src="src/assets/arrow.gif"
      />

      {/* Main content */}
      <main className="h-screen bg-gray-50 max-w-4xl mx-auto flex items-center flex-col py-20">
        <BottomDock />
      </main>
    </>
  );
}

export default App;
