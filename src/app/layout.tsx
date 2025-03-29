import "./globals.scss";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Bối Thạnh's Portfolio",
  description: "This is my portfolio, thanks you for watching",
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
