"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "@/utils/axios";

interface IFood {
  foods: string[];
  createFood: () => Promise<void>;
  handleOpenFilter: () => void;
  handleCloseFilter: () => void;
  openFilter: boolean;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FoodContext = createContext<IFood>({} as IFood);

const FoodProvider = ({ children }: PropsWithChildren) => {
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
  const [newFood, setNewFood] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    // console.log("Files ===> ", e.currentTarget.files);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewFood({ ...newFood, [name]: value });
  };

  const createFood = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newFood.name);
      formData.set("description", newFood.description);
      formData.set("price", newFood.price);
      const {
        data: { food },
      } = (await axios.post("/foods", formData)) as {
        data: { food: object };
      };
      handleCloseFilter();
      setRefresh(!refresh);
    } catch (error) {}
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
  }, []);
  return (
    <FoodContext.Provider
      value={{
        foods,
        handleOpenFilter,
        openFilter,
        handleCloseFilter,
        handleChange,
        handleFileChange,
        createFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;
