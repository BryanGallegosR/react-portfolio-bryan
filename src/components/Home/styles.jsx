import styled, { keyframes } from "styled-components";

export const MoveInTransition = keyframes`
0% {
  opacity: 0;
  transform: translateY(5rem); }
100% {
  opacity: 1;
  transform: translate(0); }`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80");
  background-size: cover;
  color: #eeeeee;
  filter "blur"
  
`;

export const Name = styled.h1`
  font-size: 3rem;
  font-family: inherit;
  font-weight: 400;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Scroller = styled(Name)`
  padding-right: 0.4rem;
`;

export const SapnElement = styled.span`
  font-size: 4rem;
  font-weight: 700;
  color: #8DB600;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TypeEffectCOntainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.a`
  color: #8DB600;
  margin: 2rem;
  background: transparent;
  padding: 0.8rem 2rem;
  border: 1px solid #8DB600;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #8DB600;
    letter-spacing: 1px;
    box-shadow: 0px 6px 2px -3px rgba(141, 182, 0, 0.5);
    transition: all 0.1s ease-in-out;
  }
`;
