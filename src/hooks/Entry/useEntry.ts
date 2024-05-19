import { useState } from "react";
import { IEntry } from "@/services/api/EntryService/interfaces/IEntry";
import {
  createEntry,
  getEntries,
} from "@/services/api/EntryService/entryService";
import { showAlert } from "@/utils/alert";

export const useEntry = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [totalEntries, setTotalEntries] = useState<number>(0);

  const createEntryForUser = async (codigoUsuario: string) => {
    try {
      const entry = await createEntry(codigoUsuario);
      showAlert(
        "Registrado",
        "Hora de entrada registrada com sucesso!",
        "success"
      );
      return entry;
    } catch (error) {
      showAlert("Erro", "Falha ao registrar hora de entrada", "error");
      throw error;
    }
  };

  const fetchEntries = async (
    codigoUsuario: string,
    page: number,
    pageSize: number
  ) => {
    try {
      const response = await getEntries(codigoUsuario, page, pageSize);
      setEntries(response.data);
      setTotalEntries(response.total);
    } catch (error) {
      showAlert("Erro", "Falha ao buscar horários de entrada", "error");
    }
  };

  return { entries, totalEntries, createEntryForUser, fetchEntries };
};
