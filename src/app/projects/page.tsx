"use client";

import React from "react";

interface PortfolioItem {
  title: string;
  categories: string[];
  image: string;
  href: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Portfolio",
    categories: ["Advertising", "Programming", "Web Design"],
    image: "/images/portfolio.jpg",
    href: "/projects/portfolio"
  },
  {
    title: "Branding",
    categories: ["Graphic Design", "Advertising", "Illustration"],
    image: "/images/branding.jpg",
    href: "/projects/branding"
  },
  {
    title: "Website",
    categories: ["UI/UX", "Web Design", "Illustration"],
    image: "/images/website.jpg",
    href: "/projects/website"
  },
  {
    title: "Landing Pages",
    categories: ["UI/UX", "Programming", "Web Design"],
    image: "/images/landing.jpg",
    href: "/projects/landing"
  },
  {
    title: "Web App Projects",
    categories: ["Web Design", "Programming", "UI/UX"],
    image: "/images/webapp.jpg",
    href: "/projects/webapp"
  },
  {
    title: "Social Media",
    categories: ["Graphic Design", "Architecture"],
    image: "/images/social.jpg",
    href: "/projects/social"
  },
  {
    title: "Best Pitch Decks",
    categories: ["Graphic Design", "Illustration", "Advertising"],
    image: "/images/pitch.jpg",
    href: "/projects/pitch"
  },
  {
    title: "Icon Gallery",
    categories: ["Illustration", "Advertising", "Architecture"],
    image: "/images/icons.jpg",
    href: "/projects/icons"
  },
  {
    title: "Mobile App UI/UX",
    categories: ["Interaction Design", "Illustration"],
    image: "/images/mobile.jpg",
    href: "/projects/mobile"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-gray-900">
          Mi Portafolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="portfolio-card hover-lift"
            >
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="portfolio-overlay">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.categories.join(", ")}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 