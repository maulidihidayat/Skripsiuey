import { Background } from "@/components/Background";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { ThemeProvider } from "@/components/ui/Theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hmps Pendidikan Informatika | Universitas Hamzanwadi",
  description: "Berinovasi, Berkontribusi dan Berprestasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} antialiased`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutProvider>{children}</LayoutProvider>
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  );
}
