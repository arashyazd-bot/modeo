import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(271,81%,20%)] via-[hsl(260,50%,15%)] to-[hsl(200,80%,20%)] opacity-90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          <p className="text-primary-foreground/80 text-sm md:text-base font-medium tracking-widest uppercase mb-6 animate-fade-in">
            Technology + Human Ingenuity
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
            Reinvent Your Business for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(271,81%,70%)] to-[hsl(200,80%,65%)]">
              AI Era
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mb-10 leading-relaxed">
            We combine deep industry expertise with cutting-edge technology to drive transformation at scale. From strategy to execution, we help enterprises unlock new value and thrive in an ever-changing world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary-foreground text-[hsl(271,81%,30%)] hover:bg-primary-foreground/90 font-semibold px-8"
              asChild
            >
              <a href="#contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold px-8"
              asChild
            >
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          {[
            { value: "120+", label: "Countries" },
            { value: "500+", label: "Enterprise Clients" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10K+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
