import { useState } from "react";
import { IGetEntries } from "@/services/api/EntryService/interfaces/IEntry";
import {
  createEntry,
  getEntries,
} from "@/services/api/EntryService/entryService";
import { showAlert } from "@/utils/alert";

export const useEntry = () => {
  const [entries, setEntries] = useState<IGetEntries[]>([]);

  const createEntryForUser = async (usuarioId: string) => {
    try {
      const entry = await createEntry(usuarioId);
      showAlert(
        "Registrado",
        "Hora de entrada registrada com sucesso!",
        "success"
      );
      return entry;
    } catch (error) {
      showAlert("Erro", "Falha ao registrar hora de entrada", "error");
    }
  };

  const fetchEntries = async (
    codigoUsuario: string,
    take: number,
    skip: number
  ) => {
    try {
      const response = await getEntries(codigoUsuario, take, skip);
      setEntries(response);
    } catch (error) {
      return null;
    }
  };

  return { entries, createEntryForUser, fetchEntries };
};
