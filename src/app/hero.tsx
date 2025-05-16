"use client";

import Image from "next/image";

function Hero() {
  return (
    <header id="home" className="section-modern">
      <div className="container mx-auto grid h-full gap-1 min-h-[80vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <div className="mb-8">
            <h1 className="font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              <div className="text-4xl lg:text-5xl mb-2">¡Hola, soy Kelly Núñez!</div>
              <div className="text-4xl">Comunicadora, Diseñadora</div>
              <div className="text-4xl">& Desarrolladora Front-End</div>
            </h1>
          </div>
          <p className="mb-5 text-gray-700 md:pr-16 xl:pr-28 leading-normal text-sm md:text-base">
            Líder creativa multidisciplinaria con más de 10 años de experiencia en la integración de diseño estratégico de marca, diseño de experiencia de usuario (UX) e interfaz de usuario (UI) y desarrollo front-end para la creación de productos digitales impactantes.
          </p>
          <div className="mb-2">
            <p className="mb-2 text-gray-900 font-medium text-sm">
              Contáctame
            </p>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="email"
                  className="peer h-full w-full rounded-lg border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Tu email
                </label>
              </div>
              <button 
                type="button"
                className="button-primary bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
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
              className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
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
