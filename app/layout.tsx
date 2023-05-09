import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leashes",
  description: "An ecommerce site made as a sideproject by Nima & Jeppe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${inter.className} bg-stone-600 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="mt-16 text-stone-100">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
