import LegalPageLayout, { Section } from "@/components/LegalPageLayout";

export const metadata = {
  title: "Terms & Conditions — CEGEN",
  description: "Read the terms and conditions for using CEGEN horoscope services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using CEGEN."
      lastUpdated="July 21, 2026"
    >
      <Section title="1. Acceptance of Terms">
        <p>
          By accessing and using CEGEN (the &quot;Service&quot;), you accept and agree to be bound by
          these Terms and Conditions. If you do not agree to these terms, please do not use our
          Service.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          CEGEN provides entertainment-based horoscope readings and zodiac information. Our
          readings are randomly generated based on your zodiac sign and are intended solely for
          entertainment and personal reflection purposes.
        </p>
      </Section>

      <Section title="3. User Responsibilities">
        <p>When using CEGEN, you agree to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Provide accurate information where requested</li>
          <li>Use the Service only for lawful purposes</li>
          <li>Not attempt to disrupt or compromise the website&apos;s security</li>
          <li>Not copy, reproduce, or redistribute our content without permission</li>
          <li>Not use automated systems to scrape or extract data from the Service</li>
        </ul>
      </Section>

      <Section title="4. Intellectual Property">
        <p>
          All content on CEGEN — including text, graphics, logos, design, and software — is the
          property of CEGEN or its licensors and is protected by copyright and intellectual property
          laws. You may not reproduce, distribute, or create derivative works without our prior
          written consent.
        </p>
      </Section>

      <Section title="5. Disclaimer of Warranties">
        <p>
          CEGEN is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
          kind, either express or implied. We do not warrant that the Service will be uninterrupted,
          error-free, or that horoscope readings will be accurate or reliable.
        </p>
        <p>
          Horoscope readings are for entertainment only and should not be relied upon for making
          important life, financial, medical, or legal decisions.
        </p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, CEGEN and its operators shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages arising from your
          use of the Service, including but not limited to loss of profits, data, or goodwill.
        </p>
      </Section>

      <Section title="7. Indemnification">
        <p>
          You agree to indemnify and hold harmless CEGEN, its affiliates, and their respective
          officers, directors, and employees from any claims, damages, or expenses arising from
          your use of the Service or violation of these Terms.
        </p>
      </Section>

      <Section title="8. Modifications">
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective upon
          posting to this page. Your continued use of the Service after modifications constitutes
          acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="9. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws,
          without regard to conflict of law principles. Any disputes shall be resolved in the
          appropriate courts of jurisdiction.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:legal@cegen.org" className="text-violet-300 hover:underline">legal@cegen.org</a>.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
