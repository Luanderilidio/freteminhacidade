import { useState, memo } from "react";
import {
  CaretDown,
  ChatDots,
  CrownSimple,
  Heart,
  ShareNetwork,
  Star,
} from "phosphor-react";
import { AvatarGroup } from "@nextui-org/react";
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
import Whatsapp from "../../assets/SocialMedia/whatsapp.svg";
import Instagram from "../../assets/SocialMedia/Instagram.png";
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
import axios from "axios";

interface Avatar {
  id: string;
  avatar: string;
}

interface Address2 {
  cep: string;
  uf: string;
  city: string;
  neighborhood: string;
  street: string;
}

export interface FreightProps {
  id: string;
  avatar: string;
  name: string;
  address: string;
  address2?: Address2;
  cityUF: string;
  hateHeart: number;
  hateShare: number;
  hateSite?: number;
  hateFreight: number;
  hateInstagram?: number;
  hateFacebook?: number;
  hateWhatsapp?: number;
  hateAvatar: Avatar[];
  description: string;
  comments: number;
  typeWorkBody: number;
  imageTruckOne: string;
  imageTruckTwo: string;
  phone_number_one: string;
  phone_number_two: string;
  facebook: string;
  instagram: string;
  exclusive: boolean;
  status?: boolean;
  update_as?: Date;
  save_as?: Date;
}

function Freight2({
  id,
  avatar,
  name,
  address,
  description,
  hateFreight,
  comments,
  cityUF,
  hateHeart,
  hateSite,
  hateWhatsapp,
  hateShare,
  hateAvatar,
  typeWorkBody,
  imageTruckOne,
  imageTruckTwo,
  phone_number_one,
  phone_number_two,
  facebook,
  instagram,
  exclusive,
}: FreightProps): JSX.Element {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const [heartCount, setHeartCount] = useState(hateHeart);
  const [sharedCount, setSharedCount] = useState(hateShare);

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

  const patchHeart = () => {
    const fecthData = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/estudants/${id}`,
          { hateHeart: heartCount + 1 }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  };

  const patchShare = () => {
    const fecthData = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/estudants/${id}`,
          { hateShare: sharedCount + 1 }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  };

  const handleClickHeart = () => {
    openHeart();

    if (!isHeart) {
      setHeartCount((prevLikes) => prevLikes + 1);
      patchHeart();
    }
  };

  const handleClickShare = () => {
    openShare();

    if (!isShare) {
      setSharedCount((prev) => prev + 1);
      patchShare();
    }
  };

  const patchWhats = () => {
    const fecthData = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/estudants/${id}`,
          { hateWhatsapp: hateWhatsapp ? hateWhatsapp + 1 : hateWhatsapp }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  };

  const patchSite = () => {
    const fecthData = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/estudants/${id}`,
          { hateSite: hateSite ? hateSite + 1 : hateSite }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  };

  return (
    <div className="col-span-3 cursor-pointer !font-Inter">
      <div className=" rounded-2xl drop-shadow-xl relative ">
        <Swiper
          onClick={() => {
            navigate(`/details/${id}`)
            patchSite()
          } 
        }
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="rounded-2xl">
            <div className="overflow-hidden rounded-2xl w-full ">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-2xl "
                src={imageTruckOne}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <div className="overflow-hidden rounded-2xl w-full  ">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-2xl "
                src={imageTruckTwo}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-3 right-2 z-50 ">
          <button
            onClick={handleClickHeart}
            className={` ${
              isHeart ? "text-red-500" : "text-red-500 opacity-80"
            } transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer`}
          >
            <Heart size={20} weight="fill" className="" />
            <p className="font-semibold text-xs cursor-pointer">{heartCount}</p>
          </button>
          <button
            onClick={handleClickShare}
            className={`mt-2 ${
              isShare ? "text-white" : "text-white/60"
            } transition ease-in-out active:scale-150 duration-100 flex flex-col items-center justify-center cursor-pointer`}
          >
            <ShareNetwork size={20} weight="fill" className=" " />
            <p className="font-semibold text-xs cursor-pointer">
              {sharedCount}
            </p>
          </button>
        </div>
        <p className="absolute bottom-3 right-3 z-50 w-fit rounded-md px-2 py-2 leading-none text-[.6rem] font-semibold bg-[#25D366]/90 text-[#005A09] shadow-sm shadow-[#005A09]/50">
          {cityUF}
        </p>
        {exclusive && (
          <p className="flex items-center justify-center gap-1 absolute top-3 left-3 z-50 w-fit rounded-md px-2 py-2 leading-none text-[.7rem] font-bold bg-yellow-400 shadow-md shadow-yellow-400/50 text-white">
            <CrownSimple size={13} weight="fill" />
            Recomendado
          </p>
        )}
        {typeWorkBody === 0 && (
          <img className="w-14 bottom-3 left-3 z-50 absolute" src={Size_3} />
        )}
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <div className="flex gap-2">
          <div className="relative h-fit">
            <img
              onClick={() => {
                navigate(`/details/`)
                patchSite()
              }}
              className="!w-12 !h-12 object-cover rounded-full border-3 border-custon-black "
              src={avatar}
            />
            <img className="absolute bottom-0 right-0" src={Verifiqued} />
          </div>
          <div className="flex flex-col">
            <p
              onClick={() => {
                navigate(`/details/${id}`)
                patchSite()
              }}
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
              onClick={() => {
                navigate(`/details/${id}`)
                patchSite()
              }}
              className="flex justify-start gap-1 mt-[2px]"
            >
              <ChatDots className="opacity-70" weight="fill" size={12} />
              <p className="text-xs font-medium opacity-70">{description}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate(`/details/${id}`)
            patchSite()
          }}
          className="flex flex-col justify-start items-end gap-2"
        >
          <div className="w-fit flex items-center gap-1">
            <p className="text-custon-black font-bold text-sm italic">
              {hateFreight}
            </p>
            <Star className="text-yellow-500" weight="fill" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <AvatarGroup>
              {hateAvatar.map((e) => (
                <Avatar
                  key={e.id}
                  sx={{ width: 10, height: 10 }}
                  alt="Travis Howard"
                  src={e.avatar}
                />
              ))}
            </AvatarGroup>
            <p className="underline text-[0.6rem] opacity-70 decoration-black/70 font-semibold">
              +{comments}
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
            patchWhats();
          }}
          className="col-span-8  font-bold flex items-center justify-evenly  rounded-full text-xs leading-none py-3 text-white border-2 border-custon-black bg-[#25D366] transition ease-in-out hover:bg-[#36fd68] active:scale-95 shadow-md shadow-[#25D366]/30"
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
