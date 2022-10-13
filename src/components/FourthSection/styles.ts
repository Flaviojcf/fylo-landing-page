import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  margin-top: 8rem;
  margin-bottom: 12rem;
`;



export const InternContainerGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InternContainer = styled.div`

  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  gap: 2rem;

  width: 26rem;
  height: 15rem;
  border-radius: 8px;

  color: ${props=>props.theme.colors.Gray};

  background: ${(props) => props.theme.colors["Dark-Blue-testimonials"]};
`;


export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap:0.75rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;