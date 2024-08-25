import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Look at my portfolio to understand my work experiences",
};

// export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header/>
//         <div className="min-h-[70vh]">
//           {children}
//         </div>
//         <Footer/>
//       </body>
//     </html>
//   );
// }

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-bodyBackground">
            <Header />
            <div className="min-h-[100vh]">{children}</div>
            <Footer />
      </body>
    </html>
  );
}


