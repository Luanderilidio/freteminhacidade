import { Dialog, Divider } from "@mui/material";
import {
  ArrowRight,
  Eye,
  EyeSlash,
  Info,
  Lock,
  Phone,
  X,
} from "phosphor-react";
import InputMask from "react-input-mask";
import IconGoogle from "../../assets/Logos/IconGoogle.png";

import { useBoolean } from "react-hooks-shareable";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/userLogin";

export default function Login({
  isDialog,
  openDialog,
  closeDialog,
  toggleDialog,
}: any) {
  const { setUser } = useAuth();

  const [viewPass, openViewPass, closeViewPass, togglePass] = useBoolean(false);

  const [isStatus, openStatus, closeStatus, toggleStatus] = useBoolean(false);

  const navigate = useNavigate();

  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users?phone_number=55${phone.replace(
            /[\(\)\s\-]/g,
            ""
          )}&password=${password}`
        );

        

        setUser({
          id: response.data[0].id,
          name: response.data[0].name,
          avatar: response.data[0].avatar ? response.data[0].avatar : "",
          phone: response.data[0].phone_number,
        });

        if (response.data.length > 0) {
          navigate("/panel");
        } else {
          toggleStatus();
          console.log("usuario não existe");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };
  return (
    <Dialog onClose={closeDialog} open={isDialog}>
      <div className="p-5 flex flex-col gap-5 ">
        <div className="flex items-center justify-between gap-4 opacity-90">
          <X
            onClick={closeDialog}
            weight="bold"
            className="opacity-90"
            size={20}
          />
          <p className="font-bold text-md">Fazer Login</p>
          <div />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2">
            Bem-vindo de volta a Plataforma
          </p>
        </div>
        {isStatus && (
          <div className="flex items-center justify-center text-red-500 gap-2">
            <Info size={20} weight="bold" />
            <p className="text-md text-center font-semibold leading-none">
              Usuário não existe
            </p>
          </div>
        )}
        <form className="flex flex-col gap-3 sm:mx-5">
          <div className="w-full relative flex items-center gap-2 border-2 border-custon-black rounded-full py-2 px-3 shadow-lg hover:shadow-md ">
            <div className="bg-custon-black p-2 rounded-full">
              <Phone className="text-white" size={15} weight="fill" />
            </div>

            <InputMask
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              mask="(99) 9 9999 - 9999"
              placeholder="(99) 9 9999 - 9999"
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={viewPass ? "text" : "password"}
              className="w-full focus:outline-none font-semibold"
            />
            {viewPass ? (
              <EyeSlash
                onClick={togglePass}
                className="text-black opacity-60"
                size={30}
                weight="bold"
              />
            ) : (
              <Eye
                onClick={togglePass}
                className="text-black opacity-60"
                size={30}
                weight="bold"
              />
            )}
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="flex items-center justify-between font-bold text-lg bg-custon-black text-white py-3 px-5 rounded-full drop-shadow-xl transition ease-in-out hover:scale-105 active:scale-95"
          >
            <ArrowRight size={25} className="invisible" weight="bold" />

            <p>Entrar</p>
            <ArrowRight size={25} weight="bold" />
          </button>
        </form>
        <Divider>ou</Divider>

        <button className="flex items-center justify-between sm:mx-5 border-1 hover:border-2 p-3 rounded-md">
          <img className="w-5" src={IconGoogle} />
          <p className="font-semibold">Sign in with Google</p>
          <div />
        </button>
        <button>
          Não tem uma conta?{" "}
          <span className="font-bold text-green-500">Cadastrar</span>
        </button>
      </div>
    </Dialog>
  );
}
