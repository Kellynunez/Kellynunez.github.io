"use client";

import { ProjectCard } from "@/components";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Voltron Data",
    desc: "Rediseño de identidad corporativa y migración del sitio web de WordPress a Jekyll.rb con optimización SEO.",
  },
  {
    img: "/image/blog2.svg",
    title: "BlazingSQL",
    desc: "Desarrollo de prototipos UI/UX en Figma y sitios web con características interactivas para análisis de datos.",
  },
  {
    img: "/image/blog3.svg",
    title: "Simply Technology",
    desc: "Diseño UX utilizando Design Thinking y prototipos UI multiplataforma en Adobe XD para aplicaciones web.",
  },
  {
    img: "/image/blog4.svg",
    title: "Outofthebox.pe",
    desc: "Diseño y ejecución de banners, gráficos para redes sociales y retoque fotográfico profesional.",
  },
];

export function Projects() {
  return (
    <section id="education" className="py-28 px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-sky-500/10 pointer-events-none" />
      
      <div className="container mx-auto mb-20 text-center relative">
        <h2 className="mb-4 gradient-text text-3xl font-bold text-white">
          Educación
        </h2>
        <p className="mx-auto w-full px-4 font-normal text-white/80 lg:w-6/12 transition-modern hover:text-white text-lg">
          Mi formación académica y desarrollo profesional continuo en comunicación,
          diseño y desarrollo web.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4 relative">
        {PROJECTS.map((props, idx) => (
          <div 
            key={idx} 
            className="card-modern group"
            style={{ 
              animationDelay: `${idx * 0.2}s`,
              transform: `translateY(${idx % 2 === 0 ? '20px' : '-20px'})`
            }}
          >
            <ProjectCard 
              {...props} 
              className="bg-transparent text-white transition-modern group-hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
