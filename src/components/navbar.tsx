"use client";

import React from "react";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
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
    <MTNavbar
      shadow={false}
      fullWidth
      className={`navbar-modern ${scrolled ? "nav-scrolled" : ""} border-0 sticky top-0 z-50`}
      blurred={scrolled}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-decoration-none">
          <Typography className="text-xl font-bold gradient-text">
            Kelly Núñez
          </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-white/10 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
