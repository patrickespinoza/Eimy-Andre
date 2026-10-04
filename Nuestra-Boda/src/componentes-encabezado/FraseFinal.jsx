import React from "react";
import { motion } from "framer-motion";

export default function FraseFinal() {
  return (
    <section
      className="
        relative
        w-full
        h-[100svh]
        min-h-[650px]
        overflow-hidden
        bg-[#3F4A2C]
      "
    >
      {/* =====================================
          IMAGEN DE FONDO
      ===================================== */}

      <img
        src="/frasefinal.jpg"
        alt="Eimy y Soni"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        style={{
          objectPosition: "50% 50%",
        }}
        loading="eager"
        decoding="async"
      />

      {/* =====================================
          OSCURECIMIENTO UNIFORME
          SIN DEGRADADOS
      ===================================== */}

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(20, 25, 14, 0.30)",
        }}
      />

      {/* =====================================
          CONTENIDO INFERIOR
      ===================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          flex
          justify-center
          px-10
          pb-16
          sm:px-14
          sm:pb-20
          md:pb-24
          lg:px-20
        "
      >
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            w-full
            max-w-3xl
            text-center
          "
        >
          {/* ADORNO SUPERIOR */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.6,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                sm:w-16
              "
              style={{
                backgroundColor:
                  "rgba(247, 244, 236, 0.75)",
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
                borderColor:
                  "rgba(247, 244, 236, 0.9)",
              }}
            />

            <span
              className="
                h-px
                w-10
                sm:w-16
              "
              style={{
                backgroundColor:
                  "rgba(247, 244, 236, 0.75)",
              }}
            />
          </motion.div>

          {/* =================================
              FRASE
          ================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="
              font-serif
              text-[18px]
              italic
              leading-[1.75]
              tracking-[0.01em]
              sm:text-[22px]
              sm:leading-[1.8]
              md:text-[25px]
              lg:text-[27px]
            "
            style={{
              color: "#F7F4EC",
              textShadow:
                "0 2px 14px rgba(0, 0, 0, 0.55)",
            }}
          >
            “Cuando te das cuenta de que quieres pasar
            el resto de tu vida con alguien, deseas que
            el resto de tu vida empiece lo antes
            posible”
          </motion.p>

          {/* =================================
              INICIALES
          ================================= */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="
              mt-5
              font-cursiveDancing
              text-[27px]
              sm:text-[32px]
            "
            style={{
              color: "#F7F4EC",
              textShadow:
                "0 2px 12px rgba(0, 0, 0, 0.45)",
            }}
          >
            Eimy & Soni
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}