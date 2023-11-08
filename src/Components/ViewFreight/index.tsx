import { Breadcrumbs } from "@mui/material";
import { faker } from "@faker-js/faker";

import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { FolderSimpleUser, PresentationChart } from "phosphor-react";
import axios from "axios";
import { useQuery } from "react-query";
import Freight2 from "../Freight2";
import { Suspense } from "react";
import { useAuth } from "../../context/userLogin";
import FreightEdit from "../FreightEdit";


export default function ViewFreight() {
  const { user } = useAuth()
  const { data, isLoading, isError, error } = useQuery(
    "freights",
    async () => {
      return axios
        .get(`http://localhost:3000/estudants?id_user=${user?.id}`)
        .then((response) => response.data);
    },
    {
      retry: 3,
      refetchOnWindowFocus: false,
    }
  );
  const navigate = useNavigate();

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

            <p className="text-xs font-semibold hover:underline">Meus fretes</p>
          </button>
        </Breadcrumbs>
      </div>
      <div className="col-span-12 flex justify-between">
        <p className="font-semibold text-3xl opacity-80 leading-none">
          Meus Fretes{" "}
        </p>
        <p className="font-semibold text-3xl border-2 px-5 py-3 rounded-xl leading-none">
          {data ? data.length : 0}
        </p>
      </div>
      <Suspense fallback={<p>Loading</p>}>
        {[0,1,2 ].map((e: any, index: number) => (
          <FreightEdit />
          // <Freight2
          //   key={e.id}
          //   id={e.id}
          //   avatar={faker.image.avatar()}
          //   name={e.name}
          //   address={e.address}
          //   cityUF={e.cityUF}
          //   hateHeart={0}
          //   hateShare={0}
          //   description={e.description}
          //   typeWorkBody={1}
          //   hate={e.hate}
          //   comments={e.comments}
          //   imageTruckOne={e.imageTruckOne}
          //   imageTruckTwo={e.imageTruckTwo}
          //   phone_number_one={e.phone_number_one}
          //   phone_number_two={e.phone_number_two}
          //   facebook={e.facebook}
          //   instagram={e.instagram} 
          // />
        ))}
      </Suspense>
    </div>
  );
}
