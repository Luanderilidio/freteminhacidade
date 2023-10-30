import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { AvatarGroup, Rating } from "@mui/material";
import { Avatar } from "@nextui-org/react";
import { useBoolean } from "react-hooks-shareable";
import { ArrowLeft, ChatDots, Heart, ShareNetwork } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Container from "../../Components/Container";
import banner from "../../assets/banner-frete.jpg";
import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import Whatsapp from "../../assets/SocialMedia/whatsapp.svg";
import Facebook from "../../assets/SocialMedia/Facebook.png";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Linkedin from "../../assets/SocialMedia/Linkedin.png";

import Twitter from "../../assets/SocialMedia/Twitter.png";
import Gmail from "../../assets/SocialMedia/Gmail.png";
import Size_4 from "../../assets/Sizes/size_4.png";


import "swiper/css";
import "swiper/css/pagination";
import "../../Components/Freight/styles.css";

export default function Details() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [value, setValue] = useState<number | null>(2);

  const [isHeart, openHeart, closeHeart, toggleHeart] = useBoolean(false);

  return (
    <Container padding={false}>
      <div className="col-span-12 relative">
        <div className="w-full h-80  drop-shadow-xl relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full  h-full overflow-hidden">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover "
                  src="https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-com-reboques-no-fundo_342744-1297.jpg?w=740&t=st=1697400727~exp=1697401327~hmac=9aa0ed1bcd8e357782f2b17737bb0099704f07d1b0eb68559fd3f0c442448dab"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full  h-full overflow-hidden">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover "
                  src="https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-com-reboques-no-fundo_342744-1297.jpg?w=740&t=st=1697400727~exp=1697401327~hmac=9aa0ed1bcd8e357782f2b17737bb0099704f07d1b0eb68559fd3f0c442448dab"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <img className="w-full h-72 object-cover object-top" src={banner} /> */}
        <button
          onClick={toggleHeart}
          className={` ${
            isHeart ? "text-red-500" : "text-white"
          } transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer absolute top-0 right-5 bottom-0`}
        >
          <Heart size={20} weight="fill" className="" />
          <p className="font-semibold text-xs cursor-pointer">+54k</p>
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-white transition ease-in-out active:scale-150 duration-100 cursor-pointer absolute  left-5  !z-50 bottom-40"
        >
          <ArrowLeft size={40} weight="bold" className="" />
        </button>
        <img
        src={Size_4}
          onClick={() => navigate("/")}
          className="w-14 transition ease-in-out active:scale-150 duration-100 cursor-pointer absolute  right-5  !z-50 bottom-2"
        />
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-3 border p-5">
        <div className="col-span-2 relative">
          <img
            className="!w-36 !h-36 object-cover rounded-full border-3 border-custon-black absolute z-50 top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="https://img.freepik.com/fotos-gratis/trabalhador-de-uniforme-homem-conserta-um-caminhao-homem-com-ferramentas_1157-46527.jpg?w=360&t=st=1697401143~exp=1697401743~hmac=91ef1b4968e8d715dcf787b402c18b992b688a1f51477bc5007126980ecc8af2"
          />
        </div>
        <div className="col-span-5">
          <div className="flex items-center justify-start gap-3">
            <h1 className="text-3xl font-semibold">Luander Ilidio de Arruda</h1>
            <p className=" z-50 w-fit rounded-md px-2 py-2 leading-none text-[.6rem] font-semibold bg-[#25D366]/90 text-[#005A09] shadow-sm shadow-[#005A09]/50">
              Cáceres - <span className="font-black">MT</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <p className="font-bold opacity-70">513 reviews</p>
            <AvatarGroup>
              <Avatar
                className="w-4  h-4"
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                className="w-4  h-4"
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                className="w-4  h-4"
                alt="Agnes Walker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                className="w-4  h-4"
                alt="Trevor Henderson"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </AvatarGroup>
          </div>
          <div className="flex justify-start gap-1 mt-4">
            <img src={GoogleMapsIcon} className="mr-[2.5px]" />
            <p className="text-xs font-medium underline decoration-solid decoration-black/70 opacity-70">
              Cavalhada II, Cáceres - MT
            </p>
          </div>
          <div className="flex justify-start gap-1 mt-2">
            <ChatDots className="opacity-70" weight="fill" size={12} />
            <p className="text-xs font-medium opacity-70">
              Faço frete na cidade e região
            </p>
          </div>
        </div>
        <div className="col-span-5 flex flex-col items-end justify-between ">
          <div className="flex gap-4">
            <button className=" font-bold flex items-center justify-center gap-2 rounded-full text-xs leading-none p-3 text-white bg-gray-400 transition ease-in-out hover:bg-gray-500 hover:scale-105 active:scale-95 shadow-md shadow-gray-400/30">
              <ShareNetwork size={16} />
              Compartilhar
            </button>
            <button className=" font-bold flex items-center justify-center gap-2 rounded-full text-xs leading-none p-3 text-white border-2 border-custon-black bg-[#25D366] transition ease-in-out hover:bg-[#36fd68] hover:scale-105  active:scale-95 shadow-md shadow-[#25D366]/30">
              <img src={Whatsapp} />
              Chamar no Whatsapp
            </button>
          </div>
          <div className="flex gap-3">
            <img
              className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
              src={Facebook}
            />
            <img
              className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
              src={Linkedin}
            />
            <img
              className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
              src={Instagram}
            />
            <img
              className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
              src={Twitter}
            />
            <img
              className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
              src={Gmail}
            />
          </div>
        </div>
      </div>
      {/* <h1>Detalhes do Componente {id}</h1> */}
    </Container>
  );
}
