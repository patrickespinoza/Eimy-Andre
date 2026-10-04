import { motion } from "framer-motion";
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

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
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
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
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
      <rect x="3" y="5.5" width="18" height="13" rx="0.5" />
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

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
    >
      <path d="m3 3 18 18" />
      <path d="M10.6 6.15A10.7 10.7 0 0 1 12 6c6 0 9.5 6 9.5 6a15.5 15.5 0 0 1-2.1 2.8" />
      <path d="M6.2 6.2C3.8 7.8 2.5 12 2.5 12s3.5 6 9.5 6a9.8 9.8 0 0 0 3.4-.6" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
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
    >
      <rect x="8" y="8" width="11" height="11" rx="1" />
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
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================
   BOTÓN PEQUEÑO
========================================= */

function ActionButton({
  children,
  onClick,
  title,
  active = false,
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
        backgroundColor: active
          ? palette.olive
          : palette.white,
        borderColor: "rgba(63,74,44,0.28)",
        color: active
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
      {children}
    </motion.button>
  );
}

/* =========================================
   FILA DE DATOS
========================================= */

function DataRow({
  label,
  children,
  onCopy,
  copied,
  extraButton = null,
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
          items-center
          justify-between
          gap-3
        "
      >
        <div
          className="
            min-w-0
            flex-1
            text-left
          "
        >
          {children}
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
          "
        >
          {extraButton}

          {onCopy && (
            <ActionButton
              onClick={onCopy}
              title={
                copied
                  ? "Copiado"
                  : `Copiar ${label.toLowerCase()}`
              }
              active={copied}
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
            </ActionButton>
          )}
        </div>
      </div>

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
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function Regalos() {
  const [mostrarCuenta, setMostrarCuenta] = useState(false);

  const [copiado, setCopiado] = useState(null);

  /* =========================================
     COPIAR
  ========================================= */

  const copiarTexto = async (texto, tipo) => {
    try {
      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {
        await navigator.clipboard.writeText(texto);
      } else {
        const textarea = document.createElement("textarea");

        textarea.value = texto;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);
      }

      setCopiado(tipo);
    } catch (error) {
      console.error("No fue posible copiar:", error);
    }
  };

  /* =========================================
     QUITAR AVISO COPIADO
  ========================================= */

  useEffect(() => {
    if (!copiado) return undefined;

    const timer = window.setTimeout(() => {
      setCopiado(null);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [copiado]);

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
        backgroundColor: palette.white,
      }}
    >
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
          borderColor: "rgba(63,74,44,0.26)",
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
          borderColor: "rgba(63,74,44,0.10)",
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
        {/* =====================================
            ENCABEZADO
        ===================================== */}

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
            Un detalle para nuestro hogar
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
              color: palette.oliveDark,
            }}
          >
            Mesa de regalos
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              font-serif
              text-[15px]
              italic
              leading-8
              sm:text-[17px]
              px-4
            "
            style={{
              color: palette.gray,
            }}
          >
            Su presencia en este día es el regalo más
            importante para nosotros.
          </p>
        </motion.div>

        {/* =====================================
            TARJETAS
        ===================================== */}

        <div
          className="
            mx-auto
            mt-14
            grid
            w-full
            max-w-4xl
            gap-6
            md:grid-cols-2
            md:items-start
          "
        >
          {/* =================================
              LLUVIA DE SOBRES
          ================================= */}

          <motion.article
            className="
              relative
              flex
              min-h-[560px]
              flex-col
              items-center
              overflow-hidden
              border
              px-6
              py-11
              text-center
              sm:px-8
              sm:py-12
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
              delay: 0.08,
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
              <EnvelopeIcon />
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
              Opción 01
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
                text-[40px]
                leading-tight
                sm:text-[46px]
              "
              style={{
                color: palette.oliveDark,
              }}
            >
              Lluvia de Sobres
            </h3>

            <p
              className="
                relative
                z-10
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
              Su presencia en este día es el regalo más
              importante para nosotros.
            </p>

            <p
              className="
                relative
                z-10
                mt-4
                font-serif
                text-[15px]
                leading-8
                sm:text-base
              "
              style={{
                color: palette.gray,
              }}
            >
              Si desean tener un detalle adicional,
              contaremos con un espacio destinado para
              quienes deseen hacernos llegar su obsequio
              en físico o en efectivo el día de la
              celebración.
            </p>

            <div className="relative z-10 mt-auto pt-9">
              <DecorativeDivider compact />

              <p
                className="
                  mt-5
                  font-cursiveDancing
                  text-[25px]
                  sm:text-[28px]
                "
                style={{
                  color: palette.olive,
                }}
              >
                Con cariño, Eimy & Soni
              </p>
            </div>
          </motion.article>

          {/* =================================
              TRANSFERENCIA
          ================================= */}

          <motion.article
            className="
              relative
              overflow-hidden
              border
              px-5
              py-10
              sm:px-8
              sm:py-12
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
              delay: 0.16,
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
                flex-col
                items-center
                text-center
              "
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
                  color: palette.olive,
                  borderColor: "rgba(63,74,44,0.40)",
                }}
              >
                <BankIcon />
              </div>

              <p
                className="
                  mt-7
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                "
                style={{
                  color: palette.olive,
                }}
              >
                Opción 02
              </p>

              <div className="mt-5">
                <DecorativeDivider compact />
              </div>

              <h3
                className="
                  mt-7
                  font-cursiveDancing
                  text-[40px]
                  leading-tight
                  sm:text-[46px]
                "
                style={{
                  color: palette.oliveDark,
                }}
              >
                Transferencia
              </h3>

              <p
                className="
                  mt-5
                  max-w-sm
                  font-serif
                  text-[14px]
                  leading-7
                  sm:text-[15px]
                "
                style={{
                  color: palette.gray,
                }}
              >
                Si prefieren hacernos llegar su obsequio
                mediante transferencia, ponemos a su
                disposición los siguientes datos.
              </p>
            </div>

            {/* =================================
                DATOS BANCARIOS
            ================================= */}

            <div
              className="
                relative
                z-10
                mt-8
                border-y
                px-1
                sm:px-2
              "
              style={{
                borderColor: "rgba(63,74,44,0.20)",
              }}
            >
              {/* BANCO */}

              <div
                className="
                  border-b
                  py-5
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
                  Banco
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[19px]
                    sm:text-[20px]
                  "
                  style={{
                    color: palette.oliveDark,
                  }}
                >
                  {DATOS_BANCARIOS.banco}
                </p>
              </div>

              {/* CUENTA / TARJETA */}

              <DataRow
                label="Cuenta / Tarjeta"
                copied={copiado === "cuenta"}
                onCopy={() =>
                  copiarTexto(
                    DATOS_BANCARIOS.cuenta.replace(/\s/g, ""),
                    "cuenta"
                  )
                }
                extraButton={
                  <ActionButton
                    onClick={() =>
                      setMostrarCuenta(
                        (valorActual) => !valorActual
                      )
                    }
                    title={
                      mostrarCuenta
                        ? "Ocultar número"
                        : "Mostrar número"
                    }
                  >
                    {mostrarCuenta ? (
                      <EyeOffIcon />
                    ) : (
                      <EyeIcon />
                    )}
                  </ActionButton>
                }
              >
                <p
                  className="
                    font-serif
                    text-[17px]
                    tracking-[0.035em]
                    sm:text-[19px]
                  "
                  style={{
                    color: palette.oliveDark,
                  }}
                >
                  {mostrarCuenta
                    ? DATOS_BANCARIOS.cuenta
                    : "•••• •••• •••• ••••"}
                </p>
              </DataRow>

              {/* TITULAR */}

              <DataRow
                label="Titular"
                copied={copiado === "titular"}
                onCopy={() =>
                  copiarTexto(
                    DATOS_BANCARIOS.titular,
                    "titular"
                  )
                }
              >
                <p
                  className="
                    font-serif
                    text-[16px]
                    leading-6
                    sm:text-[17px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  {DATOS_BANCARIOS.titular}
                </p>
              </DataRow>

              {/* CONCEPTO */}

              <DataRow
                label="Concepto sugerido"
                copied={copiado === "concepto"}
                onCopy={() =>
                  copiarTexto(
                    DATOS_BANCARIOS.concepto,
                    "concepto"
                  )
                }
              >
                <div
                  className="
                    font-serif
                    text-[15px]
                    leading-6
                    sm:text-[16px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >



                  <p>Boda E y S</p>
                </div>
              </DataRow>
            </div>

            <p
              className="
                relative
                z-10
                mt-7
                text-center
                font-cursiveDancing
                text-[25px]
                sm:text-[28px]
              "
              style={{
                color: palette.olive,
              }}
            >
              Gracias por su cariño
            </p>
          </motion.article>
        </div>

        {/* =====================================
            CIERRE
        ===================================== */}

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
            Gracias por acompañarnos y por formar parte
            de este nuevo capítulo de nuestra historia.
          </p>


        </motion.div>
      </div>
    </motion.section>
  );
}