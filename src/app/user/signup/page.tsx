"use client";

import Layout from "@/components/global/Layout/Layout";
import RegisterUserForm from "@/components/pageSpecific/RegisterUserForm/RegisterUserForm";
import React from "react";

const Singup: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-6 text-center">Criar Cadastro</h1>
        <div className="w-72 flex flex-row items-center justify-start">
          <p className="text-lg font-thin mb-6 ">Ponto </p>
          <p className="text-lg font-bold mb-6 ml-1">Ilumeo </p>
        </div>
        <RegisterUserForm />
      </div>
    </Layout>
  );
};

export default Singup;
