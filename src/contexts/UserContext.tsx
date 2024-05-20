"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  usuarioId: string;
  setUsuarioId: (codigo: string) => void;
  codigoUsuario: string;
  setCodigoUsuario: (codigo: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [usuarioId, setUsuarioId] = useState<string>("");
  const [codigoUsuario, setCodigoUsuario] = useState<string>("");

  return (
    <UserContext.Provider
      value={{ usuarioId, codigoUsuario, setCodigoUsuario, setUsuarioId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext deve ser usado com um UserProvider");
  }
  return context;
};
