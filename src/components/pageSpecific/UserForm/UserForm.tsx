import { useUser } from "@/hooks/User/useUser";
import { useState } from "react";

const UserForm: React.FC = () => {
  const [codigoUsuario, setCodigoUsuario] = useState<string>("");
  const { fetchUserData } = useUser();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await fetchUserData(codigoUsuario);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigoUsuario">Codigo do usuario</label>
        <input
          type="text"
          id="codigoUsuario"
          value={codigoUsuario}
          onChange={(e) => setCodigoUsuario(e.target.value)}
          required
        />
        <button type="submit"></button>
      </form>
    </>
  );
};

export default UserForm;
