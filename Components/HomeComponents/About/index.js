import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Heading,
  Description,
  Button,
  ImageDiv,
  Image,
  ImageTitle,
  P2
} from "./about.styled";
function index() {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Title>About Anfield</Title>
          <Heading>Neque Porro Dolorem Ipsum.</Heading>
          <Description>
            <p>
            Lorem Ipsum is simply dummy text of the printing 
standard dummy text ever since the 1500s, when an 
make a type specimen book. It has survived not only 
remaining essentially unchanged. It was popularised 
Lorem Ipsum passages
            </p>
            <P2>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of
standard dummy text ever since the 1500s, when an 
make a type specimen book. It has survived not only 
remaining essentially unchanged. It was popularised 
Lorem Ipsum passages
            </P2>
          </Description>
          <Button>Lorem</Button>
        </LeftContainer>
        <RightContainer>
          <ImageDiv>
            <Image src="/images/Group 46.png" alt="About" />
            <ImageTitle>Neque Porro</ImageTitle>
          </ImageDiv>
          <ImageDiv>
          <Image src="/images/Group 47.png" alt="About" />
            <ImageTitle>Neque Porro</ImageTitle>
          </ImageDiv>
          <ImageDiv>
          <Image src="/images/Group 48.png" alt="About" />
            <ImageTitle>Neque Porro</ImageTitle>
          </ImageDiv>
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;
