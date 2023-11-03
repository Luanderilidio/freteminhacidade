import { faker } from "@faker-js/faker";
import {
  Autocomplete,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  OutlinedTextFieldProps,
  Select,
  SelectChangeEvent,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

import {
  Clipboard,
  Copy,
  FolderSimplePlus,
  Image,
  PencilSimpleLine,
  UploadSimple,
  PresentationChart,
  WhatsappLogo,
  X,
  PencilLine,
} from "phosphor-react";

import { ChangeEvent, useState } from "react";
import MaskedInput from "react-text-mask";
import { v4 as uuidv4 } from "uuid";

import "react-phone-input-2/lib/material.css";

import Instagram from "../../assets/SocialMedia/Instagram.png";
import Facebook from "../../assets/SocialMedia/Facebook.png";
import { WhatsApp } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Freight2 from "../Freight2";
import axios from "axios";

interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface Bodywork {
  id: number;
  bodywork: string;
}

const bodyworks: Bodywork[] = [
  { id: 1, bodywork: "Baú" },
  { id: 2, bodywork: "Munck" },
  { id: 3, bodywork: "Grade baixa – Carga seca" },
  { id: 4, bodywork: "Grade alta – Graneleira" },
  { id: 5, bodywork: "Caçamba" },
  { id: 6, bodywork: "Prancha" },
  { id: 7, bodywork: "Plataforma" },
  { id: 8, bodywork: "Carroceria fechada" },
  { id: 9, bodywork: "Baú frigorífico" },
  { id: 10, bodywork: "Sider" },
  { id: 11, bodywork: "Carroceria especial" },
  { id: 12, bodywork: "Caçamba basculante" },
  { id: 13, bodywork: "Canavieira" },
  { id: 14, bodywork: "Florestal" },
  { id: 15, bodywork: "Boiadeira" },
  { id: 16, bodywork: "Tanque" },
  { id: 17, bodywork: "Poliguindaste" },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function NewFreight() {
  const navigate = useNavigate();

  const [value, setValue] = useState<Bodywork | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [truckImageOne, setTruckImageOne] = useState<string | null>(null);
  const [truckImageTwo, setTruckImageTwo] = useState<string | null>(null);

  const [cep, setCep] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [phoneOne, setPhoneOne] = useState<string>("");
  const [phoneTwo, setPhoneTwo] = useState<string>("");
  const [linkFacebook, setLinkFacebook] = useState<string>("");
  const [linkInstagram, setLinkInstagram] = useState<string>("");

  const [endereco, setEndereco] = useState<Endereco>({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value;
    console.log(newCep);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${newCep}/json/`
        );
        if (response.status === 200) {
          setEndereco({
            cep: response.data.cep,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf,
          });
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    setCep(newCep);
  };

  const googleMapsLink = `https://www.google.com/maps/place/${endereco.logradouro}+-+${endereco.bairro},+${endereco.localidade}+-+${endereco.uf},+${endereco.cep}/`;

  const cityUF = `${endereco.localidade} - ${endereco.uf}`;

  const handleImageChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setAvatarImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeTruckOne = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setTruckImageOne(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeTruckTwo = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setTruckImageTwo(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
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
            <div className="w-full flex flex-col gap-2 items-center justify-center mb-5">
              <Avatar
                src={avatarImage || faker.image.avatar()}
                className="!w-28 !h-28 drop-shadow-xl border-5 border-custon-black"
              />
              <Button
                component="label"
                variant="contained"
                startIcon={
                  <PencilSimpleLine
                    size={12}
                    className="text-white"
                    weight="bold"
                  />
                }
                endIcon={
                  <UploadSimple
                    size={12}
                    className="text-white"
                    weight="bold"
                  />
                }
              >
                Foto de perfil
                <VisuallyHiddenInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChangeAvatar}
                  id="image-upload"
                />
              </Button>
            </div>
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Como localizar</p>
            </Divider>
            <TextField
              required
              fullWidth
              label="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nome completo"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setName("")}>
                      <CloseIcon
                        className={`!text-black/30 ${
                          name ? "block" : "invisible"
                        }`}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            78200-069
            <MaskedInput
              value={cep}
              onBlur={handleCepChange}
              mask={[
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
                // "-",
                /[0-9]/,
                /[0-9]/,
                /[0-9]/,
              ]}
              render={(innerRef, props) => (
                <TextField
                  label="CEP"
                  placeholder="CEP da sua rua"
                  required
                  {...props}
                  inputRef={innerRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={() => setCep("")}>
                          <CloseIcon
                            className={`!text-black/30 ${
                              cep ? "block" : "invisible"
                            }`}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <div className="grid grid-cols-11 gap-2">
              <TextField
                disabled
                value={endereco?.localidade}
                className="col-span-3"
                label="Cidade"
                size="small"
              />
              <TextField
                disabled
                value={endereco?.bairro}
                className="col-span-3"
                label="Bairro"
                size="small"
              />
              <TextField
                disabled
                value={endereco?.logradouro}
                className="col-span-3"
                label="Rua"
                size="small"
              />
              <TextField
                disabled
                value={endereco?.uf}
                className="col-span-2"
                label="UF"
                size="small"
              />
            </div>
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Sobre o Frete</p>
            </Divider>
            <TextField
              required
              multiline
              rows={2}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              fullWidth
              label="Descrição"
              placeholder="Ex: faço frete na cidade e região"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setDescription("")}>
                      <CloseIcon
                        className={`!text-black/30 ${
                          description ? "block" : "invisible"
                        }`}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={bodyworks}
              getOptionLabel={(option) => option.bodywork}
              renderInput={(params) => (
                <TextField required {...params} label="Tipo de Carroceria" />
              )}
            />
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">Melhor contato</p>
            </Divider>
            <div className="w-full flex flex-col sm:flex-row gap-4">
              <MaskedInput
                value={phoneOne}
                onChange={(event) => setPhoneOne(event.target.value)}
                mask={[
                  "(",
                  /[0-9]/,
                  /[0-9]/,
                  ")",
                  " ",
                  /[0-9]/,
                  " ",
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  " ",
                  "-",
                  " ",
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
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
                value={phoneTwo}
                onChange={(event) => setPhoneTwo(event.target.value)}
                mask={[
                  "(",
                  /[0-9]/,
                  /[0-9]/,
                  ")",
                  " ",
                  /[0-9]/,
                  " ",
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  " ",
                  "-",
                  " ",
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
                  /[0-9]/,
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
            <div className="grid grid-cols-2 gap-5">
              {truckImageOne ? (
                <div>
                  <img
                    className="w-full h-36 rounded-lg drop-shadow-lg object-cover"
                    src={truckImageOne}
                  />
                  <div className="flex justify-evenly mt-2">
                    <Button
                      variant="outlined"
                      size="small"
                      component="label"
                      startIcon={<PencilLine size={15} weight="bold" />}
                    >
                      <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageChangeTruckOne}
                        id="image-upload"
                      />

                      <p className="text-xs font-semibold">Mudar</p>
                    </Button>
                    <Button
                      size="small"
                      onClick={() => setTruckImageOne(null)}
                      color="error"
                      variant="outlined"
                      startIcon={<X size={15} />}
                    >
                      Retirar
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  component="label"
                  className="w-full h-36 flex flex-col "
                >
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageChangeTruckOne}
                    id="image-upload"
                  />
                  <Image size={25} weight="bold" />
                  <p className="text-xs font-semibold">Upload </p>
                </Button>
              )}
              {truckImageTwo ? (
                <div>
                  <img
                    className="w-full h-36 rounded-lg drop-shadow-lg object-cover"
                    src={truckImageTwo}
                  />
                  <div className="flex justify-evenly mt-2">
                    <Button
                      variant="outlined"
                      size="small"
                      component="label"
                      startIcon={<PencilLine size={15} weight="bold" />}
                    >
                      <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageChangeTruckTwo}
                        id="image-upload"
                      />

                      <p className="text-xs font-semibold">Mudar</p>
                    </Button>
                    <Button
                      size="small"
                      onClick={() => setTruckImageTwo(null)}
                      color="error"
                      variant="outlined"
                      startIcon={<X size={15} />}
                    >
                      Retirar
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  component="label"
                  className="w-full h-36 flex flex-col "
                >
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageChangeTruckTwo}
                    id="image-upload"
                  />
                  <Image size={25} weight="bold" />
                  <p className="text-xs font-semibold">Upload </p>
                </Button>
              )}
            </div>
            <Divider textAlign="left" className="!mt-8">
              <p className="text-sm font-semibold opacity-50">
                {" "}
                Rede social (opcional)
              </p>
            </Divider>
            <TextField
              value={linkFacebook}
              onChange={(event) => setLinkFacebook(event.target.value)}
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
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setLinkFacebook("")}>
                      <CloseIcon
                        className={`!text-black/30 ${
                          linkFacebook ? "block" : "invisible"
                        }`}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              value={linkInstagram}
              onChange={(event) => setLinkInstagram(event.target.value)}
              label="Link do Instagram"
              placeholder="instagram.com/username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img className="w-6" src={Instagram} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setLinkInstagram("")}>
                      <CloseIcon
                        className={`!text-black/30 ${
                          linkInstagram ? "block" : "invisible"
                        }`}
                      />
                    </IconButton>
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
            id={uuidv4()}
            avatar={avatarImage ? avatarImage : faker.image.avatar()}
            name={name ? name : "Seu nome aqui"}
            address={googleMapsLink}
            cityUF={endereco.localidade ? cityUF : ""}
            hateHeart={0}
            hateShare={0}
            imageTruckOne={
              truckImageOne ? truckImageOne : faker.image.transport()
            }
            imageTruckTwo={
              truckImageTwo ? truckImageTwo : faker.image.transport()
            }
            typeWorkBody={value !== null ? value.id : 2}
            description={description ? description : "Descrição do seu frete"}
            phone_number_one={phoneOne.replace(/[\(\)\s\-]/g, "")}
            phone_number_two={phoneTwo.replace(/[\(\)\s\-]/g, "")}
            facebook={linkFacebook}
            instagram={linkInstagram}
          />
        </div>
      </div>
    </Container>
  );
}
