import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-sm">Effective Date: April 8, 2026</p>

            <p>MODEO LLC ("MODEO," "we," "us," or "our"), a California limited liability company, is committed to protecting the privacy of our users, clients, and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit modeo.io or use any of our services and products.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">1. Scope</h2>
            <p>This Privacy Policy applies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The modeo.io website</li>
              <li>Business inquiries and consulting engagements</li>
              <li>Our software products, including <a href="https://family-checker.com" className="text-primary hover:underline">FamilyCheck</a></li>
            </ul>
            <p>Individual products may have additional product-specific privacy policies. Where a product-specific policy exists, it supplements this policy for that product's users.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">2. Information We Collect</h2>

            <h3 className="text-lg font-bold text-foreground mt-6">Website Visitors</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact form submissions:</strong> Name, email address, message content</li>
              <li><strong>Email inquiries:</strong> Email address and message content sent to hello@modeo.io</li>
              <li><strong>Technical data:</strong> IP address, browser type, device type, pages visited (collected automatically)</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-6">Consulting Clients</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Business information:</strong> Company name, contact person, email, phone number</li>
              <li><strong>Project data:</strong> Information shared during engagements, as defined in engagement agreements</li>
              <li><strong>Billing information:</strong> Payment details processed through secure payment providers</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-6">Product Users (FamilyCheck)</h3>
            <p>Data collection for FamilyCheck is detailed in the <a href="https://family-checker.com/privacy" className="text-primary hover:underline">FamilyCheck Privacy Policy</a>. In summary, this includes caregiver account information, patient details, medication data, call records, and compliance logs.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to business inquiries and contact form submissions</li>
              <li>Deliver consulting services under engagement agreements</li>
              <li>Operate and improve our software products</li>
              <li>Send service-related communications (not marketing, unless you opt in)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud, abuse, and unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10">4. Data Sharing</h2>
            <p>We do not sell, trade, or rent personal information to third parties. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service providers:</strong> Companies that help us deliver our services (hosting, email, analytics, payment processing). These providers are contractually obligated to protect your data.</li>
              <li><strong>Legal requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets (you would be notified)</li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-6">Our Service Providers</h3>
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Provider</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Purpose</th>
                  <th className="text-left py-2 font-semibold text-foreground">Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="py-2 pr-4">Cloudflare</td><td className="py-2 pr-4">Website hosting, DNS, CDN</td><td className="py-2">IP addresses, web traffic</td></tr>
                <tr className="border-b"><td className="py-2 pr-4">Google Workspace</td><td className="py-2 pr-4">Business email</td><td className="py-2">Email content</td></tr>
                <tr className="border-b"><td className="py-2 pr-4">DigitalOcean</td><td className="py-2 pr-4">Product hosting</td><td className="py-2">Product user data</td></tr>
                <tr className="border-b"><td className="py-2 pr-4">Vapi.ai</td><td className="py-2 pr-4">AI voice calls (FamilyCheck)</td><td className="py-2">Patient name, phone, medication</td></tr>
                <tr className="border-b"><td className="py-2 pr-4">Resend</td><td className="py-2 pr-4">Email delivery (FamilyCheck)</td><td className="py-2">Email addresses, email content</td></tr>
                <tr className="border-b"><td className="py-2 pr-4">Telegram / WhatsApp</td><td className="py-2 pr-4">Messaging (FamilyCheck)</td><td className="py-2">Chat IDs, message content</td></tr>
                <tr><td className="py-2 pr-4">Stripe</td><td className="py-2 pr-4">Payment processing</td><td className="py-2">Name, email, payment details</td></tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-bold text-foreground mt-10">5. Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your information, including SSL/TLS encryption for all web traffic, secure cloud infrastructure, access controls, and regular security reviews. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">6. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Website inquiries:</strong> Retained for 2 years unless you request earlier deletion</li>
              <li><strong>Consulting client data:</strong> Retained for the duration of the engagement plus 3 years, or as required by the engagement agreement</li>
              <li><strong>Product user data:</strong> Retained as described in the applicable product privacy policy</li>
              <li><strong>Technical logs:</strong> Retained for up to 90 days</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access</strong> the personal data we hold about you</li>
              <li><strong>Correct</strong> inaccurate or incomplete data</li>
              <li><strong>Delete</strong> your personal data (subject to legal retention requirements)</li>
              <li><strong>Opt out</strong> of any non-essential communications</li>
              <li><strong>Data portability:</strong> Request a copy of your data in a structured format</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:hello@modeo.io" className="text-primary hover:underline">hello@modeo.io</a>.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">8. California Privacy Rights (CCPA)</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to know what personal information is collected, used, and shared</li>
              <li>The right to delete personal information</li>
              <li>The right to opt out of the sale of personal information — <strong>we do not sell personal information</strong></li>
              <li>The right to non-discrimination for exercising your CCPA rights</li>
            </ul>
            <p>To submit a CCPA request, email <a href="mailto:hello@modeo.io" className="text-primary hover:underline">hello@modeo.io</a> with "CCPA Request" in the subject line.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">9. Cookies and Tracking</h2>
            <p>The modeo.io website does not currently use cookies or third-party tracking scripts. If we add analytics or tracking in the future, this policy will be updated accordingly.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">10. Children's Privacy</h2>
            <p>Our services are not directed at individuals under 18 years of age. We do not knowingly collect information from children.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be noted by updating the "Effective Date" at the top of this page. Continued use of our website or services after changes constitutes acceptance of the updated policy.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">12. Contact Us</h2>
            <p>For questions about this Privacy Policy or our data practices, contact us at:</p>
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

export default Privacy;
