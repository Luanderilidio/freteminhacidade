import { Breadcrumbs } from "@mui/material";
import { faker } from "@faker-js/faker";

import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { FolderSimpleUser, PresentationChart } from "phosphor-react";
import axios from "axios";
import { useQuery } from "react-query";
import Freight2 from "../Freight2";
import { Suspense, useState } from "react";
import { useAuth } from "../../context/userLogin";
import FreightEdit from "../FreightEdit";

export default function ViewFreight() {
  const { user } = useAuth();
  const [dataFreight, setDataFreight] = useState([]);
  const { data, isLoading, isError, error } = useQuery(
    "freights",
    async () => {
      const response = await axios.get(
        `http://localhost:3000/estudants?id_user=${user?.id}`
      );
      setDataFreight(response.data);
      // return response.data;
      // return axios
      //   .get(`http://localhost:3000/estudants?id_user=${user?.id}`)
      //   .then((response) => response.data);
    },
    {
      retry: 3,
      refetchOnWindowFocus: false,
    }
  );
  const navigate = useNavigate();

  const deleteDataFreightItem = (id: string) => {
    // Filtra a lista removendo o objeto com o id correspondente
    const newDataFreight = dataFreight.filter((item: any) => item.id !== id);
    setDataFreight(newDataFreight);
  };

  return (
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
            <FolderSimpleUser size={16} weight="bold" />

            <p className="text-xs font-semibold hover:underline">Meus Fretes</p>
          </button>
        </Breadcrumbs>
      </div>
      <div className="col-span-12 flex justify-between">
        <p className="font-semibold text-3xl opacity-80 leading-none">
          Visualizar Fretes{" "}
        </p>
        {/* <p className="font-semibold text-3xl border-2 px-5 py-3 rounded-xl leading-none">
          {dataFreight ? dataFreight.length : 0}
        </p> */}
      </div>
      <Suspense fallback={<p>Loading</p>}>
        {[
  {
    "id": "88a19b44-636c-452a-b2d7-acab81b6bea6",
    "id_user": "8889bcd4-82ee-40f4-96bf-9aa323e06abc",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/94.jpg",
    "name": "Luiz Henrique",
    "address": "https://www.google.com/maps/place/Rua Nova Maringá+-+Jardim Paraíso,+Cáceres+-+MT,+78200-069/",
    "address2": {
      "cep": "78200069",
      "uf": "MT",
      "city": "Cáceres",
      "neighborhood": "Jardim Paraíso",
      "street": "Rua Nova Maringá"
    },
    "cityUF": "Cáceres - MT",
    "hateHeart": 48,
    "hateShare": 52,
    "hateSite": 52,
    "hateComments": 20,
    "hateWhatsapp": 58,
    "hateAvatar": [
      {
        "id": "f28b5cf1-9959-49b5-a080-d126e300f0a7",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/277.jpg"
      },
      {
        "id": "1d810dd1-d744-4da7-8688-a54b607100e3",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1045.jpg"
      },
      {
        "id": "288141d5-a803-4c69-986e-de02300a5352",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/698.jpg"
      },
      {
        "id": "dfe84ce3-df45-4c47-8a0c-0a16d7fefe24",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg"
      }
    ],
    "description": "Faco frete na cidade e regiao",
    "typeWorkBody": 1,
    "hateFreight": 4.7,
    "comments": 13,
    "imageTruckOne": "https://loremflickr.com/640/480/transport",
    "imageTruckTwo": "https://loremflickr.com/640/480/transport",
    "phone_number_one": "11111111111",
    "phone_number_two": "",
    "facebook": "",
    "instagram": "",
    "status": true,
    "exclusive": false,
    "update_as": "2024-01-10T10:11:09-04:00",
    "save_as": "2024-01-10T10:11:09-04:00"
  },
  {
    "id": "cd98a793-0ec0-475d-b646-80073200587a",
    "id_user": "8889bcd4-82ee-40f4-96bf-9aa323e06abc",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/12.jpg",
    "name": "Luander",
    "address": "https://www.google.com/maps/place/Rua Nova Maringá+-+Jardim Paraíso,+Cáceres+-+MT,+78200-069/",
    "address2": {
      "cep": "78200069",
      "uf": "MT",
      "city": "Cáceres",
      "neighborhood": "Jardim Paraíso",
      "street": "Rua Nova Maringá"
    },
    "cityUF": "Cáceres - MT",
    "hateHeart": 87,
    "hateShare": 69,
    "hateSite": 97,
    "hateComments": 86,
    "hateWhatsapp": 84,
    "hateAvatar": [
      {
        "id": "2a61c61e-a322-47c0-8de8-8a4d9713bda3",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg"
      },
      {
        "id": "839ba2ab-1eda-497c-9236-754b0b4c3f29",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/873.jpg"
      },
      {
        "id": "89dc546c-b2b2-4cac-add9-dd5d898dee72",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/727.jpg"
      },
      {
        "id": "04cead13-af8a-4606-97b6-20446d41da1f",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/564.jpg"
      }
    ],
    "description": "adasd",
    "typeWorkBody": 1,
    "hateFreight": 4.2,
    "comments": 9,
    "imageTruckOne": "https://loremflickr.com/640/480/transport",
    "imageTruckTwo": "https://loremflickr.com/640/480/transport",
    "phone_number_one": "11111111111",
    "phone_number_two": "12312313333",
    "facebook": "",
    "instagram": "",
    "status": true,
    "exclusive": false,
    "update_as": "2024-01-10T10:39:34-04:00",
    "save_as": "2024-01-10T10:39:34-04:00"
  }
].map((e: any, index: number) => (
          <FreightEdit
            key={e.id}
            id={e.id}
            avatar={faker.image.avatar()}
            name={e.name}
            address={e.address}
            address2={e.address2}
            cityUF={e.cityUF}
            hateHeart={e.hateHeart}
            hateShare={e.hateShare}
            hateWhatsapp={e.hateWhatsapp}
            description={e.description}
            typeWorkBody={1}
            hateAvatar={e.hateAvatar}
            comments={e.comments}
            imageTruckOne={e.imageTruckOne}
            imageTruckTwo={e.imageTruckTwo}
            phone_number_one={e.phone_number_one}
            phone_number_two={e.phone_number_two}
            facebook={e.facebook}
            instagram={e.instagram}
            exclusive={e.exclusive}
            status={e.status}
            hateSite={e.hateSite}
            hateFreight={e.hateFreight}
            save_as={e.save_as}
            onDelete={deleteDataFreightItem}
          />
        ))}
      </Suspense>
    </div>
  );
}
