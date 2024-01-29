import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
