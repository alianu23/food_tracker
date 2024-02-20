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
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { UserContext } from ".";

interface IAuthContext {
  login: (email: string, password: string) => void;
  logout: () => void;
  user: any;
  token: string | null;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const {
        data: { user, token },
      } = (await axios.post("/auth/login", {
        userEmail: email,
        userPassword: password,
      })) as {
        data: { token: string; user: any };
      };

      // console.log(token, user);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(token);
      router.push("/", { scroll: false });
    } catch (error) {
      console.log("error", error);
      toast.error("Нэвтрэхэд алдаа гарлаа. Та ахин оролдоно уу");
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
    if (storedToken) {
      const isValidJSON = /^[\],:{}\s]*$/.test(
        storedToken
          .replace(/\\["\\\/bfnrtu]/g, "@")
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
      );
      if (isValidJSON) {
        try {
          const parsedToken = JSON.parse(storedToken);
          setToken(parsedToken);
        } catch (error) {
          console.error("Failed to parse token :", error);
        }
      } else {
        // console.error("Invalid token data:", storedToken);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};
