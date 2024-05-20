import { Api } from "@/services/apiService";
import { IEntry, IGetEntries } from "./interfaces/IEntry";

export const createEntry = async (usuarioId: string): Promise<IEntry> => {
  const { data } = await Api.post<IEntry>("times/createEntry", {
    usuarioId,
  });
  return data;
};

export const getEntries = async (
  usuarioId: string,
  skip: number,
  take: number
): Promise<IGetEntries[]> => {
  const { data } = await Api.get<IGetEntries[]>(
    `times/getAllEntryTimesByUsuarioId/${usuarioId}&${take}&${skip}`
  );
  return data;
};
