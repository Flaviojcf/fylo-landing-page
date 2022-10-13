import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  left: 0;
  height: 35rem;
  margin-top: 4rem;
  z-index: 1;

  background: ${(props) => props.theme.colors["Dark-Blue-footer"]};
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 2;
  width: 60%;
  height: 20rem;
  gap: 1rem;

  margin-bottom: -14rem;
  background: ${(props) => props.theme.colors["Dark-Blue-email"]};
  border-radius: 10px;
  padding: 4rem;

  color: ${(props) => props.theme.colors.White};

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.9rem;
    height: 30rem;
    padding: 1rem;
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
      max-width: 45rem;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    gap: 3rem;

    input {
      width: 25rem;
      height: 3.5rem;
      border-radius: 40px;
      padding-left: 2rem;

      @media (max-width: 768px) {
        width: 16rem;
      }
    }

    button {
      width: 14rem;
      height: 4rem;
      border-radius: 40px;

      cursor: pointer;

      color: ${(props) => props.theme.colors.White};
      background: ${(props) => props.theme.colors.Blue};
      transition: all ease 0.5s;

      &:hover {
        background: ${(props) => props.theme.colors.Cyan};
      }
      @media (max-width: 768px) {
        width: 16rem;
      }
    }
  }
`;

export const ContainerFooterInformations = styled.div`
  padding-left: 12rem;
  margin-top: 14rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 10rem;
  img {
    width: 6rem;
    height: 2rem;
  }
`;

export const ContainerLocation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-left: -16rem;

  color: ${(props) => props.theme.colors.White};

  > p {
    width: 20rem;
  }

  @media (max-width: 768px) {
    margin-top: -9rem;
  }
`;

export const ContainerContact = styled.div`
  color: ${(props) => props.theme.colors.White};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-left: -29rem;
    margin-top: 1rem;
  }
`;

export const Information = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ContainerMoreInformations = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    margin-left: -29rem;
    margin-top: 1rem;
  }
`;

export const ListContainer = styled.div`
  color: ${(props) => props.theme.colors.White};

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  li {
    list-style: none;
    cursor: pointer;
    transition: all ease 0.5s;
    filter: brightness(0.7);

    &:hover {
      filter: brightness(1.5);
    }
  }
`;

export const AccounctsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const SocialContainer = styled.div`
  cursor: pointer;

`;
