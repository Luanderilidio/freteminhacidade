import { faker } from "@faker-js/faker";
import {
  Avatar,
  AvatarGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  Rating,
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
  GlobeSimple,
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
  LanguageOutlined,
  AccountCircleOutlined,
  StarBorderOutlined,
  EmojiEvents,
} from "@mui/icons-material";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "../Freight2/styles.css";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Facebook from "../../assets/SocialMedia/Facebook.png";
import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import Verifiqued from "../../assets/verifiqued.svg";

import { FreightProps } from "../Freight2";
import axios from "axios";
import { useBoolean } from "react-hooks-shareable";
import { Transition } from "../../utils/transition";

export default function FreightEdit({
  id,
  avatar,
  name,
  address2,
  description,
  hateFreight,
  comments,
  hateHeart,
  hateShare,
  hateSite,
  hateInstagram,
  hateFacebook,
  hateWhatsapp,
  hateAvatar,
  typeWorkBody,
  imageTruckOne,
  imageTruckTwo,
  phone_number_one,
  phone_number_two,
  facebook,
  instagram,
  exclusive,
  status,
}: FreightProps) {
  const [anchorStatus, setAnchorStatus] = useState<null | HTMLElement>(null);

  const [isExclusive, openExclusive, closeExclusive, toggleExclusive] =
    useBoolean(exclusive);

  const [isStatus, openStatus, closeStatus, toggleStatus] = useBoolean(status);

  const [
    isStatusDialog,
    openStatusDialog,
    closeStatusDialog,
    toggleStatusDialog,
  ] = useBoolean(false);

  const [isTrashDialog, openTrashDialog, closeTrashDialog, toggleTrashDialog] =
    useBoolean(false);

  const openStatusMenu = Boolean(anchorStatus);
  const clickcToggleStatus = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorStatus(event.currentTarget);
  };
  const handleCloseStatus = () => {
    setAnchorStatus(null);
  };

  console.log(address2);

  const patchExclusive = () => {
    const fecthData = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/estudants/${id}`,
          { exclusive: !isExclusive }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
    toggleTrashDialog()
  };

  const deleteFreight = () => {
    const fecthData = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/estudants/${id}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
    closeTrashDialog()
  };

  const patchStatus = () => {
    const fecthData = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:3000/estudants/${id}`,
          { status: !isStatus }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
    toggleStatusDialog();
  };

  const handleClickExclusive = () => {
    patchExclusive();
    toggleExclusive();
  };

  const handleClickStatus = () => {
    patchStatus();

    toggleStatus();
  };

  return (
    <div className="col-span-12 grid grid-cols-12 gap-3 border-1 border-black/10 p-5 rounded-2xl shadow-lg ">
      <div className="col-span-4 flex flex-col justify-between">
        <Divider textAlign="left" className="!mb-2">
          <p className="text-xs font-semibold opacity-70 ">Dados Principais</p>
        </Divider>
        <div className="flex gap-3">
          <div className="relative h-fit">
            <Avatar
              src={avatar}
              className="!w-14 !h-14 drop-shadow-xl border-3 border-custon-black"
            />
            <img className="absolute bottom-0 right-0" src={Verifiqued} />
          </div>
          <div className="w-full">
            <div className="w-full flex justify-between items-center mb-1 ">
              <div className="flex items-center justify-start gap-1">
                <User size={15} weight="fill" />

                <p className="text-[.9rem] font-semibold opacity-80">
                  {name.substring(0, 14)}...
                </p>
              </div>

              {isStatus ? (
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  endIcon={<TaskAltOutlined />}
                  onClick={toggleStatusDialog}
                >
                  <p className="!font-bold normal-case">Online</p>
                </Button>
              ) : (
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  endIcon={<VisibilityOffOutlined />}
                  onClick={toggleStatusDialog}
                >
                  <p className="!font-bold normal-case">Desativado</p>
                </Button>
              )}
              {/* <Menu
                anchorEl={anchorStatus}
                open={openStatusMenu}
                onClose={handleCloseStatus}
              >
                <MenuItem onClick={handleCloseStatus}>
                {!isStatus ? (
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  endIcon={<TaskAltOutlined />}
                  onClick={clickcToggleStatus}
                >
                  <p className="!font-bold normal-case">Online</p>
                </Button>
              ) : (
                <Button
                  fullWidth
                  size="small"
                  variant="outlined"
                  color="inherit"
                  endIcon={<VisibilityOffOutlined />}
                  onClick={clickcToggleStatus}
                >
                  <p className="!font-bold normal-case">Desativar</p>
                </Button>
              )}
                </MenuItem>
              </Menu> */}
              <div />
            </div>
            <div className="flex items-start justify-start gap-1">
              <img src={GoogleMapsIcon} className="mr-[2.5px]" />

              <div className="flex flex-col">
                <p className="text-[.8rem] font-normal opacity-80">
                  {address2?.city} - {address2?.uf}, {address2?.neighborhood},{" "}
                </p>
                <p className="text-[.8rem] font-normal opacity-80">
                  {address2?.street}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-1">
              <Chat size={15} weight="bold" />

              <p className="text-[.8rem] font-normal opacity-80">
                {description}
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
              <Link target="_blank" rel="noopener" color="inherit" underline="hover" href={`https://api.whatsapp.com/send?phone=55${phone_number_one}&text=Ol%C3%A1,%20quero%20fazer%20um%20frete!`}>

              <p className="text-[.9rem] font-semibold opacity-80 leading-none">
                {phone_number_one.replace(
                  /^(\d{2})(\d)(\d{4})(\d{4})$/,
                  "($1) $2 $3 - $4"
                )}
              </p>
              </Link>
            </div>
          </div>
          {phone_number_two && (
            <div className="flex flex-col items-start justify-start gap-1 mb-1">
              <p className="text-[.6rem] font-normal opacity-80 leading-none ">
                Secundário
              </p>
              <div className="flex items-center justify-start gap-1">
                <Phone size={15} weight="fill" />
                <Link target="_blank" rel="noopener" color="inherit" underline="hover" href={`https://api.whatsapp.com/send?phone=55${phone_number_two}&text=Ol%C3%A1,%20quero%20fazer%20um%20frete!`}>

                <p className="text-[.9rem] font-semibold opacity-80 leading-none">
                  {phone_number_two.replace(
                    /^(\d{2})(\d)(\d{4})(\d{4})$/,
                    "($1) $2 $3 - $4"
                  )}
                </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" col-span-2 ">
        <Divider className="!mb-2">
          <p className="text-xs font-semibold opacity-70 ">Frete</p>
        </Divider>
        <div>
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
                    src={imageTruckOne}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-2xl">
                <div className="overflow-hidden rounded-lg w-full  ">
                  <img
                    className="w-full hover:scale-110 transition duration-500 cursor-pointer !object-cover rounded-lg  "
                    src={imageTruckTwo}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-2">
        <Divider>
          <p className="text-xs font-semibold opacity-70">Engajamento</p>
        </Divider>
        <div className="flex justify-around">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <FavoriteBorderOutlined
                fontSize="small"
                className="text-red-500"
              />
              <p className="text-xs">
                <span className="font-semibold">{hateHeart}</span> Likes
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center gap-1">
              <ShareOutlined fontSize="small" className="text-gray-500" />
              <p className="text-xs">
                <span className="font-semibold">{hateShare}</span> Shares
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center justify-between">
              <Chat className="text-custon-black" />
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
              <p className="underline text-xs opacity-70 decoration-black/70 font-semibold">
                +{comments}
              </p>
            </div>
            <Link target="_blank" rel="noopener" href='https://www.instagram.com/luanderilidio/'>
              <div className="flex items-center gap-1">
                <InstagramLogo
                  size={15}
                  className="text-pink-500"
                  weight="bold"
                />
                <p className="text-xs">
                  <span className="font-semibold text-pink-500">{hateFacebook}</span> Instagram
                </p>
                <TrendUp size={10} className="text-green-500" weight="bold" />
              </div>
            </Link>
           
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <WhatsApp fontSize="small" className="text-green-500" />
              <p className="text-xs">
                <span className="font-semibold text-custon-black">
                  {hateWhatsapp}
                </span>{" "}
                Clicks
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center gap-1">
              <LanguageOutlined
                fontSize="small"
                className="text-custon-black"
              />
              <p className="text-xs">
                <span className="font-semibold">{hateSite}</span> Access
              </p>
              <TrendUp size={10} className="text-green-500" weight="bold" />
            </div>
            <div className="flex items-center gap-1">
              <StarBorderOutlined
                fontSize="small"
                className="text-yellow-500"
              />
              <p className="font-semibold italic text-xs text-custon-black">
                {hateFreight}
              </p>
            </div>
            <Link target="_blank" rel="noopener" href='https://www.facebook.com/profile.php?id=100008626726422'>
              <div className="flex items-center gap-1">
                <FacebookLogo
                  size={15}
                  className="text-blue-500"
                  weight="bold"
                />
                <p className="text-xs">
                  <span className="font-semibold">{hateFacebook}</span> Facebook
                </p>
                <TrendUp size={10} className="text-green-500" weight="bold" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2 ">
        <Divider>
          <p className="text-xs font-semibold opacity-70">Ações</p>
        </Divider>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-evenly">
              <IconButton color="secondary">
                <DriveFileRenameOutline />
              </IconButton>
              <IconButton onClick={openTrashDialog} color="error">
                <DeleteForeverOutlined />
              </IconButton>
            </div>
            {isExclusive ? (
              <Button
                fullWidth
                onClick={handleClickExclusive}
                size="small"
                color="success"
                variant="contained"
                endIcon={<EmojiEvents />}
              >
                <p className="!font-bold normal-case">Exclusivo</p>
              </Button>
            ) : (
              <Button
                fullWidth
                size="small"
                onClick={handleClickExclusive}
                color="warning"
                variant="contained"
                endIcon={<InsightsRounded />}
              >
                <p className="!font-bold normal-case">Tornar Exclusivo</p>
              </Button>
            )}
          </div>
          <div>
            <p className=" text-center font-semibold text-[.6rem] normal-case leading-none">
              Criado em
            </p>
            <p className="text-center font-normal text-[.6rem] normal-case leading-none">
              Nov 8, 2023 10:00 AM
            </p>
          </div>
        </div>
      </div>
      <Dialog
        open={isStatusDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeStatusDialog}
      >
        <DialogTitle>
          {isStatus
            ? "Tem certeza em desativar esse Frete?"
            : "Tornar visível seu Frete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isStatus ? (
              <>
                Você clicou em{" "}
                <span className="font-bold text-red-600">desativar</span> seu
                Frete. Ele será oculto para seus clientes na plataforma. Deseja
                continuar?
              </>
            ) : (
              <>
                Você clicou em <span className="font-bold">ativar</span> seu
                Frete. Ele a partir de agora será visível para seus clientes na
                plataforma.
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            endIcon={isStatus ? <TaskAltOutlined /> : <VisibilityOffOutlined />}
            variant="text"
            color={isStatus ? "success" : "error"}
            onClick={handleClickStatus}
          >
            {isStatus ? "Continuar Visível" : "Continuar Oculto"}
          </Button>
          <Button
            endIcon={isStatus ? <VisibilityOffOutlined /> : <TaskAltOutlined />}
            variant="contained"
            color={isStatus ? "error" : "success"}
            onClick={handleClickStatus}
            autoFocus
          >
            {isStatus ? "Desativar meu Frete" : "Ativar meu Frete"}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isTrashDialog} onClose={toggleTrashDialog}>
        <DialogTitle>Tem certeza que deseja apagar seu Frete?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Essa ação poderá ser irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleTrashDialog}>fechar</Button>
          <Button
            color="error"
            variant="contained"
            onClick={deleteFreight}
            autoFocus
          >
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
