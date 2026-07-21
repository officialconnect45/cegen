import LegalPageLayout, { Section } from "@/components/LegalPageLayout";

export const metadata = {
  title: "Cookie Policy — CEGEN",
  description: "Learn how CEGEN uses cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on CEGEN."
      lastUpdated="July 21, 2026"
    >
      <Section title="1. What Are Cookies">
        <p>
          Cookies are small text files placed on your device when you visit a website. They help
          the site remember your preferences and understand how you interact with our pages.
        </p>
      </Section>

      <Section title="2. How We Use Cookies">
        <p>CEGEN may use the following types of cookies:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-slate-300">Essential Cookies:</strong> Required for the
            website to function properly. These cannot be disabled.
          </li>
          <li>
            <strong className="text-slate-300">Analytics Cookies:</strong> Help us understand
            how visitors use our site so we can improve the experience.
          </li>
          <li>
            <strong className="text-slate-300">Preference Cookies:</strong> Remember your settings
            and choices for a more personalized experience.
          </li>
        </ul>
      </Section>

      <Section title="3. Third-Party Cookies">
        <p>
          We may use third-party services (such as analytics providers) that set their own cookies.
          These third parties have their own privacy policies governing the use of cookies.
        </p>
      </Section>

      <Section title="4. Managing Cookies">
        <p>
          You can control and manage cookies through your browser settings. Most browsers allow you
          to refuse or delete cookies. Please note that disabling cookies may affect the
          functionality of certain parts of our website.
        </p>
        <p>Common browser cookie settings:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Chrome: Settings → Privacy and Security → Cookies</li>
          <li>Firefox: Settings → Privacy & Security → Cookies</li>
          <li>Safari: Preferences → Privacy → Cookies</li>
          <li>Edge: Settings → Cookies and Site Permissions</li>
        </ul>
      </Section>

      <Section title="5. Updates">
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted on this page
          with an updated date.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
