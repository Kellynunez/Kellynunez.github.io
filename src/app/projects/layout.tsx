"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">{children}</main>
      <Footer />
    </>
  );
} 