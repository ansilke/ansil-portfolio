import React, { useState, useEffect, useRef } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimatedSkills, setHasAnimatedSkills] = useState(false);
  const sectionRef = useRef(null);

  // Corrected and valid profile image link
  const profileImage = "https://res.cloudinary.com/daadrhhk9/image/upload/v1793213222/Group_258_hgpp4c.png";

  const rawSkillsList = [
    { name: 'JavaScript', value: 95 },
    { name: 'Html', value: 98 },
    { name: 'Figma', value: 92 },
    { name: 'Css', value: 97 },
    { name: 'React', value: 95 },
    { name: 'MONGO DB', value: 95 },
    { name: 'EXPRESS JS', value: 93 },
    { name: 'GITHUB', value: 94 },
    { name: 'BOOTSTRAP', value: 97 },
    { name: 'RESPONSIVE DESIGN', value: 98 },
    { name: 'NODE JS', value: 95 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [displayValues, setDisplayValues] = useState(
    rawSkillsList.reduce((acc, skill, idx) => ({ ...acc, [idx]: 0 }), {})
  );

  useEffect(() => {
    if (isVisible && activeTab === 'skills' && !hasAnimatedSkills) {
      const duration = 3300; 
      const steps = 50;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const newValues = {};
        rawSkillsList.forEach((skill, idx) => {
          newValues[idx] = Math.round(skill.value * easeProgress);
        });
        setDisplayValues(newValues);

        if (currentStep >= steps) {
          clearInterval(timer);
          const finalValues = {};
          rawSkillsList.forEach((skill, idx) => {
            finalValues[idx] = skill.value;
          });
          setDisplayValues(finalValues);
          setHasAnimatedSkills(true);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else if (activeTab === 'skills' && hasAnimatedSkills) {
      const finalValues = {};
      rawSkillsList.forEach((skill, idx) => {
        finalValues[idx] = skill.value;
      });
      setDisplayValues(finalValues);
    }
  }, [isVisible, activeTab, hasAnimatedSkills]);

  const handleTabSwitch = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setAnimationKey(prev => prev + 1);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-full bg-[#F8F8F8] text-neutral-900 flex items-center justify-center font-['Inter',sans-serif]"
    >
      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Right side content */}
        <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col justify-between py-1 px-2 sm:px-6 lg:px-0">
          
          <div className="space-y-1 my-auto">
            {activeTab === 'about' ? (
              <div key={`about-${animationKey}`} className="space-y-7">
                <div>
                  <h2 className={`text-3xl sm:text-4xl lg:text-7xl font-light tracking-tight text-neutral-900 font-['Inter'] transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    My self'
                  </h2>
                </div>

                <p className={`text-[15px] sm:text-[15px] leading-relaxed text-neutral-700 font-normal transition-all duration-700 ease-out delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  Hi, I'm <span className="font-semibold italic text-neutral-900">muhemmed ansil</span>, a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I'm a fresher who loves turning ideas into real-world web applications.
                </p>

                <p className={`text-[15px] sm:text-[15px] leading-relaxed text-neutral-700 font-normal transition-all duration-700 ease-out delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  During my studies, I worked on several CRUD and mini-projects, which helped me gain hands-on experience in both frontend and backend development. I enjoy building clean, responsive, and user-friendly web interfaces while ensuring efficient backend performance.
                </p>

                <div className={`space-y-1 pt-2 border-t border-neutral-300 transition-all duration-700 ease-out delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-900">Experience - (2024-2025)</h3>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500">FULL STACK DEVELOPER - MERN STACK</p>
                  <p className="text-[15px] sm:text-[15px] text-neutral-700 leading-relaxed font-normal">
                    Developed CRUD-based web applications using the MERN stack, Completed academic projects using React.js, Node.js, and MongoDB, Designed responsive user interfaces with React and Bootstrap, Implemented RESTful APIs and handled database operations with MongoDB, Developed Personal Website
                  </p>
                </div>

                <div className={`space-y-1 pt-2 border-t border-neutral-300 transition-all duration-700 ease-out delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-900">Education - (2024 sept - 2025 sept)</h3>
                  <h4 className="text-[12px] sm:text-[13px] font-semibold text-neutral-900">Aviv Digital</h4>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-500">FULL STACK DEVELOPER - MERN STACK</p>
                  <p className="text-[15px] sm:text-[15px] text-neutral-700 leading-relaxed font-normal">
                    I'm always eager to learn new technologies, improve my skills, and take on new challenges that help me grow as a developer. My goal is to contribute to impactful projects and become part of a creative, growth-oriented tech team.
                  </p>
                </div>
              </div>
            ) : (
              <div key={`skills-${animationKey}`} className="space-y-19 transition-all duration-500 ease-out">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-7xl mb-4 font-light tracking-tight text-neutral-800 transition-all duration-700 ease-out">
                    Skills'
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-neutral-700 leading-relaxed font-normal">
                    Here is an overview of my technical stack, tools, and proficiencies <br /> acquired through hands-on development and projects.
                  </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-10 pt-1 mb-12">
                  {rawSkillsList.map((skill, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col transition-all duration-700 ease-out`}
                      style={{ 
                        opacity: isVisible ? 1 : 0, 
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        transitionDelay: hasAnimatedSkills ? '0ms' : `${index * 40}ms` 
                      }}
                    >
                      <span className="text-2xl sm:text-4xl font-medium text-neutral-900 tracking-tight transition-all duration-75">
                        {displayValues[index] !== undefined ? displayValues[index] : 0}%
                      </span>
                      <span className="text-xs sm:text-sm mt-3 font-medium text-neutral-800">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons Tab Switcher */}
          <div className="flex items-center gap-4 pt-3 mt-3 border-t border-neutral-300 flex-shrink-0">
            <button
              onClick={() => handleTabSwitch('about')}
              className={`w-[125px] h-[42px] text-xs sm:text-xs font-medium hover:cursor-pointer font-['Inter'] rounded-4xl transition-all duration-300 shadow-sm transform active:scale-95 ${
                activeTab === 'about'
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => handleTabSwitch('skills')}
              className={`w-[107px] h-[42px] text-xs sm:text-xs font-medium hover:cursor-pointer font-['Inter'] rounded-4xl transition-all duration-300 shadow-sm transform active:scale-95 ${
                activeTab === 'skills'
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              Skills
            </button>
          </div>

        </div>

        {/* Left side image container */}
        <div className="lg:col-span-4 order-2 lg:order-1 relative flex justify-center lg:justify-start px-4 sm:px-0 py-6 lg:py-0">
          <div className={`absolute w-[220px] h-[320px] sm:w-[280px] sm:h-[380px] lg:w-[360px] lg:h-[480px] xl:w-[390px] xl:h-[520px] bg-neutral-900 -top-2 -left-2 sm:-top-3 sm:-left-3 rounded-sm shadow-md transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}></div>

          <div className={`absolute -bottom-4 -left-4 grid grid-cols-6 gap-1.5 z-20 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-neutral-500 rounded-full"></div>
            ))}
          </div>
          
          <div className={`relative w-[220px] h-[320px] sm:w-[280px] sm:h-[380px] lg:w-[360px] lg:h-[480px] xl:w-[390px] xl:h-[520px] bg-white p-1 shadow-xl rounded-sm z-10 transition-all duration-1000 delay-150 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}>
            <img 
              src={profileImage} 
              alt="Muhemmed Ansil" 
              className="w-full h-full grayscale object-cover rounded-sm"
            />
          </div>
        </div>

      </div>
    </section>
  );
}