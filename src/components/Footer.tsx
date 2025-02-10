import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import CustomSVGIcon from "./SvgIcon";

export default function Footer() {

  const message = "¡Hola! Estoy interesado en más información sobre colgantes"; 
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/56991440999?text=${encodedMessage}`;

  return (
    <footer className="bg-repeat bg-fixed bg-texture-gravel bg-amber-900 z-20">
      <div className="container py-5 sm:py-5 mx-auto flex items-center sm:flex-row flex-col gap-2 sm:gap-0">
        <Link href='/' className="rounded-md px-3 py-2 text-base font-medium bg-green-700 hover:bg-green-800 text-white flex items-center gap-1 md:justify-start justify-center">
          <CustomSVGIcon className="text-black w-10"/>
          <p className="text-white font-bold text-nowrap">Colgantes Mónica</p>
        </Link>
        <Link className="font-bold text-base" href="https://github.com/edvalenzuela/" title="Eduardo Valenzuela" rel="noopener noreferrer" target="_blank">
          <p className="text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white py-2 mt-0">© {new Date().getFullYear()} Desarrollado por
            <span className="text-white ml-1">@edvalenzuela</span>
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
              <FaWhatsapp className="text-white hover:text-green-700 sm:text-[40px] text-[50px]" />
            </Link>
            <Link 
              href='https://www.facebook.com/monica.penamunoz.7' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por Facebook"
              title="Ir a Facebook"
            >
              <FaFacebook className="text-white hover:text-green-700 sm:text-[40px] text-[50px]" />
            </Link>
            <Link 
              href='https://www.instagram.com/hermososcolgantes/' 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contactar por Instagran"
              title="Ir a Instagram"
            >
              <FaInstagram className="text-white hover:text-green-700 sm:text-[40px] text-[50px]" />
            </Link>
          </div>
        </span>
      </div>
    </footer>
  )
}
