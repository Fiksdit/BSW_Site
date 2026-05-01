import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Classes } from "./components/Classes";
import { About } from "./components/About";
import { Schedule } from "./components/Schedule";
import { Locations } from "./components/Locations";
import { Consulting } from "./components/Consulting";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function BswPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Locations />
        <Consulting />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
