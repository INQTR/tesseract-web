"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Volume2,
  Shield,
  Apple,
  Download,
  HardDrive,
  Image as ImageIcon,
  Bot,
  Keyboard,
  WifiOff,
  EyeOff,
  UserX,
  Cpu,
  Eye,
  Lock,
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 },
};

export function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-zinc-100 overflow-hidden font-sans selection:bg-zinc-800 selection:text-zinc-100">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <NextImage
            src="/icon-64x64.png"
            alt="Tesseract Agent"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-medium tracking-tight">
            tesseract
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <Link
            href="#features"
            className="hover:text-zinc-100 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#privacy"
            className="hover:text-zinc-100 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-zinc-100 transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/support"
            className="hover:text-zinc-100 transition-colors"
          >
            Support
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
            asChild
          >
            <Link href="#download">Download</Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center">
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center overflow-hidden w-full pt-10 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-xs font-medium text-zinc-400 mb-10 backdrop-blur-xl transition-colors hover:bg-white/[0.05]">
              <Apple className="w-4 h-4" />
              <span>Built for Apple Silicon</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8 text-zinc-100">
              Tesseract
              <br />
              <span className="text-zinc-600">Agent.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 font-light leading-snug">
              AI that lives on your Mac. Dictation, speech, image generation,
              and a local AI agent — powered by open models, processed entirely
              on-device. No cloud. No accounts. Just you.
            </p>

            <div
              id="download"
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button
                size="lg"
                className="h-14 px-8 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 rounded-full font-semibold text-base transition-all shadow-[0_0_80px_rgba(255,255,255,0.1)] gap-2"
              >
                <Download className="w-5 h-5" /> Download on the Mac App Store
              </Button>
              <Link
                href="#features"
                className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium underline underline-offset-4"
              >
                See what it does
              </Link>
            </div>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32"
        >
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              Everything runs on your Mac
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
              Open-source AI models, optimized for Apple Silicon. No servers, no
              API keys, no subscriptions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Voice Dictation */}
            <motion.div
              {...fadeIn}
              className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Voice Dictation
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Hold a hotkey, speak, release. Your voice is transcribed and
                typed directly into whatever app you&apos;re using — a text
                editor, a browser, a chat window.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <Keyboard className="w-3.5 h-3.5" /> Push-to-talk
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <Cpu className="w-3.5 h-3.5" /> On-device transcription
                </span>
              </div>
            </motion.div>

            {/* Text-to-Speech */}
            <motion.div
              {...fadeIn}
              className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Volume2 className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Text-to-Speech
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Hear any text read aloud with natural-sounding voice synthesis.
                Consistent quality across long-form content, generated in real
                time on your Mac.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <Volume2 className="w-3.5 h-3.5" /> Natural voice
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <WifiOff className="w-3.5 h-3.5" /> No internet required
                </span>
              </div>
            </motion.div>

            {/* AI Agent */}
            <motion.div
              {...fadeIn}
              className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                AI Agent
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                A local AI agent that can read, write, and edit files on your
                Mac. Interact by voice or text. Extensible through packages and
                plugins — all running privately on-device.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <Bot className="w-3.5 h-3.5" /> Tool-calling
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <Lock className="w-3.5 h-3.5" /> Sandboxed
                </span>
              </div>
            </motion.div>

            {/* Image Generation */}
            <motion.div
              {...fadeIn}
              className="flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <ImageIcon className="w-6 h-6 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-medium mb-3 tracking-tight">
                Image Generation
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed mb-6">
                Create images from text descriptions using on-device diffusion
                models. No waiting for a server, no usage limits, no content
                filtering by a third party.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <ImageIcon className="w-3.5 h-3.5" /> Text-to-image
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-xs text-zinc-400">
                  <Eye className="w-3.5 h-3.5" /> No content filters
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PRIVACY */}
        <section
          id="privacy"
          className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center"
        >
          <motion.div
            {...fadeIn}
            className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8"
          >
            <Shield className="w-8 h-8 text-zinc-300" />
          </motion.div>
          <motion.h2
            {...fadeIn}
            className="text-4xl md:text-5xl font-medium mb-6 tracking-tight"
          >
            Your data never leaves your Mac
          </motion.h2>
          <motion.p
            {...fadeIn}
            className="text-zinc-400 text-lg font-light max-w-xl mb-12"
          >
            Every model runs locally on Apple Silicon. There are no servers to
            trust because there are no servers at all.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left"
          >
            {[
              {
                icon: Cpu,
                text: "All AI inference runs on Apple Silicon",
              },
              {
                icon: WifiOff,
                text: "Works fully offline after initial setup",
              },
              {
                icon: UserX,
                text: "No accounts, no sign-ups, no telemetry",
              },
              {
                icon: EyeOff,
                text: "No cloud, no servers, no API calls",
              },
              {
                icon: Eye,
                text: "Open models you can inspect and replace",
              },
              {
                icon: Lock,
                text: "Sandboxed — your files stay under your control",
              },
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <point.icon className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm leading-relaxed">
                  {point.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* HOW IT WORKS + REQUIREMENTS */}
        <section
          id="how-it-works"
          className="w-full max-w-6xl mx-auto px-6 py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* How it works */}
            <motion.div {...fadeIn} className="flex flex-col">
              <h2 className="text-3xl font-medium mb-8 tracking-tight">
                How it works
              </h2>

              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10" />
                {[
                  {
                    title: "Download",
                    desc: "Get Tesseract Agent from the Mac App Store.",
                  },
                  {
                    title: "First Launch",
                    desc: "AI models download once on first launch. This is the only time the app needs the internet.",
                  },
                  {
                    title: "Grant Permissions",
                    desc: "Allow microphone access for dictation and accessibility access for global hotkeys.",
                  },
                  {
                    title: "Ready",
                    desc: "Everything runs on-device from that point forward. No internet needed.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-6 relative">
                    <div className="w-10 h-10 rounded-full bg-[#030303] border border-white/20 flex items-center justify-center shrink-0 relative z-10 font-medium text-zinc-300">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-zinc-200 font-medium mb-1">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-sm font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div {...fadeIn} className="flex flex-col lg:pl-16">
              <h2 className="text-3xl font-medium mb-8 tracking-tight">
                Requirements
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Apple className="w-6 h-6 text-zinc-400" />
                  <div>
                    <div className="text-zinc-300 font-medium">
                      macOS 26 or later
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <HardDrive className="w-6 h-6 text-zinc-400" />
                  <div>
                    <div className="text-zinc-300 font-medium">
                      Apple Silicon
                    </div>
                    <div className="text-zinc-500 text-sm font-light">
                      M1 or later
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-white/5 py-12 px-6 bg-[#030303]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <NextImage
              src="/icon-64x64.png"
              alt="Tesseract Agent"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm font-medium tracking-tight text-zinc-300">
              tesseract
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/support"
              className="hover:text-zinc-300 transition-colors"
            >
              Support
            </Link>
          </div>

          <div>
            <Button
              variant="outline"
              className="rounded-full border-white/10 hover:bg-white/5 gap-2 text-zinc-300 bg-transparent"
              asChild
            >
              <Link href="#download">
                <Download className="w-4 h-4" /> Mac App Store
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
