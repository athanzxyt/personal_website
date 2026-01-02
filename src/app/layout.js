import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Athan Zhang",
  description: "Athan's Personal Website",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-10 sm:px-8">
          <Navbar />
          <main className="mt-10 flex-1">{children}</main>
          <footer className="mt-12 text-xs text-neutral-400">© {year} Athan Zhang</footer>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
