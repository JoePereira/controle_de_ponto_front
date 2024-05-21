"use client";

import Button from "@/components/global/Button/Button";
import TimeDisplay from "@/components/global/TimeDisplay/TimeDisplay";
import TimeList from "@/components/global/TimeList/TimeList";
import { useUserContext } from "@/contexts/UserContext";
import { useExit } from "@/hooks/Exit/useExit";
import React, { useState, useEffect } from "react";

const ExitTimePage: React.FC = () => {
  const { codigoUsuario, usuarioId } = useUserContext();

  const [skip, setSkip] = useState<number>(0);
  

  const { exits, createExitForUser, fetchExits } = useExit();

  const handleExit = async () => {
    await createExitForUser(usuarioId);
    fetchExits(usuarioId, skip, 10);
  };

  useEffect(() => {
    fetchExits(usuarioId, skip, 10);
  }, [usuarioId, skip]);

  // const prevPage = () => {
  //   if (skip > 1) {
  //     const prevPage = skip - 1;
  //     setSkip(prevPage);
  //     fetchExits(usuarioId, prevPage, 10);
  //   }
  // };
  // const nextPage = () => {
  //   const nextPage = skip + 1;
  //   setSkip(nextPage);
  //   fetchExits(usuarioId, nextPage, 10);
  // };

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
          <Button label="Hora de saída" onClick={handleExit} />
          <div className="w-96 pb-1">
            <p className="text-left font-bold text-xs">Dias anteriores</p>
          </div>
          {exits.length > 0 ? (
            <TimeList times={exits.map((entry) => entry.horarioSaida)} />
          ) : (
            <div className="flex p-5 rounded-lg shadow bg-slate-400">
              <div>
                <svg
                  className="w-6 h-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
                </svg>
              </div>
              <div className="ml-3">
                <h2 className="font-semibold text-gray-800">
                  Nao ha registros
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Seu usuario nao contem nenhum registro de saída
                </p>
              </div>
            </div>
          )}
          {/* {totalExitis >= 11 && (
            <div className="w-96 flex justify-center flex-row mx-auto">
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
              <p className="w-3 ml-3 mr-3">{skip + 1}</p>
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
          )} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExitTimePage;
