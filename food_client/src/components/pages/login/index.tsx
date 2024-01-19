import { Button } from "@/components/core";
import { Input } from "@/components/core";
import React from "react";

export const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Input label="Email"  />
      <Button label={"Нэвтрэх"} disabled={true} />
      <Button label={"Нэвтрэх"} disabled={false} />
    </div>
  );
};
