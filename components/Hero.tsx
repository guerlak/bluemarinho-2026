import React from 'react';
import { ArrowDown, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';
import fotoHero from '../public/foto-hero-bm.jpg';

const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`;

  return (
    <section className="relative sm:mt-10 h-[50vh] md:h-screen sm:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-size-[130%_auto] md:bg-cover bg-center bg-no-repeat z-0 translate-y-15 sm:translate-y-0 "
        style={{ backgroundImage: `url(${fotoHero.src})` }}
      >
        <div className="absolute inset-0 bg-blue-marinho/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-t from-blue-marinho via-transparent to-blue-marinho/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center translate-y-35  w-[400px] md:translate-y-40 sm:w-full" >
        {/* Subtle glowing label */}
        {/* <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-blue-400 mb-6 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] animate-pulse">
          And I'm Feeling Good
        </span> */}

        {/* Heavy Bold Headline */}
        <h1 className="text-4xl md:text-8xl font-serif font-bold uppercase tracking-tight leading-none mb-6 text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
          O melhor de todas as épocas<br />
          <span className="text-blue-300 font-sans tracking-wide text-xl sm:text-3xl md:text-5xl font-black block mt-3 drop-shadow-[0_0_12px_rgba(147,197,253,0.3)]">
            Com Alma & Versões Únicas
          </span>
        </h1>

        {/* Short Punchy Copy */}
        <p className="hidden sm:block text-base sm:text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-10 max-w-2xl px-2">
          Redefinindo clássicos atemporais de todas as eras com a pegada eletrizante e identidade da Blue Marinho.
        </p>


        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
          <a
            href="#gigs"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border-2 border-blue-300/40 hover:border-blue-300 text-blue-300 hover:text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-105 hover:bg-blue-300/5 shadow-md hover:shadow-[0_0_20px_rgba(147,197,253,0.2)]"
          >
            Ver Próximos Shows
            <ArrowDown size={16} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border-2 border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] hover:text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-105 hover:bg-[#25D366]/10 shadow-md"
          >
            <MessageCircle size={18} />
            Contratar Banda
          </a>
        </div> */}
      </div>

      {/* Decorative Interactive Scroll Indicator */}
      <a
        href="#about"
        className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-10 sm:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans font-bold text-gray-400">Scroll para explorar</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1.5">
          <div className="w-1 h-2 bg-blue-300 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;