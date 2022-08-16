import styled from "styled-components";

export const Section = styled.section`
padding:173px 170px 170px 170px;

@media (max-width:767px){
    padding: 30px;
}
@media(min-width:767px)and (max-width: 1367px){
    padding: 60px;
}
`
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width:767px){
    flex-direction: column;
}
@media(min-width:767px)and (max-width: 1367px){
    flex-direction: column;
}
`
export const RightContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
@media (max-width:1367px){
    width: 100%;
}
@media(min-width:767px)and (max-width: 1367px){
    width: 100%;
}
`
export const LeftContainer = styled.div`
width: 45%;
display: flex;
flex-direction: column;
@media (max-width:767px){
    width: 100%;
}
@media(min-width:767px)and (max-width: 1367px){
    width: 100%;
}
`
export const Mission = styled.div`
width: 75%;
`
export const Vision = styled.div`
display: flex;
margin-top: 20px;
flex-direction: row;
height: 100%;
align-items: center;
justify-content: space-around;
align-content: space-between;
`
export const Detail = styled.div`
display: flex;
width: 70%;
flex-direction: column;
justify-content: center;
`
export const Buttons = styled.div`
display: flex;
justify-content: space-between;
width: 82%;
@media (max-width:767px){
    width: 90%;
}

`
export const WButton = styled.button`
font-size: 29px;
width: 230px;
height:77px;
background-color:transparent;
border:2px solid #fff;
outline:none;
color:#fff;
margin-left: 24px;
font-weight: bold;

`
export const BLButton = styled.button`
font-size: 31px;
width: 312px;
height:97px;
background-color:transparent;
border:2px solid lightgray;
outline:none;
color:#000;
font-weight: 600;
`
export const RButton = styled.button`
width: 230px;
height:77px;
border:none;
color: #fff;
font-size: 29px;
background-color:#E61C29;
outline:none;

`
export const MIssionImage = styled.img`
width: 18%;
position: absolute;
height: auto;
bottom: 20px;
right: 20px;
`

export const MissionVission = styled.div`
background: rgb(180,126,193);
background: linear-gradient(90deg, rgba(180,126,193,1) 0%, rgba(174,216,196,1) 100%);
border-radius: 10px;
margin-top: 30px;
width: 786px;
height: 395px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: relative;
`
export const Title = styled.h4`
display: flex;
border-radius: 5px;
color: #00B11D;
font-size: 29px;
font-weight: bold;
@media (max-width:767px){
    font-size:16px;
}
@media(min-width:767px)and (max-width: 1367px){
    font-size: 20px;
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
@media(min-width:767px)and (max-width: 1367px){
   font-size:25px; 
}
`
export const Name = styled.h1`
font-size:48px;
@media (max-width:767px){
    
}
@media(min-width:767px)and (max-width:1367px){

}
`
export const Text = styled.h1`
font-size:40px;
@media (max-width:767px){
    font-size: 16px;
}
`
export const Button = styled.button`

@media (max-width:767px){
    
}
`
export const Para = styled.p`
font-size:25px;
margin-top: 0;
font-weight: 500;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:767px)and (max-width: 1367px){
 font-size:20px;   
}
`
export const Description = styled.p`
font-size:33px;
margin-top: 0;
font-weight: 500;
margin-bottom:47px;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:767px)and (max-width: 1367px){
 font-size:20px;   
}
`
export const Image = styled.img`
width:147px;
height:147px;
background-color: #B0ACDB;
padding: 20px;
z-index: 0;
@media (max-width:767px){
    width: 99px;
    height: 99px;
}
`
