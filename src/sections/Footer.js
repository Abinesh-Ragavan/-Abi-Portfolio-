import { motion } from 'framer-motion'
import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import styled from 'styled-components'



import Logo from '../assets/Svgs/star_white_48dp.svg'


const Section=styled.section`
min-height: 100vh;
width: 100vw;
margin: 5rem auto;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};

position:relative;
`


const LogoContainer =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width:10vw;
    height:auto;
}
h3{
    font-size:${props =>props.theme.fontxl};
    font-family:'Kaushan Script';

    @media(max-height:48em){
            font-size:${props =>props.theme.fontxl};



    }

}
`
const FooterComponent =styled(motion.footer)`

width:80vw;



ul{

    list-style:  none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid  ${props =>props.theme.text};
    border-bottom:1px solid  ${props =>props.theme.text};
    @media(max-height:48em){
          justidy-content:center;



    }



}

li{
    padding: 2rem;
font-size: ${props =>props.theme.fontlg};
text-transform: uppercase;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
    transform: scale(1.9);
}
  @media(max-height:48em){
    padding:1rem;

       font-size:${props =>props.theme.fontmd};

    }

}


`

const Bottom =styled.div`
padding:0.5rem 0;
margin :0 4rem;
font-size:${props =>props.theme.fontlg};

display:flex;
justify-content:space-between;
align-items:center;



a{
    text-decoration:underline;
}



.button-49,
.button-49:after {
  width: 100px;
  height: 56px;
  line-height: 78px;
  font-size: 35px;
  font-family:'Kaushan Script';
  background-color: ${props =>props.theme.body};
  border: 0;
  color: #fff;
  letter-spacing: 3px;
//   box-shadow: 6px 0px 0px #00E6F6;
  outline: transparent;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-49:after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);
  
  content: ' FUCK';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, # 5%);
  text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
  clip-path: var(--slice-0);
}



.button-49:hover:after {


  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}

@media (min-width: 768px) {
  .button-49,
  .button-49:after {
    width: 200px;
    height: 86px;
    line-height: 88px;
  }
}


`


const Footer = () => {

    const {scroll} =useLocomotiveScroll();

    const handleScroll =(id)=>{

        let elem =document.querySelector(id);

        scroll.scrollTo(elem,
            {
                offset:'-100',
                duration:'2000',
                easing:[0.25,0,0,0.35,1.0]

            }

            )

    }
  return (
    <Section>
        <LogoContainer>
            <img 
            data-Scroll  data-scroll-speed="4"

            
            src={Logo} alt='wibe Studio' />
            <h3  data-Scroll data-scroll-speed="-2">Wibe Studio</h3>


        </LogoContainer>
        <FooterComponent
        initial={{y:"-400px"}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{
            duration:1.5
        }}
        
        >
            <ul>
                <li onClick={()=> handleScroll('#home')}
                >home</li>
                 <li onClick={()=> handleScroll('.about') } >about</li>
                  <li onClick={()=> handleScroll('#shop')}>shop</li>
                   <li onClick={()=> handleScroll('.new-arrival')}>new Arrival</li>
                 
                  <li  ><a href='https://google.com' target="_blank" rel="noreferrer"  >Look Book</a>
                  </li>
                  <li><a href='https://google.com' target="_blank" rel="noreferrer"  > Review</a>
                  </li>
                    
            </ul>
            <Bottom>
                <span
                  data-Scroll  data-scroll-speed="4" data-scroll-direction="horizontal"
                
                
                >&copy;{new Date().getFullYear()}.ALL Rights Reserved.</span>
            
            <button className="button-49" 
            type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://html-email-response-form.web.app/';
      }}
            
            >Contact Me</button>
                
                =
                <span

                data-Scroll  data-scroll-speed="-4" data-scroll-direction="horizontal"
                >

                    
                    Made with &hearts; by  &nbsp;
                    <a href='https://www.linkedin.com/in/abinesh-ragavan-b0a2ab22a/' target="_blank" rel="noreferrer"  > Abinesh Ragavan</a>


                </span>
            </Bottom>

        </FooterComponent>
    </Section>
  )
}

export default Footer