import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
  description: "Beautiful cabins in the woods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-900 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy;2025 Copyright by The Wild Oasis</p>
        </footer>
      </body>
    </html>
  );
}
