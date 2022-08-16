import styled from "styled-components";

export const Section = styled.section`
background-color: #f7f7f7;
padding:180px 100px;
@media (max-width:767px){
    padding: 30px;
}
@media(min-width:768px)and (max-width: 1367px){
    padding: 60px;
}
`
export const Container = styled.div`
display: flex;
flex-direction: row;
position: relative;
justify-content: center;
@media (max-width:767px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
    flex-direction: column;
}


`
export const Title = styled.h4`
font-size:59px;
text-align:center;
margin-bottom: 15px;
@media (max-width:767px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}

`
export const Description = styled.p`
font-size:32px;
text-align:center;
margin-top: 0;
font-weight: normal;
margin-bottom:67px;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}

`
export const Contact = styled.div`
margin-top: 0;
background-color: #E61C29;
width: 741px;
height:942px;
padding: 100px 90px;
border-radius: 30px;
color:#fff;
@media (max-width:767px){
    padding: 20px;
    width: 100%; 

}
@media(min-width:768px)and (max-width: 1367px){
   padding: 40px;
    width: 100%; 
}
`
export const ContactTitle = styled.h4`
font-size:45px;
font-weight: bold;
margin: 20px 0;
@media (max-width:767px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}

`
export const ContactDescription = styled.p`
font-size:31px;
margin: 20px 0;
width: 562px;
font-weight: 300;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}

`
export const ContactDetails = styled.div`

margin-top:60px;
`
export const Detail = styled.div`
display: flex;
align-items: center;
font-size:30px;
/* border-radius:50%;
padding: 10px;
border:1px solid #fff; */
`
export const SocialMediaIcons = styled.div`
color:white;
display: flex;
width: 309px;
height:46px;
flex-direction: row;
justify-content: space-evenly;
font-size: 35px;
margin-top:106px;

`
export const Form = styled.form`
width:801px;
height:942px;
display: flex;
padding: 0 75px;
flex-direction: column;
justify-content: center;
align-content: space-around;
background-color: #fff;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
@media (max-width:767px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
}
`
export const DetailText = styled.p`
margin-left: 15px;
margin-top: 20px;
margin-bottom: 20px;
font-size: 31px;
@media (max-width: 768px) {  
   font-size: 12px !important;
} 

`
export const Input = styled.input`
width: 283px;
font-size:23px;
margin-top: 112px;
border:none;
outline: none;
border-bottom:1px solid black;
@media (max-width: 768px){
    width: 100%;
}

`
export const Inputs = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px){
    flex-direction: column;
}
`
export const Button = styled.button`

text-align: center;
background-color:#E61C29;
border:none;
outline: none;
color: #fff;
font-weight: 500;
font-size:29px;
border-radius:5px;
width: 650px;
height: 77px;
@media (max-width: 768px){
    width: 100%;
}
`
export const Message = styled.input`
width: 650px;
font-size:23px;
margin-top:112px;
outline: none;
border:none;
border-bottom:1px solid black;
@media (max-width: 768px){
    width: 100%;
}
`
export const ContactImage = styled.img`
margin-left: 333px;
position: absolute;
bottom: 0;
right: 900px;
width: 493.6px;
z-index: 999;
height:404.75px;
`
export const Stars = styled.img`
width: 271px;
height: 271px;
`
export const Rating = styled.div`
margin-top:17.5px; 
position: relative;
`
export const RatingText = styled.p`
font-size: 23px;
position: absolute;
top:50px;
font-weight: normal;
`