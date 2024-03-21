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
import { toast } from "react-toastify";

interface IBasket {
  _id: string;
  food: {
    image: string;
    name: string;
    _id: string;
    description: string;
    price: number;
  };
  count: number;
}
interface IBasketObject {
  userId: string;
  foods: IBasket[];
  totalPrice: number;
}

interface IBasketContext {
  loading: boolean;
  baskets: IBasketObject | null;
  addBasket: (foodItem: any) => Promise<void>;
  deleteBasket: (food: any) => Promise<void>;
  updateFoodBasket: (foodItem: any) => Promise<void>;
}

export const BasketContext = createContext({} as IBasketContext);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const { token, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [baskets, setBaskets] = useState<IBasketObject | null>(null);
  const [refresh, setRefresh] = useState(false);

  const createReq = async (foodItem: any) => {
    const { data } = (await axios.post("/basket/", foodItem, {
      headers: { Authorization: `Bearer ${token}` },
    })) as {
      data: any;
    };
    return { basket: data.basket, message: data.message };
  };

  const getBaskets = async () => {
    // console.log("TOKENBASKET", token);
    try {
      if (token) {
        const {
          data: { basket },
        } = await axios.get("/basket/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("B", basket);
        setBaskets({ ...basket });
      }
    } catch (error: any) {
      // alert("Error" + error.message);
    }
  };

  console.log("getallbaskets", baskets);

  const addBasket = async (foodItem: any) => {
    console.log("Food", foodItem);
    try {
      const { basket, message } = await createReq(foodItem);
      console.log("RES", basket);
      setBaskets({ ...basket });
      toast.success(message);
      setLoading(false);
      setRefresh(!refresh);
    } catch (error: any) {}
  };

  const updateFoodBasket = async (foodItem: any) => {
    console.log("Food", foodItem);
    try {
      const { basket } = await createReq(foodItem);
      console.log("RES", basket);
      setBaskets({ ...basket });
      setLoading(false);
      setRefresh(!refresh);
    } catch (error: any) {}
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
      value={{ loading, baskets, addBasket, deleteBasket, updateFoodBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
