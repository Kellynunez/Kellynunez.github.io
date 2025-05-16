"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Diseño UI/UX",
    children:
      "Especializada en diseño centrado en el usuario, creando prototipos en Figma y experiencias web interactivas con enfoque en usabilidad y accesibilidad.",
  },
  {
    icon: FingerPrintIcon,
    title: "Desarrollo Frontend",
    children:
      "Experiencia en frameworks como Vue.js, TailwindCSS y herramientas como Jekyll.rb. Desarrollo de sitios web responsivos y optimizados para SEO.",
  },
  {
    icon: SwatchIcon,
    title: "Diseño Gráfico",
    children:
      "Dominio de Adobe Creative Suite para diseño de identidad corporativa, materiales de marketing digital y retoque fotográfico profesional.",
  },
  {
    icon: HashtagIcon,
    title: "Gestión de Proyectos",
    children:
      "Liderazgo de equipos multidisciplinarios utilizando metodologías ágiles y herramientas de colaboración como Jira y Confluence.",
  },
  {
    icon: EyeIcon,
    title: "Branding Estratégico",
    children:
      "Desarrollo de manuales de marca, definición de paletas de color y producción de materiales de marketing digital y print.",
  },
  {
    icon: DocumentTextIcon,
    title: "Análisis y Optimización",
    children:
      "Experiencia en SEO, Google Analytics y optimización de rendimiento web para mejorar la visibilidad y experiencia del usuario.",
  },
];

export function Skills() {
  return (
    <section className="px-8 py-20 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
      
      <div className="container mx-auto mb-20 text-center relative">
        <Typography color="white" className="mb-2 font-bold uppercase tracking-wider gradient-text">
          mis habilidades
        </Typography>
        <Typography variant="h1" color="white" className="mb-4 gradient-text">
          Experiencia Profesional
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full text-white/80 lg:w-10/12 transition-modern hover:text-white"
        >
          Combino una visión estratégica con habilidades técnicas avanzadas, incluyendo un profundo conocimiento
          de frameworks y herramientas de diseño y desarrollo web modernas.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
        {SKILLS.map((props, idx) => (
          <div key={idx} className="card-modern animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
            <SkillCard {...props} className="text-white" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
