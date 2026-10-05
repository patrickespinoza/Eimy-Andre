import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";



import Countdown from "./encabeza-cuenta";

import MusicaModal from "./MusicaModal";



/* =========================================

   PALETA



   IMPORTANTE:

   Colores planos. No usamos degradados.

========================================= */



const palette = {

  olive: "#3F4A2C",

  oliveDark: "#303A22",

  oliveLight: "#59643F",



  ivory: "#F7F4EC",

  white: "#FFFFFF",



  beige: "#D7C8AA",

  beigeDark: "#B7A581",



  ink: "#292B24",

  gray: "#706E64",

};



const transition = {

  duration: 0.9,

  ease: [0.22, 1, 0.36, 1],

};



/* =========================================

   ADORNO BOTÁNICO

========================================= */



function BotanicalBranch({ className = "" }) {

  return (

    <svg

      viewBox="0 0 120 70"

      fill="none"

      aria-hidden="true"

      className={className}

    >

      <path

        d="M10 59C35 46 52 32 78 11"

        stroke="currentColor"

        strokeWidth="1"

      />



      <path

        d="M30 47C25 35 28 27 38 23C40 34 37 41 30 47Z"

        stroke="currentColor"

        strokeWidth="0.9"

      />



      <path

        d="M47 36C43 25 47 17 57 14C58 24 55 31 47 36Z"

        stroke="currentColor"

        strokeWidth="0.9"

      />



      <path

        d="M59 27C68 24 75 27 78 36C69 37 63 34 59 27Z"

        stroke="currentColor"

        strokeWidth="0.9"

      />



      <path

        d="M74 14C82 10 90 12 94 20C86 22 79 20 74 14Z"

        stroke="currentColor"

        strokeWidth="0.9"

      />

    </svg>

  );

}



/* =========================================

   DESCIFRAR ID DEL GENERADOR

========================================= */



function decodificarInvitacion(id) {

  if (!id) return null;



  try {

    /*

      El generador crea:



      JSON

        ↓

      invertir texto

        ↓

      Base64

        ↓

      Base64 seguro para URL



      Aquí hacemos exactamente lo contrario.

    */



    const idNormalizado = decodeURIComponent(id)

      .replace(/-/g, "+")

      .replace(/_/g, "/");



    const paddingFaltante = idNormalizado.length % 4;



    const idConPadding =

      paddingFaltante === 0

        ? idNormalizado

        : idNormalizado + "=".repeat(4 - paddingFaltante);



    const textoInvertido = atob(idConPadding);



    const textoOriginal = textoInvertido

      .split("")

      .reverse()

      .join("");



    return JSON.parse(textoOriginal);

  } catch (error) {

    console.error(

      "No se pudieron descifrar los datos de la invitación:",

      error

    );



    return null;

  }

}



/* =========================================

   PORTADA

========================================= */



export default function Portada() {

  const [introActiva, setIntroActiva] = useState(true);



  const [abrirSobre, setAbrirSobre] = useState(false);



  const [mostrarContenido, setMostrarContenido] =

    useState(false);



  const [procesandoApertura, setProcesandoApertura] =

    useState(false);



  const [mostrarMusica, setMostrarMusica] =

    useState(true);



  /* Datos provenientes del generador */



  const [invitados, setInvitados] =

    useState("Invitado");



  const [pases, setPases] = useState(1);



  /* =========================================

     LEER URL DEL GENERADOR

  ========================================= */



  useEffect(() => {

    const params = new URLSearchParams(

      window.location.search

    );



    const id = params.get("id");



    if (!id) {

      setInvitados("Invitado");

      setPases(1);

      return;

    }



    const datos = decodificarInvitacion(id);



    if (!datos) {

      setInvitados("Invitado");

      setPases(1);

      return;

    }



    const nombre =

      typeof datos.nombre === "string"

        ? datos.nombre.trim()

        : "";



    const cantidadPases = Number.parseInt(

      datos.pases,

      10

    );



    if (nombre) {

      setInvitados(nombre);

    }



    if (

      !Number.isNaN(cantidadPases) &&

      cantidadPases > 0

    ) {

      setPases(cantidadPases);

    }

  }, []);



  /* =========================================

     PRECARGAR FOTO DE PORTADA

     Se descarga mientras el invitado ve el modal
     de música y el sobre para que aparezca rápido.

  ========================================= */

  useEffect(() => {
    const imagenPortada = new Image();
    imagenPortada.src = "/portada.jpg";
  }, []);



  /* =========================================

     BLOQUEAR SCROLL DURANTE EL SOBRE

  ========================================= */



  useEffect(() => {

    if (!introActiva) return;



    document.body.style.overflow = "hidden";

    document.documentElement.style.overflow = "hidden";



    window.scrollTo({

      top: 0,

      left: 0,

      behavior: "auto",

    });



    return () => {

      document.body.style.overflow = "";

      document.documentElement.style.overflow = "";

    };

  }, [introActiva]);



  /* =========================================

     ABRIR INVITACIÓN



     IMPORTANTE:

     AQUÍ YA NO REPRODUCIMOS AUDIO.

  ========================================= */



  const iniciarExperiencia = () => {

    if (procesandoApertura || abrirSobre) return;



    setProcesandoApertura(true);



    window.scrollTo({

      top: 0,

      left: 0,

      behavior: "auto",

    });



    // La animación comienza inmediatamente al tocar el sobre.
    setAbrirSobre(true);



    // La portada empieza a aparecer mientras termina la apertura.
    window.setTimeout(() => {

      setMostrarContenido(true);

    }, 650);



    // Retiramos el intro rápidamente sin cortar la animación.
    window.setTimeout(() => {

      setIntroActiva(false);

      setProcesandoApertura(false);



      window.scrollTo({

        top: 0,

        left: 0,

        behavior: "auto",

      });

    }, 950);

  };



  return (

    <div

      className="

        relative

        min-h-screen

        w-full

        overflow-hidden

      "

      style={{

        backgroundColor: palette.ivory,

        color: palette.ink,

      }}

    >

      {/* =====================================

          SOBRE DE APERTURA

      ===================================== */}



      <AnimatePresence mode="wait">

        {introActiva && (

          <motion.section

            key="intro"

            className="

              fixed inset-0

              z-[9999]

              h-[100dvh]

              w-full

              overflow-y-auto

              overscroll-none

            "

            style={{

              backgroundColor: palette.ivory,

            }}

            initial={{ opacity: 1 }}

            exit={{

              opacity: 0,

            }}

            transition={{

              duration: 0.7,

            }}

          >

            {/* MARCO */}



            <div

              className="

                pointer-events-none

                fixed

                inset-4

                border

                sm:inset-7

              "

              style={{

                borderColor: "rgba(63,74,44,0.25)",

              }}

            />



            <div

              className="

                relative

                z-10

                mx-auto

                flex

                min-h-[100dvh]

                w-full

                max-w-[620px]

                flex-col

                items-center

                justify-center

                px-7

                py-12

                text-center

                sm:px-12

              "

            >

              {/* ENCABEZADO */}



              <motion.p

                className="

                  text-[9px]

                  uppercase

                  tracking-[0.48em]

                  sm:text-[10px]

                "

                style={{

                  color: palette.olive,

                }}

                initial={{

                  opacity: 0,

                  y: 12,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  ...transition,

                  delay: 0.1,

                }}

              >

                Invitación de boda

              </motion.p>



              <div

                className="

                  mt-5

                  h-px

                  w-14

                "

                style={{

                  backgroundColor: palette.beigeDark,

                }}

              />



              {/* SAVE THE DATE */}



              <motion.div

                className="mt-7"

                initial={{

                  opacity: 0,

                  y: 18,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  ...transition,

                  delay: 0.2,

                }}

              >

                <p

                  className="

                    font-cursiveDancing

                    text-[38px]

                    leading-none

                    sm:text-[48px]

                  "

                  style={{

                    color: palette.oliveDark,

                  }}

                >

                  Save the Date

                </p>



                <p

                  className="

                    mt-4

                    font-serif

                    text-[17px]

                    tracking-[0.22em]

                    sm:text-xl

                  "

                  style={{

                    color: palette.ink,

                  }}

                >

                  27 · 11 · 2026

                </p>

              </motion.div>



              {/* MENSAJE */}



              <motion.p

                className="

                  mt-7

                  max-w-[390px]

                  font-serif

                  text-[14px]

                  leading-[1.9]

                  sm:text-[16px]

                "

                style={{

                  color: palette.gray,

                }}

                initial={{

                  opacity: 0,

                  y: 16,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  ...transition,

                  delay: 0.3,

                }}

              >

                Con mucha ilusión queremos vivir este

                momento rodeados de personas que han

                formado parte de nuestra historia.

                <br />

                Será un honor contar con tu presencia.

              </motion.p>



              <BotanicalBranch

                className="

                  mt-5

                  h-10

                  w-20

                "

                style={{

                  color: palette.olive,

                }}

              />



              {/* =================================

                  SOBRE

              ================================= */}



              <motion.div

                className="

                  mt-7

                  flex

                  w-full

                  flex-col

                  items-center

                "

                initial={{

                  opacity: 0,

                  y: 25,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  ...transition,

                  delay: 0.4,

                }}

              >

                <div

                  onClick={iniciarExperiencia}

                  onKeyDown={(event) => {

                    if (

                      event.key === "Enter" ||

                      event.key === " "

                    ) {

                      iniciarExperiencia();

                    }

                  }}

                  role="button"

                  tabIndex={0}

                  aria-label="Abrir invitación"

                  className="

                    relative

                    aspect-[350/235]

                    w-[82vw]

                    max-w-[390px]

                    cursor-pointer

                    outline-none

                  "

                  style={{

                    perspective: 1800,

                  }}

                >

                  {/* CARTA */}



                  <motion.div

                    className="

                      absolute

                      left-1/2

                      top-[8%]

                      z-10

                      flex

                      h-[78%]

                      w-[82%]

                      -translate-x-1/2

                      flex-col

                      items-center

                      justify-center

                      border

                      px-4

                      text-center

                    "

                    style={{

                      backgroundColor: palette.ivory,

                      borderColor: palette.beige,

                      boxShadow:

                        "0 10px 24px rgba(0,0,0,0.12)",

                    }}

                    animate={

                      abrirSobre

                        ? {

                            y: -72,

                          }

                        : {

                            y: 0,

                          }

                    }

                    transition={{

                      duration: 0.65,

                      delay: abrirSobre ? 0.08 : 0,

                      ease: [0.22, 1, 0.36, 1],

                    }}

                  >

                    <p

                      className="

                        text-[7px]

                        uppercase

                        tracking-[0.35em]

                      "

                      style={{

                        color: palette.olive,

                      }}

                    >

                      Nuestra boda

                    </p>



                    <p

                      className="

                        mt-4

                        font-serif

                        text-[22px]

                        leading-tight

                      "

                      style={{

                        color: palette.ink,

                      }}

                    >

                      Eimy

                    </p>



                    <span

                      className="

                        my-1

                        font-cursiveDancing

                        text-xl

                      "

                      style={{

                        color: palette.olive,

                      }}

                    >

                      &

                    </span>



                    <p

                      className="

                        font-serif

                        text-[22px]

                        leading-tight

                      "

                      style={{

                        color: palette.ink,

                      }}

                    >

                      Soni

                    </p>



                    <p

                      className="

                        mt-4

                        text-[7px]

                        uppercase

                        tracking-[0.26em]

                      "

                      style={{

                        color: palette.gray,

                      }}

                    >

                      27 · 11 · 2026

                    </p>

                  </motion.div>



                  {/* CUERPO VERDE OLIVO */}



                  <motion.div

                    className="

                      absolute

                      inset-0

                      overflow-hidden

                      border

                    "

                    style={{

                      backgroundColor: palette.olive,

                      borderColor: palette.oliveDark,

                      boxShadow:

                        "0 20px 45px rgba(0,0,0,0.16)",

                    }}

                    animate={

                      abrirSobre

                        ? {

                            scale: 1.01,

                            y: 5,

                          }

                        : {

                            scale: 1,

                            y: 0,

                          }

                    }

                    transition={{

                      duration: 0.65,

                    }}

                  >

                    {/* SOLAPA IZQUIERDA */}



                    <div

                      className="

                        absolute

                        bottom-0

                        left-0

                        h-[72%]

                        w-[53%]

                        border-t

                      "

                      style={{

                        clipPath:

                          "polygon(0 0, 100% 100%, 0 100%)",

                        backgroundColor:

                          palette.oliveLight,

                        borderColor:

                          "rgba(247,244,236,0.18)",

                      }}

                    />



                    {/* SOLAPA DERECHA */}



                    <div

                      className="

                        absolute

                        bottom-0

                        right-0

                        h-[72%]

                        w-[53%]

                        border-t

                      "

                      style={{

                        clipPath:

                          "polygon(100% 0, 100% 100%, 0 100%)",

                        backgroundColor:

                          palette.oliveDark,

                        borderColor:

                          "rgba(247,244,236,0.16)",

                      }}

                    />

                  </motion.div>



                  {/* TAPA */}



                  <motion.div

                    className="

                      absolute

                      left-0

                      top-0

                      z-20

                      h-[54%]

                      w-full

                      origin-top

                    "

                    style={{

                      clipPath:

                        "polygon(0 0, 50% 100%, 100% 0)",

                      backgroundColor:

                        palette.oliveLight,

                      backfaceVisibility: "hidden",

                    }}

                    animate={

                      abrirSobre

                        ? {

                            rotateX: -182,

                            y: -2,

                          }

                        : {

                            rotateX: 0,

                            y: 0,

                          }

                    }

                    transition={{

                      duration: 0.65,

                      ease: [0.22, 1, 0.36, 1],

                    }}

                  />



                  {/* SELLO */}



                  <motion.div

                    className="

                      pointer-events-none

                      absolute

                      inset-0

                      z-30

                      flex

                      items-center

                      justify-center

                    "

                    animate={

                      abrirSobre

                        ? {

                            scale: 0.7,

                            opacity: 0,

                          }

                        : {

                            scale: 1,

                            opacity: 1,

                          }

                    }

                    transition={{

                      duration: 0.45,

                    }}

                  >

                    <div

                      className="

                        relative

                        flex

                        h-[76px]

                        w-[76px]

                        items-center

                        justify-center

                        rounded-full

                        border

                      "

                      style={{

                        backgroundColor:

                          palette.beigeDark,

                        borderColor: palette.beige,

                        boxShadow:

                          "0 7px 15px rgba(0,0,0,0.18)",

                      }}

                    >

                      <div

                        className="

                          absolute

                          inset-[6px]

                          rounded-full

                          border

                        "

                        style={{

                          borderColor:

                            "rgba(247,244,236,0.45)",

                        }}

                      />



                      <span

                        className="

                          relative

                          z-10

                          font-serif

                          text-lg

                          italic

                        "

                        style={{

                          color: palette.ivory,

                        }}

                      >

                        E

                        <span className="mx-1 text-xs">

                          &

                        </span>

                        S

                      </span>

                    </div>

                  </motion.div>



                  {/* ABRIR */}



                  <motion.p

                    className="

                      pointer-events-none

                      absolute

                      inset-x-0

                      top-4

                      z-40

                      text-center

                      text-[8px]

                      uppercase

                      tracking-[0.4em]

                    "

                    style={{

                      color: palette.ivory,

                    }}

                    animate={{

                      opacity: abrirSobre ? 0 : 0.8,

                    }}

                  >

                    Abrir

                  </motion.p>

                </div>



                <motion.p

                  className="

                    mt-6

                    text-[8px]

                    uppercase

                    tracking-[0.32em]

                    sm:text-[9px]

                  "

                  style={{

                    color: palette.olive,

                  }}

                  animate={{

                    opacity: abrirSobre ? 0 : 1,

                  }}

                >

                  Toca el sobre para comenzar

                </motion.p>



                {/* INVITADO */}



                <motion.div

                  className="

                    mt-6

                    w-full

                    max-w-[390px]

                    border-t

                    pt-5

                    text-center

                  "

                  style={{

                    borderColor:

                      "rgba(63,74,44,0.22)",

                  }}

                  animate={{

                    opacity: abrirSobre ? 0 : 1,

                  }}

                >

                  <p

                    className="

                      text-[8px]

                      uppercase

                      tracking-[0.32em]

                    "

                    style={{

                      color: palette.gray,

                    }}

                  >

                    Reservado especialmente para

                  </p>



                  <p

                    className="

                      mt-2

                      break-words

                      font-serif

                      text-xl

                    "

                    style={{

                      color: palette.ink,

                    }}

                  >

                    {invitados}

                  </p>



                  <p

                    className="

                      mt-2

                      font-serif

                      text-xs

                    "

                    style={{

                      color: palette.olive,

                    }}

                  >

                    {pases}{" "}

                    {pases === 1

                      ? "lugar reservado"

                      : "lugares reservados"}

                  </p>

                </motion.div>

              </motion.div>

            </div>

          </motion.section>

        )}

      </AnimatePresence>



      {/* =====================================

          PORTADA PRINCIPAL

      ===================================== */}



      <section

        className="

          relative

          min-h-[100dvh]

          w-full

          overflow-hidden

        "

        style={{

          backgroundColor: palette.oliveDark,

        }}

      >

        {/* FOTO */}



        <motion.img

          src="/portada.jpg"

          alt="Eimy Edith y Andre Soni"

          className="

            absolute

            inset-0

            h-full

            w-full

            object-cover

            object-center

          "

          initial={{

            opacity: 0,

            scale: 1.025,

          }}

          animate={

            mostrarContenido

              ? {

                  opacity: 1,

                  scale: 1,

                }

              : {

                  opacity: 0,

                  scale: 1.025,

                }

          }

          transition={{

            opacity: {

              duration: 1.1,

            },

            scale: {

              duration: 7,

              ease: "easeOut",

            },

          }}

        />



        {/* OSCURECIMIENTO PLANO



            No es un degradado.

            Es una sola capa uniforme.

        */}



        <motion.div

          className="

            absolute

            inset-0

            bg-black/35

          "

          initial={{ opacity: 0 }}

          animate={{

            opacity: mostrarContenido ? 1 : 0,

          }}

          transition={{

            duration: 1,

          }}

        />



        {/* MARCO */}



        <motion.div

          className="

            pointer-events-none

            absolute

            inset-4

            z-10

            border

            sm:inset-7

          "

          style={{

            borderColor:

              "rgba(247,244,236,0.50)",

          }}

          initial={{ opacity: 0 }}

          animate={{

            opacity: mostrarContenido ? 1 : 0,

          }}

          transition={{

            duration: 1,

            delay: 0.3,

          }}

        />



        {/* CONTENIDO */}



        <motion.div

          className="

            relative

            z-20

            flex

            min-h-[100dvh]

            w-full

            flex-col

            items-center

            px-7

            pb-8

            pt-10

            text-center

            sm:px-12

            sm:pt-14

          "

          initial={{

            opacity: 0,

          }}

          animate={{

            opacity: mostrarContenido ? 1 : 0,

          }}

          transition={{

            duration: 1,

            delay: 0.2,

          }}

        >

          {/* LOGO */}



          <motion.div

            className="mt-3"

            initial={{

              opacity: 0,

              y: -15,

            }}

            animate={

              mostrarContenido

                ? {

                    opacity: 1,

                    y: 0,

                  }

                : {

                    opacity: 0,

                    y: -15,

                  }

            }

            transition={{

              ...transition,

              delay: 0.45,

            }}

          >

            <div

              className="

                relative

                mx-auto

                flex

                h-[100px]

                w-[120px]

                items-center

                justify-center

                sm:h-[125px]

                sm:w-[150px]

              "

              style={{

                color: palette.white,

              }}

            >

              {/* E */}



              <span

                className="

                  absolute

                  left-[15px]

                  top-0

                  font-serif

                  text-[88px]

                  font-normal

                  leading-none

                  sm:text-[108px]

                "

              >

                E

              </span>



              {/* A */}



              <span

                className="

                  absolute

                  right-[10px]

                  top-0

                  font-serif

                  text-[88px]

                  font-normal

                  leading-none

                  sm:text-[108px]

                "

              >

                S

              </span>



            </div>

          </motion.div>



          {/* NOMBRES */}



          <motion.h1

            className="

              mt-1

              font-cursiveDancing

              text-[28px]

              leading-tight

              sm:text-[42px]

            "

            style={{

              color: palette.white,

              textShadow:

                "0 2px 12px rgba(0,0,0,0.30)",

            }}

            initial={{

              opacity: 0,

              y: 15,

            }}

            animate={

              mostrarContenido

                ? {

                    opacity: 1,

                    y: 0,

                  }

                : {

                    opacity: 0,

                    y: 15,

                  }

            }

            transition={{

              ...transition,

              delay: 0.65,

            }}

          >

            Eimy Edith & Andre Soni

          </motion.h1>



          {/* FRASE */}



          <motion.p

            className="

              mt-5

              max-w-[330px]

              font-serif

              text-[15px]

              italic

              leading-6

              sm:text-[17px]

            "

            style={{

              color: palette.white,

              textShadow:

                "0 2px 8px rgba(0,0,0,0.35)",

            }}

            initial={{

              opacity: 0,

              y: 12,

            }}

            animate={

              mostrarContenido

                ? {

                    opacity: 1,

                    y: 0,

                  }

                : {

                    opacity: 0,

                    y: 12,

                  }

            }

            transition={{

              ...transition,

              delay: 0.8,

            }}

          >

            ¡Te elijo hoy y por el resto de mi vida!

          </motion.p>



          {/* ESPACIADOR */}



          <div className="flex-1" />



          {/* CONTADOR */}



          <motion.div

            className="

              w-full

              max-w-[520px]

            "

            initial={{

              opacity: 0,

              y: 20,

            }}

            animate={

              mostrarContenido

                ? {

                    opacity: 1,

                    y: 0,

                  }

                : {

                    opacity: 0,

                    y: 20,

                  }

            }

            transition={{

              ...transition,

              delay: 1,

            }}

          >

            <Countdown

              targetDate="2026-11-27T17:00:00"

            />

          </motion.div>



          <motion.p

            className="

              mt-6

              text-[8px]

              uppercase

              tracking-[0.42em]

              sm:text-[9px]

            "

            style={{

              color: palette.white,

            }}

            initial={{

              opacity: 0,

            }}

            animate={{

              opacity: mostrarContenido ? 0.9 : 0,

            }}

            transition={{

              duration: 1,

              delay: 1.15,

            }}

          >

            Desliza para continuar

          </motion.p>

        </motion.div>

      </section>



      {/* =====================================

          MODAL DE MÚSICA

      ===================================== */}



      <MusicaModal

        mostrar={mostrarMusica}

        onElegir={() => setMostrarMusica(false)}

        src="/musica.mp3"

      />

    </div>

  );

}