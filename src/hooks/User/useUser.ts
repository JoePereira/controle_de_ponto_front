import { IRegisterUser } from "@/services/api/UserService/interfaces/IRegisterUser";
import { IUser } from "@/services/api/UserService/interfaces/IUser";
import {
  createUser,
  getUserData,
} from "@/services/api/UserService/userService";
import { showAlert } from "@/utils/alert";

export const useUser = () => {
  const fetchUserData = async (codigoUsuario: string) => {
    try {
      const data: IUser = await getUserData(codigoUsuario);
      console.log("🚀 ~ fetchUserData ~ data:", data);
      showAlert(
        "Seja Bem-Vindo!",
        "Esperamos que voce se encontre bem",
        "success"
      );
    } catch (error) {
      showAlert("Ops", "Usuario nao encontrado no sistema", "error");
    }
  };

  const registerUser = async (nome: string) => {
    try {
      const data: IRegisterUser = await createUser(nome);
      console.log("🚀 ~ registerUser ~ data:", data);
      showAlert("Parabens!", "Cadastro realizado com sucesso!", "success");
    } catch (error) {
      showAlert("Ops", "Algo deu errado no sistema", "error");
    }
  };

  return { fetchUserData, registerUser };
};
