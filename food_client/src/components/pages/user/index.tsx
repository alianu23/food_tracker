"use client";
import React, { ChangeEvent, useContext, useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button as MuiBtn,
  styled,
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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const inputElements = [
  {
    icon: "",
    title: "",
    placeholder: "",
    editIcon: "",
  },
];

export const UserInfo = () => {
  const { user, logout, updateUser, loading } = useContext(UserContext);
  const [file, setFile] = useState<File | null>(null);
  const [newUserInfo, setNewUserInfo] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();
  const emailRef = useRef<any>(null);
  const nameRef = useRef<any>(null);

  const focusInput = () => {
    console.log("F", emailRef);
    emailRef.current?.focus();
  };

  const focusNameInput = () => {
    nameRef.current.focus();
  };

  const onClick = () => {
    updateUser(newUserInfo.name, newUserInfo.email, file!);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
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
        marginTop: 10,
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
            style={{ borderRadius: 60, position: "relative" }}
          />
          <MuiBtn
            component="label"
            sx={{
              position: "absolute",
              mb: 0,
              mt: 10,
              ml: 10,
            }}
          >
            <Edit
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
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </MuiBtn>
          <Typography variant="h5">{user?.name}</Typography>
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
              py: 1,
              pl: 5,
              pr: 5,
              borderRadius: 3,
            }}
          >
            <PersonOutline
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,

                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 1,
                paddingBottom: 1,
              }}
            />
            <Input
              label="Таны Нэр"
              desc={user?.name}
              name="name"
              ref={nameRef}
              onChange={handleChange}
            />
            <MuiBtn onClick={() => focusNameInput()}>
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
              py: 1,
              pl: 5,
              pr: 5,
              borderRadius: 3,
            }}
          >
            <MailOutline
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,

                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 1,
                paddingBottom: 1,
              }}
            />
            <Input
              label="И-майл"
              desc={user?.email}
              name="email"
              ref={emailRef}
              onChange={handleChange}
            />
            <MuiBtn onClick={() => focusInput()}>
              <Edit sx={{ width: 30, height: 30 }} />
            </MuiBtn>
          </Box>

          <Button
            onClick={() => onClick()}
            label={"Хадгалах"}
            disabled={loading}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              gap: 5,

              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <History
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,

                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 1,
                paddingBottom: 1,
              }}
            />
            <MuiBtn
              onClick={() => router.push("/history")}
              sx={{ color: "black" }}
            >
              Захиалгын түүх
            </MuiBtn>
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
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            <Logout
              sx={{
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 5,

                border: 1,
                borderColor: "#D6D8DB",
                paddingTop: 1,
                paddingBottom: 1,
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
