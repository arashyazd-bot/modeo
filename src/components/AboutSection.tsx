import { Target, Users, Lightbulb, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our mission. We embed ourselves in your challenges to deliver outcomes that matter.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We embrace emerging technologies and bold ideas to keep you ahead of the curve.",
  },
  {
    icon: Users,
    title: "Human + Machine",
    description: "We combine human ingenuity with AI capabilities to unlock unprecedented value.",
  },
  {
    icon: Globe,
    title: "Real Impact",
    description: "Building products that solve meaningful problems for families and businesses.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technology Meets Human Ingenuity
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            MODEO is a technology company founded in San Francisco, combining deep industry expertise with cutting-edge AI to solve real-world problems. We build products and provide consulting that help businesses and families thrive in the age of AI.
          </p>
          <div className="inline-flex items-center gap-4 bg-card border rounded-xl px-6 py-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">AY</div>
            <div className="text-left">
              <p className="font-bold text-foreground">Arash Yazdani</p>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
