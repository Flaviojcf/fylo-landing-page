import { Button, ImageSection, Section, TextContainer } from "./styles";

export function FirstSection() {
  return (
    <Section>
      <ImageSection>
        <img src="/illustration-intro.png" alt="" />
      </ImageSection>

      <TextContainer>
        <div>
          <h1>All your fies in one secure location, accessible anywhere.</h1>
        </div>
        <p>
          Fylos stores all your must imporant files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
      </TextContainer>
      <Button>
          Get Started
      </Button>
    </Section>
  );
}
