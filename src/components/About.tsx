import React from 'react'

export default function About() {
  return (
    <section id="quien-soy" className="min-h-screen flex justify-center items-center border-b border-gray-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-white/15 rounded-2xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-5 font-bold text-white">
            Quién soy?
          </h1>
          <p className="mb-8 text-white leading-relaxed text-xl">
            Hola, soy Mónica Peña una persona apasionada por los pequeños detalles de la vida. Nací en 1964 y, a lo largo de mi vida, he trabajado en diversas áreas. Durante muchos años, trabajé en una empresa, pero con el tiempo, el trabajo corporativo dejó de entusiasmarme. Fue entonces cuando decidí dar un giro a mi vida y comencé a trabajar en la Municipalidad de San Bernardo en el grupo de Artesanos Unidos, donde pude descubrir una nueva pasión: crear colgantes para plantas como hobbie. Me encanta decorar y dar vida a espacios con mis creaciones. Además, soy una orgullosa dueña de casa, siempre buscando inspiración en lo cotidiano. ¡Cada día es una nueva oportunidad para aprender y seguir creciendo!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  )
}
