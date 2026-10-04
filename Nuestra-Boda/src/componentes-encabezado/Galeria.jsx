import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   GALERÍA — NUESTRA HISTORIA
   EIMY & SONI

   - Fondo verde olivo
   - Estilo clásico
   - Sin degradados
   - Imágenes precargadas
   - Controles debajo
   - Posición individual por fotografía
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",
  ivory: "#F7F4EC",
  beige: "#D7C8AA",
  beigeDark: "#B7A581",
};

/* =========================================
   IMÁGENES

   position:
   Primer valor  = horizontal
   Segundo valor = vertical

   Ejemplos:
   "50% 50%" = centro
   "50% 20%" = más arriba
   "50% 80%" = más abajo
   "30% 50%" = más izquierda
   "70% 50%" = más derecha
========================================= */

const images = [
  {
    src: "/Carrusel01v.jpg",
    position: "50% 50%",
  },
  {
    src: "/Carrusel02.jpg",
    position: "50% 50%",
  },
  {
    src: "/Carrusel03.jpg",
    position: "50% 50%",
  },
  {
    src: "/Carrusel04.jpg",
    position: "50% 50%",
  },
  {
    src: "/Carrusel05.jpg",
    position: "50% 50%",
  },
];

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 95V34C5 18 18 5 34 5H95"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 82V38C15 25.3 25.3 15 38 15H82"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M34 5C34 21 21 34 5 34"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <circle
        cx="15"
        cy="15"
        r="2"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M25 207C47 172 61 135 70 96C78 61 91 32 114 13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M51 155C36 150 28 138 28 123C43 126 52 138 51 155Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M65 116C80 111 91 100 94 84C79 87 68 98 65 116Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M74 79C60 73 53 62 54 47C68 52 76 64 74 79Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M91 47C104 43 113 34 116 20C103 23 94 33 91 47Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR CLÁSICO
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: "rgba(247,244,236,0.52)",
        }}
      />

      <span
        className="
          h-[5px]
          w-[5px]
          rotate-45
          border
        "
        style={{
          borderColor: "rgba(247,244,236,0.72)",
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: "rgba(247,244,236,0.52)",
        }}
      />
    </div>
  );
}

/* =========================================
   ICONO ANTERIOR
========================================= */

function PreviousIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

/* =========================================
   ICONO SIGUIENTE
========================================= */

function NextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [imagesReady, setImagesReady] = useState(false);

  const totalImages = images.length;

  /* =========================================
     PRECARGAR TODAS LAS FOTOGRAFÍAS
  ========================================= */

  useEffect(() => {
    let mounted = true;

    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map(
            ({ src }) =>
              new Promise((resolve) => {
                const img = new Image();

                img.src = src;

                if (img.complete) {
                  resolve();
                  return;
                }

                img.onload = resolve;
                img.onerror = resolve;
              })
          )
        );
      } finally {
        if (mounted) {
          setImagesReady(true);
        }
      }
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, []);

  /* =========================================
     CAMBIO AUTOMÁTICO

     Solo comienza cuando todas las imágenes
     terminaron su precarga.
  ========================================= */

  useEffect(() => {
    if (!imagesReady) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);

      setIndex((previousIndex) => {
        return (previousIndex + 1) % totalImages;
      });
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [imagesReady, totalImages]);

  /* =========================================
     SIGUIENTE
  ========================================= */

  const nextImage = () => {
    if (!imagesReady) return;

    setDirection(1);

    setIndex((previousIndex) => {
      return (previousIndex + 1) % totalImages;
    });
  };

  /* =========================================
     ANTERIOR
  ========================================= */

  const previousImage = () => {
    if (!imagesReady) return;

    setDirection(-1);

    setIndex((previousIndex) => {
      return previousIndex === 0
        ? totalImages - 1
        : previousIndex - 1;
    });
  };

  /* =========================================
     IR DIRECTAMENTE A UNA FOTO
  ========================================= */

  const goToImage = (imageIndex) => {
    if (!imagesReady) return;
    if (imageIndex === index) return;

    setDirection(imageIndex > index ? 1 : -1);
    setIndex(imageIndex);
  };

  return (
    <section
      className="
        relative
        w-full
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
      {/* =====================================
          MARCO EXTERIOR
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          sm:inset-7
          lg:inset-9
        "
        style={{
          borderColor: "rgba(247,244,236,0.38)",
        }}
      />

      {/* =====================================
          MARCO INTERIOR
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[22px]
          border
          sm:inset-[34px]
          lg:inset-[42px]
        "
        style={{
          borderColor: "rgba(247,244,236,0.11)",
        }}
      />

      {/* =====================================
          ORNAMENTO SUPERIOR IZQUIERDO
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-16
          w-16
          text-[#F7F4EC]/28
          sm:left-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ORNAMENTO SUPERIOR DERECHO
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-5
          top-5
          h-16
          w-16
          rotate-90
          text-[#F7F4EC]/28
          sm:right-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ORNAMENTO INFERIOR IZQUIERDO
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-5
          left-5
          h-16
          w-16
          -rotate-90
          text-[#F7F4EC]/28
          sm:bottom-8
          sm:left-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ORNAMENTO INFERIOR DERECHO
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          h-16
          w-16
          rotate-180
          text-[#F7F4EC]/28
          sm:bottom-8
          sm:right-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          BOTÁNICO INFERIOR
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-12
          -left-8
          h-[230px]
          w-[145px]
          -rotate-12
          text-[#F7F4EC]/8
          sm:h-[300px]
          sm:w-[180px]
        "
      />

      {/* =====================================
          BOTÁNICO SUPERIOR
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-12
          h-[230px]
          w-[145px]
          rotate-[168deg]
          text-[#F7F4EC]/8
          sm:h-[300px]
          sm:w-[180px]
        "
      />

      {/* =====================================
          CONTENIDO
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* =====================================
            NUESTRA HISTORIA
        ===================================== */}

        <motion.div
          className="
            mx-auto
            mb-14
            max-w-[760px]
            text-center
            sm:mb-16
          "
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >


          {/* TÍTULO */}

          <h2
            className="
              mt-7
              font-cursiveDancing
              text-[46px]
              font-normal
              leading-none
              sm:text-[60px]
              md:text-[68px]
            "
            style={{
              color: palette.ivory,
            }}
          >
            Nuestra Historia
          </h2>

          {/* PRIMER PÁRRAFO */}

          <p
            className="
              mx-auto
              mt-8
              max-w-[650px]
              font-serif
              text-[14px]
              leading-[1.9]
              sm:text-[16px]
              sm:leading-[2]
              px-4
            "
            style={{
              color: "rgba(247,244,236,0.82)",
            }}
          >
            Nuestra historia es hermosa, es de las que Dios escribe.
            Hay una teoría que dice que si alguien está destinado a estar
            en tu vida, lo vas a conocer dos veces.
          </p>

          {/* SEGUNDO PÁRRAFO */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              font-serif
              text-[14px]
              leading-[1.9]
              sm:text-[16px]
              sm:leading-[2]
              px-4
            "
            style={{
              color: "rgba(247,244,236,0.82)",
            }}
          >
            La primera fue fugaz, en el momento incorrecto, como si el
            universo solo quisiera presentarnos... Pero la segunda vez,
            todo encaja, el corazón lo sabe, lo que es para ti regresa
            sin que tengas que perseguirlo.
          </p>

          {/* TERCER PÁRRAFO */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              font-serif
              text-[14px]
              leading-[1.9]
              sm:text-[16px]
              sm:leading-[2]
              px-4
            "
            style={{
              color: "rgba(247,244,236,0.82)",
            }}
          >
            Hoy, con el corazón lleno de felicidad, queremos dar el
            siguiente paso y unir nuestras vidas para siempre, y nos
            encantaría que nos acompañes en este día tan especial.
          </p>

          {/* FIRMA */}

          <motion.p
            className="
              mt-8
              font-cursiveDancing
              text-[30px]
              sm:text-[36px]
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
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
          >
            Con amor, Eimy & Soni
          </motion.p>
        </motion.div>

        {/* =====================================
            CARRUSEL
        ===================================== */}

        <motion.div
          className="
            mx-auto
            w-full
            max-w-3xl
          "
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.95,
            delay: 0.1,
            ease,
          }}
        >
          {/* =================================
              MARCO EXTERIOR FOTO
          ================================= */}

          <div
            className="
              relative
              border
              p-[7px]
              sm:p-[9px]
            "
            style={{
              borderColor: "rgba(247,244,236,0.52)",
            }}
          >
            {/* MARCO INTERIOR */}

            <div
              className="
                relative
                border
                p-[5px]
              "
              style={{
                borderColor: "rgba(247,244,236,0.18)",
              }}
            >
              {/* =================================
                  ÁREA DE LA FOTOGRAFÍA
              ================================= */}

              <div
                className="
                  relative
                  h-[470px]
                  w-full
                  overflow-hidden
                  sm:h-[620px]
                  md:h-[680px]
                  lg:h-[720px]
                "
                style={{
                  backgroundColor: palette.oliveDark,
                }}
              >
                {/* =================================
                    FOTOGRAFÍA

                    IMPORTANTE:
                    objectPosition toma el valor
                    individual de cada fotografía.
                ================================= */}

                {imagesReady ? (
                  <AnimatePresence
                    custom={direction}
                    initial={false}
                    mode="sync"
                  >
                    <motion.img
                      key={images[index].src}
                      custom={direction}
                      src={images[index].src}
                      alt={`Fotografía ${index + 1} de ${totalImages}`}
                      draggable="false"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        select-none
                        object-cover
                      "
                      style={{
                        objectPosition: images[index].position,
                      }}
                      initial={{
                        opacity: 0,
                        scale: 1.015,
                        x: direction > 0 ? 10 : -10,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.008,
                        x: direction > 0 ? -8 : 8,
                      }}
                      transition={{
                        opacity: {
                          duration: 0.45,
                        },

                        scale: {
                          duration: 0.8,
                          ease,
                        },

                        x: {
                          duration: 0.55,
                          ease,
                        },
                      }}
                    />
                  </AnimatePresence>
                ) : (
                  /* =================================
                     CARGANDO FOTOGRAFÍAS
                  ================================= */

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <motion.div
                      className="
                        h-7
                        w-7
                        rounded-full
                        border
                        border-[#F7F4EC]/25
                        border-t-[#F7F4EC]
                      "
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                )}

                {/* =================================
                    NUMERACIÓN SOBRE FOTO
                ================================= */}

                {imagesReady && (
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      z-20
                      border
                      px-3
                      py-2
                      sm:bottom-5
                      sm:right-5
                    "
                    style={{
                      backgroundColor: "rgba(48,58,34,0.82)",
                      borderColor: "rgba(247,244,236,0.38)",
                    }}
                  >
                    <span
                      className="
                        font-serif
                        text-[11px]
                        tracking-[0.16em]
                      "
                      style={{
                        color: palette.ivory,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                      {" / "}
                      {String(totalImages).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* =================================
              CONTROLES ABAJO
          ================================= */}

          <div
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-5
            "
          >
            {/* =================================
                FLECHAS + CONTADOR
            ================================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-5
              "
            >
              {/* ANTERIOR */}

              <motion.button
                type="button"
                onClick={previousImage}
                disabled={!imagesReady}
                aria-label="Fotografía anterior"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  disabled:cursor-default
                  disabled:opacity-30
                  sm:h-12
                  sm:w-12
                "
                style={{
                  borderColor: "rgba(247,244,236,0.58)",
                  color: palette.ivory,
                  backgroundColor: "transparent",
                }}
                whileHover={
                  imagesReady
                    ? {
                        y: -2,
                        backgroundColor: palette.ivory,
                        color: palette.oliveDark,
                      }
                    : undefined
                }
                whileTap={
                  imagesReady
                    ? {
                        scale: 0.96,
                      }
                    : undefined
                }
              >
                <PreviousIcon />
              </motion.button>

              {/* CONTADOR */}

              <p
                className="
                  min-w-[76px]
                  text-center
                  font-serif
                  text-[14px]
                  tracking-[0.16em]
                "
                style={{
                  color: "rgba(247,244,236,0.78)",
                }}
              >
                {String(index + 1).padStart(2, "0")}

                <span
                  className="mx-2"
                  style={{
                    color: "rgba(247,244,236,0.35)",
                  }}
                >
                  /
                </span>

                {String(totalImages).padStart(2, "0")}
              </p>

              {/* SIGUIENTE */}

              <motion.button
                type="button"
                onClick={nextImage}
                disabled={!imagesReady}
                aria-label="Siguiente fotografía"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  disabled:cursor-default
                  disabled:opacity-30
                  sm:h-12
                  sm:w-12
                "
                style={{
                  borderColor: "rgba(247,244,236,0.58)",
                  color: palette.ivory,
                  backgroundColor: "transparent",
                }}
                whileHover={
                  imagesReady
                    ? {
                        y: -2,
                        backgroundColor: palette.ivory,
                        color: palette.oliveDark,
                      }
                    : undefined
                }
                whileTap={
                  imagesReady
                    ? {
                        scale: 0.96,
                      }
                    : undefined
                }
              >
                <NextIcon />
              </motion.button>
            </div>

            {/* =================================
                INDICADORES
            ================================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
              "
            >
              {images.map((image, imageIndex) => {
                const isActive = imageIndex === index;

                return (
                  <motion.button
                    key={image.src}
                    type="button"
                    disabled={!imagesReady}
                    onClick={() => goToImage(imageIndex)}
                    aria-label={`Mostrar fotografía ${imageIndex + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    className="
                      h-[6px]
                      border
                      disabled:cursor-default
                    "
                    animate={{
                      width: isActive ? 30 : 6,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    style={{
                      backgroundColor: isActive
                        ? palette.ivory
                        : "transparent",

                      borderColor: isActive
                        ? palette.ivory
                        : "rgba(247,244,236,0.45)",
                    }}
                  />
                );
              })}
            </div>

            {/* TEXTO PEQUEÑO */}

            <p
              className="
                text-center
                text-[7px]
                uppercase
                tracking-[0.34em]
                sm:text-[8px]
              "
              style={{
                color: "rgba(247,244,236,0.48)",
              }}
            >
              {imagesReady
                ? "Nuestros momentos"
                : "Preparando fotografías"}
            </p>
          </div>
        </motion.div>

        {/* =====================================
            CIERRE
        ===================================== */}

        <motion.div
          className="
            mx-auto
            mt-14
            max-w-[500px]
            text-center
          "
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
        >
          <DecorativeDivider />

          <p
            className="
              mt-6
              font-serif
              text-[13px]
              italic
              leading-7
              sm:text-[15px]
              px-4
            "
            style={{
              color: "rgba(247,244,236,0.62)",
            }}
          >
            Cada fotografía guarda un instante
            de la historia que hoy celebramos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}