"use client";
import axios from "@/utils/axios";
import React, { PropsWithChildren, createContext, useContext } from "react";
import { UserContext } from "..";
import { toast } from "react-toastify";

interface IOrderContext {
  createOrder: (
    duureg: string,
    khoroo: string,
    buildingNo: string,
    info: string,
    paymentAmount: number,
    method: string
  ) => Promise<void>;
}

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(UserContext);
  const createOrder = async (
    duureg: string,
    khoroo: string,
    buildingNo: string,
    info: string,
    paymentAmount: number,
    method: string
  ) => {
    try {
      const { data } = await axios.post(
        "/order/",
        {
          duureg,
          khoroo,
          buildingNo,
          info,
          paymentAmount,
          method,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("order uuslee");
    } catch (error) {
      toast.error(`${error} - iim aldaa garlaa`);
    }
  };

  return (
    <OrderContext.Provider value={{ createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
