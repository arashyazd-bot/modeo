import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Let's discuss how we can help you navigate digital transformation and unlock new value. Our team is ready to partner with you on your journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a
                    href="mailto:hello@modeo.io"
                    className="text-primary hover:underline"
                  >
                    hello@modeo.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a
                    href="tel:+18184869468"
                    className="text-primary hover:underline"
                  >
                    (818) 486-9468
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="bg-gradient-to-br from-[hsl(271,81%,30%)] to-[hsl(200,80%,25%)] rounded-2xl p-10 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Start Your Inquiry
            </h3>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Send us a message and our team will respond within 24 hours. We're eager to learn about your challenges and explore how we can help.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-[hsl(271,81%,30%)] hover:bg-primary-foreground/90 font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="mailto:hello@modeo.io?subject=Business%20Inquiry">
                Send an Inquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-sm mb-2">
                Built with leading technology
              </p>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm font-medium">
                <span>AWS</span>
                <span>•</span>
                <span>Google Cloud</span>
                <span>•</span>
                <span>OpenAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
