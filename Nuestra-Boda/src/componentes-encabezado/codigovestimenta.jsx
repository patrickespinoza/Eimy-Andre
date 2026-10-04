import React from "react";
import { motion } from "framer-motion";

/* =========================================
   DRESS CODE — EIMY & SONI

   FONDO:
   - Verde olivo sólido

   TARJETAS:
   - Damas: blanco
   - Caballeros: blanco
   - Solo adultos: blanco

   DAMAS:
   - 4 colores verdes en círculos
   - Blanco únicamente como texto

   CABALLEROS:
   - Beige como color a omitir
   - Solo círculo beige

   GENERAL:
   - Sin iconos
   - Sin degradados
   - Estilo clásico / elegante
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",
  oliveMedium: "#626126",

  white: "#FFFFFF",
  ivory: "#F7F4EC",
  ivoryLight: "#FCFBF7",

  beige: "#D7C8AA",
  beigeDark: "#B7A581",

  ink: "#292B24",
  gray: "#6E6B61",
};

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   COLORES RESERVADOS PARA DAMAS
========================================= */

const reservedColors = [
  {
    name: "Olivo",
    color: "#626126",
  },
  {
    name: "Verde lima",
    color: "#B8B533",
  },
  {
    name: "Verde salvia",
    color: "#A8C38E",
  },
  {
    name: "Verde bosque",
    color: "#30422B",
  },
];

/* =========================================
   ANIMACIONES
========================================= */

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
      ease,
    },
  },
};

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
      viewBox="0 0 150 250"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M31 238C54 202 67 166 76 126C85 86 99 48 126 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M56 190C39 181 29 166 28 147"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M69 150C89 142 103 127 109 108"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M80 111C62 102 53 88 52 70"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M96 70C111 62 121 50 126 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M28 147C44 149 55 160 56 178C40 174 30 164 28 147Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M109 108C94 108 82 118 74 134C91 132 103 123 109 108Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M52 70C67 73 77 84 80 100C64 97 54 87 52 70Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M126 34C112 36 102 44 96 58C111 56 121 48 126 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR CLÁSICO
========================================= */

function DecorativeDivider({ light = false }) {
  const lineColor = light
    ? "rgba(247,244,236,0.45)"
    : "rgba(63,74,44,0.32)";

  const diamondColor = light
    ? palette.ivory
    : palette.olive;

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: lineColor,
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
          borderColor: diamondColor,
        }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: lineColor,
        }}
      />
    </div>
  );
}

/* =========================================
   PALETA DE COLORES DAMAS
========================================= */

function ReservedColorPalette() {
  return (
    <div className="mt-8 w-full">
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.35em]
          sm:text-[9px]
        "
        style={{
          color: palette.oliveLight,
        }}
      >
        Colores reservados
      </p>

      {/* COLORES VERDES */}

      <div
        className="
          mx-auto
          mt-6
          flex
          max-w-[360px]
          flex-wrap
          items-start
          justify-center
          gap-x-4
          gap-y-5
          sm:gap-x-5
        "
      >
        {reservedColors.map((item, index) => (
          <motion.div
            key={item.name}
            className="
              flex
              w-[58px]
              flex-col
              items-center
              text-center
              sm:w-[66px]
            "
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.25 + index * 0.08,
              ease,
            }}
          >
            <div
              className="
                relative
                h-[46px]
                w-[46px]
                rounded-full
                border
                sm:h-[52px]
                sm:w-[52px]
              "
              style={{
                backgroundColor: item.color,
                borderColor: "rgba(41,43,36,0.08)",
                boxShadow: "0 7px 16px rgba(41,43,36,0.08)",
              }}
            >
              <div
                className="
                  absolute
                  inset-[4px]
                  rounded-full
                  border
                "
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              />
            </div>

            <p
              className="
                mt-2
                font-serif
                text-[9px]
                leading-tight
                sm:text-[10px]
              "
              style={{
                color: palette.gray,
              }}
            >
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* BLANCO SOLO COMO TEXTO */}

      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.55,
          ease,
        }}
        className="
          mx-auto
          mt-7
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <span
          className="h-px w-7"
          style={{
            backgroundColor: "rgba(63,74,44,0.28)",
          }}
        />

        <p
          className="
            font-serif
            text-[13px]
            uppercase
            tracking-[0.22em]
            sm:text-[14px]
          "
          style={{
            color: palette.oliveDark,
          }}
        >
          + Blanco
        </p>

        <span
          className="h-px w-7"
          style={{
            backgroundColor: "rgba(63,74,44,0.28)",
          }}
        />
      </motion.div>

      {/* ACLARACIÓN */}

      <p
        className="
          mx-auto
          mt-6
          max-w-[330px]
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
        Agradecemos a nuestras invitadas evitar estos tonos,
        ya que han sido reservados especialmente para este día.
      </p>
    </div>
  );
}

/* =========================================
   COLOR BEIGE — CABALLEROS
========================================= */

function BeigeReserved() {
  return (
    <div className="mt-8 flex flex-col items-center">
      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.35em]
          sm:text-[9px]
        "
        style={{
          color: palette.oliveLight,
        }}
      >
        Color a omitir
      </p>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.55,
          delay: 0.3,
          ease,
        }}
        className="
          relative
          mt-5
          h-[54px]
          w-[54px]
          rounded-full
          border
        "
        style={{
          backgroundColor: "#D8C7A6",
          borderColor: "rgba(63,74,44,0.18)",
          boxShadow: "0 7px 16px rgba(41,43,36,0.08)",
        }}
      >
        <div
          className="
            absolute
            inset-[4px]
            rounded-full
            border
          "
          style={{
            borderColor: "rgba(255,255,255,0.30)",
          }}
        />
      </motion.div>

      <p
        className="
          mt-3
          font-serif
          text-[11px]
          italic
        "
        style={{
          color: palette.gray,
        }}
      >
        Beige
      </p>
    </div>
  );
}

/* =========================================
   TARJETA DAMAS / CABALLEROS
========================================= */

function DressCard({
  title,
  note,
  children,
  index,
}) {
  return (
    <motion.article
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        overflow-hidden
        border
        px-6
        py-12
        text-center
        sm:px-9
        sm:py-14
      "
      style={{
        backgroundColor: palette.white,
        borderColor: "rgba(215,200,170,0.80)",
        boxShadow: "0 18px 45px rgba(31,37,22,0.15)",
      }}
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease,
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
          borderColor: "rgba(63,74,44,0.10)",
        }}
      />

      {/* NÚMERO */}

      <p
        className="
          absolute
          left-5
          top-5
          font-serif
          text-[10px]
          tracking-[0.22em]
          sm:left-7
          sm:top-7
        "
        style={{
          color: "rgba(63,74,44,0.42)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </p>

      {/* DETALLE SUPERIOR */}

      <p
        className="
          mt-2
          text-[8px]
          uppercase
          tracking-[0.4em]
          sm:text-[9px]
        "
        style={{
          color: palette.beigeDark,
        }}
      >
        Código de vestimenta
      </p>

      {/* SEPARADOR */}

      <div className="mt-6">
        <DecorativeDivider />
      </div>

      {/* TÍTULO */}

      <h3
        className="
          mt-7
          font-cursiveDancing
          text-[42px]
          font-normal
          leading-none
          sm:text-[50px]
        "
        style={{
          color: palette.olive,
        }}
      >
        {title}
      </h3>

      {/* VESTIMENTA FORMAL */}

      <p
        className="
          mt-5
          text-[12px]
          uppercase
          tracking-[0.32em]
          sm:text-[14px]
        "
        style={{
          color: palette.beigeDark,
        }}
      >
        Vestimenta formal
      </p>

      {/* NOTA */}

      {note && (
        <p
          className="
            mx-auto
            mt-6
            max-w-sm
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
          {note}
        </p>
      )}

      {children}
    </motion.article>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const DressCodePremium = () => {
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
          borderColor: "rgba(247,244,236,0.10)",
        }}
      />

      {/* =====================================
          ORNAMENTOS
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-16
          w-16
          text-[#F7F4EC]/30
          sm:left-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-5
          top-5
          h-16
          w-16
          rotate-90
          text-[#F7F4EC]/30
          sm:right-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-5
          left-5
          h-16
          w-16
          -rotate-90
          text-[#F7F4EC]/30
          sm:bottom-8
          sm:left-8
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-5
          right-5
          h-16
          w-16
          rotate-180
          text-[#F7F4EC]/30
          sm:bottom-8
          sm:right-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          RAMAS BOTÁNICAS
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-10
          h-[270px]
          w-[160px]
          -rotate-12
          text-[#F7F4EC]/10
          sm:h-[330px]
          sm:w-[190px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-10
          -top-16
          h-[270px]
          w-[160px]
          rotate-[168deg]
          text-[#F7F4EC]/10
          sm:h-[330px]
          sm:w-[190px]
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
            ENCABEZADO
        ===================================== */}

        <motion.div
          className="
            mx-auto
            mb-14
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
          "
          initial={{
            opacity: 0,
            y: 20,
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
            ease,
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.48em]
              sm:text-[10px]
            "
            style={{
              color: palette.beige,
            }}
          >
            Detalles de la celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider light />
          </div>

          <h2
            className="
              mt-7
              font-cursiveDancing
              text-[47px]
              font-normal
              leading-none
              sm:text-[62px]
              md:text-[68px]
            "
            style={{
              color: palette.white,
            }}
          >
            Código de vestimenta
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-[16px]
              px-4
            "
            style={{
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Nos encantará verte elegante y acorde con este día
            tan especial para nosotros.
          </p>
        </motion.div>

        {/* =====================================
            DAMAS / CABALLEROS
        ===================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            gap-7
            sm:gap-9
            md:grid-cols-2
          "
        >
          {/* DAMAS */}

          <DressCard
            title="Damas"
            index={0}
          >
            <ReservedColorPalette />
          </DressCard>

          {/* CABALLEROS */}

          <DressCard
            title="Caballeros"
            note="Agradecemos omitir el color beige en su vestimenta."
            index={1}
          >
            <BeigeReserved />
          </DressCard>
        </div>

        {/* =====================================
            SOLO ADULTOS — TARJETA BLANCA
        ===================================== */}

        <motion.div
          className="
            relative
            mx-auto
            mt-10
            max-w-3xl
            overflow-hidden
            border
            px-7
            py-12
            text-center
            sm:mt-12
            sm:px-12
            sm:py-14
          "
          style={{
            backgroundColor: palette.white,
            borderColor: "rgba(215,200,170,0.80)",
            boxShadow: "0 18px 45px rgba(31,37,22,0.15)",
          }}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
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
              borderColor: "rgba(63,74,44,0.10)",
            }}
          />

          {/* CONTENIDO */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
            "
          >
            {/* ETIQUETA */}

            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.46em]
                sm:text-[9px]
              "
              style={{
                color: palette.beigeDark,
              }}
            >
              Consideración especial
            </p>

            {/* SEPARADOR */}

            <div className="mt-5">
              <DecorativeDivider />
            </div>

            {/* TÍTULO */}

            <h3
              className="
                mt-7
                font-cursiveDancing
                text-[42px]
                font-normal
                leading-none
                sm:text-[50px]
              "
              style={{
                color: palette.olive,
              }}
            >
              Celebración solo para adultos
            </h3>

            {/* TEXTO */}

            <p
              className="
                mx-auto
                mt-7
                max-w-[610px]
                font-serif
                text-[14px]
                leading-[1.9]
                sm:text-[16px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Sabemos lo importantes que son los pequeños en nuestras vidas,
              sin embargo, queremos que esta noche sea una ocasión para
              celebrar, brindar y disfrutar juntos.
            </p>

            <p
              className="
                mx-auto
                mt-4
                max-w-[610px]
                font-serif
                text-[14px]
                leading-[1.9]
                sm:text-[16px]
              "
              style={{
                color: palette.ink,
              }}
            >
              Por ello, será una celebración solo para adultos.
              Agradecemos su comprensión.
            </p>

            {/* FRASE FINAL */}

            <p
              className="
                mt-7
                font-serif
                text-[15px]
                italic
                sm:text-[17px]
              "
              style={{
                color: palette.olive,
              }}
            >
              ¡Esperamos compartir este día contigo!
            </p>

            {/* DETALLE FINAL */}

            <div className="mt-7">
              <DecorativeDivider />
            </div>

            
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;