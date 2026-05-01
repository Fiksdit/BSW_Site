import { Header } from "./bsw/components/Header";
import { Hero } from "./bsw/components/Hero";
import { About } from "./bsw/components/About";
import { Classes } from "./bsw/components/Classes";
import { Schedule } from "./bsw/components/Schedule";
import { Locations } from "./bsw/components/Locations";
import { Consulting } from "./bsw/components/Consulting";
import { Contact } from "./bsw/components/Contact";
import { Footer } from "./bsw/components/Footer";

export default function HomePage() {
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
