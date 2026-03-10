"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import ScrollDemo from "@/components/ScrollDemo";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Industries from "@/components/Industries";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Nav onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <LogoBar />
        <ScrollDemo />
        <Problem />
        <Features />
        <Comparison />
        <Industries />
        <Pricing onOpenModal={openModal} />
        <Integrations />
        <CTA onOpenModal={openModal} />
      </main>
      <Footer />
      <DemoModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
