import { useState } from "react";
import { CaretDown, ChatDots, Heart, ShareNetwork, Star } from "phosphor-react";
import { AvatarGroup, useDisclosure } from "@nextui-org/react";
import { Avatar, Menu } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { faker } from "@faker-js/faker";

import Verifiqued from "../../assets/verifiqued.svg";
import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import Youtube from "../../assets/SocialMedia/youtube.svg";
import Linkedin from "../../assets/SocialMedia/linkedin.svg";
import Instagram from "../../assets/SocialMedia/instagram.svg";
import Tiktok from "../../assets/SocialMedia/tiktok.svg";
import Twitter from "../../assets/SocialMedia/twiter.svg";
import Whatsapp from "../../assets/SocialMedia/whatsapp.svg";
import Facebook from "../../assets/SocialMedia/facebook.svg";

import Size_1 from "../../assets/Sizes/size_1.png";
import Size_2 from "../../assets/Sizes/size_2.png";
import Size_3 from "../../assets/Sizes/size_3.png";
import Size_4 from "../../assets/Sizes/size_4.png";
import Size_5 from "../../assets/Sizes/size_5.png";
import Size_6 from "../../assets/Sizes/size_6.png";
import Size_7 from "../../assets/Sizes/size_7.png";
import Size_8 from "../../assets/Sizes/size_8.png";
import Size_9 from "../../assets/Sizes/size_9.png";
import Size_10 from "../../assets/Sizes/size_10.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import {  Pagination } from "swiper/modules";

export default function Freight() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const socialMedia = Boolean(anchorEl);
  const clickOpenSocialMdia = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeSocialMedia = () => {
    setAnchorEl(null);
  };

  let number = faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className="col-span-12 sm:col-span-3">
      <div className="h-60 rounded-2xl drop-shadow-xl relative">
        <Swiper
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full object-cover rounded-2xl drop-shadow-xl"
              src="https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-com-reboques-no-fundo_342744-1297.jpg?w=740&t=st=1697400727~exp=1697401327~hmac=9aa0ed1bcd8e357782f2b17737bb0099704f07d1b0eb68559fd3f0c442448dab"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full object-cover rounded-2xl drop-shadow-xl"
              src="https://img.freepik.com/fotos-gratis/veiculo-de-caminhao-com-reboques-no-fundo_342744-1297.jpg?w=740&t=st=1697400727~exp=1697401327~hmac=9aa0ed1bcd8e357782f2b17737bb0099704f07d1b0eb68559fd3f0c442448dab"
            />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-3 right-2 z-50 ">
          <div className="text-white active:text-red-500 flex flex-col items-center justify-center cursor-pointer">
            <Heart size={20} weight="fill" className=" " />
            <p className="font-semibold text-sm">+54k</p>
          </div>
          <div className="text-white active:text-black flex flex-col items-center justify-center mt-2 cursor-pointer">
            <ShareNetwork size={20} weight="fill" className=" " />
            <p className="font-semibold text-sm">+123k</p>
          </div>
        </div>
        <p className="absolute bottom-3 right-3 z-50 w-fit rounded-md px-2 py-3  leading-none text-xs font-semibold bg-[#25D366]/90 text-[#005A09]">
          Cáceres - MT
        </p>
        <img className="w-14 bottom-3 left-3 z-50 absolute" src={Size_3} />
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <div className="flex gap-2">
          <div className="relative h-fit">
            <img
              className="w-14 h-14 object-cover rounded-full border-3 border-black "
              src="https://img.freepik.com/fotos-gratis/trabalhador-de-uniforme-homem-conserta-um-caminhao-homem-com-ferramentas_1157-46527.jpg?w=360&t=st=1697401143~exp=1697401743~hmac=91ef1b4968e8d715dcf787b402c18b992b688a1f51477bc5007126980ecc8af2"
            />
            <img className="absolute bottom-0 right-0" src={Verifiqued} />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold opacity-90">
              Luander Ilidio de Arruda{" "}
            </p>
            <div className="flex justify-start gap-1 mt-1">
              <img src={GoogleMapsIcon} className="mr-[2.5px]" />
              <p className="text-xs font-medium underline decoration-solid decoration-black/70 opacity-70">
                Cavalhada II, Cáceres - MT
              </p>
            </div>
            <div className="flex justify-start gap-1 mt-[2px]">
              <ChatDots className="opacity-70" weight="fill" size={12} />
              <p className="text-xs font-medium opacity-70">
                Faço frete na cidade e região
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-end gap-2">
          <div className="w-fit flex items-center gap-1">
            <p className="font-bold text-sm italic">4.5</p>
            <Star className="text-yellow-500" weight="fill" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <AvatarGroup>
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Agnes Walker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Trevor Henderson"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </AvatarGroup>
            <p className="underline text-[0.6rem] opacity-70 decoration-black/70 font-semibold">
              +134
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-12 gap-1s">
        <div className="col-span-4 place-self-center relative">
          <button
            onClick={clickOpenSocialMdia}
            className="flex items-center gap-[2px] text-[.7rem] leading-none font-semibold"
          >
            Redes Sociais <CaretDown size={15} />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={socialMedia}
            onClose={closeSocialMedia}
          >
            <div
              onClick={closeSocialMedia}
              className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <img src={Instagram} className="w-4" />
                <p className="text-xs font-semibold opacity-80">@luander</p>
              </div>
            </div>
            <div
              onClick={closeSocialMedia}
              className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <img src={Facebook} className="w-4" />
                <p className="text-xs font-semibold opacity-80">
                  luanderarruda
                </p>
              </div>
            </div>
            <div
              onClick={closeSocialMedia}
              className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <img src={Linkedin} className="w-4" />
                <p className="text-xs font-semibold opacity-80">
                  luanderilidio
                </p>
              </div>
            </div>
            <div
              onClick={closeSocialMedia}
              className="flex justify-between items-center p-5 border-b-[1px] border-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
            >
              <div className="flex justify-start items-center  gap-2">
                <img src={Tiktok} className="w-4" />
                <p className="text-xs font-semibold opacity-80">luander</p>
              </div>
            </div>
          </Menu>
        </div>
        <button className="col-span-8  font-bold flex items-center justify-center gap-2 rounded-full text-sm leading-none py-3 text-white border-2 border-black bg-[#25D366] transition ease-in-out hover:bg-[#36fd68] active:scale-95 shadow-md shadow-[#25D366]/30">
          <img src={Whatsapp} />
          Chamar no Whatsapp
        </button>
      </div>
    </div>
  );
}
