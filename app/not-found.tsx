"use client";

import React from "react";
import Image from "next/image";
import { Music, ArrowLeft, MessageCircle, Instagram, Youtube } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function NotFound() {
  const whatsappLink = `https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, "")}`;
  const instagramLink = `https://instagram.com/${CONTACT_INFO.instagram.replace("@", "")}`;

  return (
    <main className="relative min-h-screen flex flex-col justify-between items-center bg-blue-marinho text-white overflow-hidden px-4 py-8 select-none">
      {/* Decorative Gradient Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-600/25 filter blur-3xl pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 filter blur-3xl pointer-events-none animate-[pulse_10s_ease-in-out_infinite]" />

      {/* Top Header - Logo */}
      <header className="z-10 w-full max-w-6xl flex justify-center py-4">
        <a href="/" className="block w-48 md:w-56 transition-transform duration-300 hover:scale-105">
          <img src="/Blue-Marinho-Logo.png" alt="Blue Marinho" className="w-full h-auto" />
        </a>
      </header>

      {/* Main Content - 404 & Repertoire Metaphor */}
      <div className="z-10 flex flex-col items-center text-center max-w-2xl my-auto animate-fade-in-up py-10">

        {/* Large 404 Graphic with Spinning Vinyl Record */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 select-none">
          <span className="text-[100px] sm:text-[150px] md:text-[180px] font-black leading-none font-serif text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            4
          </span>

          {/* Animated Vinyl Record container acting as the '0' */}
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-neutral-950 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8),_0_0_30px_rgba(37,99,235,0.3)] border-4 border-neutral-800">
            {/* Spinning Groove Markings */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full border border-white/5 animate-[spin_8s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full border border-white/5 animate-[spin_6s_linear_infinite]" />

            {/* Vinyl Highlight Sheen (Static Overlay to simulate light reflection) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Central Label (Center of the record) */}
            <div className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-inner border-2 border-neutral-900 z-10 animate-[spin_10s_linear_infinite]">
              <Music className="w-5 h-5 sm:w-7 sm:h-7 text-white animate-pulse" />
            </div>
          </div>

          <span className="text-[100px] sm:text-[150px] md:text-[180px] font-black leading-none font-serif text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            4
          </span>
        </div>

        {/* Text Details */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
          Faixa fora do nosso set
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-light text-gray-300/90 leading-relaxed mb-10 max-w-lg px-2">
          Ops! A música ou página que você tentou acessar não está no nosso repertório.
          Pode ser que ela tenha saído de cena ou a URL esteja com um tom errado.
        </p>

        {/* Buttons Action Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
          <a
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o Início
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            Contratar Show
          </a>
        </div>
      </div>

      {/* Bottom Footer - Socials & Info */}
      <footer className="z-10 w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6 mt-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Blue Marinho. Todos os direitos reservados.</p>

        <div className="flex items-center gap-6">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <Instagram className="w-4 h-4" />
            <span>{CONTACT_INFO.instagram}</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors flex items-center gap-1.5"
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
