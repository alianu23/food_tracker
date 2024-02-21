"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "..";

import axios from "@/utils/axios";

interface IBasket {
  foods: {
    food: {
      name: string;
      _id: string;
      description: string;
      price: number;
    };
    count: number;
  }[];
  user: object;
  totalPrice: number;
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket | undefined;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState<IBasket>();
  const [basketFoods, setBasketFoods] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getBaskets = async () => {
    console.log("TOKENBASKET", token);
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("/basket/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // console.log("B", basket);
        setBaskets(basket);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  console.log("getallbaskets", baskets);

  useEffect(() => {
    getBaskets();
  }, [refresh, token]);
  return (
    <BasketContext.Provider value={{ loading, baskets }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
