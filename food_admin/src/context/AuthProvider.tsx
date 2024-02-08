"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import axios from "@/utils/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface IAuthContext {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async () => {
    try {
      const {
        data: { user, token },
      } = (await axios.post("/auth/login", {
        userEmail: userLogin.email,
        userPassword: userLogin.password,
      })) as {
        data: { token: string; user: any };
      };

      console.log(token, user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (error) {
      toast.error("Нэвтрэхэд алдаа гарлаа. Та ахин оролдоно уу");
    }
  };

  return (
    <AuthContext.Provider value={{ handleChange, handleClick }}>
      {children}
    </AuthContext.Provider>
  );
};
