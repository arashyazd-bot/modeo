import { Linkedin, Twitter } from "lucide-react";
import modeoLogo from "@/assets/modeo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={modeoLogo}
              alt="Modeo company logo"
              className="h-12 w-auto mb-4 object-contain"
            />
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              A next-generation professional services firm helping enterprises reinvent their businesses through technology and human ingenuity.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-background font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Strategy", "Consulting", "Technology", "Operations", "Song"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/60 text-sm">
              <li>San Francisco, CA</li>
              <li>
                <a
                  href="mailto:hello@modeo.io"
                  className="hover:text-background transition-colors"
                >
                  hello@modeo.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+18184869468"
                  className="hover:text-background transition-colors"
                >
                  +1 (818) 486-9468
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Modeo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
