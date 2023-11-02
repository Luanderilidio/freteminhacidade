import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";

import {
  Clipboard,
  Copy,
  FolderSimplePlus,
  Image,
  PencilSimpleLine,
  PresentationChart,
  WhatsappLogo,
} from "phosphor-react";
import Freight from "../Freight";
import { useState } from "react";
import MaskedInput from "react-text-mask";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";

import "react-phone-input-2/lib/material.css";

import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import Youtube from "../../assets/SocialMedia/Youtube.png";
import Linkedin from "../../assets/SocialMedia/Linkedin.png";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Tiktok from "../../assets/SocialMedia/TikTok.png";
import Twitter from "../../assets/SocialMedia/twiter.svg";
import Whatsapp from "../../assets/SocialMedia/whatsapp.svg";
import Facebook from "../../assets/SocialMedia/Facebook.png";
import { WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Freight2 from "../Freight2";

export default function NewFreight() {
  const [sizeFreight, setSizeFreight] = useState("");

  const navigate = useNavigate();

  const handleChangeSize = (event: SelectChangeEvent) => {
    setSizeFreight(event.target.value as string);
  };

  return (
    <Container>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <Breadcrumbs aria-label="breadcrumb">
            <button
              className="flex items-center justify-start gap-1"
              onClick={() => navigate("/")}
            >
              <HomeIcon fontSize="inherit" />
              <p className="text-xs font-semibold hover:underline">Home</p>
            </button>
            <button
              className="flex items-center justify-start gap-1"
              onClick={() => navigate("/panel")}
            >
              <PresentationChart size={16} weight="bold" />
              <p className="text-xs font-semibold hover:underline">Painel</p>
            </button>
            <button className="flex items-center justify-start gap-1">
              <FolderSimplePlus size={16} weight="bold" />

              <p className="text-xs font-semibold hover:underline">
                Novo Frete
              </p>
            </button>
          </Breadcrumbs>
        </div>
        <div className="col-span-12 ">
          <p className="font-semibold text-3xl opacity-80">Novo frete</p>
        </div>
        <div className="col-span-12 sm:col-span-6 grid grid-cols-12">
          <div className="col-span-12 flex flex-col  gap-3">
            <div className="w-full flex items-center justify-center mb-5">
              <div className="w-fit relative">
                <div className="absolute -bottom-2 right-2 z-50  rounded-full bg-custon-black">
                  <IconButton>
                    <PencilSimpleLine
                      size={12}
                      className="text-white"
                      weight="bold"
                    />
                  </IconButton>
                </div>
                <Avatar
                  src={faker.image.avatar()}
                  className="!w-28 !h-28 drop-shadow-xl"
                />
              </div>
            </div>

            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Como localizar</p>
            </Divider>

            <TextField
              required
              fullWidth
              label="Nome"
              placeholder="Nome completo"
              variant="outlined"
            />
            <MaskedInput
              mask={[
                /[1-9]/,
                /[1-9]/,
                /[1-9]/,
                /[1-9]/,
                /[1-9]/,
                "-",
                /[1-9]/,
                /[1-9]/,
                /[1-9]/,
              ]}
              render={(innerRef, props) => (
                <TextField
                  label="CEP"
                  placeholder="CEP da sua rua"
                  required
                  {...props}
                  inputRef={innerRef}
                />
              )}
            />
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Sobre o Frete</p>
            </Divider>

            <TextField
              required
              multiline
              rows={2}
              fullWidth
              label="Descrição"
              placeholder="Ex: faço frete na cidade e região"
              variant="outlined"
            />
            <FormControl required fullWidth>
              <InputLabel>Tipo de carroceria</InputLabel>
              <Select
                value={sizeFreight}
                label="Tipo de carroceria"
                onChange={handleChangeSize}
              >
                <MenuItem value={30}>Baú</MenuItem>
                <MenuItem value={30}>Munck</MenuItem>
                <MenuItem value={10}>Grade baixa – Carga seca</MenuItem>
                <MenuItem value={20}>Grade alta – Graneleira</MenuItem>
                <MenuItem value={30}>Caçamba</MenuItem>
                <MenuItem value={30}>Prancha</MenuItem>
                <MenuItem value={30}>Plataforma</MenuItem>
                <MenuItem value={30}>Carroceria fechada</MenuItem>
                <MenuItem value={30}>Baú frigorífico</MenuItem>
                <MenuItem value={30}>Sider</MenuItem>
                <MenuItem value={30}>Carroceria especial</MenuItem>
                <MenuItem value={30}>Caçamba basculante</MenuItem>
                <MenuItem value={30}>Canavieira</MenuItem>
                <MenuItem value={30}>Florestal</MenuItem>
                <MenuItem value={30}>Boiadeira</MenuItem>
                <MenuItem value={30}>Tanque</MenuItem>
                <MenuItem value={30}>Poliguindaste</MenuItem>
              </Select>
            </FormControl>

            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Melhor contato</p>
            </Divider>
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <MaskedInput
                mask={[
                  "(",
                  /[1-9]/,
                  /[1-9]/,
                  ")",
                  " ",
                  /[1-9]/,
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  " ",
                  "-",
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                ]}
                render={(innerRef, props) => (
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" className="flex">
                          <p className="font-semibold opacity-30">+55</p>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="start">
                          <WhatsApp className="!text-black/30" />
                        </InputAdornment>
                      ),
                    }}
                    label="1° Número WhatsApp"
                    placeholder="(99) 9 9999 - 9999"
                    required
                    {...props}
                    inputRef={innerRef}
                  />
                )}
              />
              <MaskedInput
                mask={[
                  "(",
                  /[1-9]/,
                  /[1-9]/,
                  ")",
                  " ",
                  /[1-9]/,
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  " ",
                  "-",
                  " ",
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                  /[1-9]/,
                ]}
                render={(innerRef, props) => (
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <p className="font-semibold opacity-30">+55</p>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="start">
                          <WhatsApp className="!text-black/30" />
                        </InputAdornment>
                      ),
                    }}
                    label="1° Número WhatsApp"
                    placeholder="(99) 9 9999 - 9999"
                    required
                    {...props}
                    inputRef={innerRef}
                  />
                )}
              />
            </div>
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Foto do frete</p>
            </Divider>
            <div className="flex gap-5">
              <button className="w-full h-36 border rounded-xl flex flex-col items-center justify-center bg-slate-300/30 transition ease-in-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <Image size={25} weight="bold" />
                <p className="text-xs font-semibold">Upload </p>
              </button>
              <button className="w-full h-36 border rounded-xl flex flex-col items-center justify-center bg-slate-300/30 transition ease-in-out hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <Image size={25} weight="bold" />
                <p className="text-xs font-semibold">Upload </p>
              </button>
            </div>
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">
                {" "}
                Rede social (opcional)
              </p>
            </Divider>
            <TextField
              fullWidth
              label="Link do Facebook"
              placeholder="facebook.com/username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className="w-6" src={Facebook} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Link do Instagram"
              placeholder="instagram.com/username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className="w-6" src={Instagram} />
                  </InputAdornment>
                ),
              }}
            />
            <div className="flex items-center justify-between">
              <Button color="info">Cancelar</Button>
              <Button variant="contained" color="inherit">
                Publicar frete
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <Freight2
            id="1"
            name="Nome da Transportadora"
            address="Endereço da Transportadora"
            description="Descrição da Transportadora"
            phone_number_one="(65) 99663 - 5840"
            phone_number_two="(65) 99663 - 5840"
            facebook="https://facebook.com/transportadora"
            instagram="https://instagram.com/transportadora"
          />
        </div>
      </div>
    </Container>
  );
}
