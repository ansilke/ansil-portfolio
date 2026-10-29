
import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimatedSkills, setHasAnimatedSkills] = useState(false);
  const [displayValues, setDisplayValues] = useState({});
  const sectionRef = useRef(null);

  const profileImage =
    "https://res.cloudinary.com/daadrhhk9/image/upload/v1793278500/Group_258_fl1vfm.png";

  const rawSkillsList = [
    { name: "JavaScript", value: 95 },
    { name: "Html", value: 98 },
    { name: "Figma", value: 92 },
    { name: "Css", value: 97 },
    { name: "React", value: 95 },
    { name: "MONGO DB", value: 95 },
    { name: "EXPRESS JS", value: 93 },
    { name: "GITHUB", value: 94 },
    { name: "BOOTSTRAP", value: 97 },
    { name: "RESPONSIVE DESIGN", value: 98 },
    { name: "NODE JS", value: 95 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeTab !== "skills") return;

    if (hasAnimatedSkills) {
      const finalValues = {};
      rawSkillsList.forEach((skill, index) => {
        finalValues[index] = skill.value;
      });
      setDisplayValues(finalValues);
      return;
    }

    let currentStep = 0;
    const steps = 35;
    const duration = 1800;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      currentStep += 1;

      const progress = Math.min(currentStep / steps, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const newValues = {};

      rawSkillsList.forEach((skill, index) => {
        newValues[index] = Math.round(skill.value * easedProgress);
      });

      setDisplayValues(newValues);

      if (currentStep >= steps) {
        clearInterval(timer);

        const finalValues = {};
        rawSkillsList.forEach((skill, index) => {
          finalValues[index] = skill.value;
        });

        setDisplayValues(finalValues);
        setHasAnimatedSkills(true);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [activeTab, hasAnimatedSkills]);

  const handleTabSwitch = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setAnimationKey((previous) => previous + 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="about-section w-full bg-[#F8F8F8] text-neutral-900 font-['Inter',sans-serif]"
    >
      <style>{`
        .about-section {
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-layout {
          width: 100%;
          max-width: 1600px;
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.5fr);
          align-items: center;
          gap: clamp(24px, 3vw, 56px);
        }

        .about-photo {
          width: 100%;
          max-width: 430px;
          height: clamp(490px, 67vh, 610px);
        }

        .about-photo-frame {
          width: 100%;
          height: 100%;
        }

        .about-copy {
          min-width: 0;
        }

        .about-copy p {
          overflow-wrap: anywhere;
        }

        @keyframes aboutRise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .about-rise {
          animation: aboutRise 650ms cubic-bezier(.16, 1, .3, 1) both;
        }

        @media (min-width: 1024px) {
          .about-section {
            height: 100%;
            min-height: 0;
            overflow: hidden;
          }

          .about-layout {
            height: 100%;
            min-height: 0;
            padding: 10px 0;
          }

          .about-photo {
            height: min(69vh, 600px);
            min-height: 440px;
          }

          .about-copy {
            height: 100%;
            max-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
          }

          .about-description {
            font-size: clamp(14px, 1.05vw, 16px);
            line-height: 1.6;
          }

          .about-history {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(16px, 1.7vw, 28px);
          }

          .about-history p {
            font-size: clamp(12px, .88vw, 14px);
            line-height: 1.5;
          }
        }

        @media (max-width: 1023px) {
          .about-section {
            display: block;
            min-height: 100%;
            overflow: visible;
          }

          .about-layout {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 0 0 28px;
          }

          .about-photo-column {
            order: -1;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 12px 16px 8px;
          }

          .about-photo {
            width: min(82vw, 390px);
            height: clamp(400px, 90vw, 430px);
          }

          .about-copy {
            width: 100%;
            overflow: visible;
            padding: 0 4px;
          }

          .about-history {
            display: grid;
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .about-description {
            font-size: 15px;
            line-height: 1.75;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .about-layout {
            gap: 34px;
          }

          .about-photo {
            width: 300px;
            height: 340px;
          }

          .about-history {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }
      `}</style>

      <div className="about-layout">
        {/* Photo: first on mobile, left on desktop */}
        <div className="about-photo-column relative flex justify-center lg:justify-start">
          <div className="about-photo relative">
            

            <div
              className={`absolute -bottom-4 -left-4 z-20 grid grid-cols-6 gap-1.5 transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-60"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  className="h-1 w-1 rounded-full bg-neutral-500"
                />
              ))}
            </div>

            <div
              className={`about-photo-frame relative z-10 rounded-sm bg-neutral-500 p-1 shadow-xl transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <img
                src={profileImage}
                alt="Muhammed Ansil"
                className="h-full w-full rounded-sm object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="about-copy">
          <div
            key={animationKey}
            className={`about-rise flex min-h-0 flex-1 flex-col ${
              activeTab === "skills" ? "justify-center" : "justify-center"
            }`}
          >
            {activeTab === "about" ? (
              <div className="space-y-4 lg:space-y-5">
                <div>
                  <h2 className="mb-3 text-4xl font-light tracking-tight text-neutral-900 sm:text-5xl lg:mb-14 lg:text-9xl">
                    My self'
                  </h2>

                  <p className="about-description text-neutral-700">
                    Hi, I'm{" "}
                    <span className="font-semibold italic text-neutral-900">
                      muhemmed ansil
                    </span>
                    , a passionate Full Stack Developer specializing in the
                    MERN stack (MongoDB, Express.js, React.js, and Node.js).
                    I'm a fresher who loves turning ideas into real-world web
                    applications.
                  </p>

                  <p className="about-description mt-3 text-neutral-700">
                    During my studies, I worked on several CRUD and
                    mini-projects, which helped me gain hands-on experience in
                    frontend and backend development. I enjoy building clean,
                    responsive, and user-friendly web interfaces while
                    ensuring efficient backend performance.
                  </p>
                </div>

                <div className="about-history border-t border-neutral-300 pt-3 lg:pt-4">
                  {/* Experience */}
                  <div className="min-w-0">
                    <h3 className="mb-2 text-sm font-bold text-neutral-900 sm:text-base">
                      Experience - (2024-2025)
                    </h3>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">
                      FULL STACK DEVELOPER - MERN STACK
                    </p>

                    <p className="text-sm leading-relaxed text-neutral-700">
                      Developed CRUD-based web applications using the MERN
                      stack. Completed academic projects using React.js,
                      Node.js, and MongoDB. Designed responsive user
                      interfaces with React and Bootstrap, implemented
                      RESTful APIs, and developed a personal website.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="min-w-0 border-t border-neutral-300 pt-3 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                    <h3 className="mb-2 text-sm font-bold text-neutral-900 sm:text-base">
                      Education - (2024 sept - 2025 sept)
                    </h3>

                    <h4 className="mb-1 text-sm font-semibold text-neutral-900">
                      Aviv Digital
                    </h4>

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">
                      FULL STACK DEVELOPER - MERN STACK
                    </p>

                    <p className="text-sm leading-relaxed text-neutral-700">
                      I'm always eager to learn new technologies, improve my
                      skills, and take on new challenges. My goal is to
                      contribute to impactful projects and grow as a
                      developer in a creative, growth-oriented tech team.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-2">
                <div className="mb-6">
                  <h2 className="mb-3 text-4xl font-light tracking-tight text-neutral-800 sm:text-5xl lg:mb-14 lg:text-9xl">
                    Skills'
                  </h2>

                  <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                    Here is an overview of my technical stack, tools, and
                    proficiencies acquired through hands-on development and
                    projects.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-7">
                  {rawSkillsList.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="transition-all duration-500"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transitionDelay: `${index * 35}ms`,
                      }}
                    >
                      <span className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-[clamp(28px,2.5vw,40px)]">
                        {displayValues[index] ?? 0}%
                      </span>

                      <span className="mt-2 block text-xs font-medium text-neutral-800 sm:text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="mt-5 flex shrink-0 items-center gap-3 border-t border-neutral-300 pt-4 lg:mt-4 lg:pt-3">
            <button
              type="button"
              onClick={() => handleTabSwitch("about")}
              className={`h-[42px] w-[125px] rounded-full text-xs font-medium shadow-sm transition-all duration-300 active:scale-95 ${
                activeTab === "about"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              About Me
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch("skills")}
              className={`h-[42px] w-[107px] rounded-full text-xs font-medium shadow-sm transition-all duration-300 active:scale-95 ${
                activeTab === "skills"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              Skills
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
