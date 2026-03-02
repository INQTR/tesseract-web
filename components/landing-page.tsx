"use client";

import { motion } from "framer-motion";
import {
  Command,
  Mic,
  Sparkles,
  Volume2,
  Shield,
  Apple,
  CheckCircle2,
  Download,
  Brain,
  HardDrive,
  ListTodo,
  Activity,
  Bell,
} from "lucide-react";
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
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]"></div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-zinc-100 to-zinc-400 flex items-center justify-center">
            <Command className="w-5 h-5 text-zinc-900" />
          </div>
          <span className="text-xl font-medium tracking-tight">tesseract</span>
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
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
          >
            Download
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
              <span>Designed for Apple Silicon</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mb-8 text-zinc-100">
              Tesseract.
              <br />
              <span className="text-zinc-600">Agent, for your mind.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 font-light leading-snug">
              Built to help you thrive. A personal AI agent that understands
              you, keeps you accountable, and helps you build the life you
              actually want.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                size="lg"
                className="h-14 px-8 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 rounded-full font-semibold text-base transition-all shadow-[0_0_80px_rgba(255,255,255,0.1)] gap-2"
              >
                <Download className="w-5 h-5" /> Download for macOS
              </Button>
              <Link
                href="#how-it-works"
                className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium underline underline-offset-4"
              >
                See how it works
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SECTION 1 - Personal AI Assistant */}
        <section
          id="features"
          className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-zinc-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
                An AI that actually knows you
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                Tesseract is a personal assistant that runs entirely on your
                Mac. It remembers your preferences, tracks your goals, helps you
                build habits, and sets reminders — across every conversation.
                Talk to it by voice or text. Everything it learns about you
                stays on your machine.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: Brain, text: "Remembers you across conversations" },
                { icon: ListTodo, text: "Tracks goals and tasks" },
                { icon: Activity, text: "Builds and monitors habits" },
                { icon: Sparkles, text: "Logs mood over time" },
                { icon: Bell, text: "Sets local reminders" },
                { icon: Mic, text: "Voice and text input" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/2 border border-white/5 backdrop-blur-sm"
                >
                  <item.icon className="w-5 h-5 text-zinc-400" />
                  <span className="text-zinc-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 & 3 - Dictation & TTS */}
        <section className="w-full max-w-6xl mx-auto px-6 py-24 border-y border-white/5 bg-white/0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Dictation */}
            <motion.div {...fadeIn} className="flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-zinc-300" />
              </div>
              <h2 className="text-3xl font-medium mb-4 tracking-tight">
                Speak. It types.
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Hold a hotkey, talk, release. Your voice is transcribed
                instantly and typed directly into whatever app you're using — a
                text editor, a browser, a chat window. Push-to-talk means it
                only listens when you ask it to.
              </p>
            </motion.div>

            {/* Text-to-Speech */}
            <motion.div {...fadeIn} className="flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Volume2 className="w-6 h-6 text-zinc-300" />
              </div>
              <h2 className="text-3xl font-medium mb-4 tracking-tight">
                Natural voice, generated on your Mac
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Hear any text read aloud with natural-sounding speech synthesis
                — consistent voice even across long-form content. Real-time
                generation, no internet required.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - Privacy */}
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
            Your data never leaves your device
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full text-left"
          >
            {[
              "Every model runs locally on Apple Silicon",
              "No cloud, no servers, no API calls",
              "No accounts, no sign-ups, no telemetry",
              "No subscriptions — buy once",
              "Open models you can inspect",
              "Works fully offline after one-time model download",
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/2 border border-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300 text-sm leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SECTION 5 & 6 - How it works & Requirements */}
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
                <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10"></div>
                {[
                  {
                    title: "Download",
                    desc: "Download Tesseract from the Mac App Store.",
                  },
                  {
                    title: "First Launch",
                    desc: "Models download once on first launch.",
                  },
                  {
                    title: "Ready",
                    desc: "Everything runs on-device from that point — no internet needed.",
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
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/2 border border-white/5">
                  <Apple className="w-6 h-6 text-zinc-400" />
                  <div>
                    <div className="text-zinc-300 font-medium">
                      macOS 26 or later
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/2 border border-white/5">
                  <HardDrive className="w-6 h-6 text-zinc-400" />
                  <div>
                    <div className="text-zinc-300 font-medium">
                      Apple Silicon
                    </div>
                    <div className="text-zinc-500 text-sm font-light">
                      M1 processor or later
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
            <div className="w-6 h-6 rounded-md bg-linear-to-br from-zinc-100 to-zinc-400 flex items-center justify-center">
              <Command className="w-3.5 h-3.5 text-zinc-900" />
            </div>
            <span className="text-sm font-medium tracking-tight text-zinc-300">
              tesseract
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Support
            </Link>
          </div>

          <div>
            <Button
              variant="outline"
              className="rounded-full border-white/10 hover:bg-white/5 gap-2 text-zinc-300 bg-transparent"
            >
              <Download className="w-4 h-4" /> Mac App Store
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
