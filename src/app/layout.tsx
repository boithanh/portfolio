import SupportProvider from "@/redux/SupportProvider";
import "./globals.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://boithanh-dev.vercel.app"),
  title: "Bối Thạnh's Portfolio",
  description: "This is my portfolio, thanks you for watching",
  openGraph: {
    url: "https://boithanh-dev.vercel.app/",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://boithanh-dev.vercel.app/images/seo.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Bối Thạnh Portfolio",
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
        <meta property="og:title" content="Bối Thạnh's Portfolio" />
        <meta property="og:description" content="Thank you for watching" />
        <meta property="og:image" content="https://boithanh-dev.vercel.app/images/seo.jpg" />
        <meta property="og:url" content="https://boithanh-dev.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bối Thạnh's Portfolio" />
        <meta name="twitter:description" content="Thank you for watching" />
        <meta name="twitter:image" content="https://boithanh-dev.vercel.app/images/seo.jpg" />
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
