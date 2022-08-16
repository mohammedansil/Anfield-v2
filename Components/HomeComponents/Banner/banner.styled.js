import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill} from "react-icons/bs"
export const Section = styled.section`
  width: 100%;
  height: 806px;
  margin-top: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: grab;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageDiv = styled.div`
  width: 100vw;
  height: 100vh;
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
export const Head = styled.h1`
  opacity: 1;
  z-index:9;
  font-size:29px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#E61C29;
width: 492px;
height:56px;
border-radius:5px;
top: 100%;
left: 50%;
  color: #fff;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
export const Title = styled.h1`
  font-size: 69px;
  color: #fff;
  width: 75%;
  z-index:9;
  @media (max-width: 768px) {
    font-size: 25px;
    width: 100%;
    font-weight: 600;
  }
`;
export const Description = styled.p`
  font-size: 33px;
  margin-top: 15px;
  width: 48%;
  z-index:9;
  line-height: 43px;
  color: #fff;
  @media (max-width: 768px) {
    width: 75%;
    font-size: 12px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index:9;
  @media screen and (max-width: 340px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  background: #E61C29;
  cursor: pointer;
  border:none;
  width: 230px;
  height: 77px;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 29px;
  @media (max-width:767px){
    margin-left: 0;
  }
`;
export const ButtonTwo = styled.button`
  background: transparent;
  border: 2px solid #fff;
  width: 230px;
  cursor: pointer;
  height: 77px;
  border-radius: 5px;
  color: #fff;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 29px;
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
export const IconCircleLeft = styled.div`
   background: #fff;
  border:1px solid #fff;
  border-radius: 10px;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:50px;
`;
export const IconCircleRight = styled.div`
  background: #fff;
  border:1px solid #fff;
  border-radius: 10px;
  color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right:50px;
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
  width:100vw;
  height: 100vh;
  position: absolute;
  z-index:0;
  top: 0;
  left: 0;
  object-fit: cover;
`
export const Contents = styled.div`
position: relative;
display: flex;
width: 80%;
flex-direction: column;
align-items: flex-start;
`