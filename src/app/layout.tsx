import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = {
  title: "YC Launch Monitor — Early YC + Speedrun",
  description: "Tracks new YC and Speedrun companies with Slack alerts, dedup and state",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className={`${inter.className} ${mono.variable} bg-background`}>{children}</body></html>;
}
