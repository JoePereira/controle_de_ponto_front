import { useUser } from "@/hooks/User/useUser";
import React, { useState } from "react";

const RegisterUserForm: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  console.log("🚀 ~ nome:", nome);
  const { registerUser } = useUser();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await registerUser(nome);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="nome" className="mb-2 text-lg">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Registrar
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegisterUserForm;
