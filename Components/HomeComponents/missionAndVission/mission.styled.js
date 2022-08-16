import styled from "styled-components";

export const Section = styled.section`
padding:170px;
padding-top: 110px;
background-color: #f7f7f7;
@media (max-width:1367px){
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
@media (max-width:1367px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
 flex-direction: column;
}
`
export const AboveContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
@media (max-width:1367px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
 width: 100%;  
}
`
export const Mission = styled.div`
width: 733px;

border-radius:28px;
height: 656px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0px 2px 22px -12px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 0px 2px 22px -12px rgba(0, 0, 0, 0.5);
`
export const MissionVission = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width:1367px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
 flex-direction: row;  
}
`
export const Title = styled.h4`

display: flex;
flex-direction: row;
align-items: center;
border-radius: 5px;
color: #00B11D;
font-size: 30px;
font-weight: 600;
@media (max-width:1367px){
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
@media (max-width:1367px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
 font-size:25px;   
}
`
export const Name = styled.h1`
margin-bottom: 20px;
text-align: left !important;
font-size: 40px;
color:#00B11D;
width: 85%;
@media (max-width:1367px){
    
}
`
export const Para = styled.p`
font-size:27px;
margin-top: 0;
width:85%;
font-weight: 500;
@media (max-width:1367px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
 font-size:20px;   
}
`
export const Image = styled.img`
width:85%;
margin-bottom: 20px;
z-index: 0;
height: 250px;
@media (max-width:1367px){
    width: 300px;
    height: 175px;
}
`
