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
  _id: string;
  food: {
    name: string;
    _id: string;
    description: string;
    price: number;
  };
  count: number;
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasket[];
  addBasket: (food: any, count: number) => Promise<void>;
  deleteBasket: (food: any) => Promise<void>;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getBaskets = async () => {
    // console.log("TOKENBASKET", token);
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("/basket/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // console.log("B", basket.foods);
        setBaskets(basket.foods);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  // console.log("getallbaskets", baskets);

  const addBasket = async (food: any, count: number) => {
    try {
      setLoading(true);
      if (user) {
        const {
          data: { basket },
        } = await axios.put(
          "/basket",
          {
            foodId: food._id,
            count: count,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLoading(false);
        setRefresh(!refresh);
      }
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  const deleteBasket = async (value: any) => {
    try {
      setLoading(true);

      if (user) {
        const {
          data: { basket },
        } = await axios.delete("/basket/" + value, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log("Foodid ====>", value);
        // console.log("Userid ====>", user._id);
        setLoading(false);
        setRefresh(!refresh);
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
