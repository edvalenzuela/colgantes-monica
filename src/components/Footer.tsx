import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import CustomSVGIcon from "./SvgIcon";

export default function Footer() {

  const message = "¡Hola! Estoy interesado en más información sobre colgantes"; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/56991440999?text=${encodedMessage}`;

  return (
    <footer className="bg-orange-400">
      <div className="container py-10 sm:py-5 mx-auto flex items-center sm:flex-row flex-col gap-4 sm:gap-0">
        <Link href='/' className="group rounded-md px-3 py-2 text-base font-medium bg-orange-600 hover:bg-white text-white flex items-center gap-1 md:justify-start justify-center">
          <CustomSVGIcon className="text-black"/>
          <p className="group-hover:text-orange-600 text-white font-bold">Colgantes Mónica</p>
        </Link>
        <Link className="group font-bold text-base" href="https://github.com/edvalenzuela/" title="Eduardo Valenzuela" rel="noopener noreferrer" target="_blank">
          <p className="text-white hover:text-orange-600 ml-4 pl-4 sm:border-l-2 sm:border-white group-hover:border-orange-600 py-2 mt-0">© {new Date().getFullYear()} Desarrollado por
            <span className="text-white group-hover:text-orange-600 ml-1">@edvalenzuela</span>
          </p>
        </Link>
        <span className="inline-flex items-center sm:ml-auto sm:mt-0 justify-center sm:justify-start">
          <div className="flex gap-6 sm:gap-4">
            <Link 
              href={`${url}`} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              title="Ir a Whatsapp"
            >
              <FaWhatsapp className="text-white hover:text-orange-600 sm:text-[40px] text-[50px]" />
            </Link>
            <Link 
              href='https://www.facebook.com/monica.penamunoz.7' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por Facebook"
              title="Ir a Facebook"
            >
              <FaFacebook className="text-white hover:text-orange-600 sm:text-[40px] text-[50px]" />
            </Link>
            <Link 
              href='https://www.instagram.com/hermososcolgantes/' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por Instagran"
              title="Ir a Instagram"
            >
              <FaInstagram className="text-white hover:text-orange-600 sm:text-[40px] text-[50px]" />
            </Link>
          </div>
        </span>
      </div>
    </footer>
  )
}
