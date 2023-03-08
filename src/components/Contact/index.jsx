import {
  Button,
  Container,
  Form,
  ImageContainer,
  ResponsiveContainer,
  Title,
  IconContainer,
  ButtonIcon,
  GithubButton,
  GmailButton,
  Socials,
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import "./index.css";

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

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
      scale: 1,
      transition: {
        type: "spring",
        ease: "easeInOut",
        duration: 0.6,
        mass: 2,
        stiffness: 100,
      },
    },
    hidden: { opacity: 0, scale: 0.5 },
  };
  return (
    <Container id="contact">
      <Title
        as={motion.h1}
        ref={ref}
        variants={scrollMotionAnime}
        initial="hidden"
        animate={control}
      >
        Contacto
      </Title>
      <ResponsiveContainer>

        <Form
          action="https://formspree.io/f/xlevkeon"
          method="POST"
          as={motion.form}
          ref={ref}
          variants={scrollMotionAnime}
          initial="hidden"
          animate={control}
        >
          <IconContainer>
            <ButtonIcon
              href="https://www.linkedin.com/in/bryan-gallegos-rodr%C3%ADguez-5a1715263/"
              target="_blank"
            >
              <span>
                <LinkedInIcon sx={{ marginRight: "0.3rem" }} />
                <Socials>LinkedIn</Socials>
              </span>
            </ButtonIcon>

            <GithubButton href="https://github.com/BryanGallegosR" target="_blank">
              <span>
                <GitHubIcon sx={{ marginRight: "0.3rem" }} />
                <Socials>GitHub</Socials>
              </span>
            </GithubButton>

            <GmailButton
              href="mailto:gallegosrbryan@gmail.com?subject=Important!&body=Hi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <MailIcon sx={{ marginRight: "0.3rem" }} />
                <Socials>Gmail</Socials>
              </span>
            </GmailButton>
          </IconContainer>
          <div className="inputbox">
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required="required"
            />
            <span>Nombre</span>
          </div>
          <div className="inputbox">
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required="required"
            />
            <span>E-mail</span>
          </div>
          <div className="inputbox">
            <input
              type="textarea"
              name="message"
              value={inputs.message}
              onChange={handleChange}
              required="required"
            />
            <span>Mensaje</span>
          </div>
          <Button type="submit">Enviar Mensaje</Button>
        </Form>
      </ResponsiveContainer>
    </Container >
  );
};

export default Contact;
