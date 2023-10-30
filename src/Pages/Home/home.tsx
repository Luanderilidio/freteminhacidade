import {
  Buildings,
  CaretLeft,
  CaretRight,
  Funnel,
  MagnifyingGlass,
  MapPin,
  MapTrifold,
} from "phosphor-react";
import Icon from "../../assets/Icon.png";
import Whater from "../../assets/whater.svg";
import { SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import Container from "../../Components/Container";
import Freight from "../../Components/Freight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../Components/Freight/styles.css";
import FreightSimple from "../../Components/FreightSimple";
import isMobile from "../../utils/isMobile";
import { IconButton } from "@mui/material";
import axios from "axios";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery("freights", async () => {
    return axios
      .get("http://localhost:3000/estudants")
      .then((response) => response.data);
  });

  if (isLoading) {
    return (
      <Container padding={true}>
        <div>Carregando</div>
      </Container>
    );
  }


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
      <div className="col-span-12  rounded-2xl">
        <div className="flex items-center justify-between gap-2 mb-5">
          <p className="whitespace-nowrap font-semibold text-xs opacity-60">
            Melhores fretes da sua cidade e região
          </p>
          <div className="w-full h-[1px] bg-gray-500/5" />
          <div className="flex gap-2">
            <IconButton>
              <CaretLeft size={15} className="opacity-60" weight="bold" />
            </IconButton>

            <IconButton>
              <CaretRight size={15} className="opacity-60" weight="bold" />
            </IconButton>
          </div>
        </div>

        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={10}
          modules={[Autoplay]}
          className="mySwiper h-fit"
        >
          {data.map((e: any, index: number) => (
            <SwiperSlide key={index} className="rounded-2xl">
              <FreightSimple />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="col-span-12 flex items-center justify-between gap-2">
        <p className="whitespace-nowrap font-semibold text-xs opacity-60">
          Encontre o frete da sua preferência
        </p>
        <div className="w-full h-[1px] bg-gray-500/5" />

        <IconButton>
          <Funnel size={15} className="opacity-60" weight="bold" />
        </IconButton>
      </div>
      {data.map((e: any, index: number) => (
        <Freight key={index} id={uuidv4()} />
      ))}
    </Container>
  );
}
