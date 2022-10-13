import { Container, Content, ContentImage } from "./styles";

export function SecondSection() {
  return (
    <Container>
      <Content>
        <ContentImage>
          <img src="icon-access-anywhere.svg" alt="" />
          <h1>Access your files, anywhere</h1>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </ContentImage>
        <ContentImage>
          <img src="icon-security.svg" alt="" />
          <h1>Security you can trust</h1>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </ContentImage>
      </Content>
      <Content>
        <ContentImage>
          <img src="icon-collaboration.svg" alt="" />
          <h1>Real-time collaboration</h1>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </ContentImage>
        <ContentImage>
          <img src="icon-any-file.svg" alt="" />
          <h1>Store any type of file</h1>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </ContentImage>
      </Content>
    </Container>
  );
}
