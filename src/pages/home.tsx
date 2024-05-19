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
            <button className="w-40 font-bold bg-stone-200 text-black p-2 rounded m-2 hover:bg-stone-300 border-2 border-orange-900">
              Entrar
            </button>
          </Link>
          <Link href="user/signup">
            <button className="w-40 font-bold bg-orange-500 text-black p-2 rounded m-2 hover:bg-orange-600">
              Criar Cadastro
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
