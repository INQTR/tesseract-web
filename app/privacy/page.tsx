import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy - Tesseract Agent",
  description:
    "Tesseract Agent privacy policy. No data collection, no tracking, no accounts. Everything runs locally on your Mac.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-zinc-500 text-sm mb-12">
        Last updated: March 11, 2026
      </p>

      <div className="prose-invert space-y-10 text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">Overview</h2>
          <p>
            Tesseract Agent is designed to be fully private. All AI inference
            runs locally on your Mac using Apple Silicon. We do not collect,
            transmit, or store any of your personal data. There are no accounts,
            no analytics, and no telemetry.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Data We Collect
          </h2>
          <p>
            <strong className="text-zinc-100">None.</strong> Tesseract Agent
            does not collect any personal information. We have no servers that
            receive your data. The app does not contain analytics, crash
            reporting, or tracking of any kind.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Data Stored on Your Device
          </h2>
          <p>
            Tesseract Agent stores the following data locally on your Mac, within
            its sandboxed application container:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-zinc-400">
            <li>
              <strong className="text-zinc-300">User preferences</strong> —
              stored via UserDefaults (hotkey configuration, model selection,
              display settings).
            </li>
            <li>
              <strong className="text-zinc-300">AI models</strong> — downloaded
              once on first launch and stored locally for offline use.
            </li>
            <li>
              <strong className="text-zinc-300">Conversation history</strong> —
              agent conversations are stored locally on your device. They are
              never transmitted anywhere.
            </li>
          </ul>
          <p className="mt-3">
            You can delete all stored data at any time by removing the app and
            its associated data from your Mac.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Microphone Access
          </h2>
          <p>
            Tesseract Agent requests microphone access for push-to-talk voice
            dictation. Audio is processed entirely on-device using a local
            speech recognition model. Audio recordings are not stored or
            transmitted. The microphone is only active while you hold the
            dictation hotkey.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Accessibility Access
          </h2>
          <p>
            Tesseract Agent requests accessibility permission to register global
            hotkeys and to simulate keyboard paste into the active application.
            This permission is used solely for dictation insertion and hotkey
            functionality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Network Access
          </h2>
          <p>
            The app requires a one-time internet connection to download AI
            models on first launch. After models are downloaded, Tesseract
            Agent functions fully offline. No user data is ever sent over the
            network.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Third-Party Services
          </h2>
          <p>
            Tesseract Agent does not integrate with any third-party analytics,
            advertising, or data-processing services. The only external network
            access is for the one-time initial model download.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Children&apos;s Privacy
          </h2>
          <p>
            Tesseract Agent does not collect any data from any user, including
            children. Because no data is collected, there is no risk of
            children&apos;s data being gathered or shared.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">
            Changes to This Policy
          </h2>
          <p>
            If we update this privacy policy, we will post the revised version
            on this page with an updated date. Because Tesseract Agent collects
            no data, we do not anticipate material changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-zinc-100 mb-3">Contact</h2>
          <p>
            If you have questions about this privacy policy, please reach out
            via our{" "}
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
