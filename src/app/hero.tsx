"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

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
          <Typography
            as="p"
            variant="lead"
            color="blue-gray"
            className="mb-5 text-gray-700 md:pr-16 xl:pr-28 leading-normal text-sm md:text-base"
          >
            Líder creativa multidisciplinaria con más de 10 años de experiencia en la integración de diseño estratégico de marca, diseño de experiencia de usuario (UX) e interfaz de usuario (UI) y desarrollo front-end para la creación de productos digitales impactantes.
          </Typography>
          <div className="mb-2">
            <Typography
              as="p"
              variant="small"
              color="blue-gray"
              className="mb-2 text-gray-900 font-medium"
            >
              Contáctame
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Input 
                type="email"
                color="blue"
                label="Tu email" 
                size="lg"
                crossOrigin={undefined}
                className="input-modern"
              />
              <Button 
                type="button"
                color="blue"
                className="button-primary"
                onClick={() => {
                  const emailInput = document.querySelector('input');
                  if (emailInput) {
                    const email = emailInput.value;
                    window.location.href = `mailto:kellynunezhu@gmail.com?subject=Contacto desde Portfolio&body=Email de contacto: ${email}`;
                  }
                }}
              >
                Contactar
              </Button>
            </div>
          </div>
          <Typography 
            as="p"
            variant="small" 
            color="blue-gray"
            className="text-gray-700"
          >
            Visita mi{" "}
            <a 
              href="https://www.linkedin.com/in/kellynunezh" 
              target="_blank" 
              className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              LinkedIn
            </a>
          </Typography>
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
