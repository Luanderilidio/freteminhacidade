import { Buildings, CaretRight, MagnifyingGlass, MapPin } from "phosphor-react";
import Icon from "../../assets/Icon.png";
import Whater from "../../assets/whater.svg";
import { SetStateAction, useState } from "react";
import Container from "../../Components/Container";
import Freight from "../../Components/Freight";

export default function Home() {
  const [dailyGoal, setDailyGoal] = useState(1000);
  const [timer, setTimer] = useState(10);
  const [qtdTimer, setQtdTimer] = useState(
    calcularQuantidadeAgua(dailyGoal, timer)
  );

  function calcularQuantidadeAgua(dailyGoal: number, timer: number) {
    const horasPorDia = 24;
    const intervaloHoras = timer / 60;
    const numeroIntervalos = horasPorDia / intervaloHoras;

    return dailyGoal / numeroIntervalos;
  }

  const changeDailyGoal = (event: any) => {
    setDailyGoal(event.target.value);
  };

  const changeQtdTimer = (event: any) => {
    setQtdTimer(event.target.value);
  };

  const changeTimer = (event: any) => {
    setTimer(event.target.value);
  };

  return (
    <Container>
      <div className="col-span-12 place-self-center cursor-pointer">
        <div className="flex items-center justify-center gap-3 text-md sm:text-3xl font-normal border-3 sm:border-5 border-black py-5 px-3 sm:px-8 rounded-full ">
          <MagnifyingGlass className="hidden sm:block" weight="bold" />
          123 Fretes encontrados em
          <span className="italic font-bold">Cáceres - MT</span>
          <MapPin className="hidden sm:block" weight="bold" />
        </div>
      </div>
      
      <Freight />
      <Freight />
      <Freight />
      <Freight />
      <Freight />

      {/* <div className="col-span-3" />
<div className=" col-span-6">
  <div className="flex gap-3 justify-start mb-10">
    <img className="drop-shadow-2xl" src={Icon} />
    <div>
      <p className="text-2xl">Boa tarde!</p>
      <p className="text-2xl font-semibold">Biro 👋🏻</p>
    </div>
  </div>
  <div className="grid grid-cols-6">
    <div className="col-span-2 ">
      <div className="flex flex-col items-center bg-[#7FC4ED] rounded-2xl text-black drop-shadow-2xl py-5">
        <p className="font-bold">80%</p>
        <img className="w-3/5 mt-12 drop-shadow-2xl" src={Whater} />
        <p className="font-semibold text-2xl mt-5 ">Beba Água</p>
        <p className="text-xl">Meta: {Math.floor(dailyGoal / 1000)}L</p>
      </div>
    </div>
    <div className=" col-span-1" />
    <div className="col-span-3 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        <div>
          <div className="w-full flex justify-between">
            <p className="text-[#7FC4ED] font-semibold">Meta diária</p>
            <p className="opacity-30 text-sm font-semibold">
              {Math.floor(dailyGoal / 1000)}L
            </p>
          </div>
          <input
            type="range"
            min={1000}
            step={1000}
            max={5000}
            value={dailyGoal}
            onChange={changeDailyGoal}
            className="w-full range range-info range-lg"
          />
        </div>
        <div>
          <div className="w-full flex justify-between">
            <p className="text-[#7FC4ED] font-semibold">
              Vou beber água a cada
            </p>
            <p className="opacity-30 text-sm font-semibold">
              {timer != 60 ? `${timer} minutos` : "1 hora"}
            </p>
          </div>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={timer}
            onChange={changeTimer}
            className="w-full range range-info"
          />
        </div>
      </div>
      <p className="w-full font-bold text-5xl text-center leading-none">
        {Math.floor(calcularQuantidadeAgua(dailyGoal, timer))}ml
      </p>
      <p className="text-[#7FC4ED] font-semibold leading-none text-center">a cada</p>
      <div className="flex items-center justify-center gap-5">
        <div className="flex gap-1 items-center">
          <div className="bg-[#322F40] border-1 p-4 rounded-lg shadow-sm shadow-black">
            <p className="font-semibold text-4xl">00</p>
          </div>
          <p className="text-xl opacity-30">h</p>
        </div>
        <p className="font-bold text-3xl">:</p>
        <div className="flex gap-1 items-center">
          <div className="bg-[#322F40] border-1 p-4 rounded-lg shadow-sm shadow-black">
            <p className="font-semibold text-4xl">00</p>
          </div>
          <p className="text-xl opacity-30">m</p>
        </div>
      </div>
      <button className="transition ease-in-out text-black w-full flex items-center justify-center gap-2 py-5 bg-[#7FC4ED] hover:bg-[#64abd4] active:bg-[#7FC4ED] hover:scale-105 active:scale-100 rounded-2xl shadow-[#7FC4ED]/30 shadow-md ">
        <p className="font-semibold leading-none  text-lg">Começar</p>
        <CaretRight weight="bold" size={18} />
      </button>
    </div>
  </div>
</div>
<div className=" col-span-3" /> */}
    </Container>
  );
}
