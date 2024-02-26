"use client";
import React, {
  useState,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";

import Header from "@/layout/Header";
import { Box } from "@mui/material";
import Nav from "@/layout/nav";
import Main from "@/layout/main";
import { AuthContext } from "@/context";
import { useRouter } from "next/navigation";

const Layout = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
    router.replace("/");
  }, []);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
};

export default Layout;
