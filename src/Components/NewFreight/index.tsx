import { faker } from "@faker-js/faker";
import {
  Autocomplete,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";

import {
  FolderSimplePlus,
  Image,
  PencilSimpleLine,
  UploadSimple,
  PresentationChart,
  X,
  PencilLine,
  CheckCircle,
} from "phosphor-react";

import { ChangeEvent, useEffect, useState } from "react";
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
import { useAuth } from "../../context/userLogin";
import { useBoolean } from "react-hooks-shareable";
import moment from "moment";

export interface address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface Bodywork {
  id: string;
  bodywork: string;
}

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
  const { user } = useAuth();

  const navigate = useNavigate();

  const [bodyworks, setBodyworks] = useState<Bodywork[]>([]);
  const [isDialogPost, openDialogPost, closeDialogPost, toggleDialogPost] =
    useBoolean();
  const [value, setValue] = useState<Bodywork | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [truckImageOne, setTruckImageOne] = useState<string | null>(null);
  const [truckImageTwo, setTruckImageTwo] = useState<string | null>(null);

  const [cep, setCep] = useState<string>("");
  const [name, setName] = useState<string>(user ? user.name : "");
  const [description, setDescription] = useState<string>("");
  const [phoneOne, setPhoneOne] = useState<string>(
    user && user.phone
      ? user.phone
          .replace(/^55/, "")
          .replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2 $3 - $4")
      : ""
  );
  const [phoneTwo, setPhoneTwo] = useState<string>("");
  const [linkFacebook, setLinkFacebook] = useState<string>("");
  const [linkInstagram, setLinkInstagram] = useState<string>("");

  const [address, setAddress] = useState<address>({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = event.target.value;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${newCep}/json/`
        );
        if (response.status === 200) {
          setAddress({
            cep: response.data.cep,
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            localidade: response.data.localidade,
            uf: response.data.uf,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    setCep(newCep);
  };

  const googleMapsLink = `https://www.google.com/maps/place/${address.logradouro}+-+${address.bairro},+${address.localidade}+-+${address.uf},+${address.cep}/`;

  const cityUF = `${address.localidade} - ${address.uf}`;

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

  const postFreitch = () => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/estudants", {
          id: uuidv4(),
          id_user: user?.id,
          avatar: faker.image.avatar(),
          name: name,
          address: googleMapsLink,
          address2: {
            cep: cep,
            uf: address?.uf,
            city: address?.localidade,
            neighborhood: address?.bairro,
            street: address?.logradouro,
          } ,
          cityUF: cityUF,
          hateHeart: faker.datatype.number(100),
          hateShare: faker.datatype.number(100),
          hateSite: faker.datatype.number(100),
          hateComments: faker.datatype.number(100),
          hateWhatsapp:faker.datatype.number(100), 
          hateAvatar: [
            { id: uuidv4(), avatar: faker.image.avatar() },
            { id: uuidv4(), avatar: faker.image.avatar() },
            { id: uuidv4(), avatar: faker.image.avatar() },
            { id: uuidv4(), avatar: faker.image.avatar() },
          ],
          description: description,
          typeWorkBody: 1,
          hateFreight: faker.datatype.float({ min: 3.8, max: 5, precision: 0.1 }),
          comments: faker.datatype.number({ min: 6, max: 14 }),
          imageTruckOne: faker.image.transport(),
          imageTruckTwo: faker.image.transport(),
          phone_number_one: phoneOne?.replace(/[\(\)\s\-]/g, ""),
          phone_number_two: phoneTwo.replace(/[\(\)\s\-]/g, ""),
          facebook: linkFacebook,
          instagram: linkInstagram,
          status: true,
          exclusive: false,
          update_as: moment().format(),
          save_as: moment().format(),
        });
        if (response.status === 201) {
          toggleDialogPost();
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/workbody");
        if (response.status === 200) {
          setBodyworks(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          <p className="font-semibold text-3xl opacity-80">Novo Frete</p>
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
                size="small"
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
              defaultValue={user?.name}
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
                value={address?.localidade}
                className="col-span-3"
                label="Cidade"
                size="small"
              />
              <TextField
                disabled
                value={address?.bairro}
                className="col-span-3"
                label="Bairro"
                size="small"
              />
              <TextField
                disabled
                value={address?.logradouro}
                className="col-span-3"
                label="Rua"
                size="small"
              />
              <TextField
                disabled
                value={address?.uf}
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
              placeholder="Ex: Faço frete para cidade e região"
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
              <div className="w-full ">
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
                {!phoneOne && (
                  <Button
                    onClick={() =>
                      setPhoneOne(
                        user?.phone ? user.phone.replace(/^55/, "") : ""
                      )
                    }
                    size="small"
                    variant="outlined"
                    className="!normal-case flex gap-2 !mt-1"
                    endIcon={<CheckCircle size={20} weight="bold" />}
                  >
                    <p>Usar atual</p>

                    <p>
                      {user && user.phone
                        ? user.phone
                            .replace(/^55/, "")
                            .replace(
                              /(\d{2})(\d)(\d{4})(\d{4})/,
                              "($1) $2 $3 - $4"
                            )
                        : ""}
                    </p>
                  </Button>
                )}
              </div>
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
              <p className="text-sm font-semibold opacity-50">Foto do Ponto Gastronomico</p>
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
              <Button onClick={postFreitch} variant="contained" color="inherit">
                Publicar novo Frete
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
            cityUF={address.localidade ? cityUF : ""}
            hateHeart={0}
            hateShare={0}
            hateSite={0}
            comments={0}
            hateFreight={0.0}
            hateAvatar={[]}            
            imageTruckOne={
              truckImageOne ? truckImageOne : faker.image.transport()
            }
            imageTruckTwo={
              truckImageTwo ? truckImageTwo : faker.image.transport()
            }
            typeWorkBody={1}
            description={description ? description : "Faço frete na cidade e região"}
            phone_number_one={
              phoneOne ? phoneOne.replace(/[\(\)\s\-]/g, "") : ""
            }
            phone_number_two={phoneTwo.replace(/[\(\)\s\-]/g, "")}
            facebook={linkFacebook}
            instagram={linkInstagram}
            exclusive={false}
           
          />
        </div>
      </div>
      <Dialog open={isDialogPost} onClose={closeDialogPost}>
        <DialogTitle>Seu Frete será publicado em breve!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aguarde um dia para terminar nossa análise do seu Frete
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialogPost}>OK</Button>
          <Button color="success" onClick={closeDialogPost} autoFocus>
            Esperar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
