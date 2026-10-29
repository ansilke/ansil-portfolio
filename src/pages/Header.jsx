import React, { useState, useEffect } from 'react';

function Header({ currentView, setCurrentView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position for home view
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewName) => {
    setCurrentView(viewName);
    setIsOpen(false);
    // If navigating back to home, scroll to top
    if (viewName === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Home view gets background ONLY when scrolled down. Other views always have background.
  const isHome = currentView === 'home';
  const showBackground = !isHome || isScrolled;

  return (
    <>
      <style>{`
        @keyframes slideDownMobile {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-mobile-dropdown {
          animation: slideDownMobile 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <header className={`fixed top-0 left-0 w-full px-6 lg:px-16 py-4 flex items-center justify-between font-inter select-none z-50 pointer-events-auto transition-all duration-300 ${
        showBackground 
          ? 'bg-[#F8F8F8]/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent backdrop-blur-none'
      }`}>
        {/* Left section: Logo and Nav links */}
        <div className="flex items-center gap-12 lg:gap-16">

          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center cursor-pointer"
          >
          
              <img className='w-15 h-5' src="https://res.cloudinary.com/daadrhhk9/image/upload/v1790097852/image_69_1_wxybpw.png" alt="" />
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-base font-medium transition-colors cursor-pointer bg-transparent border-none ${
                currentView === 'home' ? 'text-zinc-900 font-semibold underline underline-offset-4' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-base font-medium transition-colors cursor-pointer bg-transparent border-none ${
                currentView === 'about' ? 'text-zinc-900 font-semibold underline underline-offset-4' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              about
            </button>

            <button
              onClick={() => handleNavClick('projects')}
              className={`text-base font-medium transition-colors cursor-pointer bg-transparent border-none ${
                currentView === 'projects' ? 'text-zinc-900 font-semibold underline underline-offset-4' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              projects
            </button>
          </nav>
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-base font-medium transition-colors flex items-center gap-0.5 underline underline-offset-6 cursor-pointer bg-transparent border-none ${
              currentView === 'contact' ? 'text-zinc-900 font-semibold' : 'text-zinc-900 hover:text-zinc-600'
            }`}
          >
            contact<span className="text-lg">↗</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="w-9 h-9 bg-black rounded-xl flex flex-col items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer relative z-50"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>

            <span
              className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>

            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full px-6 py-6 bg-[#F8F8F8]/95 backdrop-blur-xl border-b border-zinc-200 shadow-2xl flex flex-col gap-5 md:hidden animate-mobile-dropdown z-40">

            <button
              onClick={() => handleNavClick('home')}
              className="text-left text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors py-1 bg-transparent border-none cursor-pointer"
            >
              home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors py-1 bg-transparent border-none cursor-pointer"
            >
              about
            </button>

            <button
              onClick={() => handleNavClick('projects')}
              className="text-left text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors py-1 bg-transparent border-none cursor-pointer"
            >
              projects
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-lg font-medium text-zinc-900 hover:text-zinc-600 transition-colors py-1 flex items-center gap-1 bg-transparent border-none cursor-pointer"
            >
              contact <span className="text-sm">↗</span>
            </button>

          </div>
        )}
      </header>
    </>
  );
}

export default Header;