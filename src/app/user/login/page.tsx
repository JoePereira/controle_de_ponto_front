"use client";

import Layout from "@/components/global/Layout/Layout";
import UserForm from "@/components/pageSpecific/UserForm/UserForm";
import React, { useState } from "react";

const Login: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-72 flex flex-row items-center justify-start">
          <h1 className="text-lg font-thin mb-6 ">Ponto </h1>
          <h1 className="text-lg font-bold mb-6 ml-1">Ilumeo </h1>
        </div>
        <UserForm />
      </div>
    </Layout>
  );
};

export default Login;
