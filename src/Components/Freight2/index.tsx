import { useState, memo } from "react";
import {
  CaretDown,
  ChatDots,
  CrownSimple,
  Heart,
  ShareNetwork,
  Star,
} from "phosphor-react";
import { AvatarGroup, useDisclosure } from "@nextui-org/react";
import {
  Avatar,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { faker } from "@faker-js/faker";

import Verifiqued from "../../assets/verifiqued.svg";
import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import Youtube from "../../assets/SocialMedia/Youtube.png";
import Linkedin from "../../assets/SocialMedia/Linkedin.png";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Tiktok from "../../assets/SocialMedia/TikTok.png";
import Twitter from "../../assets/SocialMedia/twiter.svg";
import Whatsapp from "../../assets/SocialMedia/whatsapp.svg";
import Facebook from "../../assets/SocialMedia/Facebook.png";

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

import { Pagination } from "swiper/modules";
import { useBoolean } from "react-hooks-shareable";
import { useNavigate } from "react-router-dom";
import { Phone, WhatsApp } from "@mui/icons-material";

interface FreightProps {
  id: string;
  name: string;
  address: string;
  cityUF: string;
  description: string;
  typeWorkBody: number;
  phone_number_one: string;
  phone_number_two: string;
  facebook: string;
  instagram: string;
}

function Freight2({
  id,
  name,
  address,
  description,
  cityUF,
  typeWorkBody,
  phone_number_one,
  phone_number_two,
  facebook,
  instagram,
}: FreightProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const [isHeart, openHeart, closeHeart, toggleHeart] = useBoolean(false);
  const [isShare, openShare, closeShare, toggleShare] = useBoolean(false);

  const socialMedia = Boolean(anchorEl);
  const whatsappButton = Boolean(anchorEl2);

  const clickOpenSocialMdia = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeSocialMedia = () => {
    setAnchorEl(null);
  };

  const clickOpenWhatsappButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl2(event.currentTarget);
  };

  const closeWhatsappButton = () => {
    setAnchorEl2(null);
  };

  let number = faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  let name1 = faker.name.fullName();

  let truck = faker.image.transport();

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-2 cursor-pointer">
      <div className=" rounded-2xl drop-shadow-xl relative ">
        <Swiper
          onClick={() => navigate(`/details/${id}`)}
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-2xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-2xl "
                src={truck}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-2xl "
                src={truck}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-3 right-2 z-50 ">
          <button
            onClick={toggleHeart}
            className={` ${
              isHeart ? "text-red-500" : "text-white"
            } transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer`}
          >
            <Heart size={20} weight="fill" className="" />
            <p className="font-semibold text-xs cursor-pointer">
              +{faker.datatype.number(100)}k
            </p>
          </button>
          <button
            onClick={toggleShare}
            className={`mt-2 ${
              isShare ? "text-black" : "text-white"
            } transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer`}
          >
            <ShareNetwork size={20} weight="fill" className=" " />
            <p className="font-semibold text-xs cursor-pointer">
              +{faker.datatype.number(100)}k
            </p>
          </button>
        </div>
        <p className="absolute bottom-3 right-3 z-50 w-fit rounded-md px-2 py-2 leading-none text-[.6rem] font-semibold bg-[#25D366]/90 text-[#005A09] shadow-sm shadow-[#005A09]/50">
          {cityUF}
        </p>
        {faker.datatype.boolean() && (
          <p className="flex items-center justify-center gap-1 absolute top-3 left-3 z-50 w-fit rounded-md px-2 py-2 leading-none text-[.7rem] font-bold bg-yellow-400 shadow-md shadow-yellow-400/50 text-white">
            <CrownSimple size={13} weight="fill" />
            Recomendado
          </p>
        )}
        {typeWorkBody === 1 && (
          <img className="w-14 bottom-3 left-3 z-50 absolute" src={Size_3} />
        )}
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <div className="flex gap-2">
          <div className="relative h-fit">
            <img
              onClick={() => navigate(`/details/${id}`)}
              className="!w-12 !h-12 object-cover rounded-full border-3 border-custon-black "
              src={faker.image.avatar()}
            />
            <img className="absolute bottom-0 right-0" src={Verifiqued} />
          </div>
          <div className="flex flex-col">
            <p
              onClick={() => navigate(`/details/${id}`)}
              className="text-sm font-semibold opacity-90"
            >
              {name}
            </p>
            <div className="flex justify-start gap-1 mt-1">
              <img src={GoogleMapsIcon} className="mr-[2.5px]" />

              <a href={address} target="_blank">
                <p className="text-xs font-medium underline decoration-solid decoration-black/70 opacity-70">
                  Ver no Google Maps
                </p>
              </a>
            </div>
            <div
              onClick={() => navigate(`/details/${id}`)}
              className="flex justify-start gap-1 mt-[2px]"
            >
              <ChatDots className="opacity-70" weight="fill" size={12} />
              <p className="text-xs font-medium opacity-70">{description}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate(`/details/${id}`)}
          className="flex flex-col justify-start items-end gap-2"
        >
          <div className="w-fit flex items-center gap-1">
            <p className="text-custon-black font-bold text-sm italic">4.5</p>
            <Star className="text-yellow-500" weight="fill" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <AvatarGroup>
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Travis Howard"
                src={faker.image.avatar()}
              />
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Cindy Baker"
                src={faker.image.avatar()}
              />
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Agnes Walker"
                src={faker.image.avatar()}
              />
              <Avatar
                sx={{ width: 10, height: 10 }}
                alt="Trevor Henderson"
                src={faker.image.avatar()}
              />
            </AvatarGroup>
            <p className="underline text-[0.6rem] opacity-70 decoration-black/70 font-semibold">
              +{faker.datatype.number(100)}
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
            {instagram && (
              <Link
                target="_blank"
                rel="noreferrer"
                underline="none"
                href={instagram}
              >
                <div
                  onClick={closeSocialMedia}
                  className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
                >
                  <div className="flex justify-start items-center  gap-2">
                    <img src={Instagram} className="w-4" />
                    <p className="text-xs font-semibold opacity-80 !text-custon-black">
                      Instagram
                    </p>
                  </div>
                </div>
              </Link>
            )}
            {facebook && (
              <Link
                target="_blank"
                rel="noreferrer"
                underline="none"
                href={facebook}
              >
                <div
                  onClick={closeSocialMedia}
                  className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	"
                >
                  <div className="flex justify-start items-center  gap-2">
                    <img src={Facebook} className="w-4" />
                    <p className="text-xs font-semibold opacity-80 !text-custon-black">
                      Facebook
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </Menu>
        </div>
        <button
          onClick={(event) => {
            if (phone_number_two) {
              clickOpenWhatsappButton(event);
            } else {
              window.open(
                `https://wa.me/+55${phone_number_one}?text=Ol%C3%A1%2C+est%C3%A1+disponivel+para+frete%3F`,
                "_blank"
              );
            }
          }}
          className="col-span-8  font-bold flex items-center justify-evenly gap-2 rounded-full text-xs leading-none py-3 text-white border-2 border-custon-black bg-[#25D366] transition ease-in-out hover:bg-[#36fd68] active:scale-95 shadow-md shadow-[#25D366]/30"
        >
          <CaretDown className="invisible" size={10} weight="bold" />

          <div className="flex items-center justify-center gap-2">
            <img src={Whatsapp} />
            Chamar no Whatsapp
          </div>
          <CaretDown
            className={phone_number_two ? "block" : "invisible"}
            size={10}
            weight="bold"
          />
        </button>
        <Menu
          anchorEl={anchorEl2}
          open={whatsappButton}
          onClose={closeWhatsappButton}
        >
          <List>
            <ListItem
              onClick={() =>
                window.open(
                  `https://wa.me/+55${phone_number_two}?text=Ol%C3%A1%2C+est%C3%A1+disponivel+para+frete%3F`,
                  "_blank"
                )
              }
              className="!cursor-pointer"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <WhatsApp fontSize="small" />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Phone fontSize="small" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <p className="text-xs font-semibold opacity-80 !text-custon-black">
                    WhatsApp Principal
                  </p>
                }
                secondary={
                  <p className="text-xs font-normal opacity-80 !text-custon-black">
                    {phone_number_one.substring(0, 14)}***
                  </p>
                }
              />
            </ListItem>
            <ListItem
              onClick={() =>
                window.open(
                  "https://wa.me/5554996635840?text=Ol%C3%A1%2C+est%C3%A1+disponivel+para+frete%3F",
                  "_blank"
                )
              }
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <WhatsApp fontSize="small" />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Phone fontSize="small" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <p className="text-xs font-semibold opacity-80 !text-custon-black">
                    WhatsApp Secundário
                  </p>
                }
                secondary={
                  <p className="text-xs font-normal opacity-80 !text-custon-black">
                    {phone_number_one.substring(0, 14)}***
                  </p>
                }
              />
            </ListItem>
          </List>
        </Menu>
      </div>
    </div>
  );
}

export default memo(Freight2);
