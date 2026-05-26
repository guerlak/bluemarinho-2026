import React from 'react';
import { CONTACT_INFO } from '../lib/constants';
import Image from 'next/image';
import { Instagram, Youtube, Phone, Globe } from 'lucide-react';
import fotoFooter from '../public/paola-footer.jpg'

const Contact: React.FC = () => {
    return (
        <footer id="contact" className="bg-blue-marinho text-white relative overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left: Band Photo */}
                <div className="lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
                    <div className="absolute inset-0 bg-blue-marinho/40 mix-blend-multiply z-10"></div>
                    <Image
                        src={fotoFooter}
                        alt="Band Casual"
                        className="w-full h-full object-cover grayscale"
                        width={300}
                        height={300}
                    />
                </div>

                {/* Right: Contact Info */}
                <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative">
                    {/* Vertical Contato Text */}
                    <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[35%] rotate-90 text-9xl font-black text-white/5 tracking-tighter select-none pointer-events-none">
                        CONTATO
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-black uppercase mb-12 text-white">
                          Traga a Banda
                          <span className="block text-xs md:text-sm text-blue-400 font-bold uppercase tracking-[0.2em] mt-3 font-sans">
                            Booking & Contato Direto
                          </span>
                        </h2>

                        <div className="space-y-8 mb-16">
                            <div className="flex items-center gap-4">
                                <Phone className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <span className="text-xl font-medium">{CONTACT_INFO.phone}</span>
                                    <span className="text-sm text-gray-400">{CONTACT_INFO.contactName}</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 w-full my-6"></div>

                            <h3 className="text-xl font-bold mb-4 text-gray-300">Encontre a gente aqui:</h3>

                            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-blue-400 transition-colors">
                                <Instagram className="w-8 h-8" />
                                <span className="text-lg">{CONTACT_INFO.instagram}</span>
                            </a>

                            <a href={`https://youtube.com`} target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-red-500 transition-colors">
                                <Youtube className="w-8 h-8" />
                                <span className="text-lg">{CONTACT_INFO.youtube}</span>
                            </a>

                            
                        </div>

                        <p className="text-xs text-gray-600 mt-auto">
                            © {new Date().getFullYear()} Blue Marinho. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;