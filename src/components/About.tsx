import { FcBusinesswoman, FcLike } from "react-icons/fc";

export default function About() {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-24 lg:my-24 md:flex-row flex-col justify-center items-center border-none border-2 lg:border-dashed border-green-700/30 rounded-none md:rounded-4xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl mb-5 font-bold flex items-center gap-2">
            <FcBusinesswoman size={40} /> Quién soy?
          </h1>
          <p className="mb-8 drop-shadow-xl text-left leading-relaxed text-xl">
          Soy Mónica Peña, nací en 1964 y a lo largo de mi vida he trabajado en diversas áreas. Tras dejar el trabajo corporativo, decidí cambiar de rumbo y unirme al grupo de Artesanos Unidos de la Municipalidad de San Bernardo, donde descubrí mi pasión por crear colgantes para plantas. Me encanta dar vida a los espacios con mis creaciones y siempre busco inspiración en lo cotidiano. ¡Cada día es una oportunidad para seguir aprendiendo y creciendo!
          <span className="inline-flex items-center ml-2"><FcLike /></span>
          </p>
          <div className="w-40 h-40 mx-auto bg-white text-gray-400">
            <img alt="logo_1" title="Contacto" className="object-contain object-center h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-help" src="/img/logo.png" fetchPriority="low" loading='lazy' />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 overflow-hidden">
          <img alt="planta_1" title="Mónica" className="object-contain object-center h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-90 hover:cursor-help" src="/img/monica.jpg" fetchPriority="low" loading='lazy' />
        </div>
      </div>
    </section>
  )
}
