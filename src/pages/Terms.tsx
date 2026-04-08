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
            <p className="text-sm">Effective Date: February 11, 2026</p>

            <p>Please read these Terms of Service carefully before using services provided by MODEO ("we," "us," or "our"), including the FamilyCheck medication reminder service. By using our Services, you agree to be bound by these Terms.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">1. Services Description</h2>
            <p>MODEO provides technology consulting services and software products, including FamilyCheck — an AI-powered medication reminder service that includes automated voice calls, messaging, and caregiver notification systems.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">2. Communication Consent</h2>
            <p>By enrolling in FamilyCheck, you consent to receive automated voice calls, SMS text messages, WhatsApp messages, and email communications related to medication reminders and health alerts. Message frequency varies based on medication schedules. Message and data rates may apply.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">3. Medical Disclaimer</h2>
            <p>FamilyCheck is a reminder tool only and does not provide medical advice, diagnosis, or treatment. Always follow your healthcare provider's instructions regarding medications. Our Services are not a substitute for professional medical care.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">4. Limitation of Liability</h2>
            <p>Our Services are provided "as is" without warranties of any kind. We are not liable for any missed reminders, delayed notifications, or any health consequences resulting from the use or inability to use the Services.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">5. User Responsibilities</h2>
            <p>You are responsible for providing accurate information, obtaining consent from individuals who will receive calls and messages, and ensuring that medication information entered is correct and current.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">6. Privacy</h2>
            <p>Your use of our Services is governed by our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10">7. Contact</h2>
            <p>For questions about these Terms, contact us at: <a href="mailto:hello@modeo.io" className="text-primary hover:underline">hello@modeo.io</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
