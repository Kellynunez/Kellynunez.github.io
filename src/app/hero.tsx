"use client";

import Image from "next/image";

function Hero() {
  return (
    <header id="home" className="section-modern">
      <div className="container mx-auto grid h-full gap-1 min-h-[80vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <div className="mb-6">
            <h1 className="font-bold">
              <div className="text-5xl lg:text-6xl !leading-[1.1] mb-3 bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent animate-gradient">
                ¡Bienvenidos a mi Portafolio Digital!
              </div>
              <div className="pt-1 lg:pr-10 text-2xl lg:text-3xl font-light bg-gradient-to-r from-blue-700 to-gray-900 bg-clip-text text-transparent">
                Donde la <span className="font-semibold">Comunicación</span>,
                el <span className="font-semibold">Diseño</span> y el
                <span className="font-semibold"> Desarrollo Front-End</span> se fusionan para crear experiencias únicas.
              </div>
            </h1>
          </div>
          <p className="mb-7 text-gray-700 md:pr-16 xl:pr-28 leading-normal text-sm md:text-base">
            Líder creativa multidisciplinaria con más de 10 años de experiencia y dominio en diseño estratégico de marca, diseño de experiencia de usuario (UX) e interfaz de usuario (UI) y desarrollo front-end, creando productos digitales impactantes.          
          </p>
          <div className="mb-2">
            <p className="mb-2 text-gray-900 font-medium text-sm">
              Contáctame
            </p>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row md:items-center">
              <div className="relative flex-1">
                <input
                  type="email"
                  className="w-full h-12 px-4 rounded-lg border border-blue-gray-200 bg-transparent text-sm text-blue-gray-700 outline-none transition-all focus:border-2 focus:border-blue-500"
                  placeholder="Tu email"
                />
              </div>
              <button 
                type="button"
                className="h-12 button-primary bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-black text-white font-medium px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const emailInput = document.querySelector('input');
                  if (emailInput) {
                    const email = emailInput.value;
                    window.location.href = `mailto:kellynunezhu@gmail.com?subject=Contacto desde Portfolio&body=Email de contacto: ${email}`;
                  }
                }}
              >
                Contactar
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Visita mi{" "}
            <a 
              href="https://www.linkedin.com/in/kellynunezh" 
              target="_blank" 
              className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="relative">
          <Image
            width={1024}
            height={1024}
            alt="Kelly Núñez - Portfolio"
            src="/image/image-7.svg"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
