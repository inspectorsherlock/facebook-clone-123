import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FriendSuggestions from "./components/FriendSuggestions"; // Import the new component
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

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
  title: "Facebook Clone",
  description: "A simple Facebook clone with posting functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="ml-72 mt-16 p-4 flex-1 flex justify-between">
              <div className="flex-1">{children}</div>
              <FriendSuggestions /> {/* Add the FriendSuggestions component */}
            </main>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
