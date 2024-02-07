import ThemeProvider from "@/theme";
import "./globals.css";
import { CategoryProvider } from "@/context";
import FoodProvider from "@/context/FoodProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CategoryProvider>
          <FoodProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </FoodProvider>
        </CategoryProvider>
      </body>
    </html>
  );
}
