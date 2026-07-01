import React from 'react';
import { Presentation } from '../lib/types';
import { MapPin, Clock, Instagram } from 'lucide-react';
import Image from 'next/image';
import fotoShow from "../public/blue-marinho-fest80.jpg"

interface PresentationsProps {
  schedule: Presentation[];
}

const Presentations: React.FC<PresentationsProps> = ({ schedule }) => {
  return (
    <section id="gigs" className="flex flex-col md:flex-row min-h-[73vh]">
      {/* Left Content - Agenda List */}
      <div className="md:w-1/2 bg-blue-marinho/95 p-6 md:p-12 lg:p-16 flex flex-col relative">

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider border-l-4 border-blue-500 pl-6 inline-block text-white">
            Na Estrada
            <span className="block text-xs md:text-sm text-blue-400 font-bold uppercase tracking-[0.25em] mt-3 font-sans">
              Próximos Shows
            </span>
          </h2>
        </div>

        <div className="space-y-6 overflow-y-auto py-6 pr-3 custom-scrollbar max-h-[600px]">
          {schedule.map((gig, idx) => (
            <div
              key={idx}
              className="flex group bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/5 hover:border-blue-500/30 transition-all duration-300 transform hover:translate-x-1 shadow-lg hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
            >
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center min-w-[5rem] border-r border-white/10 pr-4 mr-4 text-center group-hover:border-blue-500/30 transition-colors duration-300">
                <span className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors duration-300 leading-none">
                  {gig.day}
                </span>
                <span className="text-sm md:text-base uppercase font-bold tracking-widest text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-1">
                  {gig.month}
                </span>
                <span className="text-[10px] text-gray-500 mt-1">{gig.year}</span>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-gray-100 mb-2 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  {gig.venue}
                  {gig.socialLink && (
                    <a
                      href={gig.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                      aria-label={`Instagram do(a) ${gig.venue}`}
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium">
                  <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-gray-300">
                    <MapPin size={14} className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    {gig.location}
                  </div>
                  <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-gray-300">
                    <Clock size={14} className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                    {gig.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block md:w-1/2 relative min-h-[400px] bg-gray-900 overflow-hidden group/image">
        <Image
          src={fotoShow}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover/image:scale-105"
          alt='Integrantes da Blue Marinho em foto com o publico atrás'
        />
        <div className="absolute inset-0 bg-blue-marinho/40 z-10 mix-blend-multiply transition-opacity duration-500 group-hover/image:opacity-85"></div>
        <div className="absolute inset-0 bg-linear-to-t from-blue-marinho via-blue-marinho/40 to-transparent z-20 opacity-70"></div>

        <div className="absolute bottom-12 left-12 z-30 max-w-md transform transition-transform duration-500 group-hover/image:translate-x-1">
          <p className="text-white/90 text-lg italic font-light border-l-2 border-blue-500 pl-4 drop-shadow-md">
            Blue Marinho<br></br> Urca, Rio de Janeiro - Brasil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentations;