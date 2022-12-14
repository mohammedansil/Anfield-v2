import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Section = styled.div`
  margin-top: 0;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: grab;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 25px;
  }
  @media(min-width:768px)and (max-width: 1367px){
    justify-content: space-between;
    width: 100%;
    height: 100%;

  }
`;

export const ImageDiv = styled.div`
  
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  cursor: grab;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// export const SectionThree = styled.div`
// background-image: url("/images/Banner-3.jpg");
// width:100%;
// height:108vh;
// cursor:grab;
// background-size:cover;
// background-repeat: no-repeat;
// background-position: center;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// @media(max-width: 768px){
//     flex-direction: column;
// }
// `
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Head = styled.div`
  /* opacity: 1;
width: 64px;
height: 18px;
transform: translate(-32px, -38px);
top: 100%;
left: 50%; */
  color: #fff;
  @media (max-width: 768px) {
  }
`;
export const Title = styled.h1`
  font-size: 54px;
  color: #fff;
  max-width: 75%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 35px;
    width: 95%;
    font-weight: 600;
  }
`;
export const Description = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 15px;
  max-width: 48%;
  line-height: 130%;
  color: #fff;
  @media (max-width: 768px) {
    width: 75%;
    font-size: 16px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 340px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  background: #ffb200;
  cursor: pointer;
  border-color: #ffb200;
  width: 140px;
  height: 42px;
  border-radius: 50px;
  border: none;
  color: #fff;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
`;
export const ButtonTwo = styled.button`
  background: transparent;
  border: 2px solid #ffb200;
  width: 140px;
  cursor: pointer;
  height: 42px;
  border-radius: 50px;
  color: #ffb200;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
`;

export const SliderIconContainer = styled.div`
  display: flex;
  width: 80vw;
  margin-top:2rem;
  position:absolute;
  bottom:3rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;
export const IconCircle = styled.div`
  background: #ffb200;
  border-radius: 50px;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PrevArrow = styled(GrPrevious)`
  cursor: pointer;
  color: #fff;
  fill: #fff;
  font-size: 20px;
`;

export const NextArrow = styled(GrNext)`
  cursor: pointer;
  color: #fff;
  fill: #fff;
  font-size: 20px;

  & path {
    stroke: #fff;
   }
`;
export const Image = styled.img`
    width: 500px;
    height: 250px;
    object-fit: cover;
    @media (max-width: 768px) {
        width: 200px;
        height: 75px;
        margin-left: auto;
        margin-right:auto;
    }
    @media(min-width:768px)and (max-width: 1367px){
        width: 500px;
        min-height:185px;
        max-height: 185px;
    }
`;