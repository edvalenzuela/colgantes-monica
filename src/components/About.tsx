import { FcBusinesswoman, FcLike } from "react-icons/fc";

export default function About() {
  return (
    <section id="quien-soy">
      <div className="container mx-auto flex px-5 py-24 lg:my-24 md:flex-row flex-col justify-center items-center border-none border-2 lg:border-dashed border-green-700/30 rounded-none md:rounded-4xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl mb-5 font-bold flex items-center gap-2">
            <FcBusinesswoman size={40} /> Quién soy?
          </h1>
          <p className="mb-8 drop-shadow-xl text-left leading-relaxed text-xl">
          Soy Mónica Peña, nací en 1964 y a lo largo de mi vida he trabajado en diversas áreas. Tras dejar el trabajo corporativo, decidí cambiar de rumbo y unirme al grupo de Artesanos Unidos de la Municipalidad de San Bernardo, donde descubrí mi pasión por crear colgantes para plantas. Me encanta dar vida a los espacios con mis creaciones y siempre busco inspiración en lo cotidiano. ¡Cada día es una oportunidad para seguir aprendiendo y creciendo!
          <span className="inline-flex items-center ml-2"><FcLike /></span>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img alt="planta_1" className="object-contain object-center h-full w-full" src="/img/monica.jpg" fetchPriority="low" loading='lazy' />
        </div>
      </div>
    </section>
  )
}
