import { Buildings, CaretRight, MagnifyingGlass, MapPin, MapTrifold } from "phosphor-react";
import Icon from "../../assets/Icon.png";
import Whater from "../../assets/whater.svg";
import { SetStateAction, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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
    <Container padding={true}>
      
      <div className="col-span-12 place-self-center cursor-pointer">
        <div className="flex items-center justify-center gap-3 text-md sm:text-3xl font-normal border-3 sm:border-5 border-black py-5 px-3 sm:px-8 rounded-full ">
          <MagnifyingGlass className="hidden sm:block" weight="bold" />
          123 Fretes encontrados em
          <span className="italic font-bold">Cáceres - MT</span>
          <MapPin className="hidden sm:block" weight="bold" />
        </div>
      </div>
      
      <Freight id={uuidv4()}/>
      <Freight id={uuidv4()}/>
      <Freight id={uuidv4()}/>
      <Freight id={uuidv4()}/>
      <Freight id={uuidv4()}/>
      <Freight id={uuidv4()}/>
      

      
    </Container>
  );
}
