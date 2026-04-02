import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: {
        default: "JudgyMac — Your MacBook Judges You. Literally.",
        template: "%s — JudgyMac",
    },
    description: "A sassy desktop companion that roasts your bad habits. Opens laptop too much? Late night coding? JudgyMac has words. Slap it back. It screams. $5 one-time purchase.",
    keywords: ["macOS app", "menu bar app", "desktop companion", "roast", "slap", "MacBook", "RunCat alternative", "Trump", "parody", "Apple Silicon"],
    authors: [{ name: "JudgyMac" }],
    creator: "JudgyMac",
    metadataBase: new URL("https://judgymac.xyz"),
    openGraph: {
        title: "JudgyMac — Your MacBook Judges You. Literally.",
        description: "A sassy desktop companion that roasts your bad habits. Slap it back. It screams. $5 one-time purchase.",
        type: "website",
        url: "https://judgymac.xyz",
        siteName: "JudgyMac",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "JudgyMac — Your MacBook Judges You",
            },
        ],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "JudgyMac — Your MacBook Judges You. Literally.",
        description: "A sassy desktop companion that roasts your bad habits. Slap it back. It screams.",
        images: ["/og-image.png"],
        creator: "@judgymac",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="text-white font-body antialiased relative">
                <div className="relative z-10">
                    <Nav />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
