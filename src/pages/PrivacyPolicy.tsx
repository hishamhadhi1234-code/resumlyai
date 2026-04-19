import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container mx-auto px-4 pt-28 pb-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="space-y-8 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to Resumly ("we", "our", "us"). We are committed to protecting your personal information
            and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your
            data when you use our AI-powered resume builder.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Personal details (name, email, phone, location)</li>
            <li>Professional information (skills, experience, education, projects)</li>
            <li>Target job role and job descriptions you provide</li>
            <li>Payment information (processed securely via Razorpay)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>To generate and optimize your resume using AI</li>
            <li>To provide ATS scoring and improvement suggestions</li>
            <li>To process payments and manage your subscription</li>
            <li>To respond to inquiries and provide support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. Your resume content
            is processed securely, and payment data is handled exclusively by Razorpay's PCI-compliant
            infrastructure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with trusted service providers
            (such as AI processing and payment gateways) strictly to operate our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information at any time.
            To exercise these rights, contact us at the email below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Cookies</h2>
          <p>
            We use essential cookies to maintain your session and improve user experience. You can
            control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be posted on this page with
            an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:resumly.aicv@gmail.com" className="text-primary hover:underline">
              resumly.aicv@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
