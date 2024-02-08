import ThemeProvider from "@/theme";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider, CategoryProvider, UserProvider } from "@/context";
import FoodProvider from "@/context/FoodProvider";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UserProvider>
            <CategoryProvider>
              <FoodProvider>
                <ThemeProvider>{children}</ThemeProvider>
                <ToastContainer />
              </FoodProvider>
            </CategoryProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
