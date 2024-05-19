"use client";

import Button from "@/components/global/Button/Button";
import TimeDisplay from "@/components/global/TimeDisplay/TimeDisplay";
import TimeList from "@/components/global/TimeList/TimeList";
import { useUserContext } from "@/contexts/UserContext";
import { useEntry } from "@/hooks/Entry/useEntry";
import React, { useState, useEffect } from "react";

const EntryTimePage: React.FC = () => {
  const { codigoUsuario } = useUserContext();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const { entries, totalEntries, createEntryForUser, fetchEntries } =
    useEntry();

  const handleEntry = async () => {
    await createEntryForUser(codigoUsuario);
    fetchEntries(codigoUsuario, currentPage, 10);
  };

  useEffect(() => {
    fetchEntries(codigoUsuario, currentPage, 10);
  }, [codigoUsuario, currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      fetchEntries(codigoUsuario, prevPage, 10);
    }
  };
  const nextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchEntries(codigoUsuario, nextPage, 10);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-96">
          <div className="flex flex-row justify-between">
            <p className="font-bold text-xs mb-10">Relógio de ponto</p>
            <div className="text-end">
              <p className="font-bold text-xs">#{codigoUsuario}</p>
              <p className="font-thin text-xs text-gray-400">Usuário</p>
            </div>
          </div>
          <TimeDisplay />
          <p className="text-left font-bold text-xs mb-4">Horas de hoje</p>
          <Button label="Hora de Entrada" onClick={handleEntry} />
          <div className="w-96 pb-1">
            <p className="text-left font-bold text-xs">Dias anteriores</p>
          </div>
          <TimeList times={entries.map((entry) => entry.horarioEntrada)} />
          {totalEntries >= 11 && (
            <div className="flex flex-row mx-auto">
              <button
                type="button"
                className="bg-gray-800 text-white rounded-l-md py-2 hover:bg-gray-500 hover:text-white px-3"
                onClick={() => prevPage()}
              >
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
              <p className="w-3 ml-3 mr-3">{currentPage}</p>
              <button
                type="button"
                className="bg-gray-800 text-white rounded-r-md py-2 hover:bg-gray-500 hover:text-white px-3"
                onClick={() => nextPage()}
              >
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-3 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default EntryTimePage;
