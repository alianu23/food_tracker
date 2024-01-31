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
  loading: boolean;
}

export const UserContext = createContext<IUserContext>({
  userForm: {
    name: "Hello",
    email: "",
    address: "",
  },
  login: async () => {},
  signup: async () => {},
  loading: false,
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState<IUser>({
    name: "hello",
    email: "",
    address: "",
    password: "",
  });

  const handleNext = () => {
    router.replace("/");
  };
  const handleGoLogin = () => {
    router.replace("/login");
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const data = await MyAxios.post("/auth/login", {
        email: email,
        password: password,
      });
      setUserForm(data.data);
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
    } finally {
      setLoading(false);
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
        text: "E-mail хаягруу баталгаажуулах линк явууллаа",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      handleGoLogin();
    } catch (error) {
      toast.error("Бүртгүүлэхэд алдаа гарлаа.");
    }
  };

  return (
    <UserContext.Provider value={{ login, signup, userForm, loading }}>
      {children}
    </UserContext.Provider>
  );
};
