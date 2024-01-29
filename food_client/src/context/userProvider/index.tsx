"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, createContext, useState } from "react";
import { toast } from "react-toastify";
import MyAxios from "@/utils/axios";
import Swal from "sweetalert2";

interface IUser {
  name: string;
  email: string;
  address: string;
  password: string;
  token: string;
}

export const UserContext = createContext<{
  login: () => Promise<void>;
  signup: () => Promise<void>;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user: IUser | null;
}>({
  login: async () => {},
  signup: async () => {},
  handleChangeInput: () => {},
  user: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    re_password: "",
  });

  const handleNext = () => {
    router.replace("/");
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const login = async () => {
    try {
      const data = await MyAxios.post("/auth/login", {
        email: userForm.email,
        password: userForm.password,
      });
      setUser(data.data);

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

  const signup = async () => {
    if (
      !userForm.email ||
      !userForm.password ||
      !userForm.name ||
      !userForm.re_password ||
      !userForm.address
    ) {
      toast.warning(`You must fill all the data`, { autoClose: 3000 });
      return;
    }

    if (userForm.re_password !== userForm.password) {
      toast.error(`Passwords are not same`, { autoClose: 3000 });
      return;
    }

    if (!userForm.email.includes("@")) {
      toast.error("Wrong email, your email address must include @ symbol");
      return;
    }

    try {
      const data = await MyAxios.post("/auth/signup", {
        name: userForm.name,
        email: userForm.email,
        address: userForm.address,
        password: userForm.password,
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
    <UserContext.Provider value={{ login, handleChangeInput, signup, user }}>
      {children}
    </UserContext.Provider>
  );
};
