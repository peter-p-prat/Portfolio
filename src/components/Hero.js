import React from 'react';
import styled, {withTheme} from 'styled-components';
import { fondoColor, Titular, Resaltado, subTitulo, copete, globoHero, textColor } from './ui/theme';
import UncontrolledLottie from './UncontrolledLottie';
import Typist from 'react-typist';

const Wrapperwrapper = styled.div`
    margin:0;
    padding:0;
    position:relative;
    
    overflow-x: hidden;
    svg {
        display: block;
        width: 104%;
        margin:0;
        padding: 0;
    }
`;

const Wrapper = styled.div`
    position:relative;
    background-color: ${fondoColor};
    margin: 0;
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    //media query para iphoneX
    @media (width: 375px)and (height: 812px) {
        padding-top:5rem !important;
        min-height:650px;
    };
    @media (max-width: 800px) {
        flex-direction:column;
        justify-content: space-between;
        padding: 1rem 1rem;
    };
    @media (min-width: 801px) {
        padding: 3rem 3rem 0 4rem;
    };
    
    @media (min-width: 1200px) {
        padding: 3rem 4rem 0 7rem ;
    };
    
    
`;
const Titulo = styled.h1`
    margin-top: 0;
    font-size: 3rem;
    color: ${Titular};
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: center 100%;
    background-image: linear-gradient(120deg, ${Resaltado} 0%,${Resaltado} 100%);
    width:fit-content;
    display:inline;
    @media (max-width: 880px) {
        margin-bottom: 0;
    };
`;
const Presentacion = styled.div`
    max-height: 50%;
    order: 2;
    width: 90%;
    animation: 1s ease-out 0s 1 FadeInFromLeft;
    @media (min-width: 801px) {
        margin:0 2rem 0 2rem;
        order: 0;
    };
    @media (max-width: 800px) {
        padding-bottom: 3rem;
        flex-grow: 1;
    };
    
    h2 {
        color: ${subTitulo};
        margin-bottom:0.2rem;
    };
    p {
        font-weight: 400;
        font-style: italic;
        line-height: 1.7;
        color: ${copete};
        margin-top: 0;
        @media (max-width: 800px) {
        margin-top: 0;
        };
    };
    
    .cursor {
        animation: cursor-animation 0.9s step-end infinite;
    };
    @keyframes cursor-animation {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    };
    @keyframes FadeInFromLeft {
    0% {
        transform: translateX(-100%);
        opacity:0;
    }
    80% {
        transform: translateX(5%);
        opacity:1;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    }
`;
const Copete = styled.div`
    margin:0;
    padding:0;
    min-height: 6rem;
`;

const Contenedoranimacion = styled.div`
margin:0;
padding:0;
`;
const Ventanita = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    order: 1;
    margin:1rem;
    padding: 5rem;
    height: 45vh;
    width: 90%;
    max-width: 35vw;
    background: no-repeat center url(${globoHero}) ;
    background-size: 90%;
    animation: 1s ease-out 0s 1 FadeInFromRight;

    @media (max-width: 800px) {
        max-width: 200px;
        height: 20vw;
        background-size: 70%;
        margin-top: 3rem;
        margin-left:3rem;
        padding: 4rem 5rem 5rem 5rem;
    };
    @media (max-width: 880px) {
        max-width: 200px;
        height: 20vw;
        background-size: 70%;
        margin-top: 3rem;
        margin-left:1rem;
        padding: 4rem 3rem 5rem 3rem;
    };
    @media (min-width: 1750px) {
        background-size: 75%;
    };
    svg{
        margin: 0;
    };

    @keyframes FadeInFromRight {
    0% {
        /* transform: translateX(100%); */
        opacity:0;
    }
    100% {
        /* transform: translateX(0); */
        opacity: 1;
    }
}
    
`;

const Ilustracion = styled.svg`
position: absolute;
top:1rem;
left:0;
    height: 80%;
        padding: 1rem;
        width: 90%;
        max-width: 100%;
        padding-right: 2rem;
    @media (min-width: 880px) {
        height: 70%;
        top:4rem;
        left:0;
    };
       
`;

const Ilustracion2 = styled.img`
    position: absolute;
    top:1.5rem;
    left:3.5rem;
    padding: 1rem;
    width: 45%;
    max-width: 45%;
    @media (min-width: 880px) {
        
        top:4rem;
        left:2rem;
    };
       
`

const Hero = (props) => {


    return ( 
        <Wrapperwrapper ref={props.refProp}>
        <Wrapper>
            <Presentacion>
                <Titulo >Pedro </Titulo><Titulo>Peirano </Titulo><Titulo>Prat</Titulo>
                
                <Copete>
                    <Typist 
                        startDelay={2500}
                        cursor={{
                            show: false,
                            blink: true,
                            element: '|',
                            hideWhenDone: false,
                            hideWhenDoneDelay: 1000
                        }}
                    >
                        <h2>Programador Front-end</h2>
                        <p>Páginas web interactivas, diseño intuitivo y 100% responsive.<span className="cursor">|</span></p>
                    </Typist>
                </Copete>
            </Presentacion>
            
           
            <Ventanita>
                
                <UncontrolledLottie />
                
            </Ventanita>
            
        </Wrapper>
       
      

        </Wrapperwrapper>
        
    );
}
 
export default withTheme(Hero);