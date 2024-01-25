// @types.user

export interface IUser {
  name: string;
  email: string;
  password: string;
  re_password: string;
}
export type UserContextType = {
  signup: (user: IUser) => void;
};
