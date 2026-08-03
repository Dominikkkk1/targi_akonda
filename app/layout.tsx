import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Akonda | Dni Otwarte Maszyn Introligatorskich oraz Ploterów – Warszawa 27–28 Sierpnia",
  description:
    "Dni Otwarte w drukarni Market Print Global w Warszawie. Plotery iEcho PK 0705+ i AK4, Multigraf CF375 Xpro, 365bind Smart, oklejarki, foliarki i linie broszurujące. 27–28 sierpnia 2026.",
  openGraph: {
    title: "Akonda | Dni Otwarte Maszyn Introligatorskich oraz Ploterów – Warszawa 27–28 Sierpnia",
    description:
      "Dni Otwarte w drukarni Market Print Global w Warszawie. Plotery iEcho PK 0705+ i AK4, Multigraf CF375 Xpro, 365bind Smart, oklejarki, foliarki i linie broszurujące. 27–28 sierpnia 2026.",
    type: "website",
    images: ["/spodek-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="pl" className="overflow-x-hidden">
      <head>
        {pixelId && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${pixelId}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </head>
      <body className={`${montserrat.variable} ${montserrat.className} antialiased bg-white text-gray-900 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
