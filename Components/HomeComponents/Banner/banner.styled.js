import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
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
export const Head = styled.div`
  opacity: 1;
  z-index:9;
  background-color:#E61C29;
padding:10px 10px;
border-radius:5px;
top: 100%;
left: 50%;
  color: #fff;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
export const Title = styled.h1`
  font-size: 40px;
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
  font-size: 16px;
  margin-top: 15px;
  width: 48%;
  z-index:9;
  line-height: 130%;
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
  width: 140px;
  height: 42px;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
  @media (max-width:767px){
    margin-left: 0;
  }
`;
export const ButtonTwo = styled.button`
  background: transparent;
  border: 2px solid #E61C29;
  width: 140px;
  cursor: pointer;
  height: 42px;
  border-radius: 5px;
  color: #E61C29;
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
  background: #E61C29;;
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
z-index:999;
display: flex;
width: 80%;
flex-direction: column;
align-items: flex-start;
`