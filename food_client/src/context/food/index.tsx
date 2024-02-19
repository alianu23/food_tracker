"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";

interface IFood {
  _id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  discountPrice?: number;
  category?: string;
  isSale?: boolean;
}

interface IFoodContext {
  foodForm: IFood[];
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(false);
  const [foodForm, setFoodForm] = useState([]);

  const getFoods = async () => {
    try {
      const {
        data: { foods },
      } = await axios.get("/foods");

      setFoodForm(foods);
    } catch (error: any) {
      toast.error("Error" + error.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, [refresh]);

  // console.log("FOODform", foodForm);

  return (
    <FoodContext.Provider value={{ foodForm }}>{children}</FoodContext.Provider>
  );
};
