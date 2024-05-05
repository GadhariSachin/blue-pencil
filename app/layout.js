import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blue Pencil",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
