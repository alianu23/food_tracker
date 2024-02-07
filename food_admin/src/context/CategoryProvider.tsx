"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "@/utils/axios";

interface ICategoryContext {
  categories: string[];
  createCategory: () => Promise<void>;
  handleOpenFilter: () => void;
  handleCloseFilter: () => void;
  openFilter: boolean;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryContext = createContext<ICategoryContext>(
  {} as ICategoryContext
);

export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter(() => true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(() => false);
  };
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    // console.log("Files ===> ", e.currentTarget.files);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewCategory({ ...newCategory, [name]: value });
  };

  const createCategory = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newCategory.name);
      formData.set("description", newCategory.description);
      const {
        data: { category },
      } = (await axios.post("/categories", formData)) as {
        data: { category: object };
      };
      handleCloseFilter();
      setRefresh(!refresh);
    } catch (error) {}
  };

  const getCategory = async () => {
    try {
      const {
        data: { categories },
      } = (await axios.get("/categories")) as {
        data: { categories: [] };
      };
      console.log("RES", categories);
      setCategories(categories);
    } catch (error: any) {
      alert("Error" + error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, [refresh]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        handleOpenFilter,
        openFilter,
        handleCloseFilter,
        handleChange,
        handleFileChange,
        createCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
