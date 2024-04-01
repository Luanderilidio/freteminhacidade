import { Funnel } from "phosphor-react";
import Gif1 from "../../../src/assets/Gifs/gif1.gif";
import Gif2 from "../../../src/assets/Gifs/gif2.gif";
import Gif3 from "../../../src/assets/Gifs/gif3.gif";
import Gif4 from "../../../src/assets/Gifs/gif4.gif";
import { lazy, Suspense } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "react-query";
import Container from "../../Components/Container";
import { faker } from "@faker-js/faker";
import Ads from "../../assets/ads.png";
import "swiper/css";
import "swiper/css/pagination";
import "../../Components/Freight/styles.css";
import isMobile from "../../utils/isMobile";
import { IconButton } from "@mui/material";
import axios from "axios";
import Freight2 from "../../Components/Freight2";
import FilterBody from "../../Components/FilterBody";

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

  const Gifs = [Gif1, Gif2, Gif3, Gif4];

  return (
    <Container padding={true}>
      <div className="col-span-12 flex items-center justify-center">
        <img src={faker.helpers.arrayElement(Gifs)} />
      </div>
      <div className="col-span-12 flex items-center justify-between gap-2">
        <p className="whitespace-nowrap font-semibold text-xs opacity-60">
          Escolha o tipo de carroçaria
        </p>
        <div className="w-full h-[1px] bg-gray-500/5" />

        <IconButton>
          <Funnel size={15} className="opacity-60" weight="bold" />
        </IconButton>
      </div>
      <div className=" col-span-12 rounded-2xl">
        <FilterBody />
      </div>

      <div className="col-span-12 flex items-center justify-between gap-2">
        <p className="whitespace-nowrap font-semibold text-xs opacity-60">
          Melhores fretes sua cidade e região
        </p>
        <div className="w-full h-[1px] bg-gray-500/5" />

        <IconButton>
          <Funnel size={15} className="opacity-60" weight="bold" />
        </IconButton>
      </div>
      <div className="col-span-9 grid grid-cols-9 gap-5">
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
      </div>
      <div className="col-span-3">
        <img src={Ads} alt="" />
      </div>
    </Container>
  );
}
