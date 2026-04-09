import { Header } from "./bsw2/components/Header";
import { Hero } from "./bsw2/components/Hero";
import { About } from "./bsw2/components/About";
import { Classes } from "./bsw2/components/Classes";
import { Schedule } from "./bsw2/components/Schedule";
import { Locations } from "./bsw2/components/Locations";
import { Consulting } from "./bsw2/components/Consulting";
import { Contact } from "./bsw2/components/Contact";
import { Footer } from "./bsw2/components/Footer";

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
