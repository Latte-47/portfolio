import type { Metadata } from "next";
import "./scss/_globals.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Viplav Kamble | Front-end Developer",
  description: "Hi, I'm a front-end dev.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="./favicon.ico" />
      </head>
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
