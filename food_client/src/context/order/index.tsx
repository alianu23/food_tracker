import React, { PropsWithChildren, createContext } from "react";

type IOrderContext = {};

export const OrderContext = createContext({} as IOrderContext);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
};
