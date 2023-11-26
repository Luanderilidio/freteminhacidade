import React, { useEffect, useRef, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MapTrifold } from "phosphor-react";
import { useBoolean } from "react-hooks-shareable";
import { useNavigate } from "react-router-dom";

interface ContainerProps {
  children: React.ReactNode;
  padding: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, padding }) => {


  const navigate = useNavigate()

  const buttonRef = useRef(null);

  const [isButton, openButton, closeButton, toggleButton] = useBoolean(true);

  const [value, setValue] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const button = buttonRef.current;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      setValue(scrollPosition);
      setWindowHeight(windowHeight);
      setDocumentHeight(documentHeight);
      setScrollPosition(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
  }, [value]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const scrollPosition = window.scrollY;
  //     const button = buttonRef.current;

  //     if (button) {
  //       const bottomThreshold = documentHeight - windowHeight - 500;
  //       if (scrollPosition >= bottomThreshold) {
  //         closeButton()
  //       }
  //       else (
  //         openButton()
  //       )
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-12 hypertop relative">
        <Header />
      </div>
      <div
        className={`col-span-12 grid grid-cols-12 ${
          padding && "px-4 py-4 sm:py-8 sm:px-8 mt-20 sm:mt-28 gap-8"
        } relative`}
      >
        {children}
        {scrollPosition < documentHeight - windowHeight - 200 && (
          <button
          onClick={()=> navigate('/map')}
            ref={buttonRef}
            className="flex items-center justify-center gap-2 py-2 px-4 w-fit text-white bg-custon-black rounded-full font-semibold fixed z-50 bottom-3 sm:bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-none drop-shadow-xl transition ease-in-out hover:scale-110 active:scale-95 animate__animated animate__animated animate__fadeIn animate__fast	"
          >
            Abrir no mapa
            <MapTrifold size={30} weight="bold" />
          </button>
        )}
      </div>
      <div className="col-span-12 ">
        <Footer />
      </div>
    </div>
  );
};

export default Container;
