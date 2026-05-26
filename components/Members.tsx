import React from 'react';
import { BAND_MEMBERS } from '../lib/constants';

const Members: React.FC = () => {
  return (
    <section id="members" className="py-24 bg-gradient-to-b from-blue-marinho to-slate-900 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-center uppercase mb-20 text-white">
          No Palco
          <span className="block text-xs md:text-sm text-blue-400 font-bold uppercase tracking-[0.3em] mt-3 font-sans">
            A Linha de Frente do Nosso Som
          </span>
        </h2>

        <div className="flex overflow-x-auto pb-8 gap-8 px-4 -mx-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 sm:px-0 sm:mx-0 lg:grid-cols-5 lg:gap-12 lg:justify-items-center">
          {BAND_MEMBERS.map((member) => (
            <div key={member.name} className="flex flex-col items-center group shrink-0 snap-center w-[280px] sm:w-auto">
              {/* Circle Image container with rough white border effect */}
              <div className="relative w-60 h-60 mb-6 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-white scale-105 animate-pulse-slow opacity-20"></div>
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold uppercase tracking-wide leading-tight mb-1 break-words w-32">
                  {member.name.split(" ").map((n, i) => (
                    <span key={i} className="block">{n}</span>
                  ))}
                </h3>
                {member.role && (
                  <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block">
                    {member.role}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;