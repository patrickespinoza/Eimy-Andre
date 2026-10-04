import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec";


const NUMERO_NOVIA = "528134511817";
const NUMERO_NOVIO = "528111908085";

const NOMBRE_NOVIA = "Eimy";
const NOMBRE_NOVIO = "Soni";

/* =========================================
   PALETA
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

  error: "#8B3A3A",
  success: "#49644D",
};

/* =========================================
   ANIMACIÓN
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   DECODIFICACIÓN DEL GENERADOR
========================================= */

/*
  Compatible con el generador que hace:

  1. JSON.stringify({ nombre, pases })
  2. Invierte el texto
  3. btoa()
  4. Convierte a URL-safe:
       +  ->  -
       /  ->  _
       =  puede eliminarse
  5. Envía:
       ?id=XXXXXXXX

  También mantenemos compatibilidad con:

  ?nombre=Familia López&pases=4
*/

function normalizeBase64(value) {
  const normalized = value
    .trim()
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  const remainder = normalized.length % 4;

  if (remainder === 0) {
    return normalized;
  }

  return normalized + "=".repeat(4 - remainder);
}

function decodeBase64Utf8(value) {
  const binary = window.atob(normalizeBase64(value));

  try {
    const bytes = Uint8Array.from(binary, (character) =>
      character.charCodeAt(0)
    );

    return new TextDecoder("utf-8", {
      fatal: false,
    }).decode(bytes);
  } catch {
    return binary;
  }
}

function parseInvitationData(encodedId) {
  if (!encodedId) return null;

  const decodedValue = decodeURIComponent(encodedId);

  const decodedText = decodeBase64Utf8(decodedValue);

  /*
    Primero intentamos el formato del generador:
    Base64 -> invertir -> JSON

    Después dejamos respaldo para Base64 -> JSON.
  */

  const possibleValues = [
    decodedText.split("").reverse().join(""),
    decodedText,
  ];

  for (const possibleValue of possibleValues) {
    try {
      const parsedData = JSON.parse(possibleValue);

      if (parsedData && typeof parsedData === "object") {
        return parsedData;
      }
    } catch {
      // Intentamos el siguiente formato.
    }
  }

  throw new Error(
    "El enlace de invitación no tiene un formato válido."
  );
}

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

function DecorativeDivider({ light = false }) {
  const color = light
    ? "rgba(247,244,236,0.55)"
    : "rgba(63,74,44,0.40)";

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: color,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: color,
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
}

/* =========================================
   CHECK
========================================= */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================
   OPCIÓN DE ASISTENCIA
========================================= */

function AttendanceOption({
  value,
  selectedValue,
  onChange,
  title,
  description,
}) {
  const isSelected = selectedValue === value;

  return (
    <motion.label
      whileTap={{
        scale: 0.99,
      }}
      className="
        relative
        flex
        cursor-pointer
        items-start
        gap-4
        border
        px-5
        py-5
        text-left
        transition
      "
      style={{
        backgroundColor: isSelected
          ? "rgba(63,74,44,0.07)"
          : palette.white,

        borderColor: isSelected
          ? palette.olive
          : "rgba(63,74,44,0.22)",
      }}
    >
      <input
        type="radio"
        name="asistencia"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          borderColor: isSelected
            ? palette.olive
            : "rgba(63,74,44,0.45)",
        }}
      >
        {isSelected && (
          <motion.span
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="
              h-2.5
              w-2.5
              rounded-full
            "
            style={{
              backgroundColor: palette.olive,
            }}
          />
        )}
      </span>

      <span>
        <span
          className="
            block
            font-serif
            text-[15px]
            sm:text-base
          "
          style={{
            color: palette.ink,
          }}
        >
          {title}
        </span>

        <span
          className="
            mt-1
            block
            text-[12px]
            leading-5
            sm:text-[13px]
          "
          style={{
            color: palette.gray,
          }}
        >
          {description}
        </span>
      </span>
    </motion.label>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] =
    useState("");

  const [pasesAsignados, setPasesAsignados] =
    useState(1);

  const [datosDesdeGenerador, setDatosDesdeGenerador] =
    useState(false);

  const [mensajeInvitado, setMensajeInvitado] =
    useState("");

  const [asistencia, setAsistencia] =
    useState("");

  const [invitados, setInvitados] =
    useState(1);

  const [error, setError] =
    useState("");

  const [loadingSide, setLoadingSide] =
    useState("");

  const [enviado, setEnviado] =
    useState(false);

  const [urlError, setUrlError] =
    useState("");

  /* =========================================
     LEER Y DESENCRIPTAR DATOS DEL GENERADOR
  ========================================= */

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const encodedId = params.get("id");

    /*
      Compatibilidad con invitaciones anteriores.
    */

    const visibleName = params.get("nombre");
    const visiblePasses = params.get("pases");

    try {
      let invitationData = null;

      /*
        NUEVO FORMATO:
        ?id=XXXXXXXX
      */

      if (encodedId) {
        invitationData =
          parseInvitationData(encodedId);
      }

      /*
        FORMATO ANTERIOR:
        ?nombre=Familia&pases=4
      */

      else if (visibleName || visiblePasses) {
        invitationData = {
          nombre: visibleName,
          pases: visiblePasses,
        };
      }

      /*
        Si entraron directamente a la página
        sin enlace personalizado.
      */

      if (!invitationData) {
        setDatosDesdeGenerador(false);
        return;
      }

      /* ===============================
         NOMBRE
      =============================== */

      const decodedName =
        typeof invitationData.nombre === "string"
          ? invitationData.nombre.trim()
          : "";

      /* ===============================
         PASES
      =============================== */

      const decodedPasses = Number.parseInt(
        invitationData.pases ??
          invitationData.invitados ??
          invitationData.cantidad ??
          invitationData.lugares ??
          1,
        10
      );

      if (decodedName) {
        setNombreInvitado(decodedName);
      }

      if (
        !Number.isNaN(decodedPasses) &&
        decodedPasses > 0
      ) {
        setPasesAsignados(decodedPasses);

        /*
          Por defecto colocamos todos
          los lugares asignados.
        */

        setInvitados(decodedPasses);
      }

      setDatosDesdeGenerador(
        Boolean(decodedName)
      );

      setUrlError("");
    } catch (decodeError) {
      console.error(
        "No se pudieron leer los datos del enlace:",
        decodeError
      );

      setUrlError(
        "No pudimos reconocer los datos personalizados de esta invitación."
      );

      setDatosDesdeGenerador(false);
    }
  }, []);

  /* =========================================
     AJUSTAR ASISTENTES
  ========================================= */

  useEffect(() => {
    if (
      asistencia === "No podré asistir"
    ) {
      setInvitados(0);
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      invitados < 1
    ) {
      setInvitados(1);
    }
  }, [asistencia, invitados]);

  /* =========================================
     OPCIONES DE PASES
  ========================================= */

  const availablePasses = useMemo(() => {
    return Array.from(
      {
        length: pasesAsignados,
      },
      (_, index) => index + 1
    );
  }, [pasesAsignados]);

  /* =========================================
     MENSAJE WHATSAPP
  ========================================= */

  const createWhatsAppMessage = (
    recipientName
  ) => {
    const attendanceText =
      asistencia === "Sí asistiré"
        ? `Sí asistiré con ${invitados} ${
            invitados === 1
              ? "persona"
              : "personas"
          }.`
        : "Lamentablemente no podré asistir.";

    const optionalMessage =
      mensajeInvitado.trim()
        ? `\n\nMensaje: ${mensajeInvitado.trim()}`
        : "";

    return [
      `Hola ${recipientName}.`,
      "",
      `Soy ${nombreInvitado.trim()}.`,
      attendanceText,
      optionalMessage,
      "",
      "Gracias por la invitación.",
    ]
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
  };

  const openWhatsApp = (
    phoneNumber,
    recipientName
  ) => {
    const message =
      createWhatsAppMessage(recipientName);

    const whatsappUrl =
      `https://wa.me/${phoneNumber}` +
      `?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  /* =========================================
     ENVIAR CONFIRMACIÓN
  ========================================= */

  const enviarConfirmacion = async ({
    side,
    phoneNumber,
    recipientName,
  }) => {
    /*
      Evita doble envío.
    */

    if (loadingSide) return;

    /* ===============================
       VALIDACIONES
    =============================== */

    if (!nombreInvitado.trim()) {
      setError(
        "No pudimos identificar el nombre de esta invitación."
      );

      return;
    }

    if (!asistencia) {
      setError(
        "Selecciona si podrás acompañarnos."
      );

      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (
        invitados < 1 ||
        invitados > pasesAsignados
      )
    ) {
      setError(
        `Puedes confirmar entre 1 y ${pasesAsignados} ${
          pasesAsignados === 1
            ? "lugar"
            : "lugares"
        }.`
      );

      return;
    }

    setError("");
    setEnviado(false);
    setLoadingSide(side);

    /* ===============================
       INFORMACIÓN PARA GOOGLE SHEETS
    =============================== */

    const confirmationData = {
      nombre: nombreInvitado.trim(),

      asistencia,

      invitados:
        asistencia === "Sí asistiré"
          ? invitados
          : 0,

      mensaje: mensajeInvitado.trim(),

      lado: side,

      pasesAsignados,
    };

    try {
      /*
        No colocamos Content-Type JSON
        porque utilizamos no-cors.

        Apps Script recibe el JSON desde:

        e.postData.contents
      */

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(
          confirmationData
        ),
      });

      setEnviado(true);

      /*
        Esperamos un momento para que
        el invitado vea la confirmación.
      */

      window.setTimeout(() => {
        openWhatsApp(
          phoneNumber,
          recipientName
        );
      }, 650);
    } catch (requestError) {
      console.error(
        "Error enviando la confirmación:",
        requestError
      );

      setError(
        "No pudimos enviar tu confirmación. Intenta nuevamente en unos momentos."
      );

      setLoadingSide("");
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.05,
      }}
      className="
        relative
        flex
        min-h-[900px]
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
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor:
            "rgba(247,244,236,0.42)",
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
            "rgba(247,244,236,0.15)",
        }}
      />

      {/* =====================================
          ESQUINAS
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#F7F4EC]/30
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
          text-[#F7F4EC]/30
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
          text-[#F7F4EC]/30
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
          text-[#F7F4EC]/30
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          RAMAS
      ===================================== */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[260px]
          w-[150px]
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
          -right-8
          -top-16
          h-[260px]
          w-[150px]
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
          max-w-5xl
        "
      >
        {/* =================================
            ENCABEZADO
        ================================= */}

        <motion.div
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
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-14
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.42em]
              sm:text-[10px]
              sm:tracking-[0.52em]
            "
            style={{
              color:
                "rgba(247,244,236,0.75)",
            }}
          >
            Nos encantará contar contigo
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
              leading-[1.05]
              sm:text-[62px]
              md:text-[70px]
            "
            style={{
              color: palette.ivory,
            }}
          >
            Confirmación
          </h2>

          <p
            className="
              mt-2
              font-serif
              text-[22px]
              tracking-[0.02em]
              sm:text-[27px]
            "
            style={{
              color: palette.white,
            }}
          >
            de asistencia
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color:
                "rgba(247,244,236,0.78)",
            }}
          >
            Por favor, confirma tu
            asistencia y ayúdanos a preparar
            cada detalle de nuestra
            celebración.
          </p>
        </motion.div>

        {/* =================================
            TARJETA BLANCA
        ================================= */}

        <motion.div
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
            amount: 0.08,
          }}
          transition={{
            duration: 0.95,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
          "
          style={{
            backgroundColor: palette.white,
            borderColor:
              "rgba(247,244,236,0.75)",
            boxShadow:
              "0 25px 70px rgba(20,25,14,0.16)",
          }}
        >
          {/* Marco interior */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              border
            "
            style={{
              borderColor:
                "rgba(63,74,44,0.15)",
            }}
          />

          <div className="relative z-10">

            {/* =================================
                INVITADO
            ================================= */}

            <div className="text-center">
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.olive,
                }}
              >
                Invitación reservada para
              </p>

              <p
                className="
                  mt-4
                  font-cursiveDancing
                  text-[34px]
                  leading-tight
                  sm:text-[42px]
                "
                style={{
                  color: palette.oliveDark,
                }}
              >
                {nombreInvitado ||
                  "Invitado especial"}
              </p>

              {datosDesdeGenerador && (
                <p
                  className="
                    mt-3
                    text-[8px]
                    uppercase
                    tracking-[0.24em]
                  "
                  style={{
                    color: palette.gray,
                  }}
                >
                  Invitación personalizada
                </p>
              )}

              {datosDesdeGenerador && (
                <div
                  className="
                    mx-auto
                    mt-5
                    inline-flex
                    border
                    px-5
                    py-3
                  "
                  style={{
                    borderColor:
                      "rgba(63,74,44,0.22)",
                    backgroundColor:
                      palette.ivoryLight,
                  }}
                >
                  <p
                    className="
                      font-serif
                      text-[13px]
                      italic
                      sm:text-[14px]
                    "
                    style={{
                      color: palette.gray,
                    }}
                  >
                    {pasesAsignados === 1
                      ? "1 lugar reservado"
                      : `${pasesAsignados} lugares reservados`}
                  </p>
                </div>
              )}

              <AnimatePresence>
                {urlError && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="
                      mt-4
                      font-serif
                      text-[12px]
                      leading-5
                    "
                    style={{
                      color: palette.error,
                    }}
                  >
                    {urlError}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* =================================
                ASISTENCIA
            ================================= */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor:
                  "rgba(63,74,44,0.18)",
              }}
            >
              <p
                className="
                  text-center
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.olive,
                }}
              >
                ¿Podrás acompañarnos?
              </p>

              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="Sí asistiré"
                  description="Será un gusto celebrar juntos."
                />

                <AttendanceOption
                  value="No podré asistir"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="No podré asistir"
                  description="Agradecemos que nos lo hagas saber."
                />
              </div>
            </div>

            {/* =================================
                NÚMERO DE PERSONAS
            ================================= */}

            <AnimatePresence>
              {asistencia ===
                "Sí asistiré" && (
                <motion.div
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
                  className="
                    mt-9
                    overflow-hidden
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor:
                      "rgba(63,74,44,0.18)",
                  }}
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <label
                      htmlFor="confirmation-passes"
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        sm:text-[9px]
                      "
                      style={{
                        color: palette.olive,
                      }}
                    >
                      Personas que asistirán
                    </label>

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                      "
                      style={{
                        color: palette.gray,
                      }}
                    >
                      Máximo {pasesAsignados}
                    </span>
                  </div>

                  <select
                    id="confirmation-passes"
                    value={invitados}
                    onChange={(event) =>
                      setInvitados(
                        Number(
                          event.target.value
                        )
                      )
                    }
                    className="
                      mt-4
                      w-full
                      appearance-none
                      border
                      bg-white
                      px-5
                      py-4
                      text-center
                      font-serif
                      text-base
                      outline-none
                      sm:text-lg
                    "
                    style={{
                      color: palette.ink,
                      borderColor:
                        "rgba(63,74,44,0.28)",
                    }}
                  >
                    {availablePasses.map(
                      (passNumber) => (
                        <option
                          key={passNumber}
                          value={passNumber}
                        >
                          {passNumber}{" "}
                          {passNumber === 1
                            ? "persona"
                            : "personas"}
                        </option>
                      )
                    )}
                  </select>

                  <p
                    className="
                      mt-3
                      text-center
                      font-serif
                      text-[12px]
                      italic
                      sm:text-[13px]
                    "
                    style={{
                      color: palette.gray,
                    }}
                  >
                    Esta invitación tiene{" "}
                    {pasesAsignados === 1
                      ? "1 lugar reservado"
                      : `${pasesAsignados} lugares reservados`}
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================
                MENSAJE
            ================================= */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor:
                  "rgba(63,74,44,0.18)",
              }}
            >
              <label
                htmlFor="confirmation-message"
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.olive,
                }}
              >
                Mensaje para los novios
              </label>

              <textarea
                id="confirmation-message"
                value={mensajeInvitado}
                onChange={(event) => {
                  if (
                    event.target.value.length <=
                    500
                  ) {
                    setMensajeInvitado(
                      event.target.value
                    );
                  }
                }}
                rows={4}
                maxLength={500}
                placeholder="Escribe un mensaje para Eimy & Soni..."
                className="
                  mt-4
                  w-full
                  resize-none
                  border
                  bg-white
                  px-5
                  py-4
                  font-serif
                  text-[14px]
                  leading-7
                  outline-none
                  sm:text-[15px]
                "
                style={{
                  color: palette.ink,
                  borderColor:
                    "rgba(63,74,44,0.28)",
                }}
              />

              <p
                className="
                  mt-2
                  text-right
                  text-[10px]
                "
                style={{
                  color: palette.gray,
                }}
              >
                {mensajeInvitado.length}/500
              </p>
            </div>

            {/* =================================
                ERROR / ÉXITO
            ================================= */}

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  key="confirmation-error"
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="
                    mt-7
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.error,
                    borderColor:
                      "rgba(139,58,58,0.30)",
                    backgroundColor:
                      "rgba(139,58,58,0.045)",
                  }}
                >
                  {error}
                </motion.div>
              )}

              {enviado && !error && (
                <motion.div
                  key="confirmation-success"
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="
                    mt-7
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    px-4
                    py-3
                    text-center
                    font-serif
                    text-[13px]
                    sm:text-[14px]
                  "
                  style={{
                    color: palette.success,
                    borderColor:
                      "rgba(73,100,77,0.30)",
                    backgroundColor:
                      "rgba(73,100,77,0.05)",
                  }}
                >
                  <CheckIcon />

                  Confirmación registrada.
                  Abriendo WhatsApp…
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================
                BOTONES
            ================================= */}

            <div
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {/* NOVIA */}

              <motion.button
                type="button"
                disabled={Boolean(
                  loadingSide
                )}
                onClick={() =>
                  enviarConfirmacion({
                    side: "Novia",
                    phoneNumber:
                      NUMERO_NOVIA,
                    recipientName:
                      NOMBRE_NOVIA,
                  })
                }
                whileHover={
                  loadingSide
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  loadingSide
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
                className="
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  border
                  px-5
                  py-4
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                style={{
                  backgroundColor:
                    palette.olive,
                  borderColor:
                    palette.olive,
                  color: palette.white,
                }}
              >
                {loadingSide ===
                "Novia" ? (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-white/35
                      border-t-white
                    "
                  />
                ) : (
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      sm:text-[9px]
                    "
                  >
                    Confirmar con Eimy
                  </span>
                )}

                {loadingSide ===
                  "Novia" && (
                  <span
                    className="
                      ml-3
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                    "
                  >
                    Enviando
                  </span>
                )}
              </motion.button>

              {/* NOVIO */}

              <motion.button
                type="button"
                disabled={Boolean(
                  loadingSide
                )}
                onClick={() =>
                  enviarConfirmacion({
                    side: "Novio",
                    phoneNumber:
                      NUMERO_NOVIO,
                    recipientName:
                      NOMBRE_NOVIO,
                  })
                }
                whileHover={
                  loadingSide
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  loadingSide
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
                className="
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  border
                  px-5
                  py-4
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                style={{
                  backgroundColor:
                    palette.white,
                  borderColor:
                    palette.olive,
                  color: palette.olive,
                }}
              >
                {loadingSide ===
                "Novio" ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-[#3F4A2C]/25
                        border-t-[#3F4A2C]
                      "
                    />

                    <span
                      className="
                        ml-3
                        text-[8px]
                        uppercase
                        tracking-[0.24em]
                      "
                    >
                      Enviando
                    </span>
                  </>
                ) : (
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      sm:text-[9px]
                    "
                  >
                    Confirmar con Soni
                  </span>
                )}
              </motion.button>
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-center
                font-serif
                text-[12px]
                italic
                leading-6
                sm:text-[13px]
              "
              style={{
                color: palette.gray,
              }}
            >
              Al confirmar, registraremos tu
              respuesta y te dirigiremos a
              WhatsApp para enviar el mensaje
              correspondiente.
            </p>

            {/* =================================
                CIERRE
            ================================= */}

            <div className="mt-10">
              <DecorativeDivider />


            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Confirmacion;