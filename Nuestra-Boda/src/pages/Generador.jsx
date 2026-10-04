import { useMemo, useState } from "react";

/* =========================================
   CONFIGURACIÓN
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

/* =========================================
   ICONOS
========================================= */

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="1.5" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" />
      <path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function Divider({ light = false }) {
  const color = light
    ? "rgba(247,244,236,0.55)"
    : "rgba(63,74,44,0.35)";

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{ backgroundColor: color }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{ borderColor: color }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

/* =========================================
   ORNAMENTO
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
   GENERADOR
========================================= */

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("1");

  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [linkCopiado, setLinkCopiado] = useState(false);
  const [mensajeCopiado, setMensajeCopiado] = useState(false);

  /* =========================================
     CREAR ID CIFRADO

     IMPORTANTE:
     Este formato coincide con Portada.jsx
     y Confirmacion.jsx:

     JSON
       ↓
     invertir texto
       ↓
     Base64
       ↓
     Base64 URL-safe
  ========================================= */

  const crearId = (nombreInvitado, numeroPases) => {
    const datos = {
      nombre: nombreInvitado,
      pases: numeroPases,
    };

    const textoOriginal = JSON.stringify(datos);

    const textoInvertido = textoOriginal
      .split("")
      .reverse()
      .join("");

    /*
      btoa funciona correctamente para los
      nombres habituales.

      encodeURIComponent/unescape permite
      soportar acentos y caracteres UTF-8.
    */

    const textoUtf8 = unescape(
      encodeURIComponent(textoInvertido)
    );

    const base64 = btoa(textoUtf8);

    /*
      Base64 seguro para URL:
      + -> -
      / -> _
      eliminamos =
    */

    return base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
  };

  /* =========================================
     GENERAR LINK
  ========================================= */

  const generarLink = () => {
    const nombreLimpio = nombre.trim();

    const numeroPases = Number.parseInt(
      pases,
      10
    );

    if (!nombreLimpio) {
      alert(
        "Escribe el nombre del invitado o familia."
      );
      return;
    }

    if (
      Number.isNaN(numeroPases) ||
      numeroPases < 1
    ) {
      alert(
        "Ingresa un número válido de lugares."
      );
      return;
    }

    /* ===============================
       CREAR ID
    =============================== */

    const id = crearId(
      nombreLimpio,
      numeroPases
    );

    /*
      Genera:

      https://tusitio.com/?id=XXXXXXXX

      NO aparecerán:
      ?nombre=
      ?pases=
    */

    const url = `${window.location.origin}/?id=${encodeURIComponent(
      id
    )}`;

    setLink(url);

    /* ===============================
       MENSAJE WHATSAPP
    =============================== */

    const textoPases =
      numeroPases === 1
        ? "1 lugar"
        : `${numeroPases} lugares`;

    const mensajeWhatsApp = `✨ Invitación especial ✨

Hola ${nombreLimpio} 🤍

Con mucha alegría queremos compartir contigo nuestra invitación de boda.

Hemos reservado especialmente para ti:

🎟️ ${textoPases}

Puedes consultar todos los detalles de nuestra celebración en el siguiente enlace:

${url}

Será un gusto compartir este momento tan especial contigo.

Eimy & Soni 🤍`;

    setMensaje(mensajeWhatsApp);

    setLinkCopiado(false);
    setMensajeCopiado(false);
  };

  /* =========================================
     COPIAR CON FALLBACK
  ========================================= */

  const copiarTexto = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch (error) {
      try {
        const textarea =
          document.createElement("textarea");

        textarea.value = texto;

        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);

        return true;
      } catch (fallbackError) {
        console.error(
          "No se pudo copiar:",
          fallbackError
        );

        return false;
      }
    }
  };

  /* =========================================
     COPIAR LINK
  ========================================= */

  const copiarLink = async () => {
    if (!link) return;

    const copiado = await copiarTexto(link);

    if (!copiado) return;

    setLinkCopiado(true);

    setTimeout(() => {
      setLinkCopiado(false);
    }, 2000);
  };

  /* =========================================
     COPIAR MENSAJE
  ========================================= */

  const copiarMensaje = async () => {
    if (!mensaje) return;

    const copiado =
      await copiarTexto(mensaje);

    if (!copiado) return;

    setMensajeCopiado(true);

    setTimeout(() => {
      setMensajeCopiado(false);
    }, 2000);
  };

  /* =========================================
     DATOS PARA PREVIEW
  ========================================= */

  const nombrePreview =
    nombre.trim() || "Invitado especial";

  const pasesPreview =
    Number.parseInt(pases, 10) || 1;

  const textoPasesPreview =
    pasesPreview === 1
      ? "1 LUGAR"
      : `${pasesPreview} LUGARES`;

  /* =========================================
     PREVIEW DEL LINK
  ========================================= */

  const idPreview = useMemo(() => {
    if (!link) return "";

    try {
      return new URL(link).searchParams.get("id") || "";
    } catch {
      return "";
    }
  }, [link]);

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        px-4
        py-10
        sm:px-6
        sm:py-14
        lg:px-10
        lg:py-16
      "
      style={{
        backgroundColor: palette.olive,
        color: palette.ivory,
      }}
    >
      {/* =====================================
          MARCO EXTERIOR
      ===================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-4
          border
          sm:inset-7
        "
        style={{
          borderColor:
            "rgba(247,244,236,0.28)",
        }}
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-[21px]
          border
          sm:inset-[34px]
        "
        style={{
          borderColor:
            "rgba(247,244,236,0.10)",
        }}
      />

      {/* =====================================
          ESQUINAS
      ===================================== */}

      <CornerOrnament
        className="
          pointer-events-none
          fixed
          left-5
          top-5
          h-14
          w-14
          text-[#F7F4EC]/25
          sm:left-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          fixed
          right-5
          top-5
          h-14
          w-14
          rotate-90
          text-[#F7F4EC]/25
          sm:right-8
          sm:top-8
          sm:h-20
          sm:w-20
        "
      />

      {/* =====================================
          ENCABEZADO
      ===================================== */}

      <header
        className="
          relative
          z-10
          mx-auto
          mb-12
          max-w-3xl
          text-center
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
              "rgba(247,244,236,0.68)",
          }}
        >
          Eimy & Soni
        </p>

        <div className="mt-5">
          <Divider light />
        </div>

        <h1
          className="
            mt-7
            font-cursiveDancing
            text-[45px]
            font-normal
            leading-none
            sm:text-[60px]
          "
          style={{
            color: palette.ivory,
          }}
        >
          Generador
        </h1>

        <p
          className="
            mt-3
            font-serif
            text-xl
            sm:text-2xl
          "
        >
          de invitaciones
        </p>

        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            font-serif
            text-[13px]
            italic
            leading-6
            sm:text-sm
          "
          style={{
            color:
              "rgba(247,244,236,0.70)",
          }}
        >
          Genera un enlace personalizado y
          protegido para cada invitado.
        </p>
      </header>

      {/* =====================================
          GRID
      ===================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          items-start
          gap-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-10
        "
      >
        {/* =================================
            FORMULARIO
        ================================= */}

        <section
          className="
            border
            p-5
            sm:p-8
          "
          style={{
            backgroundColor: palette.white,
            borderColor:
              "rgba(247,244,236,0.55)",
            color: palette.ink,
            boxShadow:
              "0 22px 60px rgba(20,25,14,0.18)",
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.34em]
            "
            style={{
              color: palette.olive,
            }}
          >
            Datos del invitado
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-2xl
              sm:text-3xl
            "
            style={{
              color: palette.oliveDark,
            }}
          >
            Crear invitación
          </h2>

          <div className="mt-5">
            <Divider />
          </div>

          {/* NOMBRE */}

          <div className="mt-8">
            <label
              htmlFor="generator-name"
              className="
                mb-2
                block
                text-[9px]
                uppercase
                tracking-[0.25em]
              "
              style={{
                color: palette.gray,
              }}
            >
              Nombre o familia
            </label>

            <input
              id="generator-name"
              type="text"
              placeholder="Ej. Familia Hernández"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);

                /*
                  Si cambian los datos,
                  eliminamos el link anterior
                  para evitar enviar uno viejo.
                */

                setLink("");
                setMensaje("");
                setLinkCopiado(false);
                setMensajeCopiado(false);
              }}
              className="
                w-full
                border
                bg-white
                px-4
                py-4
                font-serif
                text-[15px]
                outline-none
                transition
                placeholder:text-gray-400
                focus:ring-1
              "
              style={{
                borderColor:
                  "rgba(63,74,44,0.30)",
              }}
            />
          </div>

          {/* PASES */}

          <div className="mt-5">
            <label
              htmlFor="generator-passes"
              className="
                mb-2
                block
                text-[9px]
                uppercase
                tracking-[0.25em]
              "
              style={{
                color: palette.gray,
              }}
            >
              Número de lugares
            </label>

            <input
              id="generator-passes"
              type="number"
              min="1"
              inputMode="numeric"
              value={pases}
              onChange={(e) => {
                setPases(e.target.value);
                setLink("");
                setMensaje("");
                setLinkCopiado(false);
                setMensajeCopiado(false);
              }}
              className="
                w-full
                border
                bg-white
                px-4
                py-4
                font-serif
                text-[15px]
                outline-none
                transition
                focus:ring-1
              "
              style={{
                borderColor:
                  "rgba(63,74,44,0.30)",
              }}
            />
          </div>

          {/* GENERAR */}

          <button
            type="button"
            onClick={generarLink}
            className="
              mt-7
              w-full
              border
              px-6
              py-4
              text-[9px]
              uppercase
              tracking-[0.27em]
              transition
              hover:opacity-90
              active:scale-[0.99]
            "
            style={{
              backgroundColor: palette.olive,
              borderColor: palette.olive,
              color: palette.white,
            }}
          >
            Generar invitación
          </button>

          {/* =================================
              LINK CIFRADO
          ================================= */}

          {link && (
            <div
              className="
                mt-8
                border-t
                pt-7
              "
              style={{
                borderColor:
                  "rgba(63,74,44,0.16)",
              }}
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <LinkIcon />

                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                  "
                  style={{
                    color: palette.olive,
                  }}
                >
                  Link personalizado
                </p>
              </div>

              <div
                className="
                  mt-3
                  break-all
                  border
                  p-4
                  font-mono
                  text-[11px]
                  leading-5
                "
                style={{
                  backgroundColor:
                    palette.ivoryLight,

                  borderColor:
                    "rgba(63,74,44,0.20)",

                  color: palette.gray,
                }}
              >
                {link}
              </div>

              <p
                className="
                  mt-3
                  font-serif
                  text-[11px]
                  italic
                  leading-5
                "
                style={{
                  color: palette.gray,
                }}
              >
                El nombre y el número de
                lugares no aparecen visibles
                en la URL.
              </p>

              <button
                type="button"
                onClick={copiarLink}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  px-5
                  py-3.5
                  text-[9px]
                  uppercase
                  tracking-[0.23em]
                  transition
                  hover:bg-black/[0.025]
                "
                style={{
                  borderColor:
                    palette.olive,
                  color: palette.olive,
                }}
              >
                {linkCopiado ? (
                  <>
                    <CheckIcon />
                    Link copiado
                  </>
                ) : (
                  <>
                    <CopyIcon />
                    Copiar link
                  </>
                )}
              </button>
            </div>
          )}

          {/* =================================
              MENSAJE WHATSAPP
          ================================= */}

          {link && (
            <div
              className="
                mt-8
                border-t
                pt-7
              "
              style={{
                borderColor:
                  "rgba(63,74,44,0.16)",
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                "
                style={{
                  color: palette.olive,
                }}
              >
                Mensaje para WhatsApp
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[12px]
                  italic
                  leading-5
                "
                style={{
                  color: palette.gray,
                }}
              >
                Puedes editar el mensaje antes
                de copiarlo.
              </p>

              <textarea
                value={mensaje}
                onChange={(e) =>
                  setMensaje(e.target.value)
                }
                rows={14}
                className="
                  mt-4
                  w-full
                  resize-y
                  border
                  bg-white
                  p-4
                  font-serif
                  text-[13px]
                  leading-6
                  outline-none
                  focus:ring-1
                "
                style={{
                  borderColor:
                    "rgba(63,74,44,0.28)",
                  color: palette.ink,
                }}
              />

              <button
                type="button"
                onClick={copiarMensaje}
                className="
                  mt-3
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  border
                  px-6
                  py-4
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  transition
                  hover:opacity-90
                "
                style={{
                  backgroundColor:
                    palette.oliveDark,

                  borderColor:
                    palette.oliveDark,

                  color: palette.white,
                }}
              >
                {mensajeCopiado ? (
                  <>
                    <CheckIcon />
                    Mensaje copiado
                  </>
                ) : (
                  <>
                    <CopyIcon />
                    Copiar mensaje para WhatsApp
                  </>
                )}
              </button>
            </div>
          )}
        </section>

        {/* =================================
            VISTA PREVIA
        ================================= */}

        <section
          className="
            flex
            flex-col
            items-center
            lg:sticky
            lg:top-8
          "
        >
          <div className="mb-5 text-center">
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.34em]
              "
              style={{
                color:
                  "rgba(247,244,236,0.65)",
              }}
            >
              Vista previa
            </p>

            <h2
              className="
                mt-2
                font-cursiveDancing
                text-[35px]
                sm:text-[40px]
              "
              style={{
                color: palette.ivory,
              }}
            >
              Invitación personalizada
            </h2>
          </div>

          {/* =================================
              PREVIEW PORTADA
          ================================= */}

          <div
            className="
              relative
              w-full
              max-w-[430px]
              overflow-hidden
              border
              p-2
              sm:p-3
            "
            style={{
              backgroundColor: palette.ivory,
              borderColor:
                "rgba(247,244,236,0.50)",

              boxShadow:
                "0 25px 65px rgba(20,25,14,0.24)",
            }}
          >
            <div
              className="
                relative
                aspect-[9/16]
                w-full
                overflow-hidden
              "
              style={{
                backgroundColor:
                  palette.oliveDark,
              }}
            >
              {/* FOTO */}

              <img
                src="/portada.jpg"
                alt="Vista previa de la invitación de Eimy y Soni"
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
              />

              {/* OSCURECIMIENTO UNIFORME */}

              <div
                className="absolute inset-0"
                style={{
                  backgroundColor:
                    "rgba(20,25,14,0.26)",
                }}
              />

              {/* MARCO */}

              <div
                className="
                  absolute
                  inset-4
                  border
                "
                style={{
                  borderColor:
                    "rgba(247,244,236,0.68)",
                }}
              />

              <div
                className="
                  absolute
                  inset-[20px]
                  border
                "
                style={{
                  borderColor:
                    "rgba(247,244,236,0.24)",
                }}
              />

              {/* CONTENIDO */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  items-center
                  justify-between
                  px-8
                  py-14
                  text-center
                "
              >
                {/* ARRIBA */}

                <div>
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.38em]
                    "
                    style={{
                      color:
                        "rgba(247,244,236,0.78)",
                    }}
                  >
                    Invitación de boda
                  </p>

                  <p
                    className="
                      mt-5
                      font-serif
                      text-[12px]
                      uppercase
                      tracking-[0.20em]
                    "
                    style={{
                      color: palette.ivory,
                    }}
                  >
                    27 · 11 · 2026
                  </p>
                </div>

                {/* CENTRO */}

                <div>
                  <p
                    className="
                      font-cursiveDancing
                      text-[49px]
                      leading-[0.9]
                    "
                    style={{
                      color: palette.white,

                      textShadow:
                        "0 2px 12px rgba(0,0,0,0.35)",
                    }}
                  >
                    Eimy
                  </p>

                  <p
                    className="
                      my-1
                      font-serif
                      text-[13px]
                      italic
                    "
                    style={{
                      color:
                        "rgba(247,244,236,0.82)",
                    }}
                  >
                    &
                  </p>

                  <p
                    className="
                      font-cursiveDancing
                      text-[49px]
                      leading-[0.9]
                    "
                    style={{
                      color: palette.white,

                      textShadow:
                        "0 2px 12px rgba(0,0,0,0.35)",
                    }}
                  >
                    Soni
                  </p>
                </div>

                {/* INVITADO */}

                <div className="w-full">
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.27em]
                    "
                    style={{
                      color:
                        "rgba(247,244,236,0.72)",
                    }}
                  >
                    Reservado especialmente para
                  </p>

                  <p
                    className="
                      mt-3
                      font-cursiveDancing
                      text-[27px]
                      leading-tight
                    "
                    style={{
                      color: palette.white,

                      textShadow:
                        "0 2px 10px rgba(0,0,0,0.35)",
                    }}
                  >
                    {nombrePreview}
                  </p>

                  <div
                    className="
                      mx-auto
                      mt-4
                      inline-block
                      border
                      px-4
                      py-2
                    "
                    style={{
                      borderColor:
                        "rgba(247,244,236,0.55)",
                    }}
                  >
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                      "
                      style={{
                        color: palette.ivory,
                      }}
                    >
                      {textoPasesPreview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================
              INFORMACIÓN CIFRADA
          ================================= */}

          {link && (
            <div
              className="
                mt-6
                w-full
                max-w-[430px]
                border
                p-5
              "
              style={{
                borderColor:
                  "rgba(247,244,236,0.25)",

                backgroundColor:
                  "rgba(48,58,34,0.60)",
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.27em]
                "
                style={{
                  color:
                    "rgba(247,244,236,0.65)",
                }}
              >
                Datos protegidos
              </p>

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-3
                "
              >
                <div
                  className="border p-3"
                  style={{
                    borderColor:
                      "rgba(247,244,236,0.18)",
                  }}
                >
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.22em]
                    "
                    style={{
                      color:
                        "rgba(247,244,236,0.55)",
                    }}
                  >
                    Invitado
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-sm
                    "
                    style={{
                      color: palette.ivory,
                    }}
                  >
                    {nombrePreview}
                  </p>
                </div>

                <div
                  className="border p-3"
                  style={{
                    borderColor:
                      "rgba(247,244,236,0.18)",
                  }}
                >
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.22em]
                    "
                    style={{
                      color:
                        "rgba(247,244,236,0.55)",
                    }}
                  >
                    Lugares
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-sm
                    "
                    style={{
                      color: palette.ivory,
                    }}
                  >
                    {pasesPreview}
                  </p>
                </div>
              </div>

              <p
                className="
                  mt-4
                  break-all
                  font-mono
                  text-[9px]
                  leading-4
                "
                style={{
                  color:
                    "rgba(247,244,236,0.42)",
                }}
              >
                ID: {idPreview}
              </p>
            </div>
          )}

          {/* =================================
              PREVIEW WHATSAPP
          ================================= */}

          {link && (
            <div
              className="
                mt-8
                w-full
                max-w-[430px]
              "
            >
              <p
                className="
                  mb-3
                  text-center
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                "
                style={{
                  color:
                    "rgba(247,244,236,0.65)",
                }}
              >
                Vista previa del mensaje
              </p>

              <div
                className="
                  rounded-2xl
                  p-4
                "
                style={{
                  backgroundColor: "#E9E5DC",

                  boxShadow:
                    "0 18px 45px rgba(20,25,14,0.20)",
                }}
              >
                {/* CABECERA SIMULADA */}

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                    border-b
                    pb-3
                  "
                  style={{
                    borderColor:
                      "rgba(63,74,44,0.12)",
                  }}
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      font-serif
                      text-xs
                    "
                    style={{
                      backgroundColor:
                        palette.olive,

                      color: palette.white,
                    }}
                  >
                    E&S
                  </div>

                  <div>
                    <p
                      className="
                        font-serif
                        text-[13px]
                      "
                      style={{
                        color: palette.ink,
                      }}
                    >
                      Invitación Eimy & Soni
                    </p>

                    <p
                      className="
                        text-[9px]
                      "
                      style={{
                        color: palette.gray,
                      }}
                    >
                      Vista previa
                    </p>
                  </div>
                </div>

                {/* BURBUJA */}

                <div
                  className="
                    ml-auto
                    max-w-[94%]
                    rounded-xl
                    rounded-tr-sm
                    px-4
                    py-3
                    shadow-sm
                  "
                  style={{
                    backgroundColor: "#D9FDD3",
                  }}
                >
                  <p
                    className="
                      whitespace-pre-wrap
                      break-words
                      text-[12px]
                      leading-5
                    "
                    style={{
                      color: "#1D2733",
                    }}
                  >
                    {mensaje}
                  </p>

                  <p
                    className="
                      mt-1
                      text-right
                      text-[9px]
                      text-black/40
                    "
                  >
                    12:00 ✓✓
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* =====================================
          CIERRE
      ===================================== */}

      <footer
        className="
          relative
          z-10
          mx-auto
          mt-16
          text-center
        "
      >
        <Divider light />

        <p
          className="
            mt-6
            font-cursiveDancing
            text-[30px]
          "
          style={{
            color: palette.ivory,
          }}
        >
          E & A
        </p>
      </footer>
    </main>
  );
}