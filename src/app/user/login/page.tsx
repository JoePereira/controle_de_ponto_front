"use client";

import Layout from "@/components/global/Layout/Layout";
import UserForm from "@/components/pageSpecific/UserForm/UserForm";
import React from "react";

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-6 text-center">Ponto Ilumeo </h1>
        <UserForm />
      </div>
    </Layout>
  );
};

export default Login;
