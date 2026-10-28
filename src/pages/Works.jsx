
import React, { useState } from "react";

function Works() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Architect Website",
      category: "Arch.",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1790491962/ChatGPT_Image_Sep_27_2026_12_21_16_PM_cven6v.png",
      url: "https://arch-delta-ten.vercel.app/",
    },
    {
      id: 2,
      title: "Starbucks Redesign",
      category: "Starbucks",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1790492343/ChatGPT_Image_Sep_27_2026_12_28_40_PM_tdfhus.png",
      url: "",
    },
    {
      id: 3,
      title: "e-commerce Honey Website",
      category: "Pure.",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1790492607/ChatGPT_Image_Sep_27_2026_12_33_07_PM_cu1qvu.png",
      url: "",
    },
    {
      id: 4,
      title: "Grade Application",
      category: "App Design",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1790493605/ChatGPT_Image_Sep_27_2026_12_49_41_PM_nk7jdb.png",
      url: "",
    },
    {
      id: 5,
      title: "To Do App",
      category: "HTML & CSS",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1791396006/Moody_My_TODO_App_Workspace_gc7iya.png",
      url: "http://myy-to-do.netlify.app/",
    },
    {
      id: 6,
      title: "Furniture Website",
      category: "Your Space",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1791400031/Minimal_Workspace_with_Furniture_Website_x7u1ie.png",
      url: "https://yourrspace.netlify.app/",
    },
    {
      id: 7,
      title: "Pickle Website",
      category: "KE Taste",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1791401193/Late-Night_Pickle_Website_Workspace_qv6upl.png",
      url: "https://ke-taste.netlify.app/",
    },
    {
      id: 8,
      title: "Cloud Storage Manager",
      category: "Web Application",
      image:
        "https://res.cloudinary.com/daadrhhk9/image/upload/v1790440112/image_32_iijzut.png",
      url: "",
    },
  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 4);

  return (
    <section
      className="
        relative w-full bg-[#F8F8F8] text-zinc-900 font-inter
        px-[3.4vw] pb-[3.4vw]
        pt-[125px]
        sm:px-8 sm:pt-[110px] sm:pb-8
        lg:px-10 lg:pt-[90px] lg:pb-1
        xl:px-8 min-h-[100svh]
      "
    >
      {/* INTRO SECTION */}
      <div
        className="
          relative h-[40svh] min-h-[320px] max-h-[430px]
          sm:h-[36svh] sm:min-h-[300px] sm:max-h-none
          lg:h-[355px] lg:min-h-0
        "
      >
        {/* LEFT: WORKS TITLE */}
        <div className="absolute left-0 top-1">
          <h1
            className="
              text-6xl sm:text-7xl lg:text-[130px]
              font-light tracking-tight leading-none
            "
          >
            Works'
          </h1>

          <p
            className="
              mt-4 text-[11px] sm:text-sm lg:text-base
              leading-relaxed text-[#555b5b] whitespace-nowrap
            "
          >
            -Selected projects and creative developments.
          </p>
        </div>

        {/* RIGHT: DESCRIPTION + SEE MORE */}
        <div
          className="
            absolute right-0 top-[42%]
            flex flex-col items-end text-right
            sm:top-[40%] lg:top-[165px]
          "
        >
          <p
            className="
              w-[min(72vw,250px)]
              text-[12px] leading-[1.4] text-[#292d2d]
              sm:w-[min(65vw,300px)] sm:text-sm
              lg:w-[380px] lg:text-lg
            "
          >
            A curated collection of web applications, design
            systems, and digital experiences crafted with
            precision and clean aesthetics.
          </p>

          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="
              mt-5 sm:mt-7 lg:mt-8
              w-[150px] sm:w-[180px] lg:w-[200px]
              h-[42px] sm:h-[46px] lg:h-[50px]
              rounded-full bg-[#202323] text-white
              text-xs sm:text-sm font-medium tracking-wide
              transition-all duration-300
              hover:bg-black hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            {showAll ? "show less" : "see more"}
          </button>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div
        className="
          grid grid-cols-2 gap-[2.2vw]
          sm:gap-5 lg:grid-cols-4 lg:gap-6
        "
      >
        {visibleProjects.map((project, index) => {
          const projectCard = (
            <article
              className="
                group relative aspect-[0.95/1]
                sm:aspect-[0.9/1] lg:aspect-[0.9/1]
                overflow-hidden bg-[#eeeeee]
                cursor-pointer
              "
            >
              <img
                src={project.image}
                alt={project.title}
                loading={index < 4 ? "eager" : "lazy"}
                className="
                  absolute inset-0 h-full w-full object-cover
                  transition-transform duration-700 ease-out
                  lg:group-hover:scale-105
                "
              />

              {/* DESKTOP HOVER DETAILS */}
              <div
                className="
                  absolute inset-0 hidden lg:flex
                  flex-col justify-end
                  bg-gradient-to-t
                  from-black/70 via-black/10 to-transparent
                  p-5 opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                  pointer-events-none
                "
              >
                <p className="mb-1 text-xs text-white/75">
                  {project.category}
                </p>

                <h2 className="text-lg font-medium text-white leading-tight">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm text-white">
                  View project ↗
                </p>
              </div>

              {/* MOBILE DETAILS */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  flex flex-col justify-end
                  bg-gradient-to-t from-black/80 to-transparent
                  p-2.5 lg:hidden
                "
              >
                <p className="text-[10px] text-white/80">
                  {project.category}
                </p>

                <h2 className="text-xs font-medium text-white leading-tight">
                  {project.title}
                </h2>

                <p className="mt-1 text-[10px] text-white">
                  View project ↗
                </p>
              </div>
            </article>
          );

          return project.url ? (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} website`}
              className="
                block outline-none
                focus-visible:ring-2 focus-visible:ring-black
              "
            >
              {projectCard}
            </a>
          ) : (
            <div
              key={project.id}
              className="block"
            >
              {projectCard}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Works;
