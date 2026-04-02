import {
  Eye,
  Flame,
  Mic,
  ScanEye,
  PersonStanding,
  BarChart3,
  Palette,
  Zap,
  Trophy,
  Download,
  Play,
  Check,
  ChevronDown,
} from "lucide-react";
import ScrollReveal from "./components/ScrollReveal";
import RunningTrump from "./components/RunningTrump";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden">
        {/* Ambient blurs */}
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-500/[0.06] blur-[120px] rounded-full"
          style={{ animation: "subtle-pulse 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand-gold/[0.04] blur-[100px] rounded-full"
          style={{ animation: "subtle-pulse 10s ease-in-out infinite 2s" }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Hero image with glow */}
          <div className="relative inline-block mb-12">
            <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="float relative">
              <img
                src="/hero-trump.png"
                alt="Trump character"
                className="w-56 h-56 md:w-72 md:h-72 mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight-apple mb-8">
            Your MacBook
            <br />
            <span className="gradient-text">Judges You.</span>
            <br />
            <span className="text-white/90">Literally.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto mb-3 font-light leading-relaxed">
            A sassy desktop companion that roasts your bad habits. Opens laptop
            too much? Late night coding? Alt-tab addict?
          </p>
          <p className="text-xl md:text-2xl font-semibold gradient-text-gold mb-12">
            JudgyMac has words. Slap it back. It screams.
          </p>

          <a
            href="/JudgyMac-1.0.0.dmg"
            className="inline-block bg-gradient-to-r from-brand-gold to-amber-500 text-black font-semibold text-lg px-10 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
          >
            Download for Mac — Free
          </a>
          <p className="text-white/20 text-xs mt-4 tracking-wide">
            macOS 14+ &bull; Apple Silicon
          </p>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-24 tracking-tight-apple">
              Three Steps to{" "}
              <span className="gradient-text">Total Judgment</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={1}>
              <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Download
                    className="w-7 h-7 text-blue-400/60"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-blue-400/60 font-display text-5xl font-black tracking-tight-apple">
                    01
                  </span>
                  <h3 className="font-display font-bold text-2xl mt-1 mb-2">
                    Install
                  </h3>
                  <p className="text-white/50 text-lg font-light">
                    Download, open, done. Lives in your menu bar. Zero config.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Eye
                    className="w-7 h-7 text-amber-400/60"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-amber-400/60 font-display text-5xl font-black tracking-tight-apple">
                    02
                  </span>
                  <h3 className="font-display font-bold text-2xl mt-1 mb-2">
                    Use Your Mac
                  </h3>
                  <p className="text-white/50 text-lg font-light">
                    JudgyMac watches. Lid opens, idle time, late nights,
                    overheating — it sees everything.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Flame
                    className="w-7 h-7 text-red-400/60"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-red-400/60 font-display text-5xl font-black tracking-tight-apple">
                    03
                  </span>
                  <h3 className="font-display font-bold text-2xl mt-1 mb-2">
                    Get Roasted
                  </h3>
                  <p className="text-white/50 text-lg font-light">
                    Custom voice roasts from characters like The Donald. Slap
                    back with Cmd+Shift+Click. It screams.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 tracking-tight-apple">
              Not Just a Slap App.
            </h2>
            <p className="text-center text-white/45 text-lg mb-20 max-w-2xl mx-auto font-light">
              JudgyMac is a full desktop companion with personality. It watches,
              judges, roasts, and runs away when you fight back.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="group glass-card rounded-2xl p-8 flex gap-5">
              <Mic
                className="w-7 h-7 text-brand-gold flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Voice Roasts
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  32 unique voice lines per character. Synced text + audio.
                  Every roast hits different.
                </p>
              </div>
            </div>
            <div className="group glass-card rounded-2xl p-8 flex gap-5">
              <ScanEye
                className="w-7 h-7 text-indigo-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  7 Behavior Detectors
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  Lid opens, idle time, late nights, overheating, app switching,
                  screen time, and slaps.
                </p>
              </div>
            </div>
            <div className="group glass-card rounded-2xl p-8 flex gap-5">
              <PersonStanding
                className="w-7 h-7 text-purple-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Desktop Runner
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  Slap enough times and the character falls out of the menu bar,
                  runs across your desktop, and talks back.
                </p>
              </div>
            </div>
            <div className="group glass-card rounded-2xl p-8 flex gap-5">
              <BarChart3
                className="w-7 h-7 text-green-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  RunCat-Style Stats
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  CPU, GPU, RAM in your menu bar. Character runs faster when CPU
                  spikes. Like RunCat, but judgmental.
                </p>
              </div>
            </div>
            <div className="group glass-card rounded-2xl p-8 flex gap-5">
              <Palette
                className="w-7 h-7 text-pink-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Character Packs
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  Multiple personalities with unique voices, roast scripts, and
                  art. Starting with The Donald. More coming.
                </p>
              </div>
            </div>
            <div className="group glass-card rounded-2xl p-8 flex gap-5">
              <Zap
                className="w-7 h-7 text-red-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Slap Physics
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  8 damage levels, comic text effects, squash-stretch
                  animations. KO at 32 hits triggers the Desktop Runner.
                </p>
              </div>
            </div>
            <div className="group glass-card rounded-2xl p-8 flex gap-5 md:col-span-2 md:max-w-[calc(50%-0.625rem)]">
              <Trophy
                className="w-7 h-7 text-amber-400 flex-shrink-0 mt-1"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Slap Milestones
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed font-light">
                  Hit 50, 100, 150 slaps and unlock escalating voice reactions.
                  The more you slap, the more desperate the commentary gets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section id="characters" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 tracking-tight-apple">
              Choose Your <span className="gradient-text">Judge</span>
            </h2>
            <p className="text-center text-white/45 text-lg mb-10 font-light">
              Each character has unique voice lines, roast scripts, and
              personality.
            </p>

            {/* Live menu bar preview */}
            <div className="flex justify-center mb-20">
              <div className="glass-card rounded-2xl px-6 py-3 inline-flex items-center gap-4">
                <RunningTrump className="h-10 w-auto" />
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg" style={{ background: 'linear-gradient(90deg, rgba(90,65,45,0.9), rgba(65,45,75,0.9))' }}>
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-white/50 text-[9px] font-semibold">CPU</span>
                    <span className="text-white/90 text-sm font-bold font-mono">30%</span>
                  </div>
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-white/50 text-[9px] font-semibold">GPU</span>
                    <span className="text-white/90 text-sm font-bold font-mono">53%</span>
                  </div>
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-white/50 text-[9px] font-semibold">RAM</span>
                    <span className="text-white/90 text-sm font-bold font-mono">75%</span>
                  </div>
                </div>
                <span className="text-white/30 text-xs ml-2">Lives in your menu bar</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Trump Pack */}
          <ScrollReveal>
            <div
              className="rainbow-border rounded-3xl p-8 md:p-14 relative"
              style={{
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.6), 0 22px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* US Flag background image — very subtle */}
              <img
                src="/flag-bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none z-[1]"
              />

              {/* Top highlight band — glass edge */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl z-[1]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 5%, transparent 20%)",
                }}
              ></div>
              <div className="relative z-20 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-shrink-0">
                  <img
                    src="/trump-pack.png"
                    alt="The Donald"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-2xl"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-white/[0.06] text-white/50 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-white/[0.06] uppercase tracking-widest">
                    Launch Character
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-3">
                    The Donald
                  </h3>
                  <p className="text-white/70 mb-6 text-base leading-relaxed">
                    &quot;Make slapping great again.&quot; 32 voice lines. 76
                    unique roasts. Covers lid opens, idle time, late nights,
                    thermal, app switching, screen time, and slaps.
                  </p>

                  {/* Sample roasts */}
                  <div className="space-y-3">
                    <p className="text-white/50 italic text-base leading-relaxed">
                      <span className="text-brand-gold">"</span>Nobody sits at a
                      computer longer than you. NOBODY. Get up. NOW.
                      <span className="text-brand-gold">"</span>
                    </p>
                    <p className="text-white/50 italic text-base leading-relaxed">
                      <span className="text-brand-gold">"</span>FAKE SLAP! I
                      barely felt it. Very low energy.
                      <span className="text-brand-gold">"</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Coming Soon packs */}
              <div className="relative z-20 mt-14 pt-8 border-t border-white/[0.08]">
                <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] mb-5">
                  Coming Soon
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl px-6 py-3.5 text-base text-white font-medium flex items-center gap-3">
                    <span className="text-lg">💋</span>
                    <span>Cute Girl</span>
                    <span className="bg-pink-500/30 text-pink-300 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Next
                    </span>
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-5 py-3.5 text-sm text-white/60 flex items-center gap-2.5">
                    <span>👔</span>
                    <span>Toxic Boss</span>
                  </div>
                  <div className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-5 py-3.5 text-sm text-white/60 flex items-center gap-2.5">
                    <span>✨</span>
                    <span>Your Character?</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-40 px-6">
        <div className="max-w-lg mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tight-apple">
              One Price. <span className="gradient-text">All Judgment.</span>
            </h2>
            <p className="text-white/45 text-lg mb-16 font-light">
              No subscriptions. No in-app purchases. No mercy.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl p-10 relative overflow-hidden rainbow-border">
              {/* Badge */}
              <div className="inline-block bg-white/[0.06] text-brand-gold/80 px-4 py-1.5 rounded-full text-xs font-medium mb-8 border border-white/[0.06] uppercase tracking-[0.15em]">
                Lifetime Deal
              </div>

              <div className="text-8xl md:text-9xl font-display font-black mb-2 gradient-text-gold leading-none tracking-tight-apple">
                $5
              </div>
              <p className="text-white/50 mb-10">
                One-time purchase. All updates included.
              </p>

              <ul className="text-left space-y-4 mb-10 max-w-xs mx-auto">
                <li className="flex items-center gap-3 text-white/80 text-base">
                  <Check
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  All behavior detectors
                </li>
                <li className="flex items-center gap-3 text-white/80 text-base">
                  <Check
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  The Donald character pack
                </li>
                <li className="flex items-center gap-3 text-white/80 text-base">
                  <Check
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Desktop Runner animation
                </li>
                <li className="flex items-center gap-3 text-white/80 text-base">
                  <Check
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Menu bar system stats
                </li>
                <li className="flex items-center gap-3 text-white/80 text-base">
                  <Check
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Future character packs
                </li>
                <li className="flex items-center gap-3 text-white/80 text-base">
                  <Check
                    className="w-5 h-5 text-green-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />{" "}
                  Lifetime updates
                </li>
              </ul>

              <a
                href="/JudgyMac-1.0.0.dmg"
                className="block w-full bg-gradient-to-r from-brand-gold to-amber-500 text-black font-semibold text-lg py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.01] mb-3"
              >
                Download for Mac — Free
              </a>
              <a
                href="https://buy.polar.sh/polar_cl_tYhSI5wjf6CChYaHI4fymKXoLkVLWkAMlaoKC0vxNCI"
                className="block w-full border border-white/[0.15] text-white/80 font-semibold text-base py-3.5 rounded-full hover:border-white/[0.3] hover:text-white transition-all duration-300"
              >
                Buy License — $5
              </a>
              <p className="text-white/30 text-xs mt-5">
                Download free &bull; Buy license to unlock all features
              </p>
            </div>
          </ScrollReveal>
          <p className="text-white/50 text-base mt-8">
            Less than a coffee. More fun than your therapist.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-center mb-20 tracking-tight-apple">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div className="space-y-3">
            <details
              className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]"
              open
            >
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>What does JudgyMac actually do?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                JudgyMac is a menu bar app that monitors your Mac usage (lid
                opens, idle time, late nights, etc.) and delivers voice roasts
                from characters like The Donald. You can slap the character back
                with Cmd+Shift+Click. Slap it 32 times and it runs across your
                desktop screaming.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]">
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>What Macs are supported?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                macOS 14 (Sonoma) or later, Apple Silicon (M1/M2/M3/M4). Works
                on MacBook Air, MacBook Pro, Mac Mini, Mac Studio, and iMac.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]">
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>Will this void my warranty?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                No. JudgyMac is a regular macOS app. It doesn&apos;t modify
                system files, access hardware directly, or do anything Apple
                wouldn&apos;t approve of. Your MacBook can handle a slap.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]">
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>Does it drain battery?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                Minimal impact. JudgyMac uses ~0.1% CPU on average. The menu bar
                animation runs at 4Hz (like RunCat). Behavior detection is
                event-driven, not constant polling.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]">
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>Can I turn off specific triggers?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                Yes. Each behavior trigger (lid open, idle, late night, thermal,
                app switch, screen time, slap) can be individually toggled in
                Settings.
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]">
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>Is there a refund policy?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                Yes. If JudgyMac doesn&apos;t judge you hard enough, email
                support@judgymac.com within 14 days for a full refund. No
                questions asked (but we might roast you one last time).
              </div>
            </details>

            <details className="group rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:border-white/[0.08]">
              <summary className="p-6 cursor-pointer font-medium flex justify-between items-center text-base">
                <span>Will there be more characters?</span>
                <ChevronDown
                  className="w-5 h-5 text-white/20 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="faq-content px-6 pb-6 text-white/60 text-base leading-relaxed font-light">
                Yes! Cute Girl is next up, followed by Toxic Boss and more
                community-suggested characters. All future character packs are
                included in your purchase.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight-apple">
            Ready to be judged?
          </h2>
          <p className="text-white/45 text-lg mb-12 font-light max-w-lg mx-auto">
            Your MacBook already thinks you&apos;re doing it wrong. Now it can
            say it out loud.
          </p>
          <a
            href="/JudgyMac-1.0.0.dmg"
            className="inline-block bg-gradient-to-r from-brand-gold to-amber-500 text-black font-semibold text-lg px-12 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
          >
            Download JudgyMac — Free
          </a>
        </div>
      </section>

      {/* Parody Disclaimer */}
      <section id="disclaimer" className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/40 text-sm leading-relaxed text-center">
            <span className="font-medium text-white/50">
              Parody &amp; Satire Notice
            </span>{" "}
            — JudgyMac is a parody and satirical entertainment product. All
            character voices are AI-generated and clearly fictional. This
            product is not affiliated with, endorsed by, or associated with any
            real person, living or dead. All character likenesses are original
            caricature artwork created for comedic purposes. Use of any public
            figure&apos;s persona is protected under parody and fair use
            provisions of the First Amendment. No actual statements by any real
            person are used. This is a work of humor and creative expression.
          </p>
        </div>
      </section>
    </>
  );
}
