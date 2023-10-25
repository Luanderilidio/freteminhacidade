import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MapTrifold } from "phosphor-react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-12 z-50">
        <Header />
      </div>
      <div className="col-span-12 grid grid-cols-12 px-4 py-4 sm:py-8 sm:px-8 gap-8 relative mt-28">
        {children}
        <button className="flex items-center justify-center gap-2 py-2 px-4 w-fit text-white bg-black rounded-full font-semibold fixed z-50 bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-none drop-shadow-xl transition ease-in-out hover:scale-110 active:scale-95">
        Exibir mapa 
        <MapTrifold size={30} weight="bold" />
      </button>
      </div>
      <div className="col-span-12 ">
        <Footer />
      </div>
    </div>
  );
};

export default Container;
