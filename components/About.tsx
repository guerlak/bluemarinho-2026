import React from 'react';
import Image from 'next/image';
import picture from "../public/foto-instrumento.png"

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-blue-marinho text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px] border border-white/10 bg-blue-marinho/50 shadow-2xl rounded-sm overflow-hidden">

          {/* Left Image Area (simulated with dark placeholder) */}
          <div className="lg:w-1/2 bg-black relative min-h-[400px]">
            <Image
              fill
              src={picture}
              alt="Blue Marinho Band Performance"
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-8 left-8 z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase leading-none">
                Blue<br />Marinho
              </h2>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/20 relative">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-6 text-gray-100">
                O som que corre<br />
                <span className="text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.15)]">nas nossas veias</span>
              </h3>
            </div>

            <div className="space-y-8 text-lg font-light text-gray-300 leading-relaxed">
              <p>
                A <strong className="text-white font-semibold">Blue Marinho</strong> nasceu da paixão visceral pelo rock & blues, transformando a sinergia de cinco amigos de longa data em uma performance potente, elétrica e carregada de feeling.
              </p>
              <p>
                Resgatamos os clássicos definitivos que moldaram gerações — do peso do Led Zeppelin ao groove contagiante de Stevie Wonder, da psicodelia dos Mutantes ao blues imortal de Janis Joplin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;