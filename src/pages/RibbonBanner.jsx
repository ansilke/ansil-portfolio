import React from 'react';

function RibbonBanner() {
  const items = [
    "",
    
  ];

  const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#111111] text-white py-0.5 overflow-hidden select-none   relative flex items-center">
      


      {}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      {}
      <div className="animate-infinite-marquee flex items-center gap-8">
        {repeatedItems.map((text, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            {/* White Stylish Bold Typography */}
            <span className="text-l sm:text-l md:text-l font-bold tracking-widest uppercase font-sans text-white/95">
              {text}
            </span>

            
          </div>
        ))}
      </div>

    </div>
  );
}

export default RibbonBanner;