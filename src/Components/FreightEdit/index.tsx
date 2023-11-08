import { faker } from "@faker-js/faker";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  Chat,
  FacebookLogo,
  Heart,
  InstagramLogo,
  MapPin,
  Phone,
  TrendUp,
  User,
} from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
  WhatsApp,
  FavoriteBorderOutlined,
  ShareOutlined,
  DriveFileRenameOutline,
  DeleteForeverOutlined,
  TaskAltOutlined,
  VisibilityOffOutlined,
  InsightsRounded,
  LaunchOutlined,
} from "@mui/icons-material";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "../Freight2/styles.css";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Facebook from "../../assets/SocialMedia/Facebook.png";

export default function FreightEdit() {
  const [anchorStatus, setAnchorStatus] = useState<null | HTMLElement>(null);
  const openStatus = Boolean(anchorStatus);
  const clickcToggleStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorStatus(event.currentTarget);
  };
  const handleCloseStatus = () => {
    setAnchorStatus(null);
  };

  return (
    <div className="col-span-12 grid grid-cols-12 gap-3 border-1 border-black/10 p-5 rounded-2xl shadow-lg">
      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex gap-3">
          <Avatar
            src={faker.image.avatar()}
            className="!w-14 !h-14 drop-shadow-xl border-3 border-custon-black"
          />
          <div className="w-full">
            <div className="w-full flex justify-between items-center mb-1 ">
              <div className="flex items-center justify-start gap-1">
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
                onClick={clickcToggleStatus}
              >
                <p className="!font-bold normal-case">Online</p>
              </Button>
              <Menu
                anchorEl={anchorStatus}
                open={openStatus}
                onClose={handleCloseStatus}
              >
                <MenuItem onClick={handleCloseStatus}>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    color="inherit"
                    endIcon={<VisibilityOffOutlined />}
                  >
                    <p className="!font-bold normal-case">Desativar</p>
                  </Button>
                </MenuItem>
              </Menu>
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
        <div className="flex justify-start gap-4 mt-2 ">
          <div className="flex flex-col items-start justify-start gap-1 mb-1">
            <p className="text-[.6rem] font-normal opacity-80 leading-none ">
              Principal
            </p>
            <div className="flex items-center justify-start gap-1">
              <Phone size={15} weight="fill" />
              <p className="text-[.9rem] font-semibold opacity-80 leading-none">
                +55 9 9663-5843
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1 mb-1">
            <p className="text-[.6rem] font-normal opacity-80 leading-none ">
              Secundário
            </p>
            <div className="flex items-center justify-start gap-1">
              <Phone size={15} weight="fill" />
              <p className="text-[.9rem] font-semibold opacity-80 leading-none">
                +55 9 9663-5843
              </p>
            </div>
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

      <div className="col-span-2 flex flex-col gap-2 ">
        <Divider>
          <p className="text-xs font-semibold opacity-70">Redes Sociais</p>
        </Divider>
        <div className="flex flex-col justify-evenly h-full gap-2 ">
          {/* <Link target="_blank" rel="noreferrer" underline="none" href="###">
            <div className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
              <div className="flex justify-start items-center  gap-2">
                <img src={Instagram} className="w-4" />
                <p className="text-xs font-semibold opacity-80 !text-custon-black">
                  Instagram
                </p>
              </div>
            </div>
          </Link> */}

          <TextField
            disabled
            size="small"
            value={faker.name.fullName()}
            label="Instagram"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    {/* <img src={Instagram} className="w-3" /> */}
                    <InstagramLogo weight="bold" size={20} />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <LaunchOutlined fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            hiddenLabel
            disabled
            size="small"
            value={faker.name.fullName()}
            label="Facebook"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    {/* <img src={Instagram} className="w-3" /> */}
                    <FacebookLogo weight="bold" size={20} />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <LaunchOutlined fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
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
      <div className="col-span-2 flex flex-col gap-2 ">
        <div className="flex justify-evenly">
          <IconButton color="secondary">
            <DriveFileRenameOutline />
          </IconButton>
          <IconButton color="error">
            <DeleteForeverOutlined />
          </IconButton>
        </div>
        <Button
          fullWidth
          size="small"
          color="warning"
          variant="outlined"
          endIcon={<InsightsRounded />}
        >
          <p className="!font-bold normal-case">Tornar Exclusivo</p>
        </Button>
        <p className=" text-center font-semibold text-[.6rem] normal-case leading-none">
          Criado em
        </p>
        <p className="text-center font-normal text-[.6rem] normal-case leading-none">
          Nov 8, 2023 10:00 AM
        </p>
        {/* <Button
          fullWidth
          size="large"
          variant="outlined"
          color="secondary"
          endIcon={<MoreVertRounded />}
          onClick={clickcToggleOptions}
        >
          Opções
        </Button> */}
        {/* <Button
          fullWidth
          size="small"
          variant="outlined"
          color="secondary"
          endIcon={<DriveFileRenameOutline />}
        >
           <p className="!font-bold normal-case">

          Editar
           </p>
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          color="error"
          endIcon={<DeleteForeverOutlined />}
        >
           <p className="!font-bold normal-case">

          Excluir
           </p>
        </Button>
        <Button
          fullWidth
          size="small"
          color="warning"
          variant="outlined"
          endIcon={<InsightsRounded />}
        >
           <p className="!font-bold normal-case">

          Exclusivo
           </p>
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          color="inherit"
          endIcon={<VisibilityOffOutlined />}
        >
           <p className="!font-bold normal-case">

          Desativar
           </p>
        </Button> */}
      </div>
    </div>
  );
}
