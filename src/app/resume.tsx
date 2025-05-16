"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Comunicación y Publicidad Profesional - USIL",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Especialización en Diseño Centrado en el Usuario - PUCP",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Desarrollo Frontend - JS, TailwindCSS, Jekyll.js, Git",
  },
];

export function Resume() {
  return (
    <section id="experience" className="px-8 py-24 bg-gray-900">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="white">
            Mi Experiencia
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-400">
            Líder creativa multidisciplinaria con más de 10 años de experiencia en diseño estratégico de marca,
            diseño UI/UX y desarrollo web frontend. Especializada en la creación de productos digitales de alto impacto.
          </Typography>
          <Button
            variant="text"
            color="white"
            className="flex items-center gap-2"
            onClick={() => window.location.href = 'https://www.linkedin.com/in/kellynunezh'}
          >
            Ver más en LinkedIn
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-white"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} className="text-white" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
