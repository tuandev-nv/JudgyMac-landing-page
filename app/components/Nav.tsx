import Link from "next/link";

export default function Nav() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/[0.12]">
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <img src="/trump-pack.png" alt="JudgyMac" className="w-10 rounded-lg group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-display font-semibold text-[15px] text-white/90">JudgyMac</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-[15px] text-white/70">
                    <a href="/#features" className="hover:text-white transition-colors duration-300">Features</a>
                    <a href="/#characters" className="hover:text-white transition-colors duration-300">Characters</a>
                    <a href="/#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
                    <a href="/#faq" className="hover:text-white transition-colors duration-300">FAQ</a>
                </div>
                <a href="/#pricing" className="bg-gradient-to-r from-brand-gold to-amber-500 text-black font-semibold text-sm px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02]">
                    Download
                </a>
            </div>
        </nav>
    );
}
