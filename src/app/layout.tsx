import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { cn } from "@/lib";
import localFont from "next/font/local";
import { Italiana } from "next/font/google";
import { Providers } from "@/components/providers";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italiana",
});

const customFont = localFont({
  src: [
    {
      path: "../../public/fonts/TAN-Garland-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-custom",
});

const kapakanaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Kapakana-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-kapakana",
});

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${customFont.variable} ${kapakanaFont.variable} ${italiana.variable}`}
    >
      <body
        className={cn(
          "min-h-screen bg-[#101010] text-foreground antialiased overflow-x-hidden dark",
          italiana.className,
        )}
      >
        <Providers>
          <Toaster richColors theme="dark" position="bottom-center" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
