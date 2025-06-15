
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
