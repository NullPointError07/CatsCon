import Navbar from "@/components/Navbar";
// import Provider from "@/components/Provider";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const Roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "CatsCon",
  description: "Cat Video Uploading Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Roboto.className}>
        <AuthProvider>
          <Navbar /> {children}
        </AuthProvider>
      </body>
    </html>
  );
}
