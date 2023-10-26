import { Plus, EnvelopeSimple } from "phosphor-react";
import Logo from "../../assets/Logos/freteminhacidade.svg";

import Facebook from "../../assets/SocialMedia/Facebook.png";
import Instagram from "../../assets/SocialMedia/Instagram.png";
import Linkedin from "../../assets/SocialMedia/Linkedin.png";
import Whatsapp from "../../assets/SocialMedia/Whatsapp.png";
import Twitter from "../../assets/SocialMedia/Twitter.png";
import Gmail from "../../assets/SocialMedia/Gmail.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <div>
      <div className="hidden sm:grid grid-cols-12 gap-10 bg-custon-black text-white px-10 py-5  ">
        <div className="col-span-2">
          <img className="" src={Logo} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d958.5116773958741!2d-57.67957349399158!3d-16.063065743971116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1698184836819!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            className="rounded-xl shadow-sm shadow-white mt-2"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col-span-3 flex flex-col items-start justify-start gap-1">
          <button className="font-semibold ">Atendimento</button>
          <button className="text-sm hover:underline mt-1">
            Central de Ajuda
          </button>

          <button className="text-sm hover:underline">
            Reporte um problema
          </button>
          <button className="text-sm hover:underline">
            Suporte pelo Whatsapp
          </button>
        </div>
        <div className="col-span-3 flex flex-col items-start justify-start gap-1">
          <button className="font-semibold ">Oportunidade</button>
          <button className="text-sm hover:underline mt-1">
            Anuncie seu frete no Site
          </button>
          <button className="text-sm hover:underline">
            Fórum da comunidade
          </button>
        </div>
        <div className="col-span-4 flex flex-col items-start justify-start gap-1">
          <button className="font-semibold ">Newsletters</button>
          <div className="relative w-full flex mt-2">
            <input className="bg-white text-black pl-10 py-2 font-semibold rounded-l-lg w-full " />
            <button className="py-2 px-5 font-semibold bg-blue-500 rounded-r-lg transition ease-in-out hover:scale-105 active:scale-100">
              Enviar
            </button>
            <EnvelopeSimple
              className="absolute left-3 bottom-2 text-black opacity-50 "
              size={22}
              weight="bold"
            />
          </div>
          <button className="text-xs">
            Receba todas as novidades pelo e-mail
          </button>
        </div>
        <div className="col-span-9 flex gap-3 mt-3 text-xs">
          <p>© 2023 Freteminhacidade, Inc.</p>
          <p>·</p>
          <p className="hover:underline">Privacidade</p>
          <p>·</p>
          <p className="hover:underline">Termos</p>
          <p>·</p>
          <p className="hover:underline">Mapa do site</p>
          <p>·</p>
          <p className="hover:underline">Informações da empresa</p>
        </div>
        <div className="col-span-3 flex gap-3">
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Facebook}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Linkedin}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Instagram}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Twitter}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Whatsapp}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Gmail}
          />
        </div>
      </div>
      <Accordion disableGutters className="!bg-custon-black !text-white block sm:hidden">
        <AccordionSummary expandIcon={<Plus className="text-white" />}>
          <p className="font-semibold text-md">Nosso endereço</p>
        </AccordionSummary>
        <AccordionDetails>
          <img className="" src={Logo} />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d958.5116773958741!2d-57.67957349399158!3d-16.063065743971116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1698184836819!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            className="rounded-xl shadow-sm shadow-white mt-2"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="!bg-custon-black !text-white block sm:hidden">
        <AccordionSummary expandIcon={<Plus className="text-white" />}>
          <p className="font-semibold text-md">Atendimento</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col items-start justify-start gap-3">
          <button className="text-sm hover:underline mt-1">
            Central de Ajuda
          </button>

          <button className="text-sm hover:underline">
            Reporte um problema
          </button>
          <button className="text-sm hover:underline">
            Suporte pelo Whatsapp
          </button>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="!bg-custon-black !text-white block sm:hidden">
        <AccordionSummary expandIcon={<Plus className="text-white" />}>
          <p className="font-semibold text-md">Oportunidade</p>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col items-start justify-start gap-3">
          <button className="text-sm hover:underline mt-1">
            Anuncie seu frete no Site
          </button>
          <button className="text-sm hover:underline">
            Fórum da comunidade
          </button>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters className="!bg-custon-black !text-white block sm:hidden">
        <AccordionSummary expandIcon={<Plus className="text-white" />}>
          <p className="font-semibold text-md">Contate-nos</p>
        </AccordionSummary>
        <AccordionDetails className="flex justify-evenly">
        <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Facebook}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Linkedin}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Instagram}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Twitter}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Whatsapp}
          />
          <img
            className="transition ease-in-out hover:scale-110 active:scale-100 w-8 h-8"
            src={Gmail}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
