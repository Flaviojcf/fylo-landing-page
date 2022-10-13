import {
  ContainerFooter,
  ContainerEmail,
  ImageContainer,
  ContainerLocation,
  ContainerFooterInformations,
  ContainerContact,
  Information,
  ContainerMoreInformations,
  ListContainer,
  AccounctsContainer,
  SocialContainer,
} from "./styles";
import { InstagramLogo, FacebookLogo, TwitterLogo } from "phosphor-react";

export function Footer() {
  return (
    <>
      <ContainerEmail>
        <div>
          <h1>Get early access today</h1>
          <span>
            It only takes a minute to sign up and our free starter ties is
            extremely generous. If you have any questions, our support team
            would be happy to help you
          </span>
        </div>
        <div>
          <input type="email" placeholder="Write your Email" />
          <button type="submit">Get Started For Free</button>
        </div>
      </ContainerEmail>
      <ContainerFooter>
        <ContainerFooterInformations>
          <ImageContainer>
            <img src="logo.svg" alt="" />
          </ImageContainer>
          <ContainerLocation>
            <img src="icon-location.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              mollitia quas! Maxime nesciunt vel obcaecati.
            </p>
          </ContainerLocation>
          <ContainerContact>
            <Information>
              <img src="icon-phone.svg" alt="" />
              <p>+1-543-123-4567</p>
            </Information>
            <Information>
              <img src="icon-email.svg" alt="" />
              <p>example@fylo.com</p>
            </Information>
          </ContainerContact>
          <ContainerMoreInformations>
            <ListContainer>
              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </ListContainer>

            <ListContainer>
              <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </ListContainer>
          </ContainerMoreInformations>
          <AccounctsContainer>
            <SocialContainer>
              <FacebookLogo size={32} style={{ color: "#D3D3D3" }} />
            </SocialContainer>
            <SocialContainer>
              <TwitterLogo size={32} style={{ color: "#D3D3D3" }} />
            </SocialContainer>
            <SocialContainer>
              <InstagramLogo size={32} style={{ color: "#D3D3D3" }} />
            </SocialContainer>
          </AccounctsContainer>
        </ContainerFooterInformations>
      </ContainerFooter>
    </>
  );
}
