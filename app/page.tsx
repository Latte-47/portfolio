import Hero from "@/components/Hero/Hero";
import QuoteOne from "@/components/QuoteOne/QuoteOne";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import QuoteTwo from "@/components/QuoteTwo/QuoteTwo";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <QuoteOne />
      <Skills />
      <Projects />
      <About />
      <QuoteTwo />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
