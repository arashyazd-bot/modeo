import { 
  Building2, 
  Heart, 
  Radio, 
  ShoppingBag, 
  Zap, 
  Car,
  Plane,
  Building
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Financial Services" },
  { icon: Heart, name: "Health & Life Sciences" },
  { icon: Radio, name: "Communications & Media" },
  { icon: ShoppingBag, name: "Retail & Consumer" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Car, name: "Automotive" },
  { icon: Plane, name: "Travel & Transport" },
  { icon: Building, name: "Public Sector" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Global Reach
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Serving Every Industry, Everywhere
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We bring deep sector knowledge and global scale to enterprises across diverse industries in over 120 countries. Our expertise spans the full spectrum of business challenges, from emerging disruptors to established market leaders.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Partnering with technology leaders like <span className="text-foreground font-semibold">AWS</span>, <span className="text-foreground font-semibold">Google</span>, and <span className="text-foreground font-semibold">OpenAI</span>, we deliver cutting-edge solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-accent/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-3 group-hover:bg-primary/10 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
