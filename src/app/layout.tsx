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
        width: 1485,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bối Thạnh's Portfolio" />
        <meta name="twitter:description" content="Frontend Developer & UI/UX Enthusiast" />
        <meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/boithanh/projectimg/uploads/seo.jpg" />
        <meta property="og:image" content="https://cdn.jsdelivr.net/gh/boithanh/projectimg/uploads/seo.jpg" />
        <meta property="og:image:width" content="1485" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Bối Thạnh's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bối Thạnh's Portfolio" />
        <meta property="og:description" content="Frontend Developer & UI/UX Enthusiast" />
        <meta property="og:url" content="https://boithanh-dev.vercel.app/" />
        <meta name="apple-mobile-web-app-title" content="Bối Thạnh" />
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
