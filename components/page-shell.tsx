import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#030303] text-zinc-100 overflow-hidden font-sans selection:bg-zinc-800 selection:text-zinc-100">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon-64x64.png"
            alt="Tesseract Agent"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-medium tracking-tight">tesseract</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <Link href="/#features" className="hover:text-zinc-100 transition-colors">
            Features
          </Link>
          <Link href="/#privacy" className="hover:text-zinc-100 transition-colors">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-zinc-100 transition-colors">
            Support
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

      {/* Content */}
      <main className="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/5 py-12 px-6 bg-[#030303]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon-64x64.png"
              alt="Tesseract Agent"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm font-medium tracking-tight text-zinc-300">
              tesseract
            </span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/support" className="hover:text-zinc-300 transition-colors">
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
