import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 2rem;
  min-width: 25rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  min-width: inherit;
  gap: 10rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.colors.White};
  max-width: 25rem;

  flex-wrap: wrap;
  text-align: center;

  gap: 0.9rem;

  h1 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
  }
`;
