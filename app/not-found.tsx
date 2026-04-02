import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <div className="text-[150px] md:text-[200px] font-display font-black leading-none tracking-tight-apple gradient-text mb-4">
                    404
                </div>
                <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    Page not found
                </h1>
                <p className="text-white/50 text-lg mb-10">
                    Even JudgyMac can&apos;t judge what doesn&apos;t exist. This page has been slapped into oblivion.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-gradient-to-r from-brand-gold to-amber-500 text-black font-semibold text-lg px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
