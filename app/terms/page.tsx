import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Use - Tesseract Agent",
  description: "Terms of use for the Tesseract Agent macOS application.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Terms of Use
      </h1>
      <p className="text-zinc-500 text-sm mb-12">
        Last updated: March 11, 2026
      </p>

      <div className="prose-invert space-y-10 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Acceptance of Terms
          </h2>
          <p>
            By downloading, installing, or using Tesseract Agent, you agree to
            these Terms of Use. If you do not agree, do not use the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">License</h2>
          <p>
            Tesseract Agent is licensed, not sold. We grant you a limited,
            non-exclusive, non-transferable, revocable license to use the app on
            any Apple-branded device that you own or control, subject to the
            Apple Media Services Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            AI-Generated Content
          </h2>
          <p>
            Tesseract Agent uses open-source AI models that run locally on your
            device. AI-generated outputs — including text transcriptions,
            synthesized speech, and generated images — are provided as-is.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
            <li>
              AI outputs may be inaccurate, incomplete, or inappropriate.
            </li>
            <li>
              You are solely responsible for how you use AI-generated content.
            </li>
            <li>
              We do not guarantee the accuracy, quality, or fitness for purpose
              of any AI output.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Acceptable Use
          </h2>
          <p>You agree not to use Tesseract Agent to:</p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
            <li>
              Generate content that is illegal, harmful, or violates the rights
              of others.
            </li>
            <li>
              Reverse-engineer, decompile, or disassemble the app beyond what
              applicable law permits.
            </li>
            <li>
              Redistribute, sublicense, or resell the app or any part of it.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Open-Source Models
          </h2>
          <p>
            Tesseract Agent uses open-source AI models. These models are
            subject to their own respective licenses. Your use of these models
            through Tesseract Agent is governed by both these terms and the
            applicable model licenses.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Intellectual Property
          </h2>
          <p>
            Tesseract Agent and its original content, features, and
            functionality are owned by the developer. The app is protected by
            copyright and other intellectual property laws.
          </p>
          <p className="mt-3">
            Content you create using Tesseract Agent belongs to you. We claim no
            ownership over your inputs or the outputs generated on your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Disclaimer of Warranties
          </h2>
          <p>
            Tesseract Agent is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, whether express or
            implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
          <p className="mt-3">
            We do not warrant that the app will be error-free, uninterrupted, or
            free of harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            the developer be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses arising from your
            use of Tesseract Agent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Apple App Store
          </h2>
          <p>
            If you downloaded Tesseract Agent from the Apple App Store, you
            acknowledge that these terms are between you and the developer, not
            Apple. Apple has no obligation to provide maintenance or support for
            the app. In the event of any failure to conform to an applicable
            warranty, you may notify Apple for a refund of the purchase price
            (if any); Apple has no other warranty obligation. Apple is not
            responsible for addressing any claims relating to the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Changes to These Terms
          </h2>
          <p>
            We may update these terms from time to time. Continued use of
            Tesseract Agent after changes constitutes acceptance of the revised
            terms. We will post the updated terms on this page with a new
            effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">Contact</h2>
          <p>
            If you have questions about these terms, please reach out via our{" "}
            <a
              href="/support"
              className="text-zinc-100 underline underline-offset-4 hover:text-white"
            >
              support page
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
