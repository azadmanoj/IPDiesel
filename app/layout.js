import { Inter } from "next/font/google"; // Using Inter font for better readability
import Header from "@/components/Header"; // Import Header
import Footer from "@/components/Footer"; // Import Footer
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Indore Punjab Diesel - Diesel Engine Solutions",
  description: "Expert diesel fuel injection, turbocharger repair, and genuine spares in Indore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Removed bg-gray-50. Background is now controlled by var(--background) in globals.css */}
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header /> {/* Add Header */}
        <main className="flex-grow"> {/* Ensure main content takes available space */}
          {children}
        </main>
        <Footer /> {/* Add Footer */}
      </body>
    </html>
  );
}
