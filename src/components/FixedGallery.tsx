export default function FixedGallery() {
  return (
    <div className="container px-5 mt-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <p className="lg:w-2/3 mx-auto leading-relaxed text-left text-xl text-white">Explora nuestra exclusiva galería de colgantes de plantas, con una variedad de diseños únicos en diferentes colores y estilos. Cada colgante está hecho con materiales de alta calidad, perfectos para darle vida y frescura a cualquier espacio, ya sea en tu hogar u oficina.</p>
    </div>
    <div className="flex flex-wrap justify-evenly">
      <div className="w-full lg:w-1/3 sm:w-1/2 p-4 transition-transform overflow-hidden">
        <div className="flex relative">
          <div className="w-full h-60 transform-gpu transition-transform duration-300 ease-in-out">
            <img alt="logo_1" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-90" src="/img/horizontal/planta_1.jpg" fetchPriority="low" loading='lazy' />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 sm:w-1/2 p-4 transition-transform overflow-hidden">
        <div className="flex relative">
          <div className="w-full h-60 transform-gpu transition-transform duration-300 ease-in-out">
            <img alt="logo_2" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-90" src="/img/horizontal/planta_2.jpg" fetchPriority="low" loading='lazy' />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 sm:w-1/2 p-4 transition-transform overflow-hidden">
        <div className="flex relative">
          <div className="w-full h-60 transform-gpu transition-transform duration-300 ease-in-out">
            <img alt="logo_2" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-90" src="/img/horizontal/planta_3.jpg" fetchPriority="low" loading='lazy' />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 sm:w-1/2 p-4 transition-transform overflow-hidden">
        <div className="flex relative">
          <div className="w-full h-60 transform-gpu transition-transform duration-300 ease-in-out">
            <img alt="logo_2" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-90" src="/img/horizontal/planta_4.jpg" fetchPriority="low" loading='lazy' />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
