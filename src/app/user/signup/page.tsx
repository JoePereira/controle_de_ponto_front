"use client";

import Layout from "@/components/global/Layout/Layout";
import RegisterUserForm from "@/components/pageSpecific/RegisterUserForm/RegisterUserForm";
import React from "react";

const Singup: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-6 text-center">Criar Cadastro</h1>
        <RegisterUserForm />
      </div>
    </Layout>
  );
};

export default Singup;
