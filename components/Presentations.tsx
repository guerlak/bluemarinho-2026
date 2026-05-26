import React from 'react';
import { Presentation } from '../lib/types';
import { MapPin, Clock } from 'lucide-react';
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
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider border-l-4 border-blue-500 pl-6 inline-block text-white">
            Agenda <span className="block text-2xl md:text-3xl text-gray-400 font-light mt-1">Próximas Apresentações</span>
          </h2>
        </div>

        <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar max-h-[600px]">
          {schedule.map((gig, idx) => (
            <div key={idx} className="flex group bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-4 border border-white/5 hover:border-white/20">
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center min-w-[5rem] border-r border-white/10 pr-4 mr-4 text-center">
                <span className="text-3xl md:text-4xl font-black text-white group-hover:text-blue-300 transition-colors leading-none">
                  {gig.day}
                </span>
                <span className="text-sm md:text-base uppercase font-bold tracking-widest text-blue-400 mt-1">
                  {gig.month}
                </span>
                <span className="text-[10px] text-gray-500 mt-1">{gig.year}</span>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center flex-grow">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-gray-100 mb-2">
                  {gig.venue}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-blue-500" />
                    {gig.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-blue-500" />
                    {gig.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block md:w-1/2 relative min-h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-blue-marinho/30 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-t from-blue-marinho to-transparent z-20 opacity-60">
          <Image src={fotoShow} fill alt='Banda performando' />
        </div>

        <div className="absolute bottom-12 left-12 z-30 max-w-md">
          <p className="text-white/80 text-lg italic font-light border-l-2 border-blue-500 pl-4">
            "A marca registrada da banda são suas versões carregadas de energia e personalidade."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentations;