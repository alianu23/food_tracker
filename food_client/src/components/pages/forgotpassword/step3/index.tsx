import { Button, Input } from "@/components/core";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import Swal from "sweetalert2";
import MyAxios from "@/utils/axios";
import { toast } from "react-toastify";

interface IStepProps {
  email: string;
  password: string;
  re_password: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepThree = ({
  email,
  password,
  re_password,
  handleNext,
  handleChangeInput,
}: IStepProps) => {
  const router = useRouter();

  const handleRePassword = async () => {
    try {
      const data = await MyAxios.put("/verify/repassword", {
        email,
        password,
      });
      handleNext();
      savePassword();
    } catch (error) {
      console.log(error);
      toast.error(
        "Verification код буруу байна. Та кодоо дахин шалгаж оруулна уу"
      );
    }
  };

  // if(re_password !== password){
  //   toast.error(`re-password must same as password`, {autoClose: 1000}),
  //   return;
  // }

  const savePassword = async () => {
    await Swal.fire({
      title: "Таны нууц үг амжилттай солигдлоо",
      text: "та шинэ нууц үгээ ашиглан нэвтэрнэ үү",
      icon: "success",
    });
    router.replace("/login");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            name="password"
            desc="Нууц үгээ оруулна уу"
            label="Нууц үг"
            onChange={handleChangeInput}
            showPassword
          />
          <Input
            desc="Нууц үгээ давтан оруулна уу"
            label="Нууц үг давтах"
            showPassword
          />
          <Button label={"Сэргээх"} onClick={handleRePassword} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
