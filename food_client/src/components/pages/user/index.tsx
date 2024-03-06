"use client";
import React, { ChangeEvent, useContext } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button as MuiBtn,
} from "@mui/material";
import Image from "next/image";
import {
  PersonOutline,
  PhoneOutlined,
  MailOutline,
  History,
  Logout,
  Edit,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { Button, Input } from "@/components";
import { UserContext } from "@/context";
import { useRouter } from "next/navigation";

export const UserInfo = () => {
  const { user, logout, userForm } = useContext(UserContext);
  const router = useRouter();

  const onClick = () => {
    toast.success("Мэдээлэл амжилттай хадгалагдлаа", {
      position: "top-center",
    });
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const clicklogout = async () => {
    await Swal.fire({
      position: "center",
      title: "Та системээс гарахдаа итгэлтэй байна уу?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Тийм",
      confirmButtonColor: "#D8F3E1",
      preConfirm: () => handleLogout(),
      cancelButtonText: "Үгүй",
      cancelButtonColor: "#18BA51",
    });
  };

  return (
    <Container
      sx={{
        marginTop: 35,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <Box
        width={500}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack display={"flex"} alignItems={"center"} gap={5} mb={5}>
          <img
            src={user?.avatarUrl}
            width={120}
            height={120}
            style={{ borderRadius: 60 }}
          />
          <Typography variant="h5" fontWeight={600}>
            {user?.name}
          </Typography>
        </Stack>

        <Stack
          width={"100%"}
          display={"flex"}
          alignItems={"flex-end"}
          spacing={5}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 5,
              backgroundColor: "#F6F6F6",
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 5,
              paddingRight: 10,
              borderRadius: 3,
            }}
          >
            <PersonOutline
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,
                mx: 3,
                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 2,
                paddingBottom: 2,
              }}
            />
            <Input
              label="Таны Нэр"
              desc={user?.name}
              value={user?.name}
              name="email"
            />
            <MuiBtn>
              <Edit sx={{ width: 30, height: 30 }} />
            </MuiBtn>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 5,
              backgroundColor: "#F6F6F6",
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 5,
              paddingRight: 10,
              borderRadius: 3,
            }}
          >
            <PhoneOutlined
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,
                mx: 3,
                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 2,
                paddingBottom: 2,
              }}
            />
            <Input
              label="Утасны дугаар"
              desc={userForm?.phoneNumber as string}
              value={userForm?.phoneNumber as string}
              name="phone"
            />
            <MuiBtn>
              <Edit sx={{ width: 30, height: 30 }} />
            </MuiBtn>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 5,
              backgroundColor: "#F6F6F6",
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 5,
              paddingRight: 10,
              borderRadius: 3,
            }}
          >
            <MailOutline
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,
                mx: 3,
                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 1,
                paddingBottom: 1,
              }}
            />
            <Input
              label="И-майл"
              desc={user?.email}
              value={user?.email}
              name="email"
            />
            <MuiBtn>
              <Edit sx={{ width: 30, height: 30 }} />
            </MuiBtn>
          </Box>

          <Button onClick={() => onClick()} label={"Хадгалах"} />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              gap: 5,

              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <History
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,
                mx: 3,
                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 2,
                paddingBottom: 2,
              }}
            />
            <MuiBtn sx={{ color: "black" }}>Захиалгын түүх</MuiBtn>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              gap: 5,
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Logout
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,
                mx: 3,
                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 2,
                paddingBottom: 2,
              }}
            />
            <MuiBtn onClick={() => clicklogout()} sx={{ color: "black" }}>
              Гарах
            </MuiBtn>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
