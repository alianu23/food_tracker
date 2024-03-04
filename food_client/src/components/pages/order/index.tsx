"use client";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";

import * as yup from "yup";
import OrderStep1 from "./orderStep1";
import { OrderStep2 } from "./orderStep2";
import { BasketContext } from "@/context";
import { count } from "console";
import { OrderContext } from "@/context/order";
import { useFormik } from "formik";
import { number } from "yup";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  duureg: yup.string().required("Дүүрэгээ сонгоно уу"),
  khoroo: yup.string().required("Хороогоо сонгоно уу"),
  buildingNo: yup.string().required("Байрны дугаар оруулна уу"),
  info: yup.string(),
  paymentAmount: yup.number(),
  method: yup.string(),
});

export const OrderPage = () => {
  const { baskets } = useContext(BasketContext);
  const { createOrder } = useContext(OrderContext);
  const router = useRouter();
  const sum =
    baskets?.foods
      ?.map((food: any) => food.food.price * food.count)
      .reduce((a, b) => a + b, 0) || 0;

  const formik = useFormik({
    onSubmit: ({ duureg, khoroo, buildingNo, info, paymentAmount, method }) => {
      createOrder(duureg, khoroo, buildingNo, info, paymentAmount, method);
      router.push("/");
    },
    initialValues: {
      duureg: "",
      khoroo: "",
      buildingNo: "",
      info: "",
      paymentAmount: sum,
      method: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  return (
    <Grid container justifyContent={"center"} gap={40}>
      <Grid item xs={3}>
        <OrderStep1 formik={formik} />
      </Grid>
      <Grid item xs={3}>
        <OrderStep2 baskets={baskets} sum={sum} formik={formik} />
      </Grid>
    </Grid>
  );
};
