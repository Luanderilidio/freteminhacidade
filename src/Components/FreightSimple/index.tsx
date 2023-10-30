import { faker } from "@faker-js/faker";
import { Swiper, SwiperSlide } from "swiper/react";

import GoogleMapsIcon from "../../assets/google-maps_icon.svg";
import { ChatDots, CrownSimple } from "phosphor-react";
import Whatsapp from "../../assets/SocialMedia/whatsapp.svg";
import Verifiqued from "../../assets/verifiqued.svg";
import "swiper/css";
import "swiper/css/pagination";
import "../../Components/Freight/styles.css";



export default function FreightSimple() {
  let truck = faker.image.transport();

  return (
    <div className="flex justify-between w-96 h-36 border-1 border-black/10 gap-3 p-3 mb-2 rounded-2xl shadow-md">
      <div className="flex flex-col justify-between">
        <div className="flex">
          <div className="relative h-fit ">
            <img
              className="!w-9 !h-9 object-cover rounded-full mr-3 border-3 border-custon-black "
              src={faker.image.avatar()}
            />
            <img className="!w-3 !h-3 absolute bottom-0 right-2" src={Verifiqued} />
          </div>
          <div>
            <p className="text-xs text-custon-black text-left font-semibold opacity-90">
              {faker.name.fullName().substring(0, 12)}...
            </p>
            <div className="flex justify-start gap-1 mt-1">
              <img src={GoogleMapsIcon} className="!w-3 mr-[2.5px]" />
              <p className="text-xs sm:text-[.6rem] text-left font-medium underline decoration-solid decoration-black/70 opacity-70">
                {"Cavalhada II, Cáceres - MT".substring(0, 15)}...
              </p>
            </div>
            <div className="flex justify-start gap-1 mt-[2px]">
              <ChatDots className="opacity-70" weight="fill" size={12} />
              <p className="text-left text-xs sm:text-[.6rem] font-medium opacity-70">
                Faço frete na cidade e região
              </p>
            </div>
          </div>
        </div>
        <button className="w-full font-bold flex items-center justify-center gap-2 rounded-full text-[.6rem] leading-none py-2 text-white border-2 border-custon-black bg-[#25D366] transition ease-in-out hover:bg-[#36fd68] active:scale-95 shadow-md shadow-[#25D366]/30">
          <img className="!w-3" src={Whatsapp} />
          Chamar no Whatsapp
        </button>
      </div>
      <div className="flex flex-col items-end justify-between">
        

        <p className="flex items-center justify-center gap-2 w-fit rounded-md mb-3 px-2 py-2 leading-none text-[.6rem] font-semibold bg-yellow-500/30 text-yellow-500 shadow-sm shadow-yellow/50">
          Recomendado
        <CrownSimple size={12} weight="fill" />
        </p>
        <div className="w-32 h-20 sm:w-24 sm:h-16 rounded-lg drop-shadow-lg relative ">
          <Swiper
            
            spaceBetween={10}
            className="mySwiper rounded-lg"
          >
            <SwiperSlide className="rounded-lg">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg "
                src={truck}
              />
            </SwiperSlide>

            <SwiperSlide className="rounded-lg">
              <img
                className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg "
                src={truck}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
