import Project from "./Project";
import { Container, ProjectsContainer, MainTitle } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ScoreKeeper from "../Projects/ScoreKeeper/ScoreKeeper";
import MemoryGame from "../Projects/MemoryGame/MemoryGame";
import { Grid, Typography } from "@mui/material";

const projectsList = [
  //   {
  // card structure

  //     id: uuidv4(),
  //     name: "App title",
  //     previewUrl: 'Screenshot of the page',
  //     description: 'App description ',
  //     githubLink: "",
  //     websiteUrl: "deployed app url",
  //   },


];

const Work = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const scrollMotionAnime = {
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        ease: "easeIn",
        duration: 0.5,
        dealy: 0.5,
      },
    },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <Container id="work">
      <MainTitle
        as={motion.h3}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Proyectos
      </MainTitle>
      <ProjectsContainer
        as={motion.ul}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        <Grid
          container spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h5">
              Estos pequeños proyectos fueron hechos para reforzar el aprendizaje de herramientas como React y lógica de Javascript, así como librerías como Bootstrap y MUI
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <ScoreKeeper />
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <Typography variant="h5"         >
              Contador de puntaje
            </Typography>
            <Typography align="justify"           >
              Un sencillo score keeper para juegos como el ping pong o tennis, los botones de +1 le agregan un punto al marcador de cada respectivo jugador. El juego termina cuando alguno de los jugadores haya alcanzado el puntaje ganador que podemos seleccionar, cuandoeso sucede, los botones de +1 se desactivan y el juego no puede continuar hasta presionar el boton "RESET" y  reiniciemos el juego.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <MemoryGame />
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <Typography variant="h5"         >
              Contador de puntaje
            </Typography>
            <Typography align="justify"           >
              Un sencillo score keeper para juegos como el ping pong o tennis, los botones de +1 le agregan un punto al marcador de cada respectivo jugador. El juego termina cuando alguno de los jugadores haya alcanzado el puntaje ganador que podemos seleccionar, cuandoeso sucede, los botones de +1 se desactivan y el juego no puede continuar hasta presionar el boton "RESET" y  reiniciemos el juego.
            </Typography>
          </Grid>
        </Grid>


        {/* main project list is updated on const project list variable*/}

        {projectsList.map((eachProject) => (
          <Project projectDetails={eachProject} key={eachProject.id} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Work;
