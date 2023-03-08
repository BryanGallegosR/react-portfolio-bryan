import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background: #000;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.p`
  font-family: inherit;
  color: #fff;
  font-size: 0.9rem;
  padding-bottom: 6px;
  letter-spacing: 1px;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    text-align: center;
  }
`;
