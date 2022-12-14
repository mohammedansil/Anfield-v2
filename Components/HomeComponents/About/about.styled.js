import styled from "styled-components";

export const Section = styled.section`
padding:170px;
padding-top: 200px;
@media (max-width:767px){
    padding: 30px;
}
@media(min-width:768px)and (max-width: 1367px){
    padding: 60px;
}
`
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
@media (max-width:767px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
    flex-direction: column;
}
`
export const LeftContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
@media (max-width:767px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
}
`
export const RightContainer = styled.div`
width: 45%;
display: flex;
flex-direction: column;

justify-content: space-between;
align-items: flex-end;
@media (max-width:767px){
    width: 100%;
    
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
}
`
export const Title = styled.h4`
width: 300px;
height: 55px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color:#00B11D;
border-radius: 5px;
color: #fff;
font-size: 29px;
font-weight: normal;
margin-bottom:28px;
@media (max-width:767px){
    font-size:16px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}

`
export const Heading = styled.h1`
font-size:59px;
font-weight: bold;
margin-top: 0;
margin-bottom:47px;
@media (max-width:767px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}
`
export const Description = styled.p`
font-size:32px;
margin-top: 0;
font-weight: 500;
line-height:42px;
font-weight: normal;
font-family: 'Segoe UI';
width: 772px;
margin-bottom:47px;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const P2 = styled.p`
font-size:32px;
margin-top: 0;
font-weight: 500;
line-height:42px;
font-weight: normal;
margin-top:30px;
width: 772px;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const Button = styled.button`
width: 334px;
height:77px;
margin-top: 0;
font-size:29px;
color:#fff;
background-color: #E61C29;
border:none;
border-radius:10px;
@media (max-width:767px){
    font-size:16px;
    width: 50%;
    height: 40px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
    width: 100%;
    height: 60px;
}
`
export const ImageDiv = styled.div`
width:656px;
height:244px;
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width:767px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
    margin-bottom: 50px;
    margin-top: 50px;
}

`
export const Image = styled.img`
width:100%;
height:100%;
z-index: 0;
object-fit: cover;
@media (max-width:767px){
    width: 300px;
    height: 175px;
}
`
export const ImageTitle = styled.h4`
position: absolute;
color:white;
font-size:29px; 
@media (max-width:767px){
    font-size:20px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:30px;
}

`