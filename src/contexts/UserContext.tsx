"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  codigoUsuario: string;
  setCodigoUsuario: (codigo: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [codigoUsuario, setCodigoUsuario] = useState<string>("");

  return (
    <UserContext.Provider value={{ codigoUsuario, setCodigoUsuario }}>
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
