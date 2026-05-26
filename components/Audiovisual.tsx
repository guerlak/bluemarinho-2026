import React from 'react';
import { Play } from 'lucide-react';
import { VIDEO_LINKS } from '../lib/constants';

const Audiovisual: React.FC = () => {
  return (
    <section id="audiovisual" className="py-24 bg-zinc-900 relative">
      {/* Background Grayscale Image */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <img src="https://picsum.photos/id/452/1920/1080" alt="background" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-serif font-bold uppercase mb-4 text-white">
            Ao Vivo
          </h2>
          <p className="text-xs md:text-sm text-blue-400 font-bold uppercase tracking-[0.3em] mt-3 font-sans">
            Nossa essência capturada em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEO_LINKS.map((video, index) => (
            <a href={video.url} target="_blank" key={index} className="flex items-center space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-lg transition-all">
              {/* Play Button Circle */}
              <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-blue-marinho flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play fill="currentColor" size={32} className="ml-1" color='black' />
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold uppercase leading-none group-hover:text-blue-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mt-1">{video.artist}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiovisual;