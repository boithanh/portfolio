import "./globals.scss";
import type { Metadata } from "next";


export const metadata: Metadata = {
  openGraph: {
    title: "Bối Thạnh's Portfolio",
    description: "This is my portfolio, thanks you for watching",
    url: "https://boithanh-dev.vercel.app/",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://boithanh-dev.vercel.app/images/finland.jpg",
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
