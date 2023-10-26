import { Dialog } from "@mui/material";
import { X } from "phosphor-react";
import { useBoolean } from "react-hooks-shareable";

export default function Login({
  isDialog,
  openDialog,
  closeDialog,
  toggleDialog,
}: any) {
  return (
    <Dialog onClose={closeDialog} open={isDialog}>
      <div className="p-5 flex items-center gap-4">
        <X weight="bold" size={25}/>
        <p className="font-bold text-md">Entrar ou cadastrar-se</p>
      </div>
      <div>
        <p>
            Bem vindo a Plataforma
        </p>
        
      </div>
    </Dialog>
  );
}
