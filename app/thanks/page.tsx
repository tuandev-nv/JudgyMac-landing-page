"use client";

import { DOWNLOAD_URL } from "../constants";
import { Download, Mail } from "lucide-react";

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="text-6xl">🎉</div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-white">
            Thank You, Tremendous!
          </h1>
          <p className="text-white/60 text-lg">
            Your MacBook is about to get a lot more judgmental.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2 justify-center">
            <Mail size={20} className="text-purple-400" />
            <span className="text-white font-semibold">Check your email</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            We&apos;ve sent your <strong className="text-white">license key</strong> to your email.
            Open the email from Lemon Squeezy and copy your key.
          </p>
          <p className="text-white/40 text-xs">
            Don&apos;t see it? Check your spam folder or contact support@judgymac.xyz
          </p>
        </div>

        {/* Get Started Steps */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left space-y-4">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wider">
            Get Started
          </h2>
          <div className="space-y-3">
            <Step number={1}>
              <a href={DOWNLOAD_URL} className="text-purple-400 hover:text-purple-300 underline">
                Download JudgyMac
              </a>{" "}
              and open it
            </Step>
            <Step number={2}>
              Click the <strong className="text-white">JudgyMac icon</strong> in your menu bar
            </Step>
            <Step number={3}>
              Go to <strong className="text-white">Settings</strong> and paste your license key
            </Step>
          </div>
        </div>

        <a
          href={DOWNLOAD_URL}
          className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors"
        >
          <Download size={18} />
          Download JudgyMac
        </a>
      </div>
    </main>
  );
}

function Step({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600/30 text-purple-400 flex items-center justify-center text-xs font-bold">
        {number}
      </div>
      <p className="text-white/70 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
