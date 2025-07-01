import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
