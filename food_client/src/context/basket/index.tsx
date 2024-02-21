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
  food: {
    name: string;
    _id: string;
    description: string;
    price: number;
  };
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket[];
  addBasket: (food: any) => Promise<void>;
  deleteBasket: (food: any) => Promise<void>;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState([]);
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
        console.log("B", basket.foods);
        setBaskets(basket.foods);

        setRefresh(true);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  console.log("getallbaskets", baskets);

  const addBasket = async (food: any) => {
    try {
      setLoading(true);
      if (user) {
        const {
          data: { basket },
        } = await axios.put("/basket", {
          userId: user._id,
          foodId: food._id,
          count: 2,
        });
        setLoading(false);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const deleteBasket = async (food: any) => {
    try {
      setLoading(true);
      if (user) {
        const {
          data: { basket },
        } = await axios.delete("/basket", {
          userId: user._id,
          foodId: food._id,
        } as {});
        setLoading(false);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  useEffect(() => {
    getBaskets();
  }, [refresh, token]);

  return (
    <BasketContext.Provider
      value={{ loading, baskets, addBasket, deleteBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
