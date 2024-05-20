import { IRegisterUser } from "./interfaces/IRegisterUser";
import { IUser } from "./interfaces/IUser";
import { Api } from "@/services/apiService";

export const getUserData = async (codigoUsuario: string): Promise<IUser> => {
  const { data } = await Api.get<IUser>(
    `user/getUserByCodigoUsuario/${codigoUsuario}`
  );
  return data;
};

export const createUser = async (nome: string): Promise<IRegisterUser> => {
  const { data } = await Api.post<IRegisterUser>(`user/createUser`, { nome });
  return data;
};
