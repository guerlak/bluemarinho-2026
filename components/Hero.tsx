import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
        <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("./blue-marinho-fest80.jpg")' }} // Concert vibe placeholder
      >
        {/* Heavy dark blue overlay to match PDF brand color */}
        <div className="absolute inset-0 bg-blue-marinho/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-top from-blue-marinho via-transparent to-blue-marinho/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        {/* Vertical Year Text - Absolute Left/Right hidden on mobile, visible desktop */}

        <div className="w-24 h-1 bg-white mx-auto mb-6 opacity-80"></div>


      </div>
    </section>
  );
};

export default Hero;