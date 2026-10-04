import { motion } from "framer-motion";

/* =========================================
   FRASE BÍBLICA — MATEO 19:5-6

   Imagen:
   public/frase.jpg

   Estilo:
   - Clásico
   - Elegante
   - Verde olivo / marfil
   - Sin degradados
========================================= */

const palette = {
  olive: "#3F4A2C",
  oliveDark: "#303A22",
  ivory: "#F7F4EC",
  beige: "#D7C8AA",
  white: "#FFFFFF",
};

const ease = [0.22, 1, 0.36, 1];

/* =========================================
   ADORNO BOTÁNICO
========================================= */

function BotanicalCorner({ className = "" }) {
  return (
    <svg
      viewBox="0 0 130 180"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M18 166C42 137 60 105 73 68C82 43 91 24 109 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M48 126C32 121 25 110 25 96C40 99 49 109 48 126Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M62 96C76 91 86 80 89 66C75 68 65 78 62 96Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M74 66C60 60 54 49 55 36C68 40 76 51 74 66Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M88 39C101 36 109 28 112 17C100 19 91 27 88 39Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <circle
        cx="110"
        cy="10"
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
          backgroundColor: "rgba(247,244,236,0.65)",
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
          borderColor: "rgba(247,244,236,0.75)",
        }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: "rgba(247,244,236,0.65)",
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function FraseModal() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#303A22]
      "
    >
      {/* =====================================
          IMAGEN
      ===================================== */}

      <motion.div
        className="
          relative
          min-h-[720px]
          w-full
          overflow-hidden
          sm:min-h-[780px]
          md:min-h-[820px]
        "
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.1,
          ease,
        }}
      >
        <motion.img
          src="/frase.jpg"
          alt="Frase bíblica de Mateo 19:5-6"
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
          initial={{
            scale: 1.04,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 5,
            ease: "easeOut",
          }}
        />

        {/* =====================================
            OSCURECIMIENTO PLANO

            No es degradado.
        ===================================== */}

        <div
          className="
            absolute
            inset-0
          "
          style={{
            backgroundColor: "rgba(25, 30, 19, 0.48)",
          }}
        />

        {/* =====================================
            MARCO EXTERIOR
        ===================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-4
            z-10
            border
            sm:inset-7
            md:inset-9
          "
          style={{
            borderColor: "rgba(247,244,236,0.58)",
          }}
        />

        {/* MARCO INTERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[22px]
            z-10
            border
            sm:inset-[34px]
            md:inset-[42px]
          "
          style={{
            borderColor: "rgba(247,244,236,0.18)",
          }}
        />

        {/* =====================================
            BOTÁNICOS
        ===================================== */}

        <BotanicalCorner
          className="
            pointer-events-none
            absolute
            -bottom-4
            -left-2
            z-10
            h-[170px]
            w-[120px]
            text-[#F7F4EC]/35
            sm:h-[220px]
            sm:w-[150px]
          "
        />

        <BotanicalCorner
          className="
            pointer-events-none
            absolute
            -right-2
            -top-4
            z-10
            h-[170px]
            w-[120px]
            rotate-180
            text-[#F7F4EC]/35
            sm:h-[220px]
            sm:w-[150px]
          "
        />

        {/* =====================================
            CONTENIDO
        ===================================== */}

        

          {/* =====================================
    CONTENIDO
    TODO AGRUPADO EN LA PARTE INFERIOR
===================================== */}

<div
  className="
    relative
    z-20
    mx-auto
    flex
    min-h-[720px]
    w-full
    max-w-[900px]
    flex-col
    items-center
    justify-end
    px-8
    pb-16
    pt-20
    text-center
    sm:min-h-[780px]
    sm:px-14
    sm:pb-20
    md:min-h-[820px]
    md:px-20
    md:pb-24
  "
>
  {/* BLOQUE COMPLETO */}

  <motion.div
    className="
      flex
      w-full
      max-w-[680px]
      flex-col
      items-center
    "
    initial={{
      opacity: 0,
      y: 30,
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
      duration: 1,
      ease,
    }}
  >
    {/* COMILLA */}

    <span
      className="
        block
        h-[42px]
        font-serif
        text-[62px]
        font-light
        leading-none
        sm:text-[72px]
      "
      style={{
        color: "rgba(247,244,236,0.55)",
      }}
    >
      “
    </span>

    {/* FRASE */}

    <blockquote
      className="
        mt-1
        font-serif
        text-[20px]
        font-normal
        leading-[1.55]
        sm:text-[25px]
        sm:leading-[1.55]
        md:text-[28px]
      "
      style={{
        color: palette.white,
        textShadow:
          "0 2px 12px rgba(0,0,0,0.45)",
      }}
    >
      No fuiste antes ni despues, fuiste a tiempo. A tiempo para que me enamorara de ti
    </blockquote>

    {/* SEPARADOR */}

    <div className="mt-5">
      <Divider />
    </div>

    {/* REFERENCIA */}

    <p
      className="
        mt-3
        font-serif
        text-[11px]
        uppercase
        tracking-[0.3em]
        sm:text-[12px]
      "
      style={{
        color: palette.ivory,
      }}
    >
      Jaime Sabines
    </p>

    
  </motion.div>
</div>
      </motion.div>
    </section>
  );
}