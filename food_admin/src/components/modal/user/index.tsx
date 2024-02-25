import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Stack,
  styled,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close, CloudOutlined } from "@mui/icons-material";
import { Button, Input } from "../../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { UserContext } from "@/context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({});

export const UserModal = ({
  open,
  handleClose,
  handleChange,
  createUser,
  loading,
}: any) => {
  const handleAdd = () => {
    createUser(), handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" fontWeight={600} textAlign={"center"}>
            Шинэ хэрэглэгч бүртгэх
          </Typography>
          <Stack width={"100%"} display={"flex"}>
            <Input
              label="Нэр"
              name="name"
              desc={"Нэрээ оруулна уу"}
              onChange={handleChange}
            />
            <Input
              label="И-майл"
              name="email"
              desc="И-майл хаягаа оруулна уу"
              onChange={handleChange}
            />
            <Input
              label="Хаяг"
              name="address"
              desc={"Та хаягаа оруулна уу"}
              onChange={handleChange}
            />
            <Input
              name="password"
              label="Нууц үг"
              desc="Нууц үгээ оруулна уу"
              onChange={handleChange}
              showPassword={true}
            />
            <Button onClick={handleAdd} label={"Бүртгэх"} disabled={loading} />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
