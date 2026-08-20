import "./globals.css";

export const metadata = {
  title: "Claudine & Eustache — 22 Kanama 2026",
  description: "Twishimiye kubatumira mubukwe bwa Claudine Mutesi na Habiyaremye Eustache (Habibu) — 22 Kanama 2026.",
  openGraph: {
    title: "Claudine & Eustache — Ubutumire 💍",
    description: "Twishimiye kubatumira mubukwe bwa Claudine na Habibu — 22 Kanama 2026.",
    url: "https://weeding-of-c-e.vercel.app",
    siteName: "Claudine & Eustache Wedding",
    images: [
      {
        url: "https://weeding-of-c-e.vercel.app/ce.png",
        width: 800,
        height: 800,
        alt: "Claudine na Eustache",
      },
    ],
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="rw">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Marcellus&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
