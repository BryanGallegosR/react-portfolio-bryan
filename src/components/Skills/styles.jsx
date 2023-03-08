import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: #212121;
  color: #ffffff;
  @media screen and (max-width: 48rem) {
    height: auto;
    padding 3rem 0;
  } ;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  @media screen and (max-width: 80rem) and (min-width: 48rem) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const SkillCard = styled.a`
max-height: 150px;
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px rgb(255, 255, 255, 0.5) solid;
  border-radius: 0rem;
  margin: 0.5rem;
  padding: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 1.05;
    transition: all 0.4s ease-in-out;
    border: 1px solid #00f4dc;
    color: #00f4dc;
    box-shadow: 0px 6px 2px -3px rgba(0, 244, 220, 0.76);
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 150pxm) and (min-width: 150px) {
    width: 100%;
    height: auto;    ;
  }

  @media screen and (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

export const Title = styled.h1`
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
