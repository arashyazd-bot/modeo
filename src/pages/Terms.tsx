import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm">Effective Date: April 8, 2026</p>

            <p>Please read these Terms of Service ("Terms") carefully before using the website modeo.io or any services provided by MODEO LLC ("MODEO," "we," "us," or "our"), a California limited liability company. By accessing our website or engaging our services, you agree to be bound by these Terms.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">1. Company Overview</h2>
            <p>MODEO LLC is a technology consulting and software development company headquartered in San Francisco, California. We provide technology strategy, consulting, design, and development services to businesses, as well as proprietary software products including FamilyCheck, an AI-powered medication reminder service.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">2. Services</h2>
            <p>MODEO offers two categories of services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consulting services:</strong> Technology strategy, digital transformation consulting, software architecture, AI integration, cloud migration, product design, and custom software development. These services are governed by separate engagement agreements.</li>
              <li><strong>Software products:</strong> Proprietary products developed and operated by MODEO, including <a href="https://family-checker.com" className="text-primary hover:underline">FamilyCheck</a>. Each product has its own terms of service available on the respective product website.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10">3. Website Use</h2>
            <p>The modeo.io website is provided for informational purposes. You may browse the website, learn about our services, and contact us. You agree not to use the website to transmit malicious code, attempt to gain unauthorized access to our systems, scrape or harvest content without permission, or misrepresent your identity or affiliation.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">4. Consulting Engagements</h2>
            <p>All consulting services are provided under a separate Statement of Work (SOW) or engagement letter agreed upon by both parties before work begins. These Terms provide a general framework but do not supersede specific engagement agreements. Consulting deliverables, timelines, fees, and confidentiality terms are defined in the applicable SOW.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">5. Software Products</h2>
            <p>Our software products, including FamilyCheck, are governed by product-specific terms of service. By using any MODEO product, you agree to the terms available on that product's website. In the event of a conflict between these Terms and product-specific terms, the product-specific terms prevail for that product.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">6. Intellectual Property</h2>
            <p>All content on modeo.io — including text, graphics, logos, software, and design — is the property of MODEO LLC and is protected by copyright and trademark law. You may not copy, modify, distribute, or create derivative works without our prior written consent. The MODEO name, logo, and all product names (including FamilyCheck) are trademarks of MODEO LLC.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">7. Limitation of Liability</h2>
            <p>The modeo.io website and information provided on it are offered "as is" without warranties of any kind. MODEO LLC is not liable for any damages arising from use of the website. For consulting engagements, liability is governed by the applicable engagement agreement. For software products, liability is governed by the applicable product terms.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">8. Confidentiality</h2>
            <p>Any information shared with MODEO through the website contact form or email inquiries will be treated as confidential and will not be shared with third parties without your consent, except as required by law. Formal confidentiality obligations for consulting engagements are defined in the applicable engagement agreement or NDA.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">9. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of San Francisco County, California.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">10. Changes to Terms</h2>
            <p>We may update these Terms from time to time. The "Effective Date" at the top of this page indicates when the terms were last revised. Continued use of the website or services after changes constitutes acceptance of the updated Terms.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">11. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p>
              MODEO LLC<br />
              Email: <a href="mailto:hello@modeo.io" className="text-primary hover:underline">hello@modeo.io</a><br />
              Phone: <a href="tel:+15106198940" className="text-primary hover:underline">(510) 619-8940</a><br />
              San Francisco, CA
            </p>

            <p className="text-sm mt-10">Last updated: April 8, 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
