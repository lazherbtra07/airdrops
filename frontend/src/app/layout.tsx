import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CustomApolloProvider from "@/components/Other/ApolloProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AirDrop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`w-[80%] ml-[10%] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomApolloProvider>
          <Header />
          {children}
          <Footer />
        </CustomApolloProvider>
      </body>
    </html>
  );
}
