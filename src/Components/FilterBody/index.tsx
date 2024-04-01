import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Size from "../../assets/Sizes/size_4.png"
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export default function FilterBody() {

    const workBodys = [
        "Baú",
        "Munck",
        "Grade baixa",
        "Grade alta",
        "Caçamba",
        "Prancha",
        "Plataforma",
        "Carroceria ",
        "Frigorífico",
        "Sider",
        "Carroceria",
        "Caçamba",
        "Canavieira",
        "Florestal",
        "Boiadeira",
        "Tanque",
        "Poliguindaste"
    ]

    return (
        <>
        <Swiper
            onClick={() => { }}
            spaceBetween={5}
            slidesPerView={10}

            modules={[Pagination]}
            className="mySwiper"
        >
            {workBodys.map(item => (

                <SwiperSlide className="rounded-2xl flex hover:text-black">
                    <button className="flex flex-col gap-2 items-center justify-center transition ease-in-out hover:scale-110 active:scale-95 hover:bg-gray-100 rounded-2xl p-2 ">
                        <img src={Size} className="!w-12 !h-8 object-cover" alt="" />
                        <p className="font-semibold font-Inter text-xs text-zinc-600/80">
                            {item}
                        </p>
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}