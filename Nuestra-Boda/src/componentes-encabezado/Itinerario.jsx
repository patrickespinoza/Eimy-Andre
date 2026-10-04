import { motion } from "framer-motion";

/* =========================================
   ITINERARIO
   EIMY & SONI

   - Fondo blanco / marfil
   - Verde olivo
   - Estilo clásico
   - Solo 2 momentos
   - Sin degradados
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",

  white: "#FFFFFF",
  ivory: "#F7F4EC",

  beige: "#D7C8AA",
  beigeDark: "#B7A581",

  ink: "#292B24",
  gray: "#706E64",
};

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   EVENTOS
========================================= */

const events = [
  {
    time: "5:00",
    period: "p.m.",
    title: "Ceremonia Religiosa",
    subtitle: "El comienzo de nuestro para siempre",
    icon: "church",
  },
  {
    time: "7:00",
    period: "p.m.",
    title: "Recepción",
    subtitle: "Celebremos juntos este día tan especial",
    icon: "glass",
  },
];

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
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: "rgba(63,74,44,0.38)",
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
          borderColor: palette.olive,
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: "rgba(63,74,44,0.38)",
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function EventIcon({ type }) {
  const commonProps = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.15",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-7 w-7 sm:h-8 sm:w-8",
    "aria-hidden": true,
  };

  /* IGLESIA */

  if (type === "church") {
    return (
      <svg {...commonProps}>
        <path d="M16 3v5" />
        <path d="M13.5 5.5h5" />

        <path d="M9 14 16 8l7 6" />

        <path d="M10.5 13.2V27h11V13.2" />

        <path d="M6 18h4.5" />
        <path d="M21.5 18H26" />

        <path d="M7.5 18v9" />
        <path d="M24.5 18v9" />

        <path d="M14 27v-6a2 2 0 0 1 4 0v6" />

        <path d="M5 27h22" />
      </svg>
    );
  }

  /* COPA */

  return (
    <svg {...commonProps}>
      <path d="M9 5h14l-1.4 8.3A5.7 5.7 0 0 1 16 18a5.7 5.7 0 0 1-5.6-4.7L9 5Z" />

      <path d="M16 18v8" />

      <path d="M11.5 27h9" />

      <path d="M10.2 10h11.6" />
    </svg>
  );
}

/* =========================================
   EVENTO
========================================= */

function TimelineEvent({ event, index, isLast }) {
  return (
    <motion.div
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        text-center
      "
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease,
      }}
    >
      {/* =====================================
          NÚMERO DEL MOMENTO
      ===================================== */}

      <p
        className="
          mb-5
          text-[8px]
          uppercase
          tracking-[0.42em]
          sm:text-[9px]
        "
        style={{
          color: palette.beigeDark,
        }}
      >
        Momento {String(index + 1).padStart(2, "0")}
      </p>

      {/* =====================================
          ICONO
      ===================================== */}

      <motion.div
        className="
          relative
          z-10
          flex
          h-[76px]
          w-[76px]
          items-center
          justify-center
          rounded-full
          border
          bg-white
          sm:h-[86px]
          sm:w-[86px]
        "
        style={{
          borderColor: "rgba(63,74,44,0.42)",
          color: palette.olive,
        }}
        whileInView={{
          scale: [0.92, 1],
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1 + index * 0.15,
          ease,
        }}
      >
        {/* CÍRCULO INTERIOR */}

        <div
          className="
            absolute
            inset-[5px]
            rounded-full
            border
          "
          style={{
            borderColor: "rgba(63,74,44,0.14)",
          }}
        />

        <EventIcon type={event.icon} />
      </motion.div>

      {/* =====================================
          HORA
      ===================================== */}

      <div
        className="
          mt-7
          flex
          items-end
          justify-center
          gap-2
        "
      >
        <p
          className="
            font-serif
            text-[46px]
            font-normal
            leading-none
            tracking-[-0.03em]
            sm:text-[58px]
          "
          style={{
            color: palette.oliveDark,
          }}
        >
          {event.time}
        </p>

        <p
          className="
            mb-[5px]
            font-serif
            text-[13px]
            italic
            sm:text-[15px]
          "
          style={{
            color: palette.oliveLight,
          }}
        >
          {event.period}
        </p>
      </div>

      {/* =====================================
          NOMBRE
      ===================================== */}

      <h3
        className="
          mt-4
          max-w-[420px]
          font-serif
          text-[24px]
          font-normal
          leading-tight
          sm:text-[29px]
        "
        style={{
          color: palette.ink,
        }}
      >
        {event.title}
      </h3>

      {/* =====================================
          FRASE
      ===================================== */}

      <p
        className="
          mx-auto
          mt-3
          max-w-[370px]
          font-serif
          text-[13px]
          italic
          leading-6
          sm:text-[15px]
        "
        style={{
          color: palette.gray,
        }}
      >
        {event.subtitle}
      </p>

      {/* =====================================
          LÍNEA HACIA EL SIGUIENTE EVENTO
      ===================================== */}

      {!isLast && (
        <div
          className="
            relative
            my-10
            h-[95px]
            w-px
            sm:my-12
            sm:h-[110px]
          "
          style={{
            backgroundColor: "rgba(63,74,44,0.25)",
          }}
        >
          {/* ROMBO CENTRAL */}

          <span
            className="
              absolute
              left-1/2
              top-1/2
              h-[7px]
              w-[7px]
              -translate-x-1/2
              -translate-y-1/2
              rotate-45
              border
              bg-white
            "
            style={{
              borderColor: "rgba(63,74,44,0.48)",
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function ItinerarioRelojCentral() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
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
          borderColor: "rgba(63,74,44,0.30)",
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
          borderColor: "rgba(63,74,44,0.09)",
        }}
      />

      {/* =====================================
          ESQUINAS
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-16
          w-16
          text-[#3F4A2C]/25
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
          text-[#3F4A2C]/25
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
          text-[#3F4A2C]/25
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
          text-[#3F4A2C]/25
          sm:bottom-8
          sm:right-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          BOTÁNICOS
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-10
          -left-8
          h-[230px]
          w-[145px]
          -rotate-12
          text-[#3F4A2C]/7
          sm:h-[290px]
          sm:w-[175px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-10
          h-[230px]
          w-[145px]
          rotate-[168deg]
          text-[#3F4A2C]/7
          sm:h-[290px]
          sm:w-[175px]
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
          max-w-4xl
        "
      >
        {/* =====================================
            ENCABEZADO
        ===================================== */}

        <motion.div
          className="
            mx-auto
            flex
            max-w-2xl
            flex-col
            items-center
            text-center
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
          {/* TEXTO PEQUEÑO */}

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.48em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.beigeDark,
            }}
          >
            Nuestro gran día
          </p>

          {/* DIVISOR */}

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          {/* TÍTULO */}

          <h2
            className="
              mt-7
              font-cursiveDancing
              text-[48px]
              font-normal
              leading-none
              sm:text-[62px]
              md:text-[70px]
            "
            style={{
              color: palette.olive,
            }}
          >
            Itinerario
          </h2>

          {/* FRASE */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[500px]
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-[16px]
            "
            style={{
              color: palette.gray,
            }}
          >
            Dos momentos, un mismo día
            y una historia que recordaremos para siempre.
          </p>
        </motion.div>

        {/* =====================================
            FECHA
        ===================================== */}

        <motion.div
          className="
            mx-auto
            mb-16
            mt-12
            flex
            w-full
            max-w-[380px]
            items-center
            justify-center
            border-y
            py-6
            text-center
            sm:mb-20
            sm:mt-14
          "
          style={{
            borderColor: "rgba(63,74,44,0.22)",
          }}
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.1,
          }}
        >
          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.42em]
                sm:text-[9px]
              "
              style={{
                color: palette.beigeDark,
              }}
            >
              Viernes
            </p>

            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="h-px w-9 sm:w-12"
                style={{
                  backgroundColor: "rgba(63,74,44,0.28)",
                }}
              />

              <p
                className="
                  font-serif
                  text-[43px]
                  leading-none
                  sm:text-[50px]
                "
                style={{
                  color: palette.oliveDark,
                }}
              >
                27
              </p>

              <span
                className="h-px w-9 sm:w-12"
                style={{
                  backgroundColor: "rgba(63,74,44,0.28)",
                }}
              />
            </div>

            <p
              className="
                mt-3
                text-[9px]
                uppercase
                tracking-[0.36em]
                sm:text-[10px]
              "
              style={{
                color: palette.oliveLight,
              }}
            >
              Noviembre · 2026
            </p>
          </div>
        </motion.div>

        {/* =====================================
            LOS DOS MOMENTOS
        ===================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-2xl
          "
        >
          {events.map((event, index) => (
            <TimelineEvent
              key={`${event.time}-${event.title}`}
              event={event}
              index={index}
              isLast={index === events.length - 1}
            />
          ))}
        </div>

        {/* =====================================
            CIERRE
        ===================================== */}

        <motion.div
          className="
            mx-auto
            mt-16
            flex
            max-w-lg
            flex-col
            items-center
            text-center
            sm:mt-20
          "
          initial={{
            opacity: 0,
            y: 14,
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
              text-[14px]
              italic
              leading-7
              sm:text-[16px]
            "
            style={{
              color: palette.gray,
            }}
          >
            Esperamos vivir cada momento contigo.
          </p>

        </motion.div>
      </div>
    </section>
  );
}