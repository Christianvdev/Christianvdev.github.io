import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Bento from "./components/Bento";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Player from "./components/Player";

// The page is just these sections stacked in order.
// To reorder or remove a section, move or delete its line.
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Bento />
        <Projects />
        <Experience />
        <Footer />
      </main>
      <Player />
    </>
  );
}
