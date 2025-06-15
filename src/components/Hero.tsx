
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmNWY1ZjQiLz4KPC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-stone-800 mb-4 tracking-tight">
              KASTELLY
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 font-light tracking-wider">
              DESIGN
            </p>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light text-stone-700 mb-6 leading-relaxed">
            Transforming Your Dreams into<br />
            <span className="text-amber-700 font-medium">Custom-Designed Spaces</span>
          </h2>
          
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-2xl mx-auto font-light">
            Personalized solutions for every room in your home
          </p>
          
          <Button 
            size="lg" 
            className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-6 text-lg rounded-none font-light transition-all duration-300 hover:scale-105 group"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
