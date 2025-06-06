import Header from "@/components/Header";
import "@/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s /The Wild Oasis",
    default: "Welcome /The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased flex flex-col bg-primary-900 text-primary-100  `}>
        <div className="min-h-screen relative">
          <Header />

          <div className="flex-1 px-8 py-12">
            <main className="mx-auto max-w-7xl">{children}</main>
          </div>
        </div>
        <footer className="bg-primary-800 text-center py-5">
          <p>&copy;2025 Copyright by The Wild Oasis</p>
        </footer>
      </body>
    </html>
  );
}
