import LegalPageLayout, { Section } from "@/components/LegalPageLayout";

export const metadata = {
  title: "Disclaimer — CEGEN",
  description: "Important disclaimers regarding CEGEN horoscope readings and services.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      subtitle="Important information about the nature and limitations of CEGEN services."
      lastUpdated="July 21, 2026"
    >
      <Section title="Entertainment Purposes Only">
        <p>
          CEGEN provides horoscope readings, zodiac information, and astrological content solely
          for entertainment and general interest purposes. Our readings are randomly generated and
          are not based on any scientific, medical, or professional methodology.
        </p>
      </Section>

      <Section title="Not Professional Advice">
        <p>
          Nothing on CEGEN constitutes professional advice of any kind, including but not limited to:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Medical or health advice</li>
          <li>Financial or investment advice</li>
          <li>Legal advice</li>
          <li>Psychological or therapeutic counseling</li>
          <li>Relationship or marriage counseling</li>
        </ul>
        <p>
          Always consult qualified professionals for important decisions regarding your health,
          finances, legal matters, or personal relationships.
        </p>
      </Section>

      <Section title="No Guarantees">
        <p>
          We make no guarantees, representations, or warranties regarding the accuracy, reliability,
          or outcomes of any horoscope reading provided on CEGEN. Past readings do not predict
          future results. Any actions you take based on our content are at your own risk.
        </p>
      </Section>

      <Section title="Astrological Content">
        <p>
          Astrology is not recognized as a science by the scientific community. Zodiac sign
          descriptions and horoscope predictions are based on traditional astrological beliefs and
          folklore, presented for entertainment value only.
        </p>
      </Section>

      <Section title="External Links">
        <p>
          CEGEN may contain links to third-party websites. We are not responsible for the content,
          accuracy, or practices of any external sites. Inclusion of a link does not imply endorsement.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          By using CEGEN, you acknowledge and agree that we shall not be held liable for any
          decisions, actions, or outcomes resulting from your use of or reliance on our horoscope
          readings or astrological content.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
