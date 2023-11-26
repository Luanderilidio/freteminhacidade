import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  AvatarGroup,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
} from "@mui/material";
import { Avatar } from "@nextui-org/react";
import { useBoolean } from "react-hooks-shareable";
import {
  ArrowLeft,
  CalendarCheck,
  ChatDots,
  Clock,
  ForkKnife,
  Heart,
  Info,
  ShareNetwork,
} from "phosphor-react";
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

import logoPage from "../../assets/Logos/logoPagina.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "../../Components/Freight/styles.css";
import { faker } from "@faker-js/faker";

const itemData = [
  {
    img: "https://www.brejeiro.com.br/wp-content/uploads/2023/07/pequi-1.png",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGYnhcX10CXqAIPSEqRJpOy4BsBgVAnxr9m25zY5b-ugmPnveTYYBeDfagRv09x-X800&usqp=CAU",
    title: "Burger",
  },
  {
    img: "https://roteirobonitoms.com.br/wp-content/uploads/2022/06/caldo-de-piranha-1-1536x1152.jpg",
    title: "Camera",
  },
  {
    img: "https://roteirobonitoms.com.br/wp-content/uploads/2022/07/farofa-de-banana-da-terra-1536x1171.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://roteirobonitoms.com.br/wp-content/uploads/2022/07/terere-1-1536x1152.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://blog.123milhas.com/wp-content/uploads/2022/03/Banner-Tem-que-comer-pantanal-1920x1077-123-milhas.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
];

export default function Details() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [value, setValue] = useState<number | null>(2);

  const [isHeart, openHeart, closeHeart, toggleHeart] = useBoolean(false);

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

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
                  src="https://vejario.abril.com.br/wp-content/uploads/2020/08/Fachada-OrgBistro_0048_Alta_CredTomasRangel.jpg?quality=70&strip=info&w=720&h=440&crop=1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full  h-full overflow-hidden">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover "
                  src="https://diaonline.ig.com.br/wp-content/uploads/2019/10/comida-caseira-em-goiania-melhores-restaurantes-para-aproveitar.jpg"
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
            src={logoPage}
          />
        </div>
        <div className="col-span-5">
          <div className="flex items-center justify-start gap-3">
            <h1 className="text-3xl font-semibold">
              Pagina Ponto Gastronomico
            </h1>
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
                src={faker.image.avatar()}
              />
              <Avatar
                className="w-4  h-4"
                alt="Cindy Baker"
                src={faker.image.avatar()}
              />
              <Avatar
                className="w-4  h-4"
                alt="Agnes Walker"
                src={faker.image.avatar()}
              />
              <Avatar
                className="w-4  h-4"
                alt="Trevor Henderson"
                src={faker.image.avatar()}
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
              Melhor Ponto Gastronomico na cidade e região
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
      <div className="col-span-2 pt-5">
        <div className="flex items-center justify-start gap-2 mb-2">
          <Clock size={25} weight="bold" />

          <p className="font-bold opacity-80 text-sm">
            Horarios de Atendimento
          </p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalendarCheck size={25} weight="bold" />

          <p className="text-xs font-semibold">Segunda Feira</p>
          <p className="text-xs">07:00 ás 12:00</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalendarCheck size={25} weight="bold" />

          <p className="text-xs font-semibold">Terça Feira</p>
          <p className="text-xs">07:00 ás 12:00</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalendarCheck size={25} weight="bold" />

          <p className="text-xs font-semibold">Quarta Feira</p>
          <p className="text-xs">07:00 ás 12:00</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalendarCheck size={25} weight="bold" />

          <p className="text-xs font-semibold">Quinta Feira</p>
          <p className="text-xs">07:00 ás 12:00</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalendarCheck size={25} weight="bold" />

          <p className="text-xs font-semibold">Sexta Feira</p>
          <p className="text-xs">07:00 ás 12:00</p>
        </div>
        <div className="flex items-center justify-start gap-2">
          <CalendarCheck size={25} weight="bold" />

          <p className="text-xs font-semibold">Sabado</p>
          <p className="text-xs">07:00 ás 12:00</p>
        </div>
      </div>
      <div className="col-span-7  px-5 pt-5">
        <div className="flex items-center justify-start gap-2">
          <Info size={30} className="opacity-80" weight="bold" />

          <p className="font-bold text-3xl opacity-80 ">
            Sobre o Estabalecimento
          </p>
        </div>
        <p className="font-bold text-3xl opacity-80 mb-5"></p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <div className="my-5">
          <div className="flex items-center justify-start gap-2">
            <ForkKnife size={30} className="opacity-80" weight="bold" />

            <p className="font-bold text-3xl opacity-80 ">Pratos Típicos</p>
          </div>
          <div>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className="w-16 h-16"
                    src="https://roteirobonitoms.com.br/wp-content/uploads/2022/07/sopa-paraguaia-1-1536x1023.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Sopa paraguaia pantaneira"
                  secondary="Prato Tradicional"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className="w-16 h-16"
                    src="https://roteirobonitoms.com.br/wp-content/uploads/2022/07/pacu-assado-2-1536x1023.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Pacu assado na folha de bananeira"
                  secondary="Prato Tradicional"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className="w-16 h-16"
                    src="https://roteirobonitoms.com.br/wp-content/uploads/2022/07/arroz-carreteiro-1-1536x864.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary=" Arroz carreteiro"
                  secondary="Prato Tradicional"
                />
              </ListItem>
            </List>
          </div>
        </div>

        <p className="font-bold text-3xl opacity-80 my-5">Fotos Principais</p>
        <ImageList
          sx={{ width: "100%", height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="col-span-3"></div>
    </Container>
  );
}
