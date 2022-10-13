import { FirstSection } from "../FirstSection";
import { Footer } from "../Footer";
import { FourthSection } from "../FourthSection";
import { Header } from "../Header";
import { SecondSection } from "../SecondSection";
import { ThirdSection } from "../ThirdSection";
import { Container, ContainerFooter, ContainerMain } from "./styles";

export function Main() {
  return (
    <Container>
      <ContainerMain>
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection/>
      </ContainerMain>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
}
