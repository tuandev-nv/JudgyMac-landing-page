"use client";

import { DOWNLOAD_URL } from "../constants";
import { Download, Copy, Check, Key, Loader2, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThanksPage() {
  const [copied, setCopied] = useState(false);
  const [licenseKey, setLicenseKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("customer_session_token");

    if (token) {
      setHasToken(true);
      setLoading(true);
      fetchLicenseKey(token);
    }
  }, []);

  async function fetchLicenseKey(token: string) {
    try {
      const res = await fetch(
        "https://api.polar.sh/v1/customer-portal/license-keys/",
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        setError("Could not fetch license key. Please check your email or contact support.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      const keys = data.items || [];

      if (keys.length > 0) {
        setLicenseKey(keys[0].key);
      } else {
        setError("No license key found. It may take a moment — try refreshing.");
      }
    } catch {
      setError("Network error. Please try refreshing the page.");
    }
    setLoading(false);
  }

  function copyKey() {
    if (!licenseKey) return;
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

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

        {hasToken ? (
          <>
            {/* License Key */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              {loading ? (
                <div className="flex items-center justify-center gap-2 py-4">
                  <Loader2 size={20} className="animate-spin text-purple-400" />
                  <span className="text-white/50 text-sm">Fetching your license key...</span>
                </div>
              ) : licenseKey ? (
                <>
                  <div className="flex items-center gap-2 justify-center">
                    <Key size={16} className="text-purple-400" />
                    <span className="text-white/50 text-xs uppercase tracking-wider font-semibold">
                      Your License Key
                    </span>
                  </div>
                  <div
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between gap-3 cursor-pointer hover:border-purple-500/50 transition-colors"
                    onClick={copyKey}
                  >
                    <code className="text-white font-mono text-sm break-all select-all">
                      {licenseKey}
                    </code>
                    <button className="flex-shrink-0 text-white/50 hover:text-white transition-colors">
                      {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-green-400 text-xs">Copied to clipboard!</p>
                  )}
                </>
              ) : (
                <p className="text-white/50 text-sm py-2">{error}</p>
              )}
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
          </>
        ) : (
          /* No token — just purchased, redirected from checkout */
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-2 justify-center">
              <Mail size={20} className="text-purple-400" />
              <span className="text-white font-semibold">Check your email</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              We&apos;ve sent a confirmation email with a link to access your license key.
              Click <strong className="text-white">&quot;Access purchase&quot;</strong> in the email to get your key.
            </p>
            <p className="text-white/40 text-xs">
              Don&apos;t see it? Check your spam folder.
            </p>
          </div>
        )}
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
