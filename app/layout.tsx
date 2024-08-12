import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

import {Providers} from "./providers";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Next.js Playground",
  description: "Created by Erlend Kyrkjerud Hårtveit for fun and learning purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={raleway.className}>
        <Providers>
            <Toaster position="bottom-center" toastOptions={{
              icon: '🛤'
            }} />
            {children}
        </Providers>
      </body>
    </html>
  );
}
