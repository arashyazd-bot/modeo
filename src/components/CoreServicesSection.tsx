import { Lightbulb, Users, Cpu, Settings, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Charting the path to value through data-driven insights and deep industry expertise.",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Transforming organizations with actionable strategies that drive measurable outcomes.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Engineering next-gen solutions with cloud, AI, and modern architecture.",
  },
  {
    icon: Settings,
    title: "Operations",
    description: "Optimizing business processes for efficiency, agility, and scale.",
  },
  {
    icon: Sparkles,
    title: "Song",
    description: "Reimagining customer experiences through creative and digital innovation.",
  },
];

const CoreServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end capabilities that help you reinvent every part of your enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
