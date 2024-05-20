"use client";

import EntryTimePage from "@/components/pageSpecific/EntryTimePage/EntryTimePage";
import { showAlert } from "@/utils/alert";
import { useRouter } from "next/navigation";

const EntryTime = () => {
  const router = useRouter();

  const singout = () => {
    showAlert("Ate logo!", "Agradecemos por utilizar nosso sistema", "success");
    router.push("/");
  };
  return (
    <>
      <div className="w-full p-5 flex flex-row justify-between  absolute object-right">
        <button
          className=" font-bold text-orange-500 rounded hover:text-orange-600"
          type="button"
          onClick={() => singout()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
        </button>
        <button
          className="w-40 h-8 font-bold bg-orange-500 text-black rounded hover:bg-orange-600"
          type="button"
          onClick={() => router.push("/exit")}
        >
          Registrar Saída
        </button>
      </div>
      <EntryTimePage />
    </>
  );
};

export default EntryTime;
