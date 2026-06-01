import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/brand-icons';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/AlexisSamboy' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/alexis-samboy-herrera/' },
    { icon: Instagram, href: 'https://www.instagram.com/alexis_samboy/' },
    { icon: Mail, href: 'mailto:alexissamboy1998@gmail.com' },
  ];

  return (
    <MinimalistHero
      mainText="Especialista en Business Intelligence & Estrategia Digital. Diseño modelos de datos, automatizo ETLs y construyo cuadros de mando interactivos para facilitar decisiones de negocio estratégicas."
      imageSrc="img/alexis-sin-fondo.png"
      imageAlt="Alexis Samboy Herrera - Business Intelligence Specialist"
      overlayText={{
        part1: 'BUSINESS',
        part2: 'INTELLIGENT',
      }}
      socialLinks={socialLinks}
      locationText="Santo Domingo, RD"
      className="bg-transparent"
    />
  );
};

export default MinimalistHeroDemo;

import RuixenCard4 from "@/components/ui/doctor-live-chat-card";

const DemoOne = () => {
  return <RuixenCard4 />;
};

export { DemoOne };
