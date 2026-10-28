
import React, { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import RibbonBanner from "./RibbonBanner";
import Works from "./Works";
import Contact from "./Contact";

const LOGO_URL =
  "https://res.cloudinary.com/daadrhhk9/image/upload/v1792823909/Bold_White_Ainsil_Logo_on_Transparent_Background_ljxvbg.png";

const PROFILE_IMAGE =
  "https://res.cloudinary.com/daadrhhk9/image/upload/v1789981660/FCA204F0-7780-4603-88A6-8B1F3CD2B871_pufgqd.png";

function Herosection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const [count20, setCount20] = useState(0);
  const [count10, setCount10] = useState(0);
  const [introStage, setIntroStage] = useState("white");
  const [loadingProgress, setLoadingProgress] = useState(0);

  const BOUNCE_DURATION = 4800;

  // Preload images before starting the intro.
  useEffect(() => {
    let cancelled = false;
    const timers = [];

    const waitForImage = (src) =>
      new Promise((resolve) => {
        const image = new Image();

        image.onload = resolve;
        image.onerror = resolve;
        image.src = src;

        if (image.complete) resolve();
      });

    async function startIntro() {
      await Promise.all([
        waitForImage(LOGO_URL),
        waitForImage(PROFILE_IMAGE),
        document.fonts?.ready ?? Promise.resolve(),
      ]);

      if (cancelled) return;

      setIsLoaded(true);
      setLoadingProgress(0);
      setIntroStage("bounce");

      timers.push(
        setTimeout(() => {
          setLoadingProgress(100);
          setIntroStage("expand");
        }, BOUNCE_DURATION),

        setTimeout(() => {
          setIntroStage("logo");
        }, BOUNCE_DURATION + 1100),

        setTimeout(() => {
          setIntroStage("exit");
        }, BOUNCE_DURATION + 1850),

        setTimeout(() => {
          setIntroStage("done");
        }, BOUNCE_DURATION + 2500)
      );
    }

    startIntro();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  // Loading percentage synced to the bounce animation.
  useEffect(() => {
    if (introStage !== "bounce") return;

    let frameId;
    let startTime = null;

    const updateProgress = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / BOUNCE_DURATION, 1);

      setLoadingProgress(Math.round(progress * 100));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    setLoadingProgress(0);
    frameId = window.requestAnimationFrame(updateProgress);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [introStage]);

  // Original hero counters.
  useEffect(() => {
    let startTimestamp = null;
    let animationFrame;
    const duration = 600;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );

      setCount20(Math.round(progress * 20));
      setCount10(Math.round(progress * 10));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount20(20);
        setCount10(10);
      }
    };

    const countTimeout = setTimeout(() => {
      animationFrame = window.requestAnimationFrame(step);
    }, 150);

    return () => {
      clearTimeout(countTimeout);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-[#F8F8F8] font-inter text-zinc-900 selection:bg-zinc-200 lg:h-[100dvh]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Italianno&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* TRUST THE PROCESS TYPOGRAPHY */

        .intro-trust-copy {
          position: absolute;
          top: clamp(24px, 4.3vh, 42px);
          left: clamp(24px, 3.1vw, 54px);
          z-index: 10000;
          color: #000;
          font-family: 'Inter', sans-serif;
          font-size: clamp(58px, 6.7vw, 112px);
          font-weight: 300;
          letter-spacing: -0.065em;
          line-height: 1.18;
          user-select: none;
          pointer-events: none;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .intro-trust-first-line {
          display: flex;
          align-items: baseline;
          gap: 0.17em;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
        }

        /* Keep "the" in its original cursive font */

        .intro-trust-script {
          position: relative;
          top: 0.025em;
          font-family: 'Italianno', cursive;
          font-size: 1.28em;
          font-style: normal;
          font-weight: 400;
          letter-spacing: -0.045em;
          line-height: 0.8;
        }

        .intro-trust-second-line {
          margin-top: 0.22em;
          font-family: 'Inter', sans-serif;
          font-size: 1em;
          font-weight: 300;
          font-style: normal;
          letter-spacing: -0.055em;
          line-height: 1;
        }

        @media (min-width: 1600px) {
          .intro-trust-copy {
            font-size: 112px;
          }
        }

        @media (max-width: 1023px) {
          .intro-trust-copy {
            top: clamp(25px, 5vh, 48px);
            left: clamp(24px, 5vw, 48px);
            font-size: clamp(58px, 9vw, 90px);
          }
        }

        @media (max-width: 640px) {
          .intro-trust-copy {
            top: 28px;
            left: 22px;
            font-size: clamp(49px, 11.5vw, 72px);
            letter-spacing: -0.065em;
          }

          .intro-trust-script {
            font-size: 1.28em;
          }

          .intro-trust-second-line {
            margin-top: 0.24em;
          }
        }

        @keyframes slideUpOverlay {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up-overlay {
          animation: slideUpOverlay 1s cubic-bezier(.25,1,.5,1) forwards;
        }

        @keyframes smoothFadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-smooth-entrance {
          opacity: 0;
          animation: smoothFadeInUp 1s cubic-bezier(.16,1,.3,1) forwards;
        }

        @keyframes scrollArrow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(7px);
          }
        }

        .animate-scroll-arrow {
          animation: scrollArrow 1.5s ease-in-out infinite;
        }

        /* ORIGINAL BOUNCING BALL ANIMATION */

        @keyframes introBounce {
          0% {
            transform: translate(-50%, 0) scale(1, 1);
            animation-timing-function: cubic-bezier(.2,.7,.3,1);
          }

          4.17% {
            transform: translate(-50%, 0) scale(1.08,.92);
            animation-timing-function: cubic-bezier(.2,.65,.35,1);
          }

          19.17% {
            transform: translate(-50%, -43vh) scale(.99,1.01);
            animation-timing-function: cubic-bezier(.35,0,.75,.4);
          }

          32.5% {
            transform: translate(-50%, 0) scale(1.09,.91);
            animation-timing-function: cubic-bezier(.2,.7,.3,1);
          }

          35.83% {
            transform: translate(-50%, 0) scale(1,1);
            animation-timing-function: cubic-bezier(.2,.65,.35,1);
          }

          49.17% {
            transform: translate(-50%, -23vh) scale(.995,1.005);
            animation-timing-function: cubic-bezier(.35,0,.75,.4);
          }

          60.83% {
            transform: translate(-50%, 0) scale(1.055,.945);
            animation-timing-function: cubic-bezier(.2,.7,.3,1);
          }

          64.17% {
            transform: translate(-50%, 0) scale(1,1);
            animation-timing-function: cubic-bezier(.2,.65,.35,1);
          }

          72.5% {
            transform: translate(-50%, -7vh) scale(1,1);
            animation-timing-function: cubic-bezier(.35,0,.75,.4);
          }

          78.33% {
            transform: translate(-50%, 0) scale(1.025,.975);
            animation-timing-function: cubic-bezier(.2,.7,.3,1);
          }

          80.83% {
            transform: translate(-50%, 0) scale(1,1);
            animation-timing-function: cubic-bezier(.22,.61,.36,1);
          }

          100% {
            transform: translate(-50%, calc(-50dvh + 56px)) scale(1,1);
          }
        }

        @keyframes circleExpand {
          from {
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            transform: translate(-50%, -50%) scale(100);
          }
        }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.94);
          }
          75% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.015);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes shutterExit {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(0, -100%, 0);
          }
        }

        .intro-shutter-exit {
          animation: shutterExit .65s cubic-bezier(.76,0,.24,1) both;
          will-change: transform;
        }

        .intro-circle {
          width: 64px;
          height: 64px;
          transform: translate(-50%, -50%) scale(1);
          transform-origin: center center;
          will-change: transform;
          backface-visibility: hidden;
        }

        .intro-circle-expand {
          animation: circleExpand 1.2s cubic-bezier(.65,0,.35,1) both;
        }

        .intro-logo {
          position: fixed;
          left: 50%;
          top: 50%;
          z-index: 10003;
          width: min(42vw, 300px);
          max-height: 30vh;
          object-fit: contain;
          transform: translate(-50%, -50%);
          transform-origin: center center;
          backface-visibility: hidden;
          will-change: opacity, transform;
        }

        .intro-logo-reveal {
          opacity: 0;
          animation: logoReveal .55s cubic-bezier(.2,.75,.25,1) .35s both;
        }

        /* LOADING PERCENTAGE — NO INDEPENDENT FADE */

        .intro-loading-readout {
          position: fixed;
          right: clamp(22px, 5vw, 76px);
          bottom: clamp(20px, 4vh, 52px);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: #111111;
          font-variant-numeric: tabular-nums;
          pointer-events: none;
          user-select: none;
        }

        .intro-loading-number {
          font-size: clamp(58px, 8.6vw, 144px);
          font-weight: 300;
          line-height: .86;
          letter-spacing: -.075em;
        }

        .intro-loading-caption {
          margin-top: 13px;
          font-size: clamp(9px, .8vw, 12px);
          font-weight: 500;
          letter-spacing: .28em;
          text-transform: uppercase;
          opacity: .65;
        }

        @media (max-width: 640px) {
          .intro-loading-readout {
            right: 22px;
            bottom: 26px;
          }

          .intro-loading-number {
            font-size: clamp(54px, 15vw, 88px);
          }

          .intro-loading-caption {
            margin-top: 9px;
            font-size: 9px;
            letter-spacing: .22em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-arrow {
            animation: none;
          }
        }
      `}</style>

      {/* LOADING INTRO */}
      {introStage !== "done" && (
        <div
          className={`
            fixed inset-0 z-[9999] overflow-hidden
            ${
              introStage === "white" || introStage === "bounce"
                ? "bg-white"
                : introStage === "expand"
                  ? "bg-white"
                  : "bg-black"
            }
            ${introStage === "exit" ? "intro-shutter-exit" : ""}
          `}
          aria-hidden="true"
        >
          {/* TRUST THE PROCESS — STAYS UNTIL THE CIRCLE COVERS IT */}

          {["white", "bounce", "expand"].includes(introStage) && (
            <div className="intro-trust-copy">
              <div className="intro-trust-first-line">
                <span>trust</span>
                <span className="intro-trust-script">the</span>
              </div>

              <div className="intro-trust-second-line">
                process.
              </div>
            </div>
          )}

          {/* BOUNCING BALL — CONTINUES DURING EXPANSION */}

          {["bounce", "expand"].includes(introStage) && (
            <div
              className="
                absolute bottom-6 left-1/2
                h-16 w-16 lg:h-24 lg:w-24
                rounded-full bg-black
                will-change-transform [backface-visibility:hidden]
              "
              style={{
                zIndex: 10000,
                animation: `introBounce ${BOUNCE_DURATION}ms linear both`,
              }}
            />
          )}

          {/* LOADING PERCENTAGE — STAYS UNTIL THE CIRCLE COVERS IT */}

          {["bounce", "expand"].includes(introStage) && (
            <div
              className="intro-loading-readout"
              style={{ zIndex: 10000 }}
            >
              <span className="intro-loading-number">
                {loadingProgress}
                <span className="text-[.92em] tracking-normal">%</span>
              </span>

              <span className="intro-loading-caption">
                Loading
              </span>
            </div>
          )}

          {/* EXPANDING CIRCLE — COVERS TEXT AND BALL */}

          {introStage === "expand" && (
            <div
              className="
                absolute left-1/2 top-1/2
                intro-circle rounded-full bg-black
                intro-circle-expand
              "
              style={{ zIndex: 10002 }}
            />
          )}

          {/* CENTERED LOGO — ABOVE THE CIRCLE */}

          {["expand", "logo", "exit"].includes(introStage) && (
            <img
              key="intro-logo"
              src={LOGO_URL}
              alt="Ansil Logo"
              draggable="false"
              className={`intro-logo ${
                introStage === "expand" ? "intro-logo-reveal" : ""
              }`}
              style={{
                opacity: introStage === "expand" ? undefined : 1,
                animation:
                  introStage === "expand" ? undefined : "none",
              }}
            />
          )}
        </div>
      )}

      {/* HEADER */}

      <div className="fixed left-0 right-0 top-0 z-50 bg-[#F8F8F8]/80 backdrop-blur-md">
        <Header
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      </div>

      {/* MAIN CONTENT */}

      <div className="relative h-full w-full flex-1 overflow-hidden pt-20 lg:pt-24">
        {/* HOME */}

        {currentView === "home" && (
          <div className="absolute inset-0 z-20 flex h-full w-full flex-col justify-between overflow-y-auto bg-[#F8F8F8] pt-20 animate-slide-up-overlay lg:pt-24">
            <div className="relative flex h-full flex-col justify-between">

              {/* MOBILE + IPAD HERO */}

              <div className="relative flex w-full flex-1 flex-col overflow-hidden px-6 pb-0 pt-4 font-inter lg:hidden">
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center animate-smooth-entrance"
                  style={{ animationDelay: "0.3s" }}
                >
                  <img
                    src={PROFILE_IMAGE}
                    alt="Muhammed Ansil"
                    className={`
                      h-[62vh] w-auto select-none object-contain
                      object-bottom drop-shadow-sm
                      transition-all duration-[1200ms] ease-out
                      sm:h-[68vh]
                      ${
                        isLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }
                    `}
                  />
                </div>

                <div
                  className="relative z-20 flex shrink-0 select-none flex-col items-start pt-10 animate-smooth-entrance"
                  style={{ animationDelay: "0.1s" }}
                >
                  <h1 className="text-6xl font-normal leading-none tracking-tight text-zinc-900">
                    Hello'
                  </h1>

                  <p className="mt-2 text-xs font-light normal-case tracking-normal text-zinc-600">
                    -am{" "}
                    <span className="font-bold italic text-zinc-900">
                      Muhammed Ansil
                    </span>
                    , a web developer passionate,
                    <br />
                    about building modern digital experiences.
                  </p>
                </div>

                <div
                  className="relative z-20 my-4 flex shrink-0 select-none items-start justify-end gap-10 pr-2 pt-6 animate-smooth-entrance"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex flex-col items-start">
                    <span className="order-1 text-3xl font-light tracking-tight text-zinc-900 tabular-nums">
                      +{count20}
                    </span>
                    <span className="order-2 mt-0.5 whitespace-nowrap text-[11px] font-light text-zinc-500">
                      project completed
                    </span>
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="order-1 text-3xl font-light tracking-tight text-zinc-900 tabular-nums">
                      +{count10}
                    </span>
                    <span className="order-2 mt-0.5 whitespace-nowrap text-[11px] font-light text-zinc-500">
                      startup raised
                    </span>
                  </div>
                </div>
              </div>

              {/* DESKTOP HERO */}

              <div className="relative mx-auto my-auto hidden w-full max-w-[1700px] flex-1 items-center justify-between px-16 font-inter lg:flex">
                <div
                  className="absolute left-[95px] top-[10%] z-30 flex origin-top-left select-none flex-col items-start animate-smooth-entrance"
                  style={{ animationDelay: "0.1s" }}
                >
                  <h1 className="text-[169px] font-light leading-[0.95] tracking-tight text-zinc-900">
                    Hello'
                  </h1>

                  <p className="mt-3 whitespace-nowrap text-[14px] font-light tracking-normal text-zinc-600 opacity-95">
                    -am{" "}
                    <span className="font-bold italic text-zinc-900">
                      Muhammed
                    </span>{" "}
                    <span className="font-bold italic text-zinc-900">
                      Ansil
                    </span>{" "}
                    <span className="font-normal">
                      , a web developer passionate,
                      <br />
                      about building modern digital experiences.
                    </span>
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 z-20 flex h-[75vh] -translate-x-1/2 items-end justify-center animate-smooth-entrance"
                  style={{ animationDelay: "0.3s" }}
                >
                  <img
                    src={PROFILE_IMAGE}
                    alt="Muhammed Ansil"
                    className={`
                      max-h-[102vh] w-auto select-none object-contain
                      object-bottom drop-shadow-sm
                      transition-all duration-[1200ms] ease-out
                      ${
                        isLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-6 opacity-0"
                      }
                    `}
                  />
                </div>

                <div
                  className="absolute right-24 top-[calc(50%+90px)] z-30 flex select-none items-start gap-14 animate-smooth-entrance"
                  style={{ animationDelay: "0.25s" }}
                >
                  <div className="flex flex-col items-start transition-transform duration-500 hover:scale-105">
                    <span className="order-2 mb-1 whitespace-nowrap text-xs font-light text-zinc-500">
                      project completed
                    </span>
                    <span className="order-1 text-6xl font-light tracking-tight text-zinc-900 tabular-nums">
                      +{count20}
                    </span>
                  </div>

                  <div className="flex flex-col items-start transition-transform duration-500 hover:scale-105">
                    <span className="order-2 mb-1 whitespace-nowrap text-xs font-light text-zinc-500">
                      startup raised
                    </span>
                    <span className="order-1 text-6xl font-light tracking-tight text-zinc-900 tabular-nums">
                      +{count10}
                    </span>
                  </div>
                </div>

                <div
                  className="absolute bottom-6 left-[99px] z-40 flex cursor-pointer select-none items-center gap-3 animate-smooth-entrance"
                  onClick={() => setCurrentView("projects")}
                  style={{ animationDelay: "0.35s" }}
                >
                  <span className="text-[11px] font-semibold tracking-[0.3em] text-zinc-500">
                    EXPLORE WORKS
                  </span>

                  <div className="animate-scroll-arrow text-zinc-900">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABOUT */}

        {currentView === "about" && (
          <div className="absolute inset-0 z-20 h-full w-full overflow-y-auto bg-[#F8F8F8] px-6 pb-12 pt-28 animate-slide-up-overlay lg:px-16 lg:pt-32">
            <About />
          </div>
        )}

        {/* PROJECTS */}

        {currentView === "projects" && (
          <div className="absolute inset-0 z-20 h-full w-full overflow-y-auto bg-[#F8F8F8] animate-slide-up-overlay">
            <Works />
          </div>
        )}

        {/* CONTACT */}

        {currentView === "contact" && (
          <div className="absolute inset-0 z-20 h-full w-full overflow-y-auto bg-[#F8F8F8] px-6 pb-16 pt-28 animate-slide-up-overlay lg:px-16 lg:pt-32">
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
}

export default Herosection;
