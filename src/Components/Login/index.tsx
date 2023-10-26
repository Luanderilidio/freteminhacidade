import { Dialog, Divider } from "@mui/material";
import {
  ArrowRight,
  Eye,
  EyeClosed,
  EyeSlash,
  Image,
  Lock,
  MagnifyingGlass,
  Phone,
  UserCircle,
  X,
} from "phosphor-react";
import InputMask from "react-input-mask";
import IconGoogle from "../../assets/Logos/IconGoogle.png";

import { useBoolean } from "react-hooks-shareable";

export default function Login({
  isDialog,
  openDialog,
  closeDialog,
  toggleDialog,
}: any) {
  const [viewPass, openViewPass, closeViewPass, togglePass] = useBoolean(false);
  return (
    <Dialog onClose={closeDialog} open={isDialog} fullWidth>
      <div className="p-5 flex flex-col gap-5 ">
        <div className="flex items-center justify-between gap-4 opacity-90">
          <X onClick={closeDialog} weight="bold" size={22} />
          <p className="font-bold text-md">Entrar ou cadastrar-se</p>
          <div />
        </div>
        <div>
          <p className="text-2xl font-semibold">Bem-vindo a Plataforma</p>
        </div>
        <form className="flex flex-col gap-3 sm:mx-5">
          <div className="w-full relative flex items-center gap-2 border-2 border-custon-black rounded-full py-2 px-3 shadow-lg hover:shadow-md ">
            <div className="bg-custon-black p-2 rounded-full">
              <UserCircle className="text-white" size={15} weight="fill" />
            </div>

            <input
              placeholder="Seu nome"
              className="w-full focus:outline-none font-semibold "
            />
          </div>
          <div className="w-full relative flex items-center gap-2 border-2 border-custon-black rounded-full py-2 px-3 shadow-lg hover:shadow-md ">
            <div className="bg-custon-black p-2 rounded-full">
              <Phone className="text-white" size={15} weight="bold" />
            </div>
            <p className="font-semibold opacity-50">+55</p>

            <InputMask
              mask="(99) 9 9999 - 9999"
              id="phone"
              className="w-full focus:outline-none font-semibold "
              name="phone"
            />
          </div>
          <div className="w-full relative flex items-center gap-2 border-2 border-custon-black rounded-full py-2 px-3 shadow-lg hover:shadow-md ">
            <div className="bg-custon-black p-2 rounded-full">
              <Lock className="text-white" size={15} weight="fill" />
            </div>

            <input
              placeholder="Senha"
              type={viewPass ? "text" : "password"}
              className="w-full focus:outline-none font-semibold"
            />
            {viewPass ? (
              <EyeSlash
                onClick={togglePass}
                className="text-black"
                size={30}
                weight="bold"
              />
            ) : (
              <Eye
                onClick={togglePass}
                className="text-black"
                size={30}
                weight="bold"
              />
            )}
          </div>
          <button className="flex items-center justify-between font-bold text-lg bg-custon-black text-white py-3 px-5 rounded-full drop-shadow-xl transition ease-in-out hover:scale-105 active:scale-95">
            <div />
            <p>Continuar</p>
            <ArrowRight size={25} weight="bold" />
          </button>
          <p className="text-[.7rem] leading-none text-justify">Ao clicar no botão, você concorda com nossos <span className="font-bold">Termos de Serviço</span> e <span className="font-bold">Política de Privacidade</span>.</p>
        </form>
        <Divider>ou</Divider>

        <button className="flex items-center justify-between sm:mx-5 border-1 hover:border-2 p-3 rounded-md">
          <img className="w-5" src={IconGoogle} />
          <p className="font-semibold">Sign in with Google</p>
          <div />
        </button>
        <button>
        Já tem uma conta? <span className="font-bold text-green-500">Entrar</span>
        </button>
      </div>
    </Dialog>
  );
}
