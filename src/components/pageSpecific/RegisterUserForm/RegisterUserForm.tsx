import { useUser } from "@/hooks/User/useUser";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterUserForm: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [cadastroAprovado, setcadastroAprovado] = useState<boolean>(false);
  const { registerUser } = useUser();

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await registerUser(nome);
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
        <div className="flex mt-2 ">
          <p className="text-sm ">Ja possui um cadastro?</p>
          <button
            type="button"
            className="text-sm  ml-1 font-bold text-orange-500"
            onClick={() => router.push("/user/login")}
          >
            Clique aqui
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterUserForm;
