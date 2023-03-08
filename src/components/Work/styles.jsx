import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 3rem 0;
  background: #edf2f8;
  @media screen and (max-width: 48rem) {
    height: auto;
  } ;
`;

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  max-width: 100rem;
`;

export const ProjectCard = styled.li`
  display: flex;
  max-width: 24rem;
  height: auto;
  background-color: #fff;
  margin: 1rem;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  border: none;
  border-radius: 0rem;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 80rem) and (min-width: 48rem) {
    max-width: 15rem;
  }

  &:hover {
    box-shadow: 0px 6px 2px -3px rgba(30, 30, 60, 0.3);
    scale: 1.05;
    transition: all 0.4s ease-in-out;
  }
`;

export const Image = styled.img`
  margin-top: 0.5rem;
  max-width: 23rem;
  width: 100%;
  height: auto;
  align-self: center;
  @media screen and (max-width: 80rem) and (min-width: 48rem) {
    max-width: 15rem;
  } ;
`;

export const Text = styled.p`
  padding-top: 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 1rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  @media screen and (max-width: 80rem) and (min-width: 48rem) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProjectDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const PrimaryButton = styled.a`
  background: #ffffff;
  text-transform: uppercase;
  font-family: "Roboto";
  border: 1px solid #171717;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-weight: 400;
    font-size: 14px;
  }
  @media screen and (max-width: 80rem) and (min-width: 48rem) {
    padding: 0.6rem 0.8rem;
    font-size: 14px;
  }
  &:hover {
    color: #ffffff;
    background: #171717;
    border: 1px solid #ffffff;
    transition: all 0.4s ease-in-out;
    letter-spacing: 2px;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    font-weight: 500;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: #171717;
  color: #ffffff;
  border: 1px solid #ffffff;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #171717;
    background: #ffffff;
    border: 1px solid #171717;
    transition: all 0.4s ease-in-out;
    letter-spacing: 2px;
  }
`;

export const MainTitle = styled.h1`
  font-family: inherit;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 16px;
  padding-bottom: 2rem;
  margin-bottom: 0;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
