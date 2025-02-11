import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import LoadingWrapper from "./components/LoadingWrapper";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
const rubik = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "C-Tek Tutoring Platform",
  description: "Your gateway into tech...",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <SessionProvider session={session}>
          <LoadingWrapper>
            <Navbar />
            {children}
            <Footer />
          </LoadingWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
