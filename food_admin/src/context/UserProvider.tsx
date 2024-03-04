"use client";
import React, {
  ChangeEvent,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";

interface IUsers {
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  avatarUrl: string;
  status: string;
  orders: any;
}

interface IUserContext {
  users: IUsers[];
  loading: boolean;
  createUser: () => Promise<void>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  orders: any;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };

  const createUser = async () => {
    try {
      setLoading(true);
      const data = (await axios.post("/auth/signup", {
        name: newUser.name,
        email: newUser.email,
        address: newUser.address,
        password: newUser.password,
      })) as {
        data: object;
      };
      setRefresh(!refresh);
      toast.success("Amjilttai burtgelee");
    } catch (error: any) {
      toast.error("Error creating the user" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllUser = async () => {
    try {
      const {
        data: { users },
      } = await axios.get("/api/users");
      console.log("All Users", users);
      setUsers(users);

      setOrders(
        users
          .map((el: any) =>
            el.orders.map((o: any) => ({ ...o, user: { name: el.name } }))
          )
          .flat()
      );
    } catch (error) {
      toast.warning("Хэрэглэгчдийн мэдээллийг авахад алдаа гарлаа.");
    }
  };

  console.log("ORDER USER ===>", orders);

  useEffect(() => {
    getAllUser();
  }, [refresh]);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        handleChange,
        createUser,
        orders,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
