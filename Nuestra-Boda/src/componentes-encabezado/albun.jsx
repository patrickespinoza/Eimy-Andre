import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   ÁLBUM COMPARTIDO — EIMY & SONI
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",
  ivory: "#F7F4EC",
  white: "#FFFFFF",
  beige: "#D7C8AA",
  beigeDark: "#B7A581",
  ink: "#292B24",
  gray: "#706E64",
};

const albumCode = "MX396add11";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider({ light = false, compact = false }) {
  const lineColor = light
    ? "rgba(247,244,236,0.60)"
    : "rgba(63,74,44,0.40)";

  const diamondColor = light
    ? "rgba(247,244,236,0.78)"
    : "rgba(63,74,44,0.58)";

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          backgroundColor: lineColor,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: diamondColor,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          backgroundColor: lineColor,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS DEL MODAL
========================================= */

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M5 7h3l1.5-2h5L16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect x="8" y="8" width="11" height="11" rx="1.5" />
      <path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-10A1.5 1.5 0 0 0 3 5.5v10A1.5 1.5 0 0 0 4.5 17H8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

const Album = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  /* BLOQUEAR SCROLL CUANDO EL MODAL ESTÁ ABIERTO */

  useEffect(() => {
    if (!open) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow =
      document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow =
        previousHtmlOverflow;
    };
  }, [open]);

  /* CERRAR CON ESCAPE */

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  /* COPIAR CÓDIGO */

  const copyAlbumCode = async () => {
    try {
      await navigator.clipboard.writeText(albumCode);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("No se pudo copiar el código:", error);
    }
  };

  return (
    <>
      {/* =========================================
          SECCIÓN PRINCIPAL VERDE OLIVO
      ========================================= */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          flex
          min-h-[680px]
          w-full
          items-center
          justify-center
          overflow-hidden
          px-5
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
        style={{
          backgroundColor: palette.olive,
        }}
      >
        {/* MARCO EXTERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            inset-5
            border
            sm:inset-8
            lg:inset-10
          "
          style={{
            borderColor: "rgba(247,244,236,0.34)",
          }}
        />

        {/* MARCO INTERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[26px]
            border
            sm:inset-[38px]
            lg:inset-[46px]
          "
          style={{
            borderColor: "rgba(247,244,236,0.13)",
          }}
        />

        {/* ORNAMENTOS */}

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            left-6
            top-6
            h-16
            w-16
            text-[#F7F4EC]/35
            sm:left-9
            sm:top-9
            sm:h-20
            sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            right-6
            top-6
            h-16
            w-16
            rotate-90
            text-[#F7F4EC]/35
            sm:right-9
            sm:top-9
            sm:h-20
            sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            bottom-6
            left-6
            h-16
            w-16
            -rotate-90
            text-[#F7F4EC]/35
            sm:bottom-9
            sm:left-9
            sm:h-20
            sm:w-20
          "
        />

        <CornerOrnament
          className="
            pointer-events-none
            absolute
            bottom-6
            right-6
            h-16
            w-16
            rotate-180
            text-[#F7F4EC]/35
            sm:bottom-9
            sm:right-9
            sm:h-20
            sm:w-20
          "
        />

        {/* RAMAS BOTÁNICAS */}

        <BotanicalBranch
          className="
            pointer-events-none
            absolute
            -bottom-16
            -left-8
            h-[250px]
            w-[145px]
            -rotate-12
            text-[#F7F4EC]/10
            sm:h-[310px]
            sm:w-[180px]
            lg:left-2
          "
        />

        <BotanicalBranch
          className="
            pointer-events-none
            absolute
            -right-8
            -top-16
            h-[250px]
            w-[145px]
            rotate-[168deg]
            text-[#F7F4EC]/10
            sm:h-[310px]
            sm:w-[180px]
            lg:right-2
          "
        />

        {/* CONTENIDO */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            text-center
          "
        >
          <motion.p
            className="
              text-[8px]
              uppercase
              tracking-[0.42em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.beige,
            }}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            Recuerdos compartidos
          </motion.p>

          <div className="mt-5">
            <DecorativeDivider light />
          </div>

          <motion.h2
            className="
              mt-8
              font-serif
              text-[40px]
              font-normal
              leading-[1.05]
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ivory,
            }}
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.08,
            }}
          >
            Álbum compartido
          </motion.h2>

          <motion.p
            className="
              mx-auto
              mt-7
              max-w-2xl
              font-serif
              text-[15px]
              italic
              leading-7
              sm:text-[17px]
              sm:leading-8
              px-4
            "
            style={{
              color: "rgba(247,244,236,0.84)",
            }}
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.14,
            }}
          >
            Queremos ver nuestra celebración también a través de tus ojos.
            Comparte las fotografías que captures y ayúdanos a conservar cada
            momento especial.
          </motion.p>

          {/* TEXTO SECUNDARIO */}

          <motion.div
            className="
              mt-10
              max-w-xl
              border-y
              px-5
              py-6
              sm:mt-12
              sm:px-10
            "
            style={{
              borderColor: "rgba(247,244,236,0.22)",
            }}
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              delay: 0.2,
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.36em]
                sm:text-[9px]
              "
              style={{
                color: palette.beige,
              }}
            >
              Conservemos juntos la historia
            </p>

            <p
              className="
                mt-4
                font-serif
                text-[14px]
                leading-7
                sm:text-[15px]
              "
              style={{
                color: "rgba(247,244,236,0.78)",
              }}
            >
              Dentro encontrarás el código y el acceso a la aplicación para
              subir tus fotografías.
            </p>
          </motion.div>

          {/* BOTÓN */}

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            className="
              mt-10
              inline-flex
              min-w-[230px]
              items-center
              justify-center
              border
              px-8
              py-4
              sm:min-w-[260px]
              sm:px-10
            "
            style={{
              backgroundColor: palette.ivory,
              borderColor: palette.ivory,
              color: palette.oliveDark,
              boxShadow: "0 14px 35px rgba(0,0,0,0.12)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: palette.white,
            }}
            whileTap={{
              scale: 0.985,
            }}
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.30em]
                sm:text-[10px]
                sm:tracking-[0.34em]
              "
            >
              Abrir álbum
            </span>
          </motion.button>


        </div>
      </motion.section>

      {/* =========================================
          MODAL
      ========================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              h-[100dvh]
              w-full
              items-center
              justify-center
              overflow-hidden
              bg-[#1E2518]/85
              px-4
              py-5
              backdrop-blur-sm
              sm:px-8
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setOpen(false);
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="album-modal-title"
          >
            <motion.div
              className="
                relative
                max-h-[92dvh]
                w-full
                max-w-3xl
                overflow-y-auto
                border
                px-6
                py-14
                text-center
                sm:px-10
                sm:py-16
                md:px-14
              "
              style={{
                backgroundColor: palette.ivory,
                borderColor: "rgba(63,74,44,0.38)",
                boxShadow: "0 30px 100px rgba(0,0,0,0.34)",
              }}
              initial={{
                opacity: 0,
                y: 24,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* BORDE INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[7px]
                  border
                "
                style={{
                  borderColor: "rgba(63,74,44,0.15)",
                }}
              />

              {/* ORNAMENTOS DEL MODAL */}

              <CornerOrnament
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-3
                  h-14
                  w-14
                  text-[#3F4A2C]/20
                "
              />

              <CornerOrnament
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  right-3
                  h-14
                  w-14
                  rotate-180
                  text-[#3F4A2C]/20
                "
              />

              {/* CERRAR */}

              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar álbum compartido"
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border
                  sm:right-6
                  sm:top-6
                "
                style={{
                  color: palette.oliveDark,
                  borderColor: "rgba(63,74,44,0.32)",
                  backgroundColor: palette.ivory,
                }}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: palette.white,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <CloseIcon />
              </motion.button>

              {/* CONTENIDO */}

              <div
                className="
                  relative
                  z-10
                  flex
                  w-full
                  flex-col
                  items-center
                "
              >
                <p
                  className="
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.42em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.olive,
                  }}
                >
                  Recuerdos de nuestra boda
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <h2
                  id="album-modal-title"
                  className="
                    mt-7
                    font-serif
                    text-[34px]
                    font-normal
                    tracking-[-0.02em]
                    sm:text-[44px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  Nuestro álbum
                </h2>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-xl
                    font-serif
                    text-[14px]
                    italic
                    leading-7
                    sm:text-base
                  "
                  style={{
                    color: palette.gray,
                  }}
                >
                  Descarga la aplicación Wedshoots, utiliza nuestro código y
                  comparte las fotografías que captures durante la celebración.
                </p>

                {/* INFORMACIÓN */}

                <div
                  className="
                    mt-9
                    grid
                    w-full
                    gap-6
                    md:grid-cols-[1fr_0.8fr]
                    md:items-stretch
                  "
                >
                  {/* WEDSHOOTS + CÓDIGO */}

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                      justify-center
                      border
                      px-5
                      py-8
                      text-center
                      sm:px-7
                    "
                    style={{
                      backgroundColor: palette.white,
                      borderColor: "rgba(63,74,44,0.22)",
                    }}
                  >
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.36em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.gray,
                      }}
                    >
                      Aplicación
                    </p>

                    <p
                      className="
                        mt-3
                        font-serif
                        text-[27px]
                        sm:text-[31px]
                      "
                      style={{
                        color: palette.oliveDark,
                      }}
                    >
                      Wedshoots
                    </p>

                    <motion.a
                      href="https://apps.apple.com/mx/app/wedshoots/id660256196"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-6
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        border
                        px-6
                        py-3
                      "
                      style={{
                        backgroundColor: palette.olive,
                        borderColor: palette.olive,
                        color: palette.ivory,
                      }}
                      whileHover={{
                        y: -2,
                        backgroundColor: palette.oliveDark,
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                    >
                      <DownloadIcon />

                      <span
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.28em]
                          sm:text-[9px]
                        "
                      >
                        Descargar app
                      </span>
                    </motion.a>

                    <div
                      className="my-8 h-px w-20"
                      style={{
                        backgroundColor: "rgba(63,74,44,0.28)",
                      }}
                    />

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.36em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.gray,
                      }}
                    >
                      Código del álbum
                    </p>

                    <div
                      className="
                        mt-4
                        flex
                        w-full
                        max-w-xs
                        items-center
                        justify-between
                        gap-3
                        border
                        px-4
                        py-4
                      "
                      style={{
                        backgroundColor: palette.ivory,
                        borderColor: "rgba(63,74,44,0.28)",
                      }}
                    >
                      <span
                        className="
                          break-all
                          font-mono
                          text-[16px]
                          tracking-[0.16em]
                          sm:text-lg
                          sm:tracking-[0.22em]
                        "
                        style={{
                          color: palette.oliveDark,
                        }}
                      >
                        {albumCode}
                      </span>

                      <motion.button
                        type="button"
                        onClick={copyAlbumCode}
                        aria-label="Copiar código del álbum"
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          border
                        "
                        style={{
                          color: copied
                            ? palette.olive
                            : palette.ink,
                          borderColor: "rgba(63,74,44,0.30)",
                        }}
                        whileHover={{
                          backgroundColor: palette.white,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >
                        {copied ? <CheckIcon /> : <CopyIcon />}
                      </motion.button>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={copied ? "copied" : "copy"}
                        className="
                          mt-3
                          text-[8px]
                          uppercase
                          tracking-[0.28em]
                        "
                        style={{
                          color: copied
                            ? palette.olive
                            : palette.gray,
                        }}
                        initial={{
                          opacity: 0,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -4,
                        }}
                      >
                        {copied ? "Código copiado" : "Toca para copiar"}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  {/* QR */}

                  <div
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                      justify-center
                      border
                      px-5
                      py-8
                    "
                    style={{
                      backgroundColor: palette.white,
                      borderColor: "rgba(63,74,44,0.22)",
                    }}
                  >
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.36em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.gray,
                      }}
                    >
                      Acceso directo
                    </p>

                    <div
                      className="
                        mt-5
                        border
                        bg-white
                        p-3
                      "
                      style={{
                        borderColor: "rgba(63,74,44,0.28)",
                        boxShadow:
                          "0 12px 30px rgba(48,58,34,0.08)",
                      }}
                    >
                      <img
                        src="/qr.jpg"
                        alt="Código QR del álbum compartido"
                        loading="lazy"
                        className="
                          h-44
                          w-44
                          object-contain
                          sm:h-48
                          sm:w-48
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-5
                        max-w-xs
                        font-serif
                        text-[13px]
                        leading-6
                        sm:text-[14px]
                      "
                      style={{
                        color: palette.gray,
                      }}
                    >
                      Escanea el código QR para acceder y comenzar a compartir
                      tus fotografías.
                    </p>
                  </div>
                </div>

                <div className="mt-9">
                  <DecorativeDivider />
                </div>

                <p
                  className="
                    mt-6
                    max-w-lg
                    font-serif
                    text-[14px]
                    italic
                    leading-7
                  "
                  style={{
                    color: palette.gray,
                  }}
                >
                  Cada fotografía será una parte especial de los recuerdos que
                  conservaremos de este día.
                </p>

                <p
                  className="
                    mt-6
                    font-cursiveDancing
                    text-[27px]
                    sm:text-[31px]
                  "
                  style={{
                    color: palette.olive,
                  }}
                >
                  Eimy & Soni
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Album;