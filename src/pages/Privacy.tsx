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
            <p className="text-sm">Effective Date: February 11, 2026</p>

            <p>MODEO ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services and products, including FamilyCheck (the "Services").</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">1. Information We Collect</h2>
            <p>We collect information you provide directly: name, email address, phone number, and information about your loved ones including their name, phone number, medication details, and medication schedules. We also collect usage data including call logs, compliance records, and service interaction data.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">2. How We Use Your Information</h2>
            <p>We use your information to provide medication reminder services, send automated voice calls and messages, notify caregivers of medication compliance, improve our services, and communicate with you about your account.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">3. Communication Consent</h2>
            <p>By using our Services, you consent to receive automated voice calls, SMS text messages, WhatsApp messages, and email communications related to medication reminders and health alerts. Message frequency varies based on medication schedules. You may opt out at any time by contacting us at hello@modeo.io.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with service providers who assist in delivering our Services (e.g., voice call providers, messaging platforms) and as required by law.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your information. However, no method of electronic transmission or storage is 100% secure.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">6. Contact Us</h2>
            <p>For questions about this Privacy Policy, contact us at: <a href="mailto:hello@modeo.io" className="text-primary hover:underline">hello@modeo.io</a></p>
            <p>MODEO<br />San Francisco, CA</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
