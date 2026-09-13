import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Entity Studios — Discord experiences, built differently.",
    template: "%s — Entity Studios",
  },
  description:
    "Entity Studios builds powerful Discord bots, communities, and digital experiences designed to make your server better.",
  metadataBase: new URL("https://entitystudios.example"),
  openGraph: {
    type: "website",
    siteName: "Entity Studios",
    title: "Entity Studios — Discord experiences, built differently.",
    description: "Powerful Discord bots, communities, and digital experiences.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
