import { TrendingUp, Heart, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: TrendingUp,
    title: "Strategy",
    subtitle: "Total Enterprise Reinvention",
    description:
      "We help you visualize and execute your transformation at speed. By combining deep industry expertise with data-driven insights, we chart a path to new value, helping you navigate uncertainty and build a resilient, future-ready business model.",
    color: "from-[hsl(271,81%,56%)] to-[hsl(271,81%,40%)]",
  },
  {
    icon: Heart,
    title: "Design",
    subtitle: "Customer-Led Innovation",
    description:
      "We bridge the gap between brand promise and brand experience. Through human-centric design and creative technology, we reimagine how your customers interact with your business—building loyalty and driving growth through meaningful, seamless digital journeys.",
    color: "from-[hsl(200,80%,50%)] to-[hsl(200,80%,35%)]",
  },
  {
    icon: Code,
    title: "Development",
    subtitle: "Building Your Digital Core",
    description:
      "We engineer the future of your business with next-gen technology. From cloud migration to AI integration, we build secure, scalable, and intelligent platforms that empower your organization to innovate faster and operate more efficiently.",
    color: "from-[hsl(160,70%,45%)] to-[hsl(160,70%,30%)]",
  },
];

const ServicesDetailSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            How We Deliver
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From Vision to Value
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive approach that transforms ideas into impactful outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`h-2 bg-gradient-to-r ${service.color}`}
              />
              <CardContent className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
                >
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                  {service.title}
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.subtitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
