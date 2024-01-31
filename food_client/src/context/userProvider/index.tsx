"use client";
import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import MyAxios from "@/utils/axios";
import Swal from "sweetalert2";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  userForm: IUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    password: string,
    email: string,
    address: string
  ) => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
  userForm: {
    name: "Hello",
    email: "",
    address: "",
  },
  login: async () => {},
  signup: async () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [userForm, setUserForm] = useState<IUser>({
    name: "hello",
    email: "",
    address: "",
    password: "",
  });

  const handleNext = () => {
    router.replace("/");
  };

  const login = async (email: string, password: string) => {
    try {
      const data = await MyAxios.post("/auth/login", {
        email: email,
        password: password,
      });

      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Амжилттай нэвтэрлээ",
        showConfirmButton: false,
        timer: 1500,
      });
      handleNext();
    } catch (error) {
      toast.error(
        "Нэвтрэхэд алдаа гарлаа. Та email нууц үгээ дахин шалгана уу"
      );
    }
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    address: string
  ) => {
    try {
      const data = await MyAxios.post("/auth/signup", {
        name: name,
        email: email,
        address: address,
        password: password,
      });

      await Swal.fire({
        position: "top-end",
        title: "Та амжилттай бүртгүүллээ",
        text: "Манай Платформийг сонгосонд баярлалаа",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      handleNext();
    } catch (error) {
      toast.error("Бүртгүүлэхэд алдаа гарлаа.");
    }
  };

  return (
    <UserContext.Provider value={{ login, signup, userForm }}>
      {children}
    </UserContext.Provider>
  );
};
