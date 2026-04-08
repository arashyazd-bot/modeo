import { Heart, Phone, Shield, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Products
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technology That Cares
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build products that solve real problems for real people
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden border-primary/20 hover:shadow-xl transition-all duration-300">
          <div className="h-2 bg-gradient-to-r from-[hsl(170,36%,45%)] to-[hsl(170,50%,60%)]" />
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(170,36%,45%)]">
                    <Heart className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">FamilyCheck</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  AI-powered medication reminders for elderly loved ones. FamilyCheck calls your family members daily with a warm, friendly voice to check on their medications — and keeps caregivers informed every step of the way.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">AI voice calls that sound like a caring family friend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Instant caregiver alerts for missed doses or concerns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Patient consent required before any reminders begin</span>
                  </div>
                </div>
                <Button asChild>
                  <a href="https://family-checker.com" target="_blank" rel="noopener noreferrer">
                    Visit FamilyCheck
                  </a>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-[hsl(170,36%,45%)] to-[hsl(170,50%,35%)] rounded-2xl p-8 text-white">
                <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">How It Works</p>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-sm text-white/90">Caregiver signs up and adds their loved one's medications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-sm text-white/90">FamilyCheck calls the patient to get their consent</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-sm text-white/90">Daily AI voice calls remind them at scheduled times</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">4</span>
                    <span className="text-sm text-white/90">Caregiver receives real-time updates on every call</span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;
