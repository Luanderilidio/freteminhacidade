import axios from "axios";
import {
    CaretDown,
    CaretUp,
    Image,
    MagnifyingGlass,
  } from "phosphor-react";
import { useState } from "react";
import { useQuery } from "react-query";

export default function SearchCity () {

    const [openDropDownCity, setOpenDropDownCity] = useState(false);
    const [city, setCity] = useState('');



    const { data, isLoading, isError, error, refetch  } = useQuery(
        "freights",
        async () => {

            const response = await axios.get("http://localhost:3000/estudants")
            console.log(response.data)
            return response.data
        //   return axios
        //     .get("http://localhost:3000/estudants")
        //     .then((response) => response.data);
        },
        {
          retry: 3,
          refetchOnWindowFocus: false,
        }
      );

      const handleInputClick = async () => {
        setOpenDropDownCity(true)
        refetch()
      }



    return (
        <div className="hidden relative col-span-1 sm:flex items-center gap-2 border-2 border-custon-black rounded-l-full py-2 px-3 shadow-sm hover:shadow-md ">
          <div className="bg-custon-black p-2 rounded-full">
            <MagnifyingGlass className="text-white" size={15} weight="bold" />
          </div>
          <input
            onClick={() => handleInputClick()}
            onBlur={() => setOpenDropDownCity(false)}
            placeholder="Cidade"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="w-full focus:outline-none font-semibold "/>
            {openDropDownCity && (
                <CaretDown
                size={15}
                weight="bold"
                className=" animate__animated animate__fadeIn animate__faster"
                />
            )}
            {!openDropDownCity && (
                <CaretUp
                size={15}
                weight="bold"
                className=" animate__animated animate__fadeIn animate__faster"
                />
            )}
          {openDropDownCity && (
            <div className="h-[200px] overflow-y-auto absolute -bottom-52 z-10 w-full bg-white border-1 border-custon-black/10 left-0 shadow-lg rounded-2xl animate__animated animate__fadeIn animate__faster scrollbar-hide">
              <div className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Cáceres</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Sapezal</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Mirassol</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 border-b-[1px] border-custon-black/10 transition ease-in-out hover:bg-gray-200 cursor-pointer	">
                <div className="flex justify-start items-center  gap-2">
                  <Image size={20} weight="bold" />
                  <p className="text-sm font-semibold ">Restaurantes Tradicionais</p>
                </div>
                <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                  <p className="text-[#005A09] leading-none text-xs font-bold">
                    +315
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
    )
}