import LegalPageLayout, { Section } from "@/components/LegalPageLayout";

export const metadata = {
  title: "Privacy Policy — CEGEN",
  description: "Learn how CEGEN collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and safeguard your information when you use CEGEN."
      lastUpdated="July 21, 2026"
    >
      <Section title="1. Introduction">
        <p>
          Welcome to CEGEN (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are
          committed to protecting your personal data. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website and use our
          horoscope services.
        </p>
        <p>
          By accessing or using CEGEN, you agree to the collection and use of information in
          accordance with this policy.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p><strong className="text-slate-300">Information you provide:</strong></p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name (optional)</li>
          <li>Date of birth</li>
          <li>Birth time and birth place (optional)</li>
          <li>Contact information when you email us</li>
        </ul>
        <p><strong className="text-slate-300">Automatically collected information:</strong></p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Browser type and version</li>
          <li>Device information and operating system</li>
          <li>IP address and general location</li>
          <li>Pages visited and time spent on the site</li>
          <li>Referring website addresses</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Generate your horoscope reading based on your birth details</li>
          <li>Improve and personalize your experience on our website</li>
          <li>Analyze usage patterns to enhance our services</li>
          <li>Respond to your inquiries and support requests</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>
          We do not sell your personal information to third parties. Horoscope data entered in the
          calculator is processed locally in your browser and is not stored on our servers.
        </p>
      </Section>

      <Section title="4. Cookies and Tracking">
        <p>
          We may use cookies and similar tracking technologies to enhance your browsing experience.
          For detailed information, please see our{" "}
          <a href="/cookie-policy" className="text-violet-300 hover:underline">Cookie Policy</a>.
        </p>
      </Section>

      <Section title="5. Third-Party Services">
        <p>
          Our website may contain links to third-party websites or services. We are not responsible
          for the privacy practices of these external sites. We encourage you to review their
          privacy policies before providing any personal information.
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal
          information. However, no method of transmission over the Internet is 100% secure, and we
          cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@cegen.org" className="text-violet-300 hover:underline">privacy@cegen.org</a>.
        </p>
      </Section>

      <Section title="8. Children&apos;s Privacy">
        <p>
          CEGEN is not intended for children under 13 years of age. We do not knowingly collect
          personal information from children. If you believe we have collected data from a child,
          please contact us immediately.
        </p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated revision date. Your continued use of the site after changes constitutes
          acceptance of the updated policy.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
