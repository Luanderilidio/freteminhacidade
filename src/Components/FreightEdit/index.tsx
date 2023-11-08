import { faker } from "@faker-js/faker";
import { Avatar, Button, Divider } from "@mui/material";
import { Chat, Heart, MapPin, Phone, TrendUp, User } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Freight2/styles.css";
import {
  WhatsApp,
  FavoriteBorderOutlined,
  ShareOutlined,
  DriveFileRenameOutline,
  DeleteForeverOutlined,
  TaskAltOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";

export default function FreightEdit() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-3">
      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex gap-3">
          <Avatar
            src={faker.image.avatar()}
            className="!w-14 !h-14 drop-shadow-xl border-3 border-custon-black"
          />
          <div className="w-full">
            <div className="w-full flex justify-between items-center mb-1 ">
              <div className="flex items-start justify-start gap-1">
                <User size={15} weight="fill" />

                <p className="text-[.9rem] font-semibold opacity-80">
                  {faker.name.fullName()}
                </p>
              </div>
              <Button
                size="small"
                variant="outlined"
                color="success"
                endIcon={<TaskAltOutlined />}
              >
                <p className="!font-bold normal-case">Online</p>
              </Button>
              <div />
            </div>
            <div className="flex items-start justify-start gap-1">
              <MapPin size={15} weight="bold" />

              <p className="text-[.8rem] font-normal opacity-80">
                {faker.address.country()}, {faker.address.city()}
              </p>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Chat size={15} weight="bold" />

              <p className="text-[.8rem] font-normal opacity-80">
                Faço frete na cidade e região
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-4">
          <div className="flex items-center justify-start gap-1 mb-1">
            <Phone size={15} weight="fill" />

            <p className="text-[.9rem] font-semibold opacity-80">
              +55 9 9663-5843
            </p>
          </div>
          <div className="flex items-center justify-start gap-1 mb-1">
            <Phone size={15} weight="fill" />

            <p className="text-[.9rem] font-semibold opacity-80">
              +55 9 9663-5843
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className=" rounded-lg drop-shadow-xl relative ">
          <Swiper
            spaceBetween={10}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="rounded-2xl">
              <div className="overflow-hidden rounded-lg  w-full ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg  "
                  src={faker.image.transport()}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-2xl">
              <div className="overflow-hidden rounded-lg w-full  ">
                <img
                  className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-lg  "
                  src={faker.image.transport()}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <Divider>
          <p className="text-xs font-semibold opacity-70">Engajamento</p>
        </Divider>
        <div className="flex items-center gap-1">
          <WhatsApp fontSize="small" className="text-green-500" />
          <p className="text-xs">
            <span className="font-semibold">124</span> Clicks
          </p>
          <TrendUp size={10} className="text-green-500" weight="bold" />
        </div>
        <div className="flex items-center gap-1">
          <FavoriteBorderOutlined fontSize="small" className="text-red-500" />
          <p className="text-xs">
            <span className="font-semibold">124</span> Likes
          </p>
          <TrendUp size={10} className="text-green-500" weight="bold" />
        </div>
        <div className="flex items-center gap-1">
          <ShareOutlined fontSize="small" className="text-gray-500" />
          <p className="text-xs">
            <span className="font-semibold">124</span> Shares
          </p>
          <TrendUp size={10} className="text-green-500" weight="bold" />
        </div>
      </div>
      <div className="col-span-2 border flex flex-col justify-between">
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          endIcon={<DriveFileRenameOutline />}
        >
          Editar
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          endIcon={<DeleteForeverOutlined />}
        >
          Excluir
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          endIcon={<VisibilityOffOutlined />}
        >
          Desativar
        </Button>
      </div>
    </div>
  );
}
