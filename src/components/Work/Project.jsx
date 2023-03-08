import {
  ProjectCard,
  Image,
  ProjectDetails,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
  Title,
} from "./styles";
import { motion } from "framer-motion";

const Project = (props) => {
  const { projectDetails } = props;
  const { name, previewUrl, githubLink, websiteUrl } = projectDetails;
  return (
    <ProjectCard>
      <Image src={previewUrl} alt="website preview" />
      <ProjectDetails>
        <Title>{name}</Title>
        <ButtonsContainer>
          <PrimaryButton as={motion.a} href={websiteUrl} target="_blank">
           Ver Pagina
          </PrimaryButton>
          <SecondaryButton as={motion.a} href={githubLink} target="_blank">
            Github
          </SecondaryButton>
        </ButtonsContainer>
      </ProjectDetails>
    </ProjectCard>
  );
};

export default Project;
