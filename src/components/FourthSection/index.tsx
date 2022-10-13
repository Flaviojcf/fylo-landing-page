import {
  Container,
  ImageContainer,
  InternContainer,
  InternContainerGroup,
} from "./styles";

export function FourthSection() {
  return (
    <Container>
      <InternContainerGroup>
        <InternContainer>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <ImageContainer>
            <img src="profile-1.jpg" alt="" />
            <span>
              <p>Bruce MckKenzie</p>
              <p>Founder & CEO, Huddle</p>
            </span>
          </ImageContainer>
        </InternContainer>
        <InternContainer>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <ImageContainer>
            <img src="profile-2.jpg" alt="" />
            <span>
              <p>Satish Patel</p>
              <p>Founder & CEO, Huddle</p>
            </span>
          </ImageContainer>
        </InternContainer>
        <InternContainer>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <ImageContainer>
            <img src="profile-3.jpg" alt="" />
            <span>
              <p>Iva boyd</p>
              <p>Founder & CEO, Huddle</p>
            </span>
          </ImageContainer>
        </InternContainer>
      </InternContainerGroup>
    </Container>
  );
}
