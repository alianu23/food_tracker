import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider, FoodProvider } from "@/context";
import { CategoryProvider } from "@/context/category";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CategoryProvider>
            <FoodProvider>
              <ThemeProvider>
                <Navbar />
                {children}
                <Footer />
                <ToastContainer />
              </ThemeProvider>
            </FoodProvider>
          </CategoryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
