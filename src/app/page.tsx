import Hero from "@/components/home/Hero";
import ModulesStrip from "@/components/home/ModulesStrip";
import About from "@/components/home/About";
import Advantages from "@/components/home/Advantages";
import Pricing from "@/components/home/Pricing";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ModulesStrip />
      <About />
      <Advantages />
      <Pricing />
      <Contact />
    </>
  );
}
