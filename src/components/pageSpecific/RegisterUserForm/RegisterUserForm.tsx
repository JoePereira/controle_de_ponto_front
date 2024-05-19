import { useUser } from "@/hooks/User/useUser";
import Link from "next/link";
import React, { useState } from "react";

const RegisterUserForm: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [cadastroAprovado, setcadastroAprovado] = useState<boolean>(false);
  const { registerUser } = useUser();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const status = await registerUser(nome);
    if (status === 201) {
      setcadastroAprovado(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label
          htmlFor="nome"
          className="mb-2 text-xs font-thin absolute mr-56 mt-1"
        >
          Nome
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-72 h-14 mb-4 p-2 pt-6 bg-slate-800 rounded text-with font-bold text-lg"
        />
        <button
          type="submit"
          className="w-72 h-10 font-bold bg-orange-500 text-black p-2 rounded hover:bg-orange-600"
        >
          Registrar
        </button>
        {cadastroAprovado && (
          <Link href={"/user/login"}>
            <button
              type="button"
              className="w-72 h-10 font-bold bg-green-600 text-black p-2 mt-4 rounded hover:bg-green-700"
            >
              Fazer Login
            </button>
          </Link>
        )}
      </form>
    </>
  );
};

export default RegisterUserForm;
