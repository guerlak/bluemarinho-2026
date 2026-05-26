import React from "react";
import { REPERTOIRE_HIGHLIGHTS } from "../lib/constants";

const Repertoire: React.FC = () => {
  return (
    <div id="repertoire">
      {/* Part 1: Intro */}
      <section className="py-20 bg-blue-marinho flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 lg:p-20 flex items-center justify-center lg:justify-end">
          <h2 className="text-6xl md:text-8xl font-sans font-black  outline-text uppercase tracking-wider opacity-40 lg:opacity-100">
            Repertório
          </h2>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center bg-white/5 backdrop-blur-sm">
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            A Blue Marinho navega por um vasto oceano musical, trazendo o melhor
            de diferentes épocas e estilos com repertório diversificado e
            potente.
          </p>
          <p className="text-gray-300 leading-relaxed">
            De <strong>White Stripes</strong> aos <strong>Beatles</strong>, dos{" "}
            <strong>Mutantes</strong> à <strong>Nina Simone</strong>, dos
            clássicos ao contemporâneo. O repertório passa por Led Zeppelin,
            Stevie Wonder, Guns N' Roses, Jet, The Animals, Cazuza, Janis Joplin
            e muito mais.
          </p>
        </div>
      </section>

      {/* Divider Quote */}
      <section
        className="py-32 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://mysocialinterests.wordpress.com/wp-content/uploads/2015/08/rock-and-roll.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-blue-marinho/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h3 className="text-2xl md:text-4xl font-black uppercase leading-snug tracking-wider max-w-4xl mx-auto drop-shadow-lg">
            Versões com dose extra de energia e personalidade para clássicos
            atemporais
          </h3>
        </div>
      </section>

      {/* Part 2: List */}
      <section className="py-20 bg-blue-marinho border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gray-100 uppercase tracking-widest">
              Alguns clássicos que tocamos e estão sempre presentes nos nossos
              shows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {REPERTOIRE_HIGHLIGHTS.map((song, index) => (
              <div
                key={index}
                className="group border-b border-white/10 pb-4 hover:border-white/50 transition-colors"
              >
                <h4 className="text-lg font-bold uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                  {song.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repertoire;
