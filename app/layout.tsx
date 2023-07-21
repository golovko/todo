import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDoIt",
  description: "next.js demo todo app",
};

export default function RootLayout(
  {
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <SessionProvider>
        <body className={inter.className}>
          <div className="App">
            <header className="app-header">
              <Navbar />
            </header>
            <main className="main">{children}</main> 
            <footer className="app-footer">
              <Footer />
            </footer>
          </div>
        </body>
        </SessionProvider>

    </html>
  );
}

