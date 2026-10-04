import React from "react";
import { motion } from "framer-motion";

/* =========================================
   FRASE SEPARADOR
   EIMY & SONI

   - Fondo verde olivo
   - Estilo clásico / elegante
   - Sin degradados
   - Responsive
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  ivory: "#F7F4EC",
  beige: "#D7C8AA",
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
      viewBox="0 0 150 250"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* TALLO */}

      <path
        d="M31 238C54 202 67 166 76 126C85 86 99 48 126 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* RAMAS */}

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

      {/* HOJAS */}

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

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: "rgba(247,244,236,0.42)",
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
          borderColor: palette.beige,
        }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: "rgba(247,244,236,0.42)",
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function FraseModal() {
  return (
    <section
      className="
        relative
        flex
        min-h-[560px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-6
        py-24
        sm:min-h-[620px]
        sm:px-10
        sm:py-28
        lg:min-h-[680px]
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
          borderColor: "rgba(247,244,236,0.35)",
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
          ESQUINA SUPERIOR IZQUIERDA
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-5
          top-5
          h-16
          w-16
          text-[#F7F4EC]/25
          sm:left-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ESQUINA SUPERIOR DERECHA
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
          text-[#F7F4EC]/25
          sm:right-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ESQUINA INFERIOR IZQUIERDA
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
          text-[#F7F4EC]/25
          sm:bottom-8
          sm:left-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ESQUINA INFERIOR DERECHA
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
          text-[#F7F4EC]/25
          sm:bottom-8
          sm:right-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          BOTÁNICO IZQUIERDO
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-12
          -left-10
          h-[260px]
          w-[155px]
          -rotate-12
          text-[#F7F4EC]/10
          sm:-left-4
          sm:h-[330px]
          sm:w-[190px]
        "
      />

      {/* =====================================
          BOTÁNICO DERECHO
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-10
          -top-12
          h-[260px]
          w-[155px]
          rotate-[168deg]
          text-[#F7F4EC]/10
          sm:-right-4
          sm:h-[330px]
          sm:w-[190px]
        "
      />

      {/* =====================================
          CONTENIDO CENTRAL
      ===================================== */}

      <motion.div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[760px]
          flex-col
          items-center
          text-center
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
          amount: 0.25,
        }}
        transition={{
          duration: 1,
          ease,
        }}
      >



        {/* =====================================
            SEPARADOR
        ===================================== */}

        <motion.div
          className="mt-6"
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
            duration: 0.8,
            delay: 0.2,
            ease,
          }}
        >
          <DecorativeDivider />
        </motion.div>

        {/* =====================================
            COMILLAS
        ===================================== */}

        <motion.div
          className="
            mt-8
            font-serif
            text-[52px]
            font-normal
            leading-[0.5]
            sm:text-[64px]
          "
          style={{
            color: "rgba(215,200,170,0.75)",
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
          “
        </motion.div>

        {/* =====================================
            FRASE PRINCIPAL

            AQUÍ PUEDES CAMBIAR LA FRASE
        ===================================== */}

        <motion.p
          className="
            mx-auto
            mt-4
            max-w-[650px]
            font-serif
            text-[23px]
            font-normal
            italic
            leading-[1.7]
            sm:text-[29px]
            sm:leading-[1.65]
            md:text-[33px]
          "
          style={{
            color: palette.ivory,
          }}
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
            duration: 1,
            delay: 0.3,
            ease,
          }}
        >
          Por eso el hombre dejará a su padre y a su
      madre, y se unirá a su mujer, los dos serán
      una sola carne.

      <span className="mt-3 block">
        Así que ya no serán dos, sino uno.
      </span>
        </motion.p>

        {/* =====================================
            SEPARADOR INFERIOR
        ===================================== */}

        <motion.div
          className="mt-9"
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
            duration: 0.8,
            delay: 0.45,
            ease,
          }}
        >
          <DecorativeDivider />
        </motion.div>

        {/* =====================================
            INICIALES
        ===================================== */}

        <motion.p
          className="
            mt-7
            font-cursiveDancing
            text-[32px]
            sm:text-[39px]
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
            duration: 0.9,
            delay: 0.5,
          }}
        >
          Mateo 19:5-6
        </motion.p>

      </motion.div>
    </section>
  );
}