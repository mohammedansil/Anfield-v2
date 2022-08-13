import styled from "styled-components";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  import dynamic from "next/dynamic";
export const Section = styled.div`
background-image:url("../../../images/Sports.png");
background-repeat:no-repeat;
background-size:cover;
background-position:center;
color:white;
height:60vh;
@media(min-width:768px)and (max-width: 1367px){
 height: 60vh;  
}
`
export const Container = styled.div`
padding: 20px 175px;
display: flex;
flex-direction: row;
align-items: center;
height: 100%;
@media (max-width:768px){
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
@media(min-width:768px)and (max-width: 1367px){
 padding: 60px; 
 flex-direction: column;
    justify-content: center;
}

`
export const Services = styled.div`
width: 40%;

@media (max-width:768px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width:100%;   
}
`
export const Title = styled.h4`
font-size: 16px;
@media (max-width:768px){
    font-size:16px;
}
@media(min-width:768px)and (max-width: 1367px){
 font-size:20px;   
}
`
export const Heading = styled.h1`
font-size: 32px;
@media (max-width:768px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
 font-size:25px;   
}
`
export const Description = styled.p`
font-size: 16px;
@media (max-width:768px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
 font-size:20px;   
}
`
export const Button = styled.button`
font-size:16px;
background-color:#00B11D;
border-radius:10px;
width: 100%;
border:none;
color: #fff;
height:77px;
@media (max-width:768px){
    font-size:13px;
    width: 50%;
    height: 40px;
}
@media(min-width:768px)and (max-width: 1367px){
 font-size:20px;  
 margin-top: 20px;
 width : 20%;
 height: 50px;
}
`
export const Sliders = styled.div`
display: flex;
flex-direction: row;
width: 40%;
@media (max-width:768px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
    margin-top: 50px;
}
`
export const Image = styled.img`
   width: 100%;
   height:200px;
    object-fit: cover;
`
export const SliderDiv = styled.div`
    
`
export const SliderCarousel = styled(OwlCarousel)`
padding:50px;
width: 1000px !important;
height: 300px !important;
object-fit: cover !important;
`