import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { LogoProvider } from "@/context/LogoContext";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Logofy",
  description: "AI logo genrator app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <LogoProvider>
          <Provider>{children}</Provider>
        </LogoProvider>
      </body>
    </html>
  );
}
