import {
  AboutContainer,
  Card,
  ByteText,
  Image,
  TextContainer,
  AvatarContainer,
  Button,
  Span,
  Title,
} from "./styles";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
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
        type: "spring",
        ease: "easeInOut",
        duration: 0.6,
        // mass: 2,
        // stiffness: 100,
      },
    },
    hidden: { opacity: 0, y: 200 },
  };

  return (
    <AboutContainer id="about">
      <Title
        as={motion.h5}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Acerca de mi      </Title>
      <Card>
        <AvatarContainer>
          <Image
            as={motion.img}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
            alt="Bryan"
            src="https://avatars.githubusercontent.com/u/119536685?v=4"
          />
          <Button
            as={motion.a}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
            href="https://drive.google.com/file/d/1mDnVDylMnPboPdSx9TSQ1myPZC1hRmNw/view?usp=sharing"
            download
            target="_blank"
          >
            <Span>
              Descargar CV
              <FileDownloadIcon
                sx={{
                  fontSize: "1.1rem",
                }}
              />
            </Span>
          </Button>
        </AvatarContainer>
        <TextContainer>
          <ByteText
            as={motion.p}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
          >
            Soy egresado de la carrera de Ingeniería en Ciencias de los
            Materiales de la Universidad Juárez del estado de Durango. Aplicando mi formación en matemáticas generales, y algoritmos entre otras habilidades, Tengo experiencia previa en programación de equipos de
            CNC, automatización y rutinas de fabricación.
          </ByteText>
          <ByteText
            as={motion.p}
            ref={ref}
            variants={scrollMotionAnime}
            initial="hidden"
            animate={control}
          >
            Me considero un autodidacta y aprendo de manera rápida, explorando nuevas tecnologías y conocimientos para desarrollo personal y profesional.
          </ByteText>
        </TextContainer>
      </Card>
    </AboutContainer>
  );
};

export default About;
