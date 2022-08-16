import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Section = styled.div`
background-color: #171717;
padding:100px 120px;
color: #fff;
width: 100%;
@media (max-width:767px){
    padding: 30px;
}

`
export const Container = styled.div`
margin-left: auto;
margin-right:auto;
@media (max-width:767px){
    flex-direction: column;
}


`
export const Description = styled.p`
font-size:31px;
margin:10px 0;
font-weight: 300;
@media (max-width:767px){
    font-size:12px;
    margin-left: 0;
    text-align: left;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const BannerDescription = styled.p`
font-size:26px;
width: 417px;
height: 103px;
margin:10px 0;
@media (max-width:767px){
    font-size:12px;
    margin-left: 0;
    text-align: left;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const AboutDescription = styled.p`
font-size:31px;
width: 80%;
position: absolute;
top:215px;
margin:10px 0;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const Head = styled.h1`
font-size:37px;
text-align: center;
margin-bottom: 20px;
@media(max-width:767px){
    font-size:20px;
    margin-bottom: 0;
    
}
@media(min-width:768px)and (max-width: 1367px){
    font-size: 25px;
}
`
export const BannerHead = styled.h1`
font-size:48px;
margin-bottom: 20px;
@media(max-width:767px){
    font-size:20px;
    margin-bottom: 0;
    
}
@media(min-width:768px)and (max-width: 1367px){
    font-size: 25px;
}
`
export const Menu = styled(motion.ul)`
  display: flex;
  align-items: flex-start;
  margin-right: -24px;
  display: flex;
  width: 25%;
flex-direction: column;
margin-bottom: 50px;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const NavItem = styled(motion.li)`
  list-style: none;
  margin-right: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NavLink = styled(Link)`
  font-size: 31px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: space-between;
  cursor: pointer;
  
`;
export const NavLinkA = styled(motion.a)`
font-size: 31px;
font-weight: 300;
@media (max-width:767px){
    font-size:13px;
    
  }
  cursor: pointer;
`;

export const Services = styled.div`
display: flex;
flex-direction: column;
width: 25%;
align-items: flex-start;
margin-bottom: 50px;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const TypeOfServices = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const SocialMedia = styled.div`
display: flex;
flex-direction: column;
width: 25%;
align-items: flex-start;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const Icons = styled.div`
display: flex;
flex-direction: row;
font-size:25px;
width: 100%;
justify-content: space-between;
margin-bottom: 50px;
`
export const FooterDiv = styled.div`
display: flex;
width: 1557;
flex-direction: row;
justify-content: space-between;
@media (max-width:767px){
    flex-direction: column;
}
@media (min-width: 768px)and (max-width: 1367px){
    flex-direction: column;
}
`
export const About = styled.div`
display: flex;
position: relative;
flex-direction: column;
align-items: center;
margin-bottom: 50px;
width: 25%;
@media (max-width:767px){
    align-items: flex-start;
    width: 100%;
}
@media (min-width: 768px)and (max-width: 1367px){
    align-items: flex-start;
    width: 100%;
}
`
export const Image = styled.img`
width:314px;
height:314px;
object-fit: cover;
`
export const GButton = styled.div`
background-color: #0EBC2A;
border:2px solid #fff;
border-radius:5px;
width: 346px;
height:77px;
position: absolute;
right: 195px;
display: flex;
align-items: center;
justify-content: center;
z-index:99;
font-size: 29px;
font-weight: 500;
@media (max-width:767px){
    padding: 5px 20px;
    font-size: 13px;
}
`
export const BannerDiv = styled.div`
display: flex;
overflow-y: hidden;
background-color:rgba(0, 177, 29, 0.66);
color: #fff;
padding-left: 123px;
/* padding:50px 125px; */
flex-direction: row;
justify-content: space-between;
align-items:center;
height: 282px;
margin-bottom: 50px;
border-radius:5px;
position: relative;
@media (max-width: 768px){
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
}
@media (min-width: 768px)and (max-width: 1367px){
    padding: 30px;
    flex-direction: column;
}
`
export const LeftContainer = styled.div`
text-align-last: left;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
@media (min-width: 768px)and (max-width: 1367px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`
export const RightContainer = styled.div`
position: relative;
@media(max-width: 768px){
    display: flex;
flex-direction: column;
justify-content: flex-start;
}
`
export const ImagePost = styled.img`
position: absolute;
top: 0;
object-fit: cover;

right: 10px;
width: 530.13px;
z-index:0;
height: 370.07px;
@media (max-width: 768px){
    width: 50%;
    height: 50%;
}
@media (min-width: 768px)and (max-width: 1367px){
    width: 50%;
    height: 50%;
}
`