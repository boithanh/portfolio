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
        url: "https://cdn.jsdelivr.net/gh/boithanh/projectimg/uploads/seo.jpg",
        width: 1200,
        height: 630,
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bối Thạnh's Portfolio" />
        <meta name="twitter:description" content="Frontend Developer & UI/UX Enthusiast" />
        <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/boithanh/projectimg/uploads/seo.jpg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="BoiThanh" />
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="BoiThanh" />
        <link rel="apple-touch-icon" sizes="200x200" href="https://cdn.jsdelivr.net/gh/boithanh/projectimg/uploads/icon200.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.jsdelivr.net/gh//boithanh/projectimg/main/uploads/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.jsdelivr.net/gh/boithanh/projectimg/main/uploads/icon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
