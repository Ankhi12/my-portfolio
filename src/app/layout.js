import "./globals.css"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "./page";

export const metadata = {
  title: "Portfolio",
  description: "Built with Next.js, Tailwind, and Framer Motion",
};

export default function RootLayout({ children }){
    return(
        <html lang="en" className="scroll-smooth bg-slate-900 text-slate-100">
            <body className="flex flex-col min-h-screen antialiased">
                <Navbar/>
                <main className="flex-grow pt-24 pb-12 px-6 max-w-7xl mx-auto w-full">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
