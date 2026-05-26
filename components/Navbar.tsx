"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from "../public/Blue-Marinho-Logo.png"
import { CONTACT_INFO } from '../lib/constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "members", "repertoire", "audiovisual", "gigs"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Trigger when the section occupies the focus area
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    // Handle being at the very top of the page (Hero/Home section)
    const handleScrollTop = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  const navLinks = [
    { name: "A Banda", href: "#about" },
    { name: "Integrantes", href: "#members" },
    { name: "Repertório", href: "#repertoire" },
    { name: "Audiovisual", href: "#audiovisual" },
    { name: "Agenda", href: "#gigs" },
  ];

  const whatsappLink = `https://wa.me/55${CONTACT_INFO.phone.replace(/\D/g, '')}`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? 'bg-blue-marinho/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Image */}
        <a href="#" className="block w-48 transition-transform hover:scale-105">
          <img src="/Blue-Marinho-Logo.png" alt="Blue Marinho" className="w-full h-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm uppercase tracking-widest transition-all duration-300 font-sans font-medium py-1 ${
                  isActive 
                    ? "text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)] font-semibold" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-300 rounded-full transition-all duration-300 origin-center ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
          >
            <MessageCircle size={18} />
            Contrate Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-marinho border-t border-white/10 p-4 flex flex-col space-y-4 shadow-xl text-white">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-center text-lg uppercase tracking-widest py-2.5 transition-all duration-300 rounded ${
                  isActive
                    ? "bg-white/10 text-blue-300 font-semibold"
                    : "text-white/85 hover:bg-white/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white py-3 rounded-full text-center text-lg font-bold uppercase tracking-widest flex items-center justify-center gap-2 mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MessageCircle size={20} />
            Contrate Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;