import { useUser } from "@/hooks/User/useUser";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts/UserContext";

const UserForm: React.FC = () => {
  const [codigoUsr, setCodigoUsr] = useState<string>("");
  const { fetchUserData } = useUser();
  const { setCodigoUsuario } = useUserContext();

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const user = await fetchUserData(codigoUsr);
    if (user) {
      setCodigoUsuario(user.id);
    }
    if (user) {
      router.push("/entry");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label
          htmlFor="codigoUsr"
          className="mb-2 text-xs font-thin absolute mr-40 mt-1"
        >
          Código do usuário
        </label>
        <input
          type="text"
          id="codigoUsr"
          value={codigoUsr}
          onChange={(e) => setCodigoUsr(e.target.value)}
          required
          className="w-72 h-14 mb-4 p-2 pt-6 bg-slate-800 rounded text-with font-bold text-lg"
        />
        <button
          type="submit"
          className="w-72 h-10 font-bold bg-orange-500 text-black p-2 rounded hover:bg-orange-600"
        >
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default UserForm;
