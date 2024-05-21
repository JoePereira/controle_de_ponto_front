import { IGetExits } from "@/services/api/ExitService/interfaces/IExit";
import { useState } from "react";
import { createExit, getExits } from "@/services/api/ExitService/exitService";
import { showAlert } from "@/utils/alert";

export const useExit = () => {
  const [exits, setExits] = useState<IGetExits[]>([]);

  const createExitForUser = async (codigoUsuario: string) => {
    try {
      const exit = await createExit(codigoUsuario);
      showAlert(
        "Registrada",
        "Hora de saida registrada com sucesso!",
        "success"
      );
      return exit;
    } catch {
      showAlert("Erro", "Falha ao registrar hora de saida", "error");
    }
  };

  const fetchExits = async (
    codigoUsuario: string,
    take: number,
    skip: number
  ) => {
    try {
      const response = await getExits(codigoUsuario, take, skip);
      setExits(response);
      console.log("🚀 ~ useExit ~ response:", response);
      // setTotalExitis(response.total);
    } catch {
      return null;
    }
  };

  return { exits, createExitForUser, fetchExits };
};
