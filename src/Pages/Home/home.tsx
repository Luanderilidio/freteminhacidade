import {
  Buildings,
  CaretLeft,
  CaretRight,
  Funnel,
  MagnifyingGlass,
  MapPin,
  MapTrifold,
} from "phosphor-react";
import { lazy, Suspense, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import Container from "../../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { faker } from "@faker-js/faker";

import "swiper/css";
import "swiper/css/pagination";
import "../../Components/Freight/styles.css";
import isMobile from "../../utils/isMobile";
import { IconButton } from "@mui/material";
import axios from "axios";
import Freight2 from "../../Components/Freight2";

const FreightSimple = lazy(() => import("../../Components/FreightSimple"));
const Freight = lazy(() => import("../../Components/Freight"));

export default function Home() {
  const { data, isLoading, isError, error } = useQuery(
    "freights",
    async () => {
      return axios
        .get("http://localhost:3000/estudants")
        .then((response) => response.data);
    },
    {
      retry: 3,
      refetchOnWindowFocus: false,
    }
  );

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
          slidesPerView={isMobile() ? 1 : 4}
          spaceBetween={10}
          modules={[Autoplay]}
          className="mySwiper h-fit"
        >
          <Suspense fallback={<p>Loading</p>}>
            {data?.map((e: any, index: number) => (
              <SwiperSlide key={index} className="rounded-2xl">
                <FreightSimple />
              </SwiperSlide>
            ))}
          </Suspense>
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
      <Suspense fallback={<p>Loading</p>}>
        {data?.map((e: any, index: number) => (
          <Freight2
            key={e.id}
            id={e.id}
            avatar={faker.image.avatar()}
            name={e.name}
            address={e.address}
            cityUF={e.cityUF}
            hateHeart={e.hateHeart}
            hateShare={e.hateShare}
            description={e.description}
            typeWorkBody={1}
            hateFreight={e.hateFreight}
            hateAvatar={e.hateAvatar}
            hateSite={e.hateSite}
            hateWhatsapp={e.hateWhatsapp}
            comments={e.comments}
            imageTruckOne={e.imageTruckOne}
            imageTruckTwo={e.imageTruckTwo}
            phone_number_one={e.phone_number_one}
            phone_number_two={e.phone_number_two}
            facebook={e.facebook}
            instagram={e.instagram}
            exclusive={e.exclusive}
          />
        ))}
      </Suspense>
    </Container>
  );
}
