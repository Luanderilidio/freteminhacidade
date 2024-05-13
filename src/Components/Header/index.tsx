import Logo from "../../assets/Logos/freteminhacidade.svg";
import Logo2 from "../../assets/Logos/logo.svg";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Star from "../../assets/star.png";
import { Dialog, IconButton } from "@mui/material";
import {
  List,
  Question,
  Truck,
  UserCircle,
  UserCirclePlus,
  X,
  XCircle,
} from "phosphor-react";
import { useState } from "react";
import "animate.css";
import { Transition } from "../../utils/transition";
import { useBoolean } from "react-hooks-shareable";
import SignIn from "../SignIn";
import Login from "../Login";
import SearchCity from "./SeachCity";
import SearchBody from "./SeachBody";

export default function Header() {
  const [openDropDownCity, setOpenDropDownCity] = useState(false);
  const [openDropDownSize, setOpenDropDownSize] = useState(false);

  const [isDialogLogin, openDialogLogin, closeDialogLogin, toggleDialogLogin] =
    useBoolean(false);
  const [
    isDialogSignIn,
    openDialogSignIn,
    closeDialogSignIn,
    toggleDialogSignIn,
  ] = useBoolean(false);

  const [isOpenAccount, onOpenAccount, onCloseAccount, toggleAccount] =
    useBoolean(false);

  const [isOpenDialog, onOpenDialog, onCloseDialog, toggleDialog] =
    useBoolean(false);
  return (
    <div className="grid grid-cols-12 px-4 py-4 gap-2 ">
      <div className="col-span-2 flex items-center">
        <img className="" src={Logo} />
      </div>
      <div className="col-span-2 hidden">
        <SearchCity />
      </div>
      <div className="col-span-2 invisible">
        <SearchBody />
      </div>
      <div className="col-span-3 ">
        <button onClick={toggleDialogSignIn} className="w-full h-full  border-2 px-3 flex items-center justify-center gap-3  rounded-2xl border-custon-black font-semibold transition ease-in-out hover:scale-105 active:scale-100 shadow-md hover:shadow-lg ">
          <LocalShippingIcon />
          <p>Anuncie seu frete</p>
          <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
            <p className="text-[#005A09] leading-none">Gratís</p>
            <img className="absolute -bottom-1 right-0" src={Star} />
            <img className="absolute -top-1 left-0" src={Star} />
          </div>
        </button>
      </div>
      <div className="col-span-3 opacity-50">
        <button  className="w-full h-full px-6 border-2 flex items-center justify-center gap-3  rounded-2xl border-custon-black font-semibold transition ease-in-out hover:scale-105 active:scale-100 shadow-md hover:shadow-lg ">
          <Inventory2Icon />
          <p>Encontrar Encomendas</p>
          <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
            <p className="text-[#005A09] leading-none">+13</p>
          </div>
        </button>
      </div>
      <div className="col-span-2 place-self-center sm:justify-self-end relative">
        <button
          onMouseEnter={onOpenAccount}
          className=" marker:w-fit py-3 px-3 flex justify-center items-center  sm:border-2 border-custon-black rounded-2xl gap-4 transition ease-in-out hover:scale-105 active:scale-100 "
        >
          <List size={30} weight="bold" className="" />
          <UserCircle className="hidden sm:flex" size={30} weight="fill" />
        </button>
        {isOpenAccount && (
          <div
            onMouseLeave={onCloseAccount}
            className="h-[200px] w-[270px] overflow-y-auto absolute -bottom-52 -left-60 sm:-left-44 z-10 bg-white border-1 border-custon-black/10 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster"
          >
            <div className="flex justify-between items-center py-3 px-5 border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer">
              <div
                onClick={() => {
                  onCloseAccount();
                  toggleDialogSignIn();
                }}
                className="w-full flex justify-start items-center  gap-2 "
              >
                <UserCirclePlus size={20} weight="bold" />
                <p className="w-full text-sm font-bold ">Cadastrar-se</p>
              </div>

              <XCircle
                onClick={onCloseAccount}
                size={25}
                className="sm:hidden text-red-500"
              />
            </div>
            <div
              onClick={() => {
                onCloseAccount();
                toggleDialogLogin();
              }}
              className="flex justify-between items-center py-3 px-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <UserCircle size={20} weight="regular" />
                <p className="text-sm font-normal ">Entrar</p>
              </div>
            </div>
            <div
              onClick={onCloseAccount}
              className="flex justify-between items-center mt-2 py-3 px-5 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <Truck size={20} weight="regular" />
                <p className="text-sm font-normal ">
                  Anuncie seu Frete
                </p>
              </div>
              <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                <p className="text-[#005A09] leading-none text-xs font-bold">
                  Free
                </p>
              </div>
            </div>
            <div
              onClick={onCloseAccount}
              className="flex justify-between items-center py-3 px-5 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <Question size={20} weight="regular" />
                <p className="text-sm font-normal ">Central de ajuda</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <SignIn isDialog={isDialogSignIn} closeDialog={closeDialogSignIn} />
      <Login isDialog={isDialogLogin} closeDialog={closeDialogLogin} />
    </div>
  );
}
