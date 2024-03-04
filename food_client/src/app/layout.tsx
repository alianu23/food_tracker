import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider, FoodProvider } from "@/context";
import { CategoryProvider } from "@/context/category";
import BasketProvider from "@/context/basket";
import { OrderProvider } from "@/context/order";

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
              <BasketProvider>
                <OrderProvider>
                  <ThemeProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <ToastContainer />
                  </ThemeProvider>
                </OrderProvider>
              </BasketProvider>
            </FoodProvider>
          </CategoryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
