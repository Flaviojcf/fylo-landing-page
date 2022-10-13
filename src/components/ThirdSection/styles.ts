import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 4rem;
  max-width: 100%;

  justify-content: center;
  color: ${(props) => props.theme.colors.White};

  gap: 2rem;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;

    flex-direction: column;
    gap: 4rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  color: ${(props) => props.theme.colors.Gray};

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }

  h1 {
    max-width: 100%;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.White};
  }

  p {
    max-width: 70%;
  }

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.25rem;
    &:hover {
      text-decoration: underline;
    }

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;
