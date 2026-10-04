import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbwduCR9l2Z8IVPtC38HCtpFFhLu7mbrQ4DzPHEtuH-Kr_Mck8f6RkKWespYGBD-oNyQhw/exec";

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",

  white: "#FFFFFF",
  ivory: "#F7F4EC",
  ivoryLight: "#FBFAF6",

  beige: "#D7C8AA",
  beigeDark: "#B7A581",

  ink: "#292B24",
  gray: "#706E64",
};

/* =========================================
   PREGUNTAS

   correcta = posición de la respuesta correcta
   0 = A
   1 = B
   2 = C
   3 = D
========================================= */

const preguntas = [
  {
    pregunta: "¿Dónde se conocieron Eimy y Soni?",
    opciones: [
      "Secundaria",
      "Universidad",
      "Trabajo",
      "Por amigos",
    ],
    correcta: 0,
  },
  {
    pregunta: "¿Quién dijo “te amo” primero?",
    opciones: [
      "Eimy",
      "Soni",
      "Los dos",
      "Ninguno recuerda",
    ],
    correcta: 1,
  },
  {
    pregunta: "¿Dónde fue su primera cita?",
    opciones: [
      "Restaurante",
      "Parque",
      "Cine",
      "Café",
    ],
    correcta: 2,
  },
  {
    pregunta: "¿Cuál es su comida favorita?",
    opciones: [
      "Pizza",
      "Tacos",
      "Pasta",
      "Pollo",
    ],
    correcta: 3,
  },
  {
    pregunta: "¿Quién es más puntual?",
    opciones: [
      "Eimy",
      "Soni",
      "Los dos",
      "Depende del día",
    ],
    correcta: 1,
  },
];

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
   ORNAMENTOS
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

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={
          compact
            ? "h-px w-8 sm:w-12"
            : "h-px w-10 sm:w-16"
        }
        style={{
          backgroundColor: "rgba(63,74,44,0.42)",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(63,74,44,0.58)",
        }}
      />

      <span
        className={
          compact
            ? "h-px w-8 sm:w-12"
            : "h-px w-10 sm:w-16"
        }
        style={{
          backgroundColor: "rgba(63,74,44,0.42)",
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function QuestionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .65-1.5 1.15-1.5 2.5" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H4v1a4 4 0 0 0 4 4" />
      <path d="M16 6h4v1a4 4 0 0 1-4 4" />
      <path d="M12 12v5" />
      <path d="M8 21h8" />
      <path d="M9 17h6v4H9z" />
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

/* =========================================
   PODIO
========================================= */

function PodiumPlace({ participant, place }) {
  if (!participant) return null;

  const placeStyles = {
    1: {
      height: "h-28 sm:h-36",
      number: "01",
      label: "Primer lugar",
    },
    2: {
      height: "h-20 sm:h-28",
      number: "02",
      label: "Segundo lugar",
    },
    3: {
      height: "h-16 sm:h-24",
      number: "03",
      label: "Tercer lugar",
    },
  };

  const current = placeStyles[place];

  return (
    <motion.div
      className="
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        text-center
      "
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: place * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className="
          max-w-full
          truncate
          font-serif
          text-[13px]
          sm:text-base
        "
        style={{
          color: palette.ink,
        }}
      >
        {participant.nombre}
      </p>

      <p
        className="
          mt-1
          text-[8px]
          uppercase
          tracking-[0.22em]
        "
        style={{
          color: palette.gray,
        }}
      >
        {participant.score} aciertos
      </p>

      <div
        className={`
          mt-4
          flex
          w-full
          max-w-[105px]
          items-center
          justify-center
          border
          ${current.height}
        `}
        style={{
          backgroundColor:
            place === 1
              ? palette.beige
              : palette.ivory,
          borderColor:
            place === 1
              ? "rgba(63,74,44,0.50)"
              : "rgba(63,74,44,0.25)",
        }}
      >
        <span
          className="
            font-serif
            text-2xl
            sm:text-3xl
          "
          style={{
            color:
              place === 1
                ? palette.oliveDark
                : palette.olive,
          }}
        >
          {current.number}
        </span>
      </div>

      <p
        className="
          mt-3
          text-[7px]
          uppercase
          tracking-[0.2em]
          sm:text-[8px]
        "
        style={{
          color: palette.olive,
        }}
      >
        {current.label}
      </p>
    </motion.div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const Preguntas = () => {
  const [nombre, setNombre] = useState("");
  const [mostrarNombre, setMostrarNombre] = useState(true);

  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [bloqueado, setBloqueado] = useState(false);

  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const [ranking, setRanking] = useState([]);
  const [cargandoRanking, setCargandoRanking] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);
  const [guardandoImagen, setGuardandoImagen] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const resultadoRef = useRef(null);

  /* =========================================
     TAMAÑO DE VENTANA
  ========================================= */

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();

    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  /* =========================================
     ENVIAR RESULTADO
  ========================================= */

  const enviarResultado = async (scoreToSend) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          nombre: nombre.trim(),
          score: scoreToSend,
        }),
      });
    } catch (error) {
      console.error("Error enviando el resultado:", error);
    }
  };

  /* =========================================
     OBTENER RANKING
  ========================================= */

  const obtenerRanking = async () => {
    setCargandoRanking(true);

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(
          "No fue posible obtener el ranking."
        );
      }

      const data = await response.json();

      const normalizedData = Array.isArray(data)
        ? data
        : [];

      const sortedRanking = normalizedData
        .map((participant) => ({
          ...participant,
          score: Number(participant.score) || 0,
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setRanking(sortedRanking);
    } catch (error) {
      console.error(
        "Error obteniendo el ranking:",
        error
      );

      setRanking([]);
    } finally {
      setCargandoRanking(false);
    }
  };

  /* =========================================
     FLUJO FINAL
  ========================================= */

  useEffect(() => {
    if (!terminado) return undefined;

    let rankingTimeout;
    let confettiTimeout;

    const completeQuiz = async () => {
      await enviarResultado(finalScore);

      setShowConfetti(true);

      rankingTimeout = window.setTimeout(() => {
        obtenerRanking();
      }, 1400);

      confettiTimeout = window.setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    };

    completeQuiz();

    return () => {
      window.clearTimeout(rankingTimeout);
      window.clearTimeout(confettiTimeout);
    };
  }, [terminado, finalScore]);

  /* =========================================
     RESPONDER
  ========================================= */

  const manejarRespuesta = (optionIndex) => {
    if (bloqueado) return;

    if (mostrarNombre && !nombre.trim()) {
      window.alert(
        "Escribe tu nombre para comenzar."
      );
      return;
    }

    setBloqueado(true);
    setSeleccion(optionIndex);

    const isCorrect =
      optionIndex === preguntas[paso].correcta;

    const nextScore = isCorrect
      ? score + 1
      : score;

    if (isCorrect) {
      setScore(nextScore);
    }

    window.setTimeout(() => {
      setSeleccion(null);

      if (paso === 0) {
        setMostrarNombre(false);
      }

      if (paso + 1 < preguntas.length) {
        setPaso(
          (previousStep) => previousStep + 1
        );

        setBloqueado(false);
      } else {
        setFinalScore(nextScore);
        setTerminado(true);
        setBloqueado(false);
      }
    }, 700);
  };

  /* =========================================
     GUARDAR RESULTADO
  ========================================= */

  const guardarResultado = async () => {
    if (
      !resultadoRef.current ||
      guardandoImagen
    ) {
      return;
    }

    setGuardandoImagen(true);

    try {
      const canvas = await html2canvas(
        resultadoRef.current,
        {
          scale: 2,
          backgroundColor: palette.white,
          useCORS: true,
        }
      );

      const link =
        document.createElement("a");

      link.download = `resultado-${nombre
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")}.png`;

      link.href =
        canvas.toDataURL("image/png");

      link.click();
    } catch (error) {
      console.error(
        "No se pudo guardar el resultado:",
        error
      );
    } finally {
      setGuardandoImagen(false);
    }
  };

  const progress =
    ((paso + 1) / preguntas.length) * 100;

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        flex
        min-h-[760px]
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
        backgroundColor: palette.white,
      }}
    >
      {/* CONFETI */}

      {showConfetti &&
        windowSize.width > 0 && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={220}
            recycle={false}
            gravity={0.12}
          />
        )}

      {/* =========================================
          MARCOS
      ========================================= */}

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
          borderColor:
            "rgba(63,74,44,0.24)",
        }}
      />

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
          borderColor:
            "rgba(63,74,44,0.09)",
        }}
      />

      {/* =========================================
          ESQUINAS
      ========================================= */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#3F4A2C]/25
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
          text-[#3F4A2C]/25
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
          text-[#3F4A2C]/25
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
          text-[#3F4A2C]/25
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* =========================================
          BOTÁNICOS
      ========================================= */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#3F4A2C]/[0.07]
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
          text-[#3F4A2C]/[0.07]
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
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
          }}
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              color: palette.olive,
              borderColor:
                "rgba(63,74,44,0.38)",
            }}
          >
            {terminado ? (
              <TrophyIcon />
            ) : (
              <QuestionIcon />
            )}
          </div>

          <p
            className="
              mt-6
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.olive,
            }}
          >
            Nuestra historia
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            ¿Cuánto nos conoces?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
              px-4
            "
            style={{
              color: palette.gray,
            }}
          >
            Pon a prueba cuánto conoces
            nuestra historia y descubre tu
            lugar entre nuestros invitados.
          </p>

          <p
            className="
              mt-5
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
        </motion.div>

        {/* =========================================
            JUEGO
        ========================================= */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
          "
          style={{
            backgroundColor:
              palette.ivoryLight,

            borderColor:
              "rgba(63,74,44,0.28)",

            boxShadow:
              "0 24px 65px rgba(48,58,34,0.08)",
          }}
        >
          {/* DOBLE MARCO */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              border
            "
            style={{
              borderColor:
                "rgba(63,74,44,0.10)",
            }}
          />

          <AnimatePresence mode="wait">
            {!terminado ? (
              /* =====================================
                 PREGUNTAS
              ===================================== */

              <motion.div
                key={`question-${paso}`}
                className="
                  relative
                  z-10
                  flex
                  min-h-[570px]
                  flex-col
                  items-center
                  px-6
                  py-12
                  text-center
                  sm:px-10
                  sm:py-14
                  md:px-14
                "
                initial={{
                  opacity: 0,
                  x: 18,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -18,
                }}
                transition={{
                  duration: 0.45,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >
                {/* PROGRESO */}

                <div className="w-full">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        sm:text-[9px]
                      "
                      style={{
                        color:
                          palette.olive,
                      }}
                    >
                      Pregunta{" "}
                      {String(
                        paso + 1
                      ).padStart(2, "0")}
                    </p>

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        sm:text-[9px]
                      "
                      style={{
                        color:
                          palette.gray,
                      }}
                    >
                      De{" "}
                      {String(
                        preguntas.length
                      ).padStart(2, "0")}
                    </p>
                  </div>

                  <div
                    className="
                      mt-4
                      h-px
                      w-full
                      overflow-hidden
                    "
                    style={{
                      backgroundColor:
                        "rgba(63,74,44,0.14)",
                    }}
                  >
                    <motion.div
                      className="h-full"
                      style={{
                        backgroundColor:
                          palette.olive,
                      }}
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                    />
                  </div>
                </div>

                {/* =================================
                    NOMBRE
                ================================= */}

                <AnimatePresence>
                  {mostrarNombre && (
                    <motion.div
                      className="
                        mt-9
                        w-full
                        max-w-md
                      "
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                    >
                      <label
                        htmlFor="quiz-name"
                        className="
                          text-[8px]
                          uppercase
                          tracking-[0.34em]
                          sm:text-[9px]
                        "
                        style={{
                          color:
                            palette.gray,
                        }}
                      >
                        Escribe tu nombre
                      </label>

                      <input
                        id="quiz-name"
                        type="text"
                        value={nombre}
                        onChange={(event) =>
                          setNombre(
                            event.target
                              .value
                          )
                        }
                        placeholder="Tu nombre"
                        autoComplete="name"
                        className="
                          mt-4
                          w-full
                          border
                          bg-white
                          px-5
                          py-4
                          text-center
                          font-serif
                          text-base
                          outline-none
                          transition
                          sm:text-lg
                        "
                        style={{
                          color:
                            palette.ink,

                          borderColor:
                            "rgba(63,74,44,0.30)",
                        }}
                        onFocus={(
                          event
                        ) => {
                          event.currentTarget.style.borderColor =
                            palette.olive;
                        }}
                        onBlur={(
                          event
                        ) => {
                          event.currentTarget.style.borderColor =
                            "rgba(63,74,44,0.30)";
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="my-9">
                  <DecorativeDivider compact />
                </div>

                {/* =================================
                    PREGUNTA
                ================================= */}

                <h3
                  className="
                    max-w-2xl
                    font-serif
                    text-[26px]
                    font-normal
                    leading-[1.45]
                    tracking-[-0.015em]
                    sm:text-[34px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  {
                    preguntas[paso]
                      .pregunta
                  }
                </h3>

                {/* =================================
                    RESPUESTAS
                ================================= */}

                <div
                  className="
                    mt-9
                    grid
                    w-full
                    max-w-xl
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {preguntas[
                    paso
                  ].opciones.map(
                    (
                      opcion,
                      optionIndex
                    ) => {
                      const isSelected =
                        seleccion ===
                        optionIndex;

                      return (
                        <motion.button
                          key={`${paso}-${opcion}`}
                          type="button"
                          onClick={() =>
                            manejarRespuesta(
                              optionIndex
                            )
                          }
                          disabled={
                            bloqueado
                          }
                          className="
                            relative
                            min-h-[62px]
                            border
                            px-5
                            py-4
                            text-left
                            disabled:cursor-not-allowed
                          "
                          style={{
                            backgroundColor:
                              isSelected
                                ? palette.olive
                                : palette.white,

                            borderColor:
                              isSelected
                                ? palette.olive
                                : "rgba(63,74,44,0.26)",

                            color:
                              isSelected
                                ? palette.white
                                : palette.ink,
                          }}
                          whileHover={
                            bloqueado
                              ? undefined
                              : {
                                  y: -2,
                                  borderColor:
                                    palette.olive,
                                }
                          }
                          whileTap={
                            bloqueado
                              ? undefined
                              : {
                                  scale:
                                    0.985,
                                }
                          }
                        >
                          <span
                            className="
                              mr-3
                              font-serif
                              text-xs
                            "
                            style={{
                              color:
                                isSelected
                                  ? "rgba(255,255,255,0.70)"
                                  : palette.olive,
                            }}
                          >
                            {String.fromCharCode(
                              65 +
                                optionIndex
                            )}
                            .
                          </span>

                          <span
                            className="
                              font-serif
                              text-[14px]
                              sm:text-[15px]
                            "
                          >
                            {opcion}
                          </span>
                        </motion.button>
                      );
                    }
                  )}
                </div>
              </motion.div>
            ) : (
              /* =====================================
                 RESULTADO
              ===================================== */

              <motion.div
                key="quiz-result"
                ref={resultadoRef}
                className="
                  relative
                  z-10
                  flex
                  min-h-[650px]
                  flex-col
                  items-center
                  px-5
                  py-12
                  text-center
                  sm:px-10
                  sm:py-14
                  md:px-14
                "
                style={{
                  backgroundColor:
                    palette.white,
                }}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                  "
                  style={{
                    color:
                      palette.olive,

                    borderColor:
                      "rgba(63,74,44,0.40)",
                  }}
                >
                  <TrophyIcon />
                </div>

                <p
                  className="
                    mt-6
                    text-[8px]
                    uppercase
                    tracking-[0.4em]
                    sm:text-[9px]
                  "
                  style={{
                    color:
                      palette.olive,
                  }}
                >
                  Resultado final
                </p>

                <div className="mt-5">
                  <DecorativeDivider />
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[34px]
                    font-normal
                    leading-tight
                    sm:text-[43px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  {nombre.trim()},
                  acertaste
                </h3>

                <p
                  className="
                    mt-4
                    font-serif
                    text-[72px]
                    leading-none
                    tracking-[-0.06em]
                    sm:text-[92px]
                  "
                  style={{
                    color:
                      palette.olive,
                  }}
                >
                  {finalScore}
                </p>

                <p
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    tracking-[0.34em]
                    sm:text-[10px]
                  "
                  style={{
                    color: palette.gray,
                  }}
                >
                  De {preguntas.length}{" "}
                  preguntas
                </p>

                {/* =================================
                    RANKING
                ================================= */}

                <div
                  className="
                    mx-auto
                    mt-10
                    w-full
                    max-w-xl
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor:
                      "rgba(63,74,44,0.25)",
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
                      color:
                        palette.olive,
                    }}
                  >
                    Los invitados que
                    mejor nos conocen
                  </p>

                  {cargandoRanking ? (
                    <p
                      className="
                        mt-10
                        font-serif
                        text-sm
                        italic
                      "
                      style={{
                        color:
                          palette.gray,
                      }}
                    >
                      Actualizando
                      resultados…
                    </p>
                  ) : ranking.length >
                    0 ? (
                    <div
                      className="
                        mt-9
                        flex
                        items-end
                        justify-center
                        gap-3
                        sm:gap-5
                      "
                    >
                      <PodiumPlace
                        participant={
                          ranking[1]
                        }
                        place={2}
                      />

                      <PodiumPlace
                        participant={
                          ranking[0]
                        }
                        place={1}
                      />

                      <PodiumPlace
                        participant={
                          ranking[2]
                        }
                        place={3}
                      />
                    </div>
                  ) : (
                    <p
                      className="
                        mt-9
                        font-serif
                        text-sm
                        italic
                        leading-7
                      "
                      style={{
                        color:
                          palette.gray,
                      }}
                    >
                      El ranking estará
                      disponible cuando
                      se registren los
                      primeros resultados.
                    </p>
                  )}
                </div>

                {/* =================================
                    GUARDAR RESULTADO
                ================================= */}

                <motion.button
                  type="button"
                  onClick={
                    guardarResultado
                  }
                  disabled={
                    guardandoImagen
                  }
                  className="
                    mt-11
                    inline-flex
                    min-w-[230px]
                    items-center
                    justify-center
                    gap-3
                    border
                    px-8
                    py-4
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:min-w-[260px]
                  "
                  style={{
                    backgroundColor:
                      palette.olive,

                    borderColor:
                      palette.olive,

                    color:
                      palette.white,
                  }}
                  whileHover={
                    guardandoImagen
                      ? undefined
                      : {
                          y: -2,
                          backgroundColor:
                            palette.oliveDark,
                        }
                  }
                  whileTap={
                    guardandoImagen
                      ? undefined
                      : {
                          scale: 0.985,
                        }
                  }
                >
                  <DownloadIcon />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.28em]
                      sm:text-[10px]
                    "
                  >
                    {guardandoImagen
                      ? "Preparando imagen"
                      : "Guardar resultado"}
                  </span>
                </motion.button>

                <p
                  className="
                    mt-8
                    font-cursiveDancing
                    text-[27px]
                    sm:text-[31px]
                  "
                  style={{
                    color:
                      palette.olive,
                  }}
                >
                  Eimy & Soni
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =========================================
            TEXTO FINAL
        ========================================= */}

        <motion.p
          className="
            mx-auto
            mt-10
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-12
            sm:text-base
            px-4
          "
          style={{
            color: palette.gray,
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
            duration: 0.85,
            delay: 0.25,
          }}
        >
          Gracias por formar parte de
          nuestra historia y compartir
          este momento con nosotros.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Preguntas;