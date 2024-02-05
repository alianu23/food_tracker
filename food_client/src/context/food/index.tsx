"use client";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import MyAxios from "@/utils/axios";
import { toast } from "react-toastify";

interface IFood {
  name: string;
  desc: string;
  price: number;
  image: string;
  discountPrice?: number;
  category?: string;
}

interface IFoodContext {
  foodForm?: Partial<Array<IFood>>;
}

export const FoodContext = createContext<IFoodContext>({
  foodForm: [],
});

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(false);
  const [foodForm, setFoodForm] = useState<Partial<Array<IFood>>>([]);

  const getAllFood = async () => {
    try {
      const {
        data: { foods },
      } = await MyAxios.get("/foods");
      console.log("data", foods);
      setFoodForm(foods);
    } catch (error) {
      console.log("buh hooliig harhad aldaa garlaa", error);
      toast.error("Aldaa garlaa clg shalgaarai");
    }
  };

  console.log("FOODform", foodForm);

  useEffect(() => {
    getAllFood();
  }, [refresh]);

  return (
    <FoodContext.Provider value={{ foodForm }}>{children}</FoodContext.Provider>
  );
};
