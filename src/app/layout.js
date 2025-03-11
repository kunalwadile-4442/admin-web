"use client";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar"; // ✅ Navbar
import Footer from "@/components/Footer"; // ✅ Footer

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextProvider>
          <Navbar /> {/* ✅ Navbar is now common across all pages */}
          <main className="min-h-screen">{children}</main> {/* Ensures content fills the screen */}
          <Footer /> {/* ✅ Footer is now common across all pages */}
        </AuthContextProvider>
      </body>
    </html>
  );
}
