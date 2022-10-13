import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export const ImageSection = styled.div`
  img {
    max-width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.White};

  div:first-child {
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    max-width: 45rem;
    flex-wrap: wrap;
  }

  > p:last-child {
    text-align: center;
    max-width: 30rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  width: 18rem;
  height: 4rem;
  border-radius: 50px;

  cursor: pointer;

  color: ${(props) => props.theme.colors.White};
  background: ${(props) => props.theme.colors.Blue};
  transition: all ease 0.5s;

  &:hover {
    background: ${(props) => props.theme.colors.Cyan};
  }
`;
