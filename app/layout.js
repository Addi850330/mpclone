import { Inter, Roboto, Noto_Sans } from "next/font/google";
import Nav from "./componets/Nav";
import Footer from "./componets/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-roboto",
});
const notosans_init = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  variable: "--font-noto_sans",
});

export const metadata = {
  title: "MAPLE TRAV",
  description: "travel itinerary,  ",
  keywords: "travel, itinerary, Vocabulary, Vacation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${notosans_init.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
