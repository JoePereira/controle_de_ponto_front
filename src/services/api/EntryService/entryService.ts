import { Api } from "@/services/apiService";
import { IEntry } from "./interfaces/IEntry";
import { IGetEntries } from "./interfaces/IGetEntries";

export const createEntry = async (codigoUsuario: string): Promise<IEntry> => {
  const { data } = await Api.post<IEntry>("entry/createEntry", {
    codigoUsuario,
  });
  return data;
};

export const getEntries = async (
  codigoUsuario: string,
  page: number,
  pageSize: number
): Promise<IGetEntries> => {
  const { data } = await Api.post<IGetEntries>(
    `entry/getEntries/${codigoUsuario}`,
    { page, pageSize }
  );
  return data;
};
