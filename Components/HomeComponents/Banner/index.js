import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  Description,
  Buttons,
  Button,
  Section,
  Head,
  ButtonTwo,
  Image,
  ImageDiv,
  SliderIconContainer,
  PrevArrow,
  NextArrow,
  IconCircle,
  Contents
} from "./banner.styled";
import Link from "next/link";
import slides from "../../../pages/api/homeData";

function Home() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null); 

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 30000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
   
    <Section>
      {slides.map((slide, index)=>{
        console.log(slide.image)
        return(
          <Container key={index}>
          {index === current && (
            <>
            <ImageDiv>
              <Image src={slide.image} alt=""/>
              <Contents>
              <Head>{slide.head}</Head>
                <Title>{slide.title}</Title>
                <Description>{slide.paragraph}</Description>
                <Buttons>
                  <Button>Lorem</Button>
                  <ButtonTwo>Lorem</ButtonTwo>
                </Buttons>
              </Contents>
              
           
            </ImageDiv>
            <SliderIconContainer>
                <IconCircle>
                  {" "}
                  <PrevArrow onClick={prevSlide} />
                </IconCircle>
                <IconCircle>
                  {" "}
                  <NextArrow onClick={nextSlide} />{" "}
                </IconCircle>
              </SliderIconContainer>
            </>
          )}
        </Container>
        )
      })}
    </Section>
 
  );
}

export default Home;
