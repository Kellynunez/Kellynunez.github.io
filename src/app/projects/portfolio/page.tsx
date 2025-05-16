"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

interface ProjectImage {
  src: string;
  alt: string;
}

const PROJECT_IMAGES: ProjectImage[] = [
  {
    src: "/images/portfolio.jpg",
    alt: "Portfolio Design - Cover"
  },
  {
    src: "/images/projects/portfolio/2.jpg",
    alt: "Portfolio Design - Projects Grid"
  },
  {
    src: "/images/projects/portfolio/3.jpg",
    alt: "Portfolio Design - Project Detail"
  },
  {
    src: "/images/projects/portfolio/4.jpg",
    alt: "Portfolio Design - Mobile View"
  }
];

export default function PortfolioProject() {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Typography variant="h1" color="blue-gray" className="mb-4 text-4xl md:text-5xl font-bold">
            Portfolio Design
          </Typography>
          <Typography variant="lead" color="gray" className="text-gray-700">
            Diseño y desarrollo de un portafolio digital moderno y minimalista que destaca
            proyectos creativos a través de una experiencia visual inmersiva.
          </Typography>
        </div>
      </div>

      {/* Project Images */}
      <div className="w-full">
        {PROJECT_IMAGES.map((image, index) => (
          <div key={index} className="mb-8">
            <div className="container mx-auto px-4">
              <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Typography variant="h3" color="blue-gray" className="mb-6 text-2xl font-bold">
              Sobre el Proyecto
            </Typography>
            <Typography color="gray" className="text-gray-700 mb-6">
              Este proyecto de portafolio digital fue diseñado y desarrollado con el objetivo
              de crear una plataforma moderna y minimalista que destaque el trabajo creativo
              de manera efectiva. El diseño se centra en la experiencia del usuario,
              permitiendo una navegación intuitiva y una presentación visual impactante.
            </Typography>
            <Typography color="gray" className="text-gray-700">
              La interfaz utiliza una combinación de tipografía clara, espacios blancos
              estratégicos y transiciones suaves para crear una experiencia de usuario
              fluida y profesional.
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="blue-gray" className="mb-6 text-2xl font-bold">
              Detalles Técnicos
            </Typography>
            <div className="space-y-4">
              <div>
                <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
                  Tecnologías Utilizadas
                </Typography>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Next.js y React</li>
                  <li>Tailwind CSS</li>
                  <li>Material Tailwind</li>
                  <li>TypeScript</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">
                  Características Principales
                </Typography>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Diseño Responsivo</li>
                  <li>Animaciones Suaves</li>
                  <li>Optimización de Imágenes</li>
                  <li>SEO Optimizado</li>
                  <li>Rendimiento Optimizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 