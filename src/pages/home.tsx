import Button from "@/components/global/Button/Button";
import UserForm from "@/components/pageSpecific/UserForm/UserForm";
import React from "react";
import Link from "next/link";
import Layout from "@/components/global/Layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Bem-vindo ao Sistema de Controle de Ponto
        </h1>
        <div>
          <Link href={"user/login"}>
            <button className="bg-red-500 text-black p-2 rounded m-2 hover:bg-blue-700">
              Entrar
            </button>
          </Link>
          <Link href="user/signup">
            <button className="bg-blue-500 text-white p-2 rounded m-2 hover:bg-blue-700">
              Criar Cadastro
            </button>
          </Link>
          {/* <Button onClick={handleLogin} label="Entrar" /> */}
          {/* <Button onClick={handleSignup} label="Criar Cadastro" /> */}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
