import type { Metadata } from "next";
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import SupportProvider from "@/redux/SupportProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://boithanh-dev.vercel.app"),
  title: "Bối Thạnh's Portfolio",
  description: "Frontend Developer & UI/UX Enthusiast",
  openGraph: {
    url: "https://boithanh-dev.vercel.app/",
    siteName: "Thạnh's Portfolio",
    images: [
      {
        url: "https://boithanh-dev.vercel.app/manifest-512x512",
        width: 512,
        height: 512,
      },
    ],
    locale: "vi_VN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Bối Thạnh" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SupportProvider>
          {children}
        </SupportProvider>
      </body>
    </html>
  );
}

