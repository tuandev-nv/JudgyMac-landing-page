import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Use — JudgyMac",
    description: "JudgyMac Terms of Use. One-time purchase, entertainment software, parody product.",
};

export default function TermsPage() {
    return (
        <main className="pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
                <p className="text-white/40 text-sm mb-12">Last updated: April 1, 2026</p>

                <div className="space-y-10 text-white/70 leading-relaxed">

                    <section className="glass rounded-2xl p-6" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                        <h2 className="font-display text-xl font-bold text-white mb-3">TL;DR</h2>
                        <p className="text-white/80">The software won&apos;t harm your Mac — but your hands might. If you break your laptop, that&apos;s on you. Something not working? We&apos;ll fix it or refund it. Slapped too hard? Take it up with Apple.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                        <p>By purchasing, downloading, or using JudgyMac (&quot;the App&quot;), you agree to be bound by these Terms of Use. If you do not agree, do not use the App.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">2. Age Requirement</h2>
                        <p>You must be at least <strong className="text-white">18 years old</strong> to use JudgyMac. Some voice packs contain adult-oriented humor and language.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">3. Description of Service</h2>
                        <p>JudgyMac is a desktop entertainment application that detects physical impacts via the MacBook accelerometer and monitors Mac usage patterns (idle time, lid opens, late nights, etc.) to deliver humorous voice roasts and animations. It is designed <strong className="text-white">purely for entertainment</strong> and is not a productivity tool, system monitor, or diagnostic utility.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">4. Hardware Disclaimer</h2>
                        <p className="mb-3">You use JudgyMac <strong className="text-white">entirely at your own risk</strong>. The App encourages users to physically interact with their MacBook (slapping). The developer expressly disclaims any and all responsibility for damage to your hardware, including but not limited to:</p>
                        <ul className="list-disc list-inside space-y-2 text-white/60">
                            <li>Cracked, broken, or scratched displays</li>
                            <li>Damaged hinges, enclosures, or internal components</li>
                            <li>Malfunctioning keyboards, trackpads, or sensors</li>
                            <li>Voided manufacturer warranties</li>
                            <li>Data loss resulting from physical impact</li>
                            <li>Any other physical or functional damage to your device</li>
                        </ul>
                        <p className="mt-3">While the software itself cannot do any harm, slapping can. By using JudgyMac, you acknowledge that striking a computer is inherently risky and that you are <strong className="text-white">solely responsible</strong> for any consequences that arise from doing so.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">5. Assumption of Risk</h2>
                        <p>By using the slap detection feature, you acknowledge and accept all risks associated with deliberately applying physical force to your MacBook. You understand that the developer has no control over the force, frequency, or manner of your interactions with your device.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">6. License</h2>
                        <p>Upon purchase, you receive a personal, non-transferable license to use JudgyMac on up to <strong className="text-white">3 (three) devices</strong> that you own. This is a one-time purchase — no subscriptions, no recurring fees.</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>One license key covers up to 3 Macs</li>
                            <li>License is for personal, non-commercial use</li>
                            <li>You may not redistribute, resell, or share your license key</li>
                            <li>All future updates are included at no extra cost</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">7. Parody &amp; Satire</h2>
                        <p>JudgyMac is a <strong className="text-white">parody and satirical product</strong>. All character voices are AI-generated and clearly fictional. The App is not affiliated with, endorsed by, or associated with any real person, living or dead. All character likenesses are original caricature artwork created for comedic purposes. Use of any public figure&apos;s persona is protected under parody and fair use provisions.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">8. No Warranty</h2>
                        <p>JudgyMac is provided <strong className="text-white">&quot;as is&quot;</strong> without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
                        <p>In no event shall the developer be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of JudgyMac. The developer&apos;s total liability shall not exceed the amount you paid for the App.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">10. Social &amp; Professional Consequences</h2>
                        <p>The developer is not responsible for any social or professional consequences arising from your use of JudgyMac, including but not limited to employment termination, disciplinary action, or reputational harm resulting from using the App in inappropriate settings.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">11. Indemnification</h2>
                        <p>You agree to indemnify and hold harmless the developer from any claims, damages, losses, or expenses arising from your use of JudgyMac, including any damage to hardware or third-party claims.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">12. Refund Policy</h2>
                        <p>If the App doesn&apos;t work on your supported device, email <a href="mailto:support@judgymac.xyz" className="text-brand-gold hover:underline">support@judgymac.xyz</a> and we&apos;ll make it right — fix or refund. No refunds for hardware damage, broken screens, or hurt feelings from particularly savage roasts.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">13. System Requirements</h2>
                        <p>JudgyMac requires <strong className="text-white">macOS 14 (Sonoma)</strong> or later on <strong className="text-white">Apple Silicon</strong> (M1/M2/M3/M4). The accelerometer-based slap detection requires running outside the macOS App Sandbox.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">14. Acceptable Use</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>Reverse engineer, decompile, or disassemble the App</li>
                            <li>Redistribute or share the App or your license key</li>
                            <li>Use the App for any unlawful purpose</li>
                            <li>Attempt to bypass or circumvent the license validation system</li>
                            <li>Create derivative works based on the App</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">15. Intellectual Property</h2>
                        <p>All content in JudgyMac — including artwork, voice lines, animations, character designs, and software code — is the intellectual property of JudgyMac and is protected by applicable copyright laws.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">16. Privacy</h2>
                        <p>JudgyMac does not collect personal data. All behavior detection and accelerometer data is processed locally on your device. For full details, see our <Link href="/privacy" className="text-brand-gold hover:underline">Privacy Policy</Link>.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">17. Changes to Terms</h2>
                        <p>We may update these Terms of Use from time to time. The updated version will be indicated by the &quot;Last updated&quot; date at the top of this page. Continued use of the App after changes constitutes acceptance of the new terms.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">18. Governing Law</h2>
                        <p>These terms shall be governed by and construed in accordance with the laws of the developer&apos;s jurisdiction, without regard to conflict of law provisions.</p>
                    </section>

                    <section>
                        <h2 className="font-display text-xl font-bold text-white mb-3">19. Contact</h2>
                        <p>Questions about these terms? Reach out at <a href="mailto:support@judgymac.xyz" className="text-brand-gold hover:underline">support@judgymac.xyz</a>.</p>
                    </section>

                </div>
            </div>
        </main>
    );
}
