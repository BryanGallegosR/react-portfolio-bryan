import styled, { keyframes } from "styled-components";

export const MoveInTransition = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5rem); }
  100% {
    opacity: 1;
    transform: translate(0); }`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #edf2f8;
  height: 100vh;
  animation: ${MoveInTransition} 1s fade-out;
  @media screen and (max-width: 48rem) {
    height: auto;
    padding: 3rem 0;
  } ;
`;

export const Button = styled.a`
  background: #000;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: 500;
  font-family: "Roboto";
  text-decoration: none;
  line-height: 1
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: #fff;
  transition: 800ms ease all;
 
  &:hover {
    color: #000;
    background: #ffffff;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    font-weight: 500;
    letter-spacing: 3px;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 3px;
    width: 0;
    background: #000;
    transition: 400ms ease all;
  }

  :after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
    transition: 800ms ease all;
  }
  &:hover:before {
    width: 100%;
    transition: 800ms ease all;
  }
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  font: inherit;
`;

export const Card = styled.div`
  width: 80%;
  max-width: 70rem;
  display: flex;
  @media screen and (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } ;
`;

export const ByteText = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  padding: 1rem;
  @media screen and (max-width: 80rem) and (min-width: 48rem) {
    font-size: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 48rem) {
    font-size: 1rem;
  } ;
`;

export const Image = styled.img`
height: 11rem;
width 11rem;
object-fit: cover;
object-position: 60% 40%;
border-radius: 7rem;
margin: 1rem;`;

export const TextContainer = styled.div`
  width: 80%;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
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
