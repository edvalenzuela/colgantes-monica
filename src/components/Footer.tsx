import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { PiPottedPlant } from "react-icons/pi";

export default function Footer() {

  const message = "¡Hola! Estoy interesado en más información sobre colgantes"; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/56991440999?text=${encodedMessage}`;

  return (
    <footer className="bg-green-600">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href='/' className="flex title-font text-white font-medium items-center gap-1 md:justify-start justify-center">
          <PiPottedPlant color="brown" size={30} />
          <p>Colgantes Mónica</p>
        </Link>
        <Link href="https://github.com/edvalenzuela/" title="Eduardo Valenzuela" rel="noopener noreferrer" target="_blank">
          <p className="group text-sm text-white hover:text-green-950 ml-4 pl-4 sm:border-l-2 sm:border-gray-200 py-2 mt-0">© {new Date().getFullYear()} Desarrollado por
            <span className="text-sm text-white group-hover:text-green-950 ml-1">@edvalenzuela</span>
          </p>
        </Link>
        <span className="inline-flex items-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <p className="font-medium mr-2 text-white">Mis redes sociales: </p>
          <div className="flex gap-2">
            <Link 
              href={`${url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              title="Ir a Whatsapp"
            >
              <FaWhatsapp className="text-white sm:text-[40px] text-[30px]" />
            </Link>
            <Link 
              href='#' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              title="Ir a Facebook"
            >
              <FaFacebook className="text-white sm:text-[40px] text-[30px]" />
            </Link>
            <Link 
              href='#' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              title="Ir a Instagram"
            >
              <FaInstagram className="text-white sm:text-[40px] text-[30px]" />
            </Link>
          </div>
        </span>
      </div>
    </footer>
  )
}
