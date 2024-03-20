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
import Swal from "sweetalert2";
interface IAuthContext {
  login: (email: string, password: string) => void;
  logout: () => void;
  user: any;
  token: string | null;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleNext = () => {
    // router.replace("/");
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await axios.post("/auth/login", {
        userEmail: email,
        userPassword: password,
      });
      console.log("newterlee", token, user);
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Амжилттай нэвтэрлээ",
        showConfirmButton: false,
        timer: 1500,
      });
      setUser(user);
      setToken(token);
      handleNext();
    } catch (error) {
      toast.error("Нэвтэрхэд алдаа гарлаа");
    } finally {
      setLoading(false);
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
    // router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ login, logout, user, token }}>
      {children}
    </AuthContext.Provider>
  );
};
