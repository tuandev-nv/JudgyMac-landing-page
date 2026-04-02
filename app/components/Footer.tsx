import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.04] py-8 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-white/45 text-[15px]">&copy; 2026 JudgyMac. All rights reserved.</span>
                <div className="flex gap-6 text-[15px] text-white/45">
                    <a href="mailto:support@judgymac.xyz" className="hover:text-white/80 transition-colors duration-300">Support</a>
                    <Link href="/privacy" className="hover:text-white/80 transition-colors duration-300">Privacy</Link>
                    <Link href="/terms" className="hover:text-white/80 transition-colors duration-300">Terms</Link>
                    <a href="/#disclaimer" className="hover:text-white/80 transition-colors duration-300">Parody Notice</a>
                    <a href="https://twitter.com/judgymac" className="hover:text-white/80 transition-colors duration-300">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
