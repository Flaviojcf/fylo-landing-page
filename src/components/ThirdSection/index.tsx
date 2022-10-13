import { Container, TextContainer } from "./styles";

export function ThirdSection() {
  return (
    <Container>
      <img src="illustration-stay-productive.png" alt="" />
      <TextContainer>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Neve let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleague
          for live collaboration. No email attachments required.
        </p>
        <span>
          <p>See how Fylo works</p>
          <img src="icon-arrow.svg" alt="" />
        </span>
      </TextContainer>
    </Container>
  );
}
