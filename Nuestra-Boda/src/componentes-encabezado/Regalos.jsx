import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================
   MESA DE REGALOS — EIMY & SONI
========================================= */

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

const DATOS_BANCARIOS = {
  banco: "Banregio",
  cuenta: "4741 7429 8520 9983",
  titular: "Andre Soni Rubio Hdz",
  concepto: "Boda E y S",
};

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

function GiftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect
        x="3.5"
        y="9"
        width="17"
        height="11"
      />

      <path d="M2.5 6h19v4h-19z" />

      <path d="M12 6v14" />

      <path d="M12 6H8.8C6.7 6 5.5 4.9 5.5 3.6 5.5 2.4 6.5 2 7.4 2 9.6 2 12 6 12 6Z" />

      <path d="M12 6h3.2c2.1 0 3.3-1.1 3.3-2.4 0-1.2-1-1.6-1.9-1.6C14.4 2 12 6 12 6Z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="0.5"
      />

      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path d="M3 9h18" />
      <path d="M5 9v8" />
      <path d="M9.5 9v8" />
      <path d="M14.5 9v8" />
      <path d="M19 9v8" />
      <path d="M3 18h18" />
      <path d="M2 21h20" />
      <path d="m12 3 9 4H3l9-4Z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="11"
        height="11"
        rx="1"
      />

      <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
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
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </svg>
  );
}

/* =========================================
   BOTÓN COPIAR
========================================= */

function CopyButton({
  onClick,
  copied,
  title,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={title}
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        border
      "
      style={{
        backgroundColor: copied
          ? palette.olive
          : palette.white,

        borderColor: copied
          ? palette.olive
          : "rgba(63,74,44,0.28)",

        color: copied
          ? palette.white
          : palette.olive,
      }}
      whileHover={{
        y: -1,
        borderColor: palette.olive,
      }}
      whileTap={{
        scale: 0.94,
      }}
    >
      {copied ? (
        <CheckIcon />
      ) : (
        <CopyIcon />
      )}
    </motion.button>
  );
}

/* =========================================
   FILA DE DATOS
========================================= */

function DataRow({
  label,
  value,
  onCopy,
  copied,
}) {
  return (
    <div
      className="
        border-b
        py-5
        last:border-b-0
      "
      style={{
        borderColor: "rgba(63,74,44,0.14)",
      }}
    >
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.3em]
        "
        style={{
          color: palette.gray,
        }}
      >
        {label}
      </p>

      <div
        className="
          mt-3
          flex
          min-w-0
          items-center
          justify-between
          gap-4
        "
      >
        <p
          className="
            min-w-0
            flex-1
            break-words
            font-serif
            text-[16px]
            leading-7
            sm:text-[18px]
          "
          style={{
            color: palette.oliveDark,
            overflowWrap: "anywhere",
          }}
        >
          {value}
        </p>

        {onCopy && (
          <CopyButton
            onClick={onCopy}
            copied={copied}
            title={
              copied
                ? "Copiado"
                : `Copiar ${label.toLowerCase()}`
            }
          />
        )}
      </div>

      <AnimatePresence>
        {copied && (
          <motion.p
            initial={{
              opacity: 0,
              y: -3,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              mt-2
              text-right
              text-[7px]
              uppercase
              tracking-[0.2em]
            "
            style={{
              color: palette.olive,
            }}
          >
            Copiado
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================
   TARJETA DE OPCIÓN
========================================= */

function GiftOption({
  number,
  icon,
  title,
  children,
  delay = 0,
}) {
  return (
    <motion.article
      className="
        relative
        flex
        h-full
        min-h-[470px]
        flex-col
        items-center
        overflow-hidden
        border
        px-5
        py-10
        text-center
        sm:px-7
        sm:py-11
      "
      style={{
        backgroundColor: palette.ivory,
        borderColor: "rgba(63,74,44,0.30)",
      }}
      initial={{
        opacity: 0,
        y: 24,
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
        delay,
      }}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-[7px]
          border
        "
        style={{
          borderColor: "rgba(63,74,44,0.10)",
        }}
      />

      <div
        className="
          relative
          z-10
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          color: palette.olive,
          borderColor: "rgba(63,74,44,0.40)",
        }}
      >
        {icon}
      </div>

      <p
        className="
          relative
          z-10
          mt-7
          text-[8px]
          uppercase
          tracking-[0.38em]
        "
        style={{
          color: palette.olive,
        }}
      >
        Opción {number}
      </p>

      <div className="relative z-10 mt-5">
        <DecorativeDivider compact />
      </div>

      <h3
        className="
          relative
          z-10
          mt-7
          font-cursiveDancing
          text-[37px]
          leading-tight
          sm:text-[42px]
        "
        style={{
          color: palette.oliveDark,
        }}
      >
        {title}
      </h3>

      <div
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          items-center
        "
      >
        {children}
      </div>
    </motion.article>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function Regalos() {
  const [modalTransferencia, setModalTransferencia] =
    useState(false);

  const [copiado, setCopiado] =
    useState(null);

  /* =========================================
     COPIAR
  ========================================= */

  const copiarTexto = async (
    texto,
    tipo
  ) => {
    try {
      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {
        await navigator.clipboard.writeText(
          texto
        );
      } else {
        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value = texto;

        textarea.style.position =
          "fixed";

        textarea.style.opacity = "0";

        document.body.appendChild(
          textarea
        );

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(
          textarea
        );
      }

      setCopiado(tipo);
    } catch (error) {
      console.error(
        "No fue posible copiar:",
        error
      );
    }
  };

  /* =========================================
     QUITAR AVISO COPIADO
  ========================================= */

  useEffect(() => {
    if (!copiado) return undefined;

    const timer =
      window.setTimeout(() => {
        setCopiado(null);
      }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [copiado]);

  /* =========================================
     BLOQUEAR SCROLL CUANDO ABRE MODAL
  ========================================= */

  useEffect(() => {
    if (!modalTransferencia) {
      return undefined;
    }

    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    return () => {
      document.body.style.overflow =
        overflowAnterior;
    };
  }, [modalTransferencia]);

  /* =========================================
     CERRAR MODAL CON ESCAPE
  ========================================= */

  useEffect(() => {
    if (!modalTransferencia) {
      return undefined;
    }

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setModalTransferencia(false);
      }
    };

    window.addEventListener(
      "keydown",
      cerrarConEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        cerrarConEscape
      );
    };
  }, [modalTransferencia]);

  return (
    <>
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
          backgroundColor:
            palette.white,
        }}
      >
        {/* =================================
            MARCOS
        ================================= */}

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
              "rgba(63,74,44,0.26)",
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
              "rgba(63,74,44,0.10)",
          }}
        />

        {/* =================================
            ESQUINAS
        ================================= */}

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

        {/* =================================
            BOTÁNICOS
        ================================= */}

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

        {/* =================================
            CONTENIDO
        ================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-6xl
          "
        >
          {/* ENCABEZADO */}

          <motion.div
            className="
              mx-auto
              flex
              max-w-3xl
              flex-col
              items-center
              text-center
            "
            initial={{
              opacity: 0,
              y: 18,
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
            }}
          >
            <p
              className="
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
              Un detalle para nuestro
              hogar
            </p>

            <div className="mt-5">
              <DecorativeDivider />
            </div>

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
                color:
                  palette.oliveDark,
              }}
            >
              Regalos
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                px-4
                font-serif
                text-[15px]
                italic
                leading-8
                sm:text-[17px]
              "
              style={{
                color: palette.gray,
              }}
            >
              Su presencia en este día
              es el regalo más
              importante para nosotros.
              Si desean tener un detalle
              adicional, ponemos a su
              disposición las siguientes
              opciones.
            </p>
          </motion.div>

          {/* =================================
              TRES OPCIONES
          ================================= */}

          <div
            className="
              mx-auto
              mt-14
              grid
              w-full
              max-w-6xl
              grid-cols-1
              gap-6
              md:grid-cols-3
              md:items-stretch
            "
          >
            {/* ===============================
                OPCIÓN 01
                MESA DE REGALOS
            =============================== */}

            <GiftOption
              number="01"
              icon={<GiftIcon />}
              title="Mesa de Regalos"
              delay={0.05}
            >
              <p
                className="
                  mt-7
                  font-serif
                  text-[15px]
                  leading-8
                  sm:text-base
                "
                style={{
                  color: palette.ink,
                }}
              >
                El día de nuestra
                celebración tendremos
                una mesa de regalos
                destinada especialmente
                para recibir sus
                obsequios.
              </p>

              <div className=" pt-9">
                <DecorativeDivider
                  compact
                />

                <p
                  className="
                    mt-5
                    font-cursiveDancing
                    text-[24px]
                    sm:text-[27px]
                  "
                  style={{
                    color:
                      palette.olive,
                  }}
                >
                  Con cariño,
                  <br />
                  Eimy & Soni
                </p>
              </div>
            </GiftOption>

            {/* ===============================
                OPCIÓN 02
                LLUVIA DE SOBRES
            =============================== */}

            <GiftOption
              number="02"
              icon={<EnvelopeIcon />}
              title="Lluvia de Sobres"
              delay={0.12}
            >
              <p
                className="
                  mt-7
                  font-serif
                  text-[15px]
                  leading-8
                  sm:text-base
                "
                style={{
                  color: palette.ink,
                }}
              >
                También contaremos con
                nuestra tradicional
                lluvia de sobres durante
                la celebración.
              </p>


              <div className=" pt-9">
                <DecorativeDivider
                  compact
                />

                <p
                  className="
                    mt-5
                    font-cursiveDancing
                    text-[24px]
                    sm:text-[27px]
                  "
                  style={{
                    color:
                      palette.olive,
                  }}
                >
                  Gracias por su cariño
                </p>
              </div>
            </GiftOption>

            {/* ===============================
                OPCIÓN 03
                TRANSFERENCIA
            =============================== */}

            <GiftOption
              number="03"
              icon={<BankIcon />}
              title="Transferencia"
              delay={0.19}
            >
              <p
                className="
                  mt-7
                  font-serif
                  text-[15px]
                  leading-8
                  sm:text-base
                "
                style={{
                  color: palette.ink,
                }}
              >
                Si prefieren hacernos
                llegar su obsequio
                mediante transferencia
                bancaria, ponemos a su
                disposición esta opción.
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[14px]
                  italic
                  leading-7
                  sm:text-[15px]
                "
                style={{
                  color: palette.gray,
                }}
              >
                Los datos bancarios
                podrán consultarlos al
                seleccionar el siguiente
                botón.
              </p>

              <div
                className="
                  mt-auto
                  w-full
                  pt-9
                "
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    setModalTransferencia(
                      true
                    )
                  }
                  className="
                    mx-auto
                    flex
                    w-full
                    max-w-[280px]
                    items-center
                    justify-center
                    gap-3
                    border
                    px-5
                    py-4
                    text-[9px]
                    uppercase
                    tracking-[0.22em]
                    sm:text-[10px]
                  "
                  style={{
                    backgroundColor:
                      palette.olive,

                    borderColor:
                      palette.olive,

                    color:
                      palette.white,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <BankIcon />

                  <span>
                    Ver datos de
                    transferencia
                  </span>
                </motion.button>
              </div>
            </GiftOption>
          </div>

          {/* =================================
              CIERRE
          ================================= */}

          <motion.div
            className="
              mx-auto
              mt-14
              max-w-2xl
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
              duration: 0.85,
              delay: 0.22,
            }}
          >
            <DecorativeDivider />

            <p
              className="
                mt-7
                px-4
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
              Gracias por acompañarnos
              y por formar parte de este
              nuevo capítulo de nuestra
              historia.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* =====================================
          MODAL TRANSFERENCIA
      ===================================== */}

      <AnimatePresence>
        {modalTransferencia && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-black/60
              px-4
              py-8
              sm:px-6
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
              duration: 0.25,
            }}
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                setModalTransferencia(
                  false
                );
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-transferencia"
              className="
                relative
                my-auto
                w-full
                max-w-[520px]
                overflow-hidden
                border
                px-5
                py-8
                sm:px-9
                sm:py-10
              "
              style={{
                backgroundColor:
                  palette.ivoryLight,

                borderColor:
                  "rgba(215,200,170,0.75)",
              }}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{
                duration: 0.35,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              {/* MARCO INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[7px]
                  border
                "
                style={{
                  borderColor:
                    "rgba(63,74,44,0.12)",
                }}
              />

              {/* ESQUINAS */}

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
                  right-3
                  top-3
                  h-14
                  w-14
                  rotate-90
                  text-[#3F4A2C]/20
                "
              />

              <CornerOrnament
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  left-3
                  h-14
                  w-14
                  -rotate-90
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
                onClick={() =>
                  setModalTransferencia(
                    false
                  )
                }
                aria-label="Cerrar datos de transferencia"
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                "
                style={{
                  backgroundColor:
                    palette.white,

                  borderColor:
                    "rgba(63,74,44,0.25)",

                  color:
                    palette.olive,
                }}
                whileHover={{
                  rotate: 4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.94,
                }}
              >
                <CloseIcon />
              </motion.button>

              {/* CONTENIDO */}

              <div
                className="
                  relative
                  z-20
                  mx-auto
                  w-full
                  pt-5
                "
              >
                <div
                  className="
                    mx-auto
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
                  <BankIcon />
                </div>

                <p
                  className="
                    mt-6
                    text-center
                    text-[8px]
                    uppercase
                    tracking-[0.38em]
                  "
                  style={{
                    color:
                      palette.beigeDark,
                  }}
                >
                  Opción 03
                </p>

                <h3
                  id="titulo-transferencia"
                  className="
                    mt-4
                    text-center
                    font-cursiveDancing
                    text-[42px]
                    leading-none
                    sm:text-[50px]
                  "
                  style={{
                    color:
                      palette.oliveDark,
                  }}
                >
                  Transferencia
                </h3>

                <div className="mt-5">
                  <DecorativeDivider
                    compact
                  />
                </div>

                <p
                  className="
                    mx-auto
                    mt-5
                    max-w-sm
                    text-center
                    font-serif
                    text-[13px]
                    italic
                    leading-6
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.gray,
                  }}
                >
                  Si desean hacernos
                  llegar su obsequio por
                  este medio, estos son
                  nuestros datos
                  bancarios.
                </p>

                {/* ===========================
                    DATOS
                =========================== */}

                <div
                  className="
                    mt-7
                    border-y
                    px-1
                    sm:px-2
                  "
                  style={{
                    borderColor:
                      "rgba(63,74,44,0.20)",
                  }}
                >
                  {/* BANCO */}

                  <DataRow
                    label="Banco"
                    value={
                      DATOS_BANCARIOS.banco
                    }
                  />

                  {/* CUENTA */}

                  <DataRow
                    label="Cuenta / Tarjeta"
                    value={
                      DATOS_BANCARIOS.cuenta
                    }
                    copied={
                      copiado === "cuenta"
                    }
                    onCopy={() =>
                      copiarTexto(
                        DATOS_BANCARIOS.cuenta.replace(
                          /\s/g,
                          ""
                        ),
                        "cuenta"
                      )
                    }
                  />

                  {/* TITULAR */}

                  <DataRow
                    label="Titular"
                    value={
                      DATOS_BANCARIOS.titular
                    }
                    copied={
                      copiado === "titular"
                    }
                    onCopy={() =>
                      copiarTexto(
                        DATOS_BANCARIOS.titular,
                        "titular"
                      )
                    }
                  />

                  {/* CONCEPTO */}

                  <DataRow
                    label="Concepto sugerido"
                    value={
                      DATOS_BANCARIOS.concepto
                    }
                    copied={
                      copiado === "concepto"
                    }
                    onCopy={() =>
                      copiarTexto(
                        DATOS_BANCARIOS.concepto,
                        "concepto"
                      )
                    }
                  />
                </div>

                <p
                  className="
                    mt-7
                    text-center
                    font-cursiveDancing
                    text-[26px]
                    sm:text-[29px]
                  "
                  style={{
                    color:
                      palette.olive,
                  }}
                >
                  Gracias por su cariño
                </p>

                <motion.button
                  type="button"
                  onClick={() =>
                    setModalTransferencia(
                      false
                    )
                  }
                  className="
                    mx-auto
                    mt-7
                    block
                    border
                    px-8
                    py-3
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                  "
                  style={{
                    backgroundColor:
                      palette.white,

                    borderColor:
                      "rgba(63,74,44,0.32)",

                    color:
                      palette.oliveDark,
                  }}
                  whileHover={{
                    borderColor:
                      palette.olive,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  Cerrar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}