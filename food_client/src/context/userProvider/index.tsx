import React, { useState } from "react";
import { createContext } from "react";
import { IUser, UserContextType } from "@/types";
import { toast } from "react-toastify";
import myAxios from "@/utils/axios";

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider = ({ children }: any) => {
  const [user, setUser] = React.useState(null);

  const [formUserData, setLoginUserData] = React.useState<IUser>({
    email: "",
    password: "",
    name: "",
    re_password: "",
  });

  const signup = async () => {
    if (
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.name ||
      !formUserData.re_password
    ) {
      toast(`You must fill all the data`, { autoClose: 3000 });
      return;
    }

    if (formUserData.re_password !== formUserData.password) {
      toast(`Passwords are not same`, { autoClose: 3000 });
      return;
    }

    if (!formUserData.email.includes("@")) {
      toast("Wrong email, your email address must include @ symbol");
      return;
    }

    try {
      const { data } = await myAxios.post("/auth/signup", {
        name: formUserData.name,
        email: formUserData.email,
        password: formUserData.password,
      });
      console.log("data", data);
      setUser(data);
      // console.log("user", user);
    } catch (error) {
      console.log(`${error} - iim aldaa garlaa`);
      toast.error(`burtguulhed aldaa garlaa`, { autoClose: 3000 });
    }
  };

  return (
    <UserContext.Provider value={{ signup }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
