"use client";
import { useRouter } from "next/navigation";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import MyAxios from "@/utils/axios";
import Swal from "sweetalert2";
import { Flag } from "@mui/icons-material";
import { ref } from "yup";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
  phoneNumber?: string;
}

interface IUserContext {
  userForm: IUser | null;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    password: string,
    email: string,
    address: string
  ) => Promise<void>;
  logout: () => void;
  loading: boolean;
  token: string | null;
  updateUser: (name: string, email: string) => Promise<void>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userForm, setUserForm] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    phoneNumber: "9999999",
    password: "",
  });

  const handleNext = () => {
    router.replace("/");
  };
  const handleGoLogin = () => {
    router.replace("/login");
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await MyAxios.post("/auth/login", {
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
      handleNext();
      setRefresh(!refresh);
    } catch (error) {
      toast.error("Нэвтэрхэд алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);

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
    setRefresh(!refresh);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    address: string
  ) => {
    try {
      setLoading(true);
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
        timer: 5000,
        showConfirmButton: false,
      });

      handleGoLogin();
      setRefresh(!refresh);
    } catch (error) {
      toast.error("Бүртгүүлэхэд алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (name: string, email: string) => {
    try {
      const data = await MyAxios.put(
        "/api/user/",
        { name, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Мэдээлэл амжилттай хадгалагдлаа", {
        position: "top-center",
      });
      setRefresh(!refresh);
    } catch (error) {
      toast.error("medeelel solihod aldaa garlaa" + error, {
        position: "top-center",
      });
    }
  };

  useEffect(() => {}, [user, refresh]);

  return (
    <UserContext.Provider
      value={{
        logout,
        login,
        signup,
        userForm,
        loading,
        user,
        token,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
