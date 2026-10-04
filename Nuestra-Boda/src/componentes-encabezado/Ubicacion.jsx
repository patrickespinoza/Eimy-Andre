import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIÓN
   EIMY EDITH & ANDRE SONI

   Estilo:
   - Clásico
   - Fondo verde olivo
   - Marfil / beige
   - Sin degradados
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",
  ivory: "#F7F4EC",
  beige: "#D7C8AA",
  beigeDark: "#B7A581",
  white: "#FFFFFF",
};

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
   ÍCONO UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[15px] w-[15px]"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   SEPARADOR CLÁSICO
========================================= */

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: "rgba(247,244,236,0.58)",
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
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: "rgba(247,244,236,0.58)",
        }}
      />
    </div>
  );
}

/* =========================================
   BLOQUE DE UBICACIÓN
========================================= */

function LocationBlock({
  label,
  place,
  address,
  time,
  href,
  delay = 0,
}) {
  return (
    <motion.div
      className="
        relative
        mx-auto
        w-full
        max-w-[620px]
        px-5
        py-10
        text-center
        sm:px-10
        sm:py-12
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease,
      }}
    >
      {/* TIPO DE EVENTO */}

      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.44em]
          sm:text-[10px]
          sm:tracking-[0.5em]
        "
        style={{
          color: palette.beige,
        }}
      >
        {label}
      </p>

      {/* NOMBRE */}

      <h3
        className="
          mx-auto
          mt-5
          max-w-[520px]
          font-serif
          text-[29px]
          font-normal
          leading-[1.2]
          sm:text-[38px]
          md:text-[42px]
        "
        style={{
          color: palette.ivory,
        }}
      >
        {place}
      </h3>

      {/* ADORNO */}

      <div className="mt-6">
        <Divider />
      </div>

      {/* HORA */}

      <div className="mt-7">
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.36em]
          "
          style={{
            color: "rgba(247,244,236,0.62)",
          }}
        >
          Hora
        </p>

        <p
          className="
            mt-2
            font-serif
            text-[28px]
            sm:text-[32px]
          "
          style={{
            color: palette.ivory,
          }}
        >
          {time}
        </p>
      </div>

      {/* DIRECCIÓN */}

      <p
        className="
          mx-auto
          mt-6
          max-w-[470px]
          font-serif
          text-[14px]
          leading-[1.8]
          sm:text-[16px]
        "
        style={{
          color: "rgba(247,244,236,0.80)",
        }}
      >
        {address}
      </p>

      {/* BOTÓN */}

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-8
          inline-flex
          min-w-[205px]
          items-center
          justify-center
          gap-3
          border
          px-7
          py-[14px]
        "
        style={{
          borderColor: "rgba(247,244,236,0.68)",
          color: palette.ivory,
          backgroundColor: "transparent",
        }}
        whileHover={{
          y: -2,
          backgroundColor: palette.ivory,
          color: palette.oliveDark,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.22,
        }}
      >
        <LocationIcon />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            sm:text-[9px]
          "
        >
          Ver ubicación
        </span>
      </motion.a>
    </motion.div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function EventoDireccion() {
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
          borderColor: "rgba(247,244,236,0.40)",
        }}
      />

      {/* MARCO INTERIOR */}

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
          borderColor: "rgba(247,244,236,0.12)",
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

      {/* BOTÁNICOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-10
          -left-7
          h-[220px]
          w-[140px]
          -rotate-12
          text-[#F7F4EC]/10
          sm:h-[280px]
          sm:w-[175px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-7
          -top-10
          h-[220px]
          w-[140px]
          rotate-[168deg]
          text-[#F7F4EC]/10
          sm:h-[280px]
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
          max-w-[850px]
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-8
            max-w-[600px]
            text-center
            sm:mb-10
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
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.beige,
            }}
          >
            Nuestra celebración
          </p>

          <h2
            className="
              mt-5
              font-cursiveDancing
              text-[43px]
              font-normal
              leading-none
              sm:text-[58px]
            "
            style={{
              color: palette.ivory,
            }}
          >
            Acompáñanos
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[470px]
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-[16px]
            "
            style={{
              color: "rgba(247,244,236,0.72)",
            }}
          >
            Será un honor compartir con ustedes
            este día tan especial.
          </p>
        </motion.div>

        {/* =====================================
            CEREMONIA
        ===================================== */}

        <LocationBlock
          label="Ceremonia religiosa"
          place="Parroquia San Marcos"
          time="5:00 p.m."
          address="Av. Andrómeda No. 200, Col. Metroplex, Apodaca, N. L."
          href="https://maps.app.goo.gl/LzGMwavnHuxKSVu69"
          delay={0.1}
        />

        {/* =====================================
            DIVISOR ENTRE EVENTOS
        ===================================== */}

        <motion.div
          className="
            mx-auto
            flex
            w-full
            max-w-[520px]
            items-center
            justify-center
            gap-4
          "
          initial={{
            opacity: 0,
            scaleX: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >
          <span
            className="h-px flex-1"
            style={{
              backgroundColor:
                "rgba(247,244,236,0.22)",
            }}
          />

          <span
            className="
              font-cursiveDancing
              text-[24px]
            "
            style={{
              color: palette.beige,
            }}
          >
            E & A
          </span>

          <span
            className="h-px flex-1"
            style={{
              backgroundColor:
                "rgba(247,244,236,0.22)",
            }}
          />
        </motion.div>

        {/* =====================================
            RECEPCIÓN
        ===================================== */}

        <LocationBlock
          label="Recepción"
          place="Hacienda San Valentin"
          time="7:00 p.m."
          address="Manuel Doblado No. 306, Col. Ampliación Lázaro Cárdenas, Escobedo, N. L."
          href="https://maps.app.goo.gl/qTxdFBF6L8q2A75q9"
          delay={0.1}
        />

        {/* =====================================
            CIERRE
        ===================================== */}

        <motion.div
          className="
            mx-auto
            mt-4
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
            delay: 0.15,
          }}
        >
          <Divider />

          <p
            className="
              mt-6
              font-serif
              text-[13px]
              italic
              leading-7
              sm:text-[15px]
            "
            style={{
              color: "rgba(247,244,236,0.68)",
            }}
          >
            Esperamos contar con tu presencia
            para celebrar juntos este momento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}