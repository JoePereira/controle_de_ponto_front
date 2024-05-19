import { Api } from "@/services/apiService";
import { IExit } from "./interfaces/IExit";
import { IGetExits } from "./interfaces/IGetExits";

export const createExit = async (codigoUsuario: string): Promise<IExit> => {
  const { data } = await Api.post<IExit>("exit/createExit", {
    codigoUsuario,
  });
  return data;
};

export const getExits = async (
  codigoUsuario: string,
  page: number,
  pageSize: number
): Promise<IGetExits> => {
  const { data } = await Api.post(`exit/getExities/${codigoUsuario}`, {
    page,
    pageSize,
  });
  return data;
};
