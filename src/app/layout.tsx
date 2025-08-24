import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "CabMap",
  description: "Resolve addresses and book cabs easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="pt-6">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
