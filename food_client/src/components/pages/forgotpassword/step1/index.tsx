import { Button, Input } from "@/components/core";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const Step1 = () => {
  const router = useRouter();
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
        <Typography variant="h5" fontWeight={600}>
          Нууц үг сэргээх
        </Typography>

        <Stack
          width={"100%"}
          display={"flex"}
          alignItems={"flex-start"}
          spacing={5}
          mt={10}
        >
          <Typography variant="subtitle1" component="p">
            Таны
            <Typography component="span" mx={2} color={"#18BA51"}>
              example@pinecone.mn
            </Typography>
            <Typography component="span">
              хаяг руу сэргээх код илгээх болно.
            </Typography>
          </Typography>
          <Input
            label="Нууц үг сэргээх код"
            desc={"Сэргээх кодоо оруулна уу"}
            showPassword={true}
          />

          <Button
            onClick={() => router.push("/step2")}
            label={"Үргэлжлүүлэх"}
            disabled={false}
          />
        </Stack>
      </Box>
    </Container>
  );
};
