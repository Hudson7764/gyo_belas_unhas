import Header from "./components/Header";
import Hero from "./components/Hero";
import Actions from "./components/Actions";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Actions />
        <About />
        <Portfolio />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
