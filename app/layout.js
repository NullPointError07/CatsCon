import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const Roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "CatsEzy",
  description: "Cat Video Uploading Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Roboto.className}>
        <Provider>
          <Navbar /> {children}
        </Provider>
      </body>
    </html>
  );
}
