import { motion } from "framer-motion";

/* =========================================
   PADRES — EIMY EDITH & ANDRE SONI

   Estilo:
   - Clásico
   - Elegante
   - Verde olivo / marfil
   - Sin degradados
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  oliveLight: "#59643F",
  ivory: "#F7F4EC",
  beige: "#D7C8AA",
  beigeDark: "#B7A581",
  ink: "#292B24",
  gray: "#706E64",
};

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 210"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M25 195C47 164 61 128 70 91C78 58 91 31 113 13"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M52 146C38 141 29 130 28 116C43 119 52 130 52 146Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M64 111C79 107 89 96 93 81C78 83 68 94 64 111Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M73 78C59 72 52 61 53 47C67 51 75 63 73 78Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M91 46C104 42 113 33 116 20C103 23 94 32 91 46Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <circle
        cx="114"
        cy="13"
        r="2.5"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: palette.beigeDark,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: palette.beigeDark,
        }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: palette.beigeDark,
        }}
      />
    </div>
  );
}

/* =========================================
   BLOQUE DE PADRES
========================================= */

function FamilyBlock({
  title,
  father,
  mother,
  delay = 0,
}) {
  return (
    <motion.div
      className="
        w-full
        max-w-[430px]
        text-center
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease,
      }}
    >
      {/* TÍTULO */}

      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.38em]
          sm:text-[10px]
        "
        style={{
          color: palette.olive,
        }}
      >
        {title}
      </p>

      {/* NOMBRES */}

      <div className="mt-5">
        <p
          className="
            font-serif
            text-[21px]
            leading-[1.45]
            sm:text-[25px]
          "
          style={{
            color: palette.ink,
          }}
        >
          {father}
        </p>

        <p
          className="
            my-2
            font-cursiveDancing
            text-[20px]
            leading-none
            sm:text-[23px]
          "
          style={{
            color: palette.beigeDark,
          }}
        >
          &
        </p>

        <p
          className="
            font-serif
            text-[21px]
            leading-[1.45]
            sm:text-[25px]
          "
          style={{
            color: palette.ink,
          }}
        >
          {mother}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function Padres() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-24
        text-center
        sm:px-10
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundColor: palette.ivory,
      }}
    >
      {/* =====================================
          MARCOS
      ===================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          sm:inset-7
        "
        style={{
          borderColor: "rgba(63,74,44,0.20)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[22px]
          border
          sm:inset-[34px]
        "
        style={{
          borderColor: "rgba(183,165,129,0.16)",
        }}
      />

      {/* =====================================
          BOTÁNICOS
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-7
          -left-5
          h-[190px]
          w-[125px]
          -rotate-6
          text-[#3F4A2C]/15
          sm:h-[250px]
          sm:w-[160px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-5
          -top-7
          h-[190px]
          w-[125px]
          rotate-180
          text-[#3F4A2C]/15
          sm:h-[250px]
          sm:w-[160px]
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
          flex
          w-full
          max-w-[800px]
          flex-col
          items-center
        "
      >


        {/* =====================================
            TÍTULO
        ===================================== */}

        <motion.h2
          className="
            mt-5
            font-cursiveDancing
            text-[42px]
            font-normal
            leading-none
            sm:text-[55px]
          "
          style={{
            color: palette.oliveDark,
          }}
          initial={{
            opacity: 0,
            y: 16,
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
            delay: 0.08,
            ease,
          }}
        >
          Nuestras familias
        </motion.h2>

        {/* SEPARADOR */}

        <motion.div
          className="mt-7"
          initial={{
            opacity: 0,
            scaleX: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease,
          }}
        >
          <Divider />
        </motion.div>

        {/* =====================================
            AGRADECIMIENTO
        ===================================== */}

        <motion.p
          className="
            mt-8
            max-w-[530px]
            font-serif
            text-[15px]
            leading-[1.9]
            sm:text-[17px]
          "
          style={{
            color: palette.gray,
          }}
          initial={{
            opacity: 0,
            y: 16,
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
            ease,
          }}
        >
          Con profundo agradecimiento por su amor,
          sus valores y por acompañarnos en cada paso
          que nos ha traído hasta aquí.
        </motion.p>

        {/* =====================================
            BENDICIÓN
        ===================================== */}

        <motion.div
          className="
            mt-9
            w-full
            max-w-[580px]
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
            delay: 0.28,
            ease,
          }}
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor:
                "rgba(63,74,44,0.28)",
            }}
          />

          <p
            className="
              font-serif
              text-[17px]
              italic
              leading-[1.8]
              sm:text-[20px]
            "
            style={{
              color: palette.oliveDark,
            }}
          >
            Con la bendición de Dios
            <span className="block">
              y de nuestros queridos padres
            </span>
          </p>
        </motion.div>

        {/* =====================================
            PADRES DE LA NOVIA
        ===================================== */}

        <div className="mt-14 sm:mt-16">
          <FamilyBlock
            title="Padres de la novia"
            father="Juan Esteban Rodríguez Guerra"
            mother="Nancy Edith Luna Calderón"
            delay={0.15}
          />
        </div>

        {/* SEPARADOR CENTRAL */}

        <motion.div
          className="my-11 sm:my-14"
          initial={{
            opacity: 0,
            scaleX: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Divider />
        </motion.div>

        {/* =====================================
            PADRES DEL NOVIO
        ===================================== */}

        <FamilyBlock
          title="Padres del novio"
          father="Enrique Rubio Espinoza"
          mother="Amparo Hernández Rivera"
          delay={0.15}
        />

      </div>
    </section>
  );
}