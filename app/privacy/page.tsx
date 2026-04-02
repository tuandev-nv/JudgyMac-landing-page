import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy — JudgyMac",
    description: "JudgyMac Privacy Policy. We don't collect your data. Everything runs locally on your Mac.",
};

export default function PrivacyPage() {
    return (
        <main className="pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-white/40 text-sm mb-12">Last updated: April 1, 2026</p>

                <div className="space-y-10 text-white/70 leading-relaxed">

                    <section className="glass rounded-2xl p-6" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                        <h2 className="font-display text-xl font-bold text-white mb-3">TL;DR</h2>
                        <p className="text-white/80">JudgyMac does not track you, does not collect analytics, and does not sell your data. All accelerometer, behavior detection, and system monitoring data is processed entirely on your device. There are no analytics SDKs, no tracking pixels, and no third-party data collection of any kind embedded in JudgyMac.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">1. Data We Do Not Collect</h2>
                        <p>JudgyMac does not collect, transmit, or store:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>Personal information (name, email, address)</li>
                            <li>Usage analytics or telemetry</li>
                            <li>Accelerometer or motion data</li>
                            <li>Crash reports</li>
                            <li>Location data</li>
                            <li>Browsing or app usage history</li>
                            <li>Keystroke logging or screen recording</li>
                            <li>Photos, files, or documents</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">2. On-Device Processing</h2>
                        <p>All behavior detection — lid opens, idle time, late nights, thermal monitoring, app switching, screen time, and slap detection via accelerometer — runs <strong className="text-white">entirely on your Mac</strong>. This data never leaves your device and is not stored beyond the moment it is used.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">3. Local Storage</h2>
                        <p>JudgyMac stores your preferences (sensitivity, enabled triggers, selected character pack, volume, etc.) and license key locally on your Mac using standard macOS UserDefaults. This data stays on your machine and is never uploaded or synced anywhere.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">4. Network Requests</h2>
                        <p>JudgyMac makes exactly one type of network request:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li><strong className="text-white">License validation</strong>: Sends only your license key to Polar.sh&apos;s API for activation and periodic revalidation. No personal information, device identifiers, or usage data is included.</li>
                        </ul>
                        <p className="mt-3">That&apos;s it. No other network requests are made.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">5. Hardware Access</h2>
                        <p>JudgyMac accesses:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li><strong className="text-white">Accelerometer</strong>: Detects physical slaps via the built-in IMU sensor. Requires running outside macOS sandbox.</li>
                            <li><strong className="text-white">Audio output</strong>: Plays voice lines and sound effects via AVFoundation. No microphone access.</li>
                            <li><strong className="text-white">System stats</strong>: Reads CPU, GPU, and RAM usage for the menu bar display.</li>
                        </ul>
                        <p className="mt-3">JudgyMac does <strong className="text-white">not</strong> access your camera, microphone, location, contacts, photos, calendar, Bluetooth, or any accessibility features.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li><strong className="text-white">Polar.sh</strong>: Payment processing and license key management. Polar.sh has its own <a href="https://polar.sh/legal/privacy" className="text-brand-gold hover:underline">privacy policy</a> that governs how they handle your payment information during checkout.</li>
                            <li><strong className="text-white">ElevenLabs</strong>: Voice clips were generated using ElevenLabs. There is no runtime connection — all audio is bundled locally within the app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
                        <p>JudgyMac is not directed at children under 13 and does not knowingly collect any information from children. Since the app collects no personal data at all, this is not applicable.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                        <p>If we ever change this privacy policy, we will update the &quot;Last updated&quot; date at the top of this page. Given that we don&apos;t collect data, changes are unlikely — but if they happen, we&apos;ll keep you informed.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">9. Contact</h2>
                        <p>Questions about this privacy policy? Reach out at <a href="mailto:support@judgymac.xyz" className="text-brand-gold hover:underline">support@judgymac.xyz</a>.</p>
                    </section>

                </div>
            </div>
        </main>
    );
}
