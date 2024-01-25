import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
