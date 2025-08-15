import Link from "next/link";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ display: "flex", height: "100vh", flexDirection: "column" }}
      >
        <Header />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
