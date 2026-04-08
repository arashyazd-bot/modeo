import { Cloud, Database, Shield, Factory, Layers } from "lucide-react";

const focusAreas = [
  {
    icon: Layers,
    title: "Digital Core Building",
    description: "Modernize your technology foundation with cloud-native architectures and intelligent automation.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Accelerate migration and unlock innovation with secure, scalable cloud solutions.",
  },
  {
    icon: Database,
    title: "Data & AI",
    description: "Transform data into insights and action with advanced analytics and AI integration.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Protect your enterprise with comprehensive cybersecurity and risk management.",
  },
  {
    icon: Factory,
    title: "Automation",
    description: "Streamline operations and reduce manual work with intelligent automation and workflow orchestration.",
  },
];

const FocusAreasSection = () => {
  return (
    <section id="focus-areas" className="py-24 bg-gradient-to-br from-[hsl(271,81%,20%)] to-[hsl(260,50%,12%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/70 font-medium tracking-widest uppercase text-sm mb-4">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Key Focus Areas
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Deep capabilities in the technologies that matter most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group relative p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-foreground/10 mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                <area.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
