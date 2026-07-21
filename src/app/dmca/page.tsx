import LegalPageLayout, { Section } from "@/components/LegalPageLayout";

export const metadata = {
  title: "DMCA Policy — CEGEN",
  description: "CEGEN Digital Millennium Copyright Act (DMCA) takedown policy and procedures.",
};

export default function DmcaPage() {
  return (
    <LegalPageLayout
      title="DMCA Policy"
      subtitle="Our policy for handling copyright infringement claims under the Digital Millennium Copyright Act."
      lastUpdated="July 21, 2026"
    >
      <Section title="1. Overview">
        <p>
          CEGEN respects the intellectual property rights of others and expects users of our
          Service to do the same. In accordance with the Digital Millennium Copyright Act of 1998
          (&quot;DMCA&quot;), we will respond promptly to claims of copyright infringement committed using
          our Service.
        </p>
      </Section>

      <Section title="2. Reporting Copyright Infringement">
        <p>
          If you believe that content on CEGEN infringes your copyright, please send a written
          notification (&quot;DMCA Notice&quot;) to our designated Copyright Agent with the following
          information:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>A physical or electronic signature of the copyright owner or authorized agent</li>
          <li>Identification of the copyrighted work claimed to have been infringed</li>
          <li>Identification of the infringing material and its location on our website (URL)</li>
          <li>Your contact information (name, address, telephone, and email)</li>
          <li>A statement that you have a good faith belief the use is not authorized</li>
          <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
        </ul>
      </Section>

      <Section title="3. Designated Copyright Agent">
        <p>Send DMCA notices to:</p>
        <div className="mt-2 rounded-lg bg-white/5 p-4 text-slate-300">
          <p><strong className="text-white">CEGEN DMCA Agent</strong></p>
          <p>Email: <a href="mailto:dmca@cegen.org" className="text-violet-300 hover:underline">dmca@cegen.org</a></p>
          <p>Subject line: &quot;DMCA Takedown Request&quot;</p>
        </div>
      </Section>

      <Section title="4. Counter-Notification">
        <p>
          If you believe your content was removed in error, you may submit a counter-notification
          containing:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Your physical or electronic signature</li>
          <li>Identification of the removed material and its former location</li>
          <li>A statement under penalty of perjury that removal was a mistake or misidentification</li>
          <li>Your name, address, and telephone number</li>
          <li>Consent to jurisdiction of the federal court in your district</li>
        </ul>
        <p>
          Send counter-notifications to{" "}
          <a href="mailto:dmca@cegen.org" className="text-violet-300 hover:underline">dmca@cegen.org</a>.
        </p>
      </Section>

      <Section title="5. Repeat Infringers">
        <p>
          CEGEN reserves the right to terminate access for users who are repeat infringers of
          copyright or other intellectual property rights, in appropriate circumstances.
        </p>
      </Section>

      <Section title="6. False Claims">
        <p>
          Please note that under Section 512(f) of the DMCA, any person who knowingly materially
          misrepresents that material is infringing may be subject to liability for damages,
          including costs and attorney fees.
        </p>
      </Section>
    </LegalPageLayout>
  );
}
