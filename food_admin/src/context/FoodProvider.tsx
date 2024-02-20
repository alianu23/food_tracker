"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "@/utils/axios";
import { AuthContext } from ".";

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
  foods: IFood[];
  createFood: (newFood: any) => Promise<void>;
  handleOpenFilter: () => void;
  handleCloseFilter: () => void;
  openFilter: boolean;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext);

const FoodProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(() => true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(() => false);
  };
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    // console.log("Files ===> ", e.currentTarget.files);
  };

  const createFood = async (newFood: any) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newFood.name);
      formData.set("description", newFood.description);
      formData.set("price", newFood.price);
      formData.set("category", newFood.category);
      const {
        data: { food },
      } = (await axios.post("/foods", formData, {
        headers: { Authorization: `Bearer ${token}` },
      })) as {
        data: { food: object };
      };
      handleCloseFilter();
      setRefresh(!refresh);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getFoods = async () => {
    try {
      const {
        data: { foods },
      } = await axios.get("/foods");

      setFoods(foods);
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  useEffect(() => {
    getFoods();
  }, [refresh]);

  return (
    <FoodContext.Provider
      value={{
        foods,
        handleOpenFilter,
        openFilter,
        handleCloseFilter,
        handleFileChange,
        createFood,
        loading,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
