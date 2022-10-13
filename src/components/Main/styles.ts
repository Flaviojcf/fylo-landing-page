import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  height: 100%;
  background-image: url("bg-curvy-desktop.svg");
  background-repeat: no-repeat;

  flex-direction: column;

  @media (max-width: 1440px) {
    font-size: 87.5%;
  }
`;

export const ContainerMain = styled.main`
  padding: 2rem 4rem 0rem 4rem;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
