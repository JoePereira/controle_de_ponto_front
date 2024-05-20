import { Api } from "@/services/apiService";
import { IExit, IGetExits } from "./interfaces/IExit";

export const createExit = async (usuarioId: string): Promise<IExit> => {
  const { data } = await Api.post<IExit>("times/createExit", {
    usuarioId,
  });
  return data;
};

export const getExits = async (
  usuarioId: string,
  skip: number,
  take: number
): Promise<IGetExits[]> => {
  const { data } = await Api.get(
    `times/getAllExitTimesByUsuarioId/${usuarioId}&${take}&${skip}`
  );
  // console.log("🚀 ~ data:", data);
  // console.log("🚀 ~ take:", take);
  // console.log("🚀 ~ skip:", skip);
  return data;
};
