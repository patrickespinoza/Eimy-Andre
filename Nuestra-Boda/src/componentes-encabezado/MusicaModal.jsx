import React, { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Music2, Volume2, VolumeX } from "lucide-react";



/* =========================================

   PALETA

   Verde olivo + marfil + beige

   Sin degradados

========================================= */



const COLORS = {

  olive: "#3F4A2C",

  oliveDark: "#303A22",

  ivory: "#F7F4EC",

  beige: "#D7C8AA",

  beigeDark: "#B7A581",

  ink: "#292B24",

  gray: "#706E64",

};



/* =========================================

   COMPONENTE

========================================= */



export default function MusicaModal({

  mostrar = true,

  onElegir,

  src = "/musica.mp3",

}) {

  const audioRef = useRef(null);



  const [musicaActiva, setMusicaActiva] = useState(false);

  const [procesando, setProcesando] = useState(false);



  /* =========================================

     ACTIVAR MÚSICA



     IMPORTANTE:

     audio.play() se ejecuta directamente

     dentro del clic del usuario.

  ========================================= */



  const activarMusica = async () => {

    if (procesando) return;



    const audio = audioRef.current;



    if (!audio) {

      console.error("No se encontró el elemento de audio.");



      onElegir?.(false);



      return;

    }



    setProcesando(true);



    try {

      /*

        Reiniciamos únicamente si todavía

        no estaba reproduciéndose.

      */



      audio.muted = false;

      audio.volume = 1;

      if (audio.ended) {

        audio.currentTime = 0;

      }

      await audio.play();



      setMusicaActiva(true);



      /*

        Cerramos el modal y dejamos

        que Portada muestre el sobre.

      */



      onElegir?.(true);

    } catch (error) {

      console.error(

        "No se pudo iniciar la música:",

        error

      );



      /*

        Si el navegador bloqueara el audio,

        dejamos continuar al invitado.

      */



      setMusicaActiva(false);



      onElegir?.(false);

    } finally {

      setProcesando(false);

    }

  };



  /* =========================================

     CONTINUAR SIN MÚSICA

  ========================================= */



  const continuarSinMusica = () => {

    const audio = audioRef.current;



    if (audio) {

      audio.pause();

      audio.currentTime = 0;

    }



    setMusicaActiva(false);



    onElegir?.(false);

  };



  /* =========================================

     ACTIVAR / PAUSAR DESPUÉS

  ========================================= */



  const toggleMusica = async () => {

    const audio = audioRef.current;



    if (!audio) return;



    try {

      if (audio.paused) {

        audio.volume = 0.5;



        await audio.play();



        setMusicaActiva(true);

      } else {

        audio.pause();



        setMusicaActiva(false);

      }

    } catch (error) {

      console.error(

        "No se pudo cambiar el estado de la música:",

        error

      );

    }

  };



  return (

    <>

      {/* =====================================

          AUDIO

      ===================================== */}



      <audio

        ref={audioRef}

        src={src}

        preload="auto"

        loop

        playsInline

        onError={() => {

          console.error(`No se pudo cargar el audio: ${src}`);

        }}

      />



      {/* =====================================

          MODAL INICIAL

      ===================================== */}



      <AnimatePresence>

        {mostrar && (

          <motion.div

            className="

              fixed

              inset-0

              z-[20000]

              flex

              min-h-[100dvh]

              w-full

              items-center

              justify-center

              overflow-hidden

              px-5

              py-8

            "

            style={{

              backgroundColor: COLORS.oliveDark,

            }}

            initial={{

              opacity: 0,

            }}

            animate={{

              opacity: 1,

            }}

            exit={{

              opacity: 0,

            }}

            transition={{

              duration: 0.45,

            }}

          >

            {/* =================================

                MARCO EXTERIOR

            ================================= */}



            <div

              className="

                pointer-events-none

                absolute

                inset-4

                border

                sm:inset-7

              "

              style={{

                borderColor:

                  "rgba(247,244,236,0.28)",

              }}

            />



            {/* =================================

                ADORNOS ESQUINAS

            ================================= */}



            <div

              className="

                pointer-events-none

                absolute

                left-7

                top-7

                h-10

                w-10

                border-l

                border-t

                sm:left-10

                sm:top-10

              "

              style={{

                borderColor: COLORS.beige,

              }}

            />



            <div

              className="

                pointer-events-none

                absolute

                right-7

                top-7

                h-10

                w-10

                border-r

                border-t

                sm:right-10

                sm:top-10

              "

              style={{

                borderColor: COLORS.beige,

              }}

            />



            <div

              className="

                pointer-events-none

                absolute

                bottom-7

                left-7

                h-10

                w-10

                border-b

                border-l

                sm:bottom-10

                sm:left-10

              "

              style={{

                borderColor: COLORS.beige,

              }}

            />



            <div

              className="

                pointer-events-none

                absolute

                bottom-7

                right-7

                h-10

                w-10

                border-b

                border-r

                sm:bottom-10

                sm:right-10

              "

              style={{

                borderColor: COLORS.beige,

              }}

            />



            {/* =================================

                TARJETA

            ================================= */}



            <motion.div

              className="

                relative

                w-full

                max-w-[390px]

                overflow-hidden

                border

                px-7

                py-11

                text-center

                sm:px-10

                sm:py-12

              "

              style={{

                backgroundColor: COLORS.ivory,

                borderColor: COLORS.beige,

                boxShadow:

                  "0 24px 65px rgba(0,0,0,0.24)",

              }}

              initial={{

                opacity: 0,

                y: 25,

                scale: 0.96,

              }}

              animate={{

                opacity: 1,

                y: 0,

                scale: 1,

              }}

              exit={{

                opacity: 0,

                y: -10,

                scale: 0.98,

              }}

              transition={{

                duration: 0.65,

                ease: [0.22, 1, 0.36, 1],

              }}

            >

              {/* Marco interior */}



              <div

                className="

                  pointer-events-none

                  absolute

                  inset-3

                  border

                "

                style={{

                  borderColor:

                    "rgba(63,74,44,0.16)",

                }}

              />



              {/* =================================

                  FECHA SUPERIOR

              ================================= */}



              <motion.p

                className="

                  relative

                  text-[8px]

                  uppercase

                  tracking-[0.42em]

                "

                style={{

                  color: COLORS.olive,

                }}

                initial={{

                  opacity: 0,

                  y: 8,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  duration: 0.7,

                  delay: 0.15,

                }}

              >

                27 · 11 · 2026

              </motion.p>



              {/* Línea */}



              <motion.div

                className="

                  relative

                  mx-auto

                  mt-5

                  h-px

                  w-12

                "

                style={{

                  backgroundColor: COLORS.beigeDark,

                }}

                initial={{

                  scaleX: 0,

                }}

                animate={{

                  scaleX: 1,

                }}

                transition={{

                  duration: 0.7,

                  delay: 0.25,

                }}

              />



              {/* =================================

                  ICONO

              ================================= */}



              <motion.div

                className="

                  relative

                  mx-auto

                  mt-7

                  flex

                  h-14

                  w-14

                  items-center

                  justify-center

                  rounded-full

                  border

                "

                style={{

                  borderColor: COLORS.olive,

                  color: COLORS.olive,

                }}

                initial={{

                  opacity: 0,

                  scale: 0.8,

                }}

                animate={{

                  opacity: 1,

                  scale: 1,

                }}

                transition={{

                  duration: 0.6,

                  delay: 0.3,

                }}

              >

                <Music2

                  size={20}

                  strokeWidth={1.3}

                />

              </motion.div>



              {/* =================================

                  NOMBRES

              ================================= */}



              <motion.p

                className="

                  relative

                  mt-6

                  text-[8px]

                  uppercase

                  tracking-[0.32em]

                "

                style={{

                  color: COLORS.olive,

                }}

                initial={{

                  opacity: 0,

                  y: 10,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  duration: 0.7,

                  delay: 0.4,

                }}

              >

                Eimy Edith & Andre Soni

              </motion.p>



              {/* =================================

                  TÍTULO

              ================================= */}



              <motion.h2

                className="

                  relative

                  mt-5

                  font-serif

                  text-[30px]

                  font-normal

                  leading-[1.25]

                  sm:text-[33px]

                "

                style={{

                  color: COLORS.ink,

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

                  duration: 0.75,

                  delay: 0.45,

                }}

              >

                Antes de comenzar

              </motion.h2>



              {/* Separador */}



              <motion.div

                className="

                  relative

                  mx-auto

                  my-5

                  h-px

                  w-14

                "

                style={{

                  backgroundColor: COLORS.beige,

                }}

                initial={{

                  scaleX: 0,

                }}

                animate={{

                  scaleX: 1,

                }}

                transition={{

                  duration: 0.7,

                  delay: 0.55,

                }}

              />



              {/* =================================

                  TEXTO

              ================================= */}



              <motion.p

                className="

                  relative

                  mx-auto

                  max-w-[285px]

                  font-serif

                  text-[14px]

                  leading-[1.85]

                  sm:text-[15px]

                "

                style={{

                  color: COLORS.gray,

                }}

                initial={{

                  opacity: 0,

                }}

                animate={{

                  opacity: 1,

                }}

                transition={{

                  duration: 0.8,

                  delay: 0.6,

                }}

              >

                Hemos elegido una canción especial

                para acompañarte durante nuestra

                invitación.

              </motion.p>



              <motion.p

                className="

                  relative

                  mt-4

                  font-serif

                  text-[16px]

                  italic

                "

                style={{

                  color: COLORS.oliveDark,

                }}

                initial={{

                  opacity: 0,

                }}

                animate={{

                  opacity: 1,

                }}

                transition={{

                  duration: 0.8,

                  delay: 0.7,

                }}

              >

                ¿Deseas escucharla?

              </motion.p>



              {/* =================================

                  BOTONES

              ================================= */}



              <motion.div

                className="

                  relative

                  mt-8

                  flex

                  flex-col

                  gap-3

                "

                initial={{

                  opacity: 0,

                  y: 15,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  duration: 0.75,

                  delay: 0.8,

                }}

              >

                {/* ACTIVAR */}



                <button

                  type="button"

                  onClick={activarMusica}

                  disabled={procesando}

                  className="

                    flex

                    w-full

                    items-center

                    justify-center

                    gap-3

                    border

                    px-5

                    py-[15px]

                    text-[9px]

                    uppercase

                    tracking-[0.25em]

                    transition-transform

                    duration-300

                    hover:scale-[1.01]

                    active:scale-[0.98]

                    disabled:cursor-wait

                    disabled:opacity-70

                  "

                  style={{

                    backgroundColor: COLORS.olive,

                    borderColor: COLORS.olive,

                    color: COLORS.ivory,

                  }}

                >

                  <Volume2

                    size={16}

                    strokeWidth={1.4}

                  />



                  {procesando

                    ? "Iniciando..."

                    : "Sí, activar música"}

                </button>



                {/* SIN MÚSICA */}



                <button

                  type="button"

                  onClick={continuarSinMusica}

                  disabled={procesando}

                  className="

                    flex

                    w-full

                    items-center

                    justify-center

                    gap-3

                    border

                    px-5

                    py-[15px]

                    text-[9px]

                    uppercase

                    tracking-[0.23em]

                    transition-transform

                    duration-300

                    hover:scale-[1.01]

                    active:scale-[0.98]

                    disabled:opacity-70

                  "

                  style={{

                    backgroundColor: "transparent",

                    borderColor: COLORS.beige,

                    color: COLORS.oliveDark,

                  }}

                >

                  <VolumeX

                    size={15}

                    strokeWidth={1.4}

                  />



                  Continuar sin música

                </button>

              </motion.div>



              {/* =================================

                  PIE

              ================================= */}



              <motion.p

                className="

                  relative

                  mt-6

                  text-[7px]

                  uppercase

                  tracking-[0.24em]

                "

                style={{

                  color: "#8A8578",

                }}

                initial={{

                  opacity: 0,

                }}

                animate={{

                  opacity: 1,

                }}

                transition={{

                  duration: 0.8,

                  delay: 0.95,

                }}

              >

                Podrás activarla o pausarla después

              </motion.p>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>



      {/* =====================================

          CONTROL FLOTANTE DE MÚSICA



          Aparece después de cerrar el modal.

      ===================================== */}



      <AnimatePresence>

        {!mostrar && (

          <motion.button

            type="button"

            onClick={toggleMusica}

            aria-label={

              musicaActiva

                ? "Pausar música"

                : "Activar música"

            }

            title={

              musicaActiva

                ? "Pausar música"

                : "Activar música"

            }

            className="

              fixed

              bottom-5

              right-5

              z-[5000]

              flex

              h-11

              w-11

              items-center

              justify-center

              rounded-full

              border

            "

            style={{

              backgroundColor: COLORS.olive,

              borderColor:

                "rgba(247,244,236,0.55)",

              color: COLORS.ivory,

              boxShadow:

                "0 8px 22px rgba(0,0,0,0.18)",

            }}

            initial={{

              opacity: 0,

              scale: 0.75,

              y: 10,

            }}

            animate={{

              opacity: 1,

              scale: 1,

              y: 0,

            }}

            exit={{

              opacity: 0,

              scale: 0.8,

            }}

            transition={{

              duration: 0.4,

            }}

            whileTap={{

              scale: 0.9,

            }}

          >

            {musicaActiva ? (

              <Volume2

                size={17}

                strokeWidth={1.5}

              />

            ) : (

              <VolumeX

                size={17}

                strokeWidth={1.5}

              />

            )}

          </motion.button>

        )}

      </AnimatePresence>

    </>

  );

}