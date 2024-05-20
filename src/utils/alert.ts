import Swal from "sweetalert2";

export const showAlert = (
  title: string,
  text: string,
  icon: "success" | "error"
) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Fechar",
  });
};
