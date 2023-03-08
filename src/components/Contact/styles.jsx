import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000000;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    height: auto;
    width: auto;
    padding: 3rem 0;
  }
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-items: center;
  background: #000000;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 80%;
  max-width: 500px;
  max-height: 500px;
  @media screen and (max-width: 768px) {
    max-width: 90%;
    width: auto;
    height: auto;
    padding: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 80rem) {
    max-width: 100%;
    width: auto;
    height: auto;
  }
`;

export const Title = styled.h1`
  font-family: inherit;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 16px;
  padding-bottom: 0;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  background: #ffffff;
  text-transform: uppercase;
  border: 2px solid #171717;
  font-weight: 700;
  font-family: "Roboto";
  cursor: pointer;
  margin: 10px 0;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  text-align: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #8DB600;
    background: #171717;
    border: 2px solid #8DB600;
    font-weight: 500;
    letter-spacing: 4px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 6px 2px -3px rgba(141, 182, 0, 0.76);
  }
`;

export const ImageContainer = styled(Container)`
  margin: 0 2rem;
  max-height: 500px;
  width: 80%;
  max-width: 500px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 80%;
    max-width: 280px;
    max-height: 280px;
    margin: 0;

    iframe {
      max-width: 280px;
      max-height: 280px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 80rem) {
    width: 80%;
    margin: 0;
    max-width: 350px;
    max-height: 350px;
    iframe {
      max-width: 350px;
      max-height: 350px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ButtonIcon = styled.a`
  background: none;
  width: 30%;
  border: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 1.25rem;
  transition: 0.5s;
  @media screen and (min-width: 768px) and (max-width: 80rem) {
    padding-left: 0.2rem;
    padding-right: 1.4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0.4rem 0rem;
    width: auto;
  }
  span {
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: 0.4s;
    @media screen and (max-width: 768px) {
      padding: 8px;
      font-size: 0.75rem;
      margin-left: 8px;
    }
  }
  &:hover {
    background: #8DB600;
    border-color: #8DB600;
    transition: 0.5s;
    padding: 0.5rem 1.25rem;
    box-shadow: 0px 7px 2px -3px rgba(141, 182, 0, 0.76);
    @media screen and (max-width: 768px) {
      padding: 0.4rem 0.2rem;
    }
    span {
      font-size: 1.1rem;
      transition: 0.4s;
      @media screen and (max-width: 768px) {
        font-size: 0.85rem;
      }
    }
  }
`;

export const GmailButton = styled(ButtonIcon)`
  padding: 0.6rem 1.25rem;
  &:hover {
    border-color: #ea4335;
    background: #ea4335;
    box-shadow: 0px 7px 2px -3px rgba(234, 67, 53, 0.76);
  }
  @media screen and (max-width: 768px) {
    padding: 0.4rem 0rem;
    width: auto;
  }
`;

export const GithubButton = styled(ButtonIcon)`
  padding: 0.6rem 1.25rem;
  &:hover {
    border-color: #fff;
    background: #fff;
    color: #000;
    box-shadow: 0px 6px 2px -3px rgba(255, 255, 255, 0.76);
  }
  @media screen and (max-width: 768px) {
    padding: 0.4rem 0rem;
    width: auto;
  }
`;

export const Socials = styled.span`
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;
