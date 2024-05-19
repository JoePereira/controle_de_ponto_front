import { IExit } from "@/services/api/ExitService/interfaces/IExit";
import { useState } from "react";
import { createExit, getExits } from "@/services/api/ExitService/exitService";
import { showAlert } from "@/utils/alert";
import { getEntries } from "@/services/api/EntryService/entryService";

export const useExit = () => {
  const [exits, setExits] = useState<IExit[]>([]);
  const [totalExitis, setTotalExitis] = useState<number>(0);

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
    page: number,
    pageSize: number
  ) => {
    try {
      const response = await getExits(codigoUsuario, page, pageSize);
      setExits(response.data);
      setTotalExitis(response.total);
    } catch {
      showAlert("Erro", "Falha ao buscar os horários de saida", "error");
    }
  };

  return { exits, totalExitis, createExit, fetchExits };
};
