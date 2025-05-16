"use client";

import React from "react";
import Link from "next/link";
import {
  FolderIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const NAV_MENU = [
  {
    name: "Portafolio",
    icon: FolderIcon,
    href: "/projects",
  },
  {
    name: "Mi Experiencia",
    icon: BriefcaseIcon,
    href: "#experience",
  },
  {
    name: "Educación",
    icon: AcademicCapIcon,
    href: "#education",
  },
  {
    name: "Clientes",
    icon: ChatBubbleLeftRightIcon,
    href: "#testimonials",
  },
  {
    name: "Contacto",
    icon: EnvelopeIcon,
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-2 font-medium text-black transition-colors hover:text-blue-500"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
    };
  }, [scrolled]);

  return (
    <nav
      className={`navbar-modern ${scrolled ? "nav-scrolled backdrop-blur-lg bg-white/75" : ""} border-0 sticky top-0 z-50 w-full py-3`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-decoration-none">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Kelly Núñez
          </span>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      <div className={`${open ? "block" : "hidden"} lg:hidden`}>
        <div className="container mx-auto mt-3 border-t border-gray-100 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
