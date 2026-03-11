import { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Support - Tesseract Agent",
  description:
    "Get help with Tesseract Agent. Find answers to common questions or contact support.",
};

export default function SupportPage() {
  return (
    <PageShell>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
        Support
      </h1>
      <p className="text-zinc-400 text-lg font-light mb-12">
        Need help with Tesseract Agent? Find answers below or get in touch.
      </p>

      {/* Contact */}
      <a
        href="mailto:support@thetesseract.app"
        className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors mb-16"
      >
        <Mail className="w-6 h-6 text-zinc-400 shrink-0" />
        <div>
          <div className="text-zinc-200 font-medium">Email Support</div>
          <div className="text-zinc-500 text-sm">support@thetesseract.app</div>
        </div>
      </a>

      {/* FAQ */}
      <h2 className="text-2xl font-medium tracking-tight mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {[
          {
            q: "What are the system requirements?",
            a: "Tesseract Agent requires macOS 26 (Tahoe) or later and an Apple Silicon Mac (M1 or newer). An internet connection is needed only for the one-time model download on first launch.",
          },
          {
            q: "How much disk space do the models need?",
            a: "The initial model download is several gigabytes depending on which features you use. Models are stored locally and only need to be downloaded once.",
          },
          {
            q: "Does Tesseract Agent work offline?",
            a: "Yes. After the one-time model download on first launch, Tesseract Agent works entirely offline. No internet connection is required for any of its features.",
          },
          {
            q: "Is my data sent to the cloud?",
            a: "No. All processing happens locally on your Mac using Apple Silicon. Your voice recordings, conversations, and generated content never leave your device. There are no accounts, no analytics, and no telemetry.",
          },
          {
            q: "How do I set up dictation?",
            a: "Launch the app, grant Microphone and Accessibility permissions when prompted, then press and hold Option+Space to dictate. Release to insert the transcription. You can customize the hotkey in Settings.",
          },
          {
            q: "The app is asking for Accessibility permission. Why?",
            a: "Accessibility permission is needed for two things: registering global hotkeys (so features work from any app) and simulating keyboard paste to insert text into the active text field.",
          },
          {
            q: "Can I change the hotkeys?",
            a: "Yes. Open the app\u2019s Settings to customize the hotkeys for dictation, text-to-speech, and the agent. Default hotkeys are Option+Space, fn+Space, and Control+Space respectively.",
          },
          {
            q: "Dictation isn\u2019t working. What should I check?",
            a: "Make sure you\u2019ve granted both Microphone and Accessibility permissions in System Settings > Privacy & Security. Also ensure the model has finished downloading (check the app\u2019s status). Try restarting the app if permissions were just granted.",
          },
          {
            q: "How do I uninstall and remove all data?",
            a: "Delete Tesseract Agent from your Applications folder. To remove all associated data including downloaded models, delete the app\u2019s container from ~/Library (or use a tool like AppCleaner).",
          },
          {
            q: "How do I request a refund?",
            a: "Purchases are handled through the Mac App Store. To request a refund, visit reportaproblem.apple.com and sign in with your Apple Account.",
          },
        ].map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden"
          >
            <summary className="flex items-center justify-between p-5 cursor-pointer text-zinc-200 font-medium hover:bg-white/[0.02] transition-colors list-none">
              {item.q}
              <span className="text-zinc-500 group-open:rotate-45 transition-transform text-xl leading-none ml-4 shrink-0">
                +
              </span>
            </summary>
            <div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      {/* Still need help */}
      <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
        <h3 className="text-xl font-medium text-zinc-200 mb-3">
          Still need help?
        </h3>
        <p className="text-zinc-400 text-sm mb-6">
          If you couldn&apos;t find what you&apos;re looking for, send us an
          email and we&apos;ll get back to you as soon as possible.
        </p>
        <Button
          asChild
          className="rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-semibold"
        >
          <a href="mailto:support@thetesseract.app">Contact Support</a>
        </Button>
      </div>
    </PageShell>
  );
}
