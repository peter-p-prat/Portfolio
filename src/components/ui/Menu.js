import React from 'react'
import styled from 'styled-components';
import {  iconClosedColor, iconOpenedColor, menuColor1, textoFondoColor, fondoColorClaro } from './theme';


const Checkbox = styled.input`
    display: none;

    //Funcionalidad
    &:checked ~ .navigation__background {
        transform: scale(80);
        opacity: 0.992;
    };

    &:checked ~ .navigation__nav {
        opacity:1;
        width: 100%;
    };

    &:not(:checked) ~ .navigation__nav {
        visibility: hidden;
    };
    &:checked + .navigation__button {
        background-color: ${iconOpenedColor};
    };
    
    &:checked + .navigation__button .navigation__icon {
        background-color: transparent;
    };
    &:checked + .navigation__button .navigation__icon::before {
        transform: rotate(135deg);
        top:0;
        background-color: ${iconClosedColor};
    };
    &:checked + .navigation__button .navigation__icon::after {
        transform: rotate(-135deg);
        top:0;
        background-color: ${iconClosedColor};
    }
`;

const Button = styled.label`
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    background-color: ${iconClosedColor};
    height: 4rem;
    width: 4rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
    border-radius:50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.2);
    text-align: center;
    transition: background-color .8s cubic-bezier(0.83, 0, 0.17, 1);
    cursor: pointer;
    @media(max-width: 415px) {
        height:3rem;
        width:3rem;
    }
    span {
        position: relative;
        margin-top:1.9rem;
        
        @media(max-width: 415px) {
            margin-top:1.42rem;
        }
        &,
        &::before,
        &::after {
            width: 1.7rem;
            height: 2px;
            background-color: ${iconOpenedColor};;
            display: inline-block;
            @media(max-width: 415px) {
                height:1.5px;
                width: 1.5rem;
            }
        };

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        };

        &::before { 
            top: -.5rem;
        };
        &::after { top: .5rem; };
    };
    &:hover span {
        &::before{
            top: -0.65rem;
        };
        &::after{
            top: 0.65rem;
        };
        
    } 
`;

const Icon = styled.span`
    
`;
const Background = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: fixed;
    top: 2.5rem;
    right: 2.5rem;
    background-image: radial-gradient(${menuColor1}, ${menuColor1});
    z-index: 1000;
    transition: transform .8s cubic-bezier(0.83, 0, 0.17, 1);
    //transform: scale(50);
    @media(max-width: 415px) {
        height:2rem;
        width:2rem;
    }
`;

const Navigation = styled.nav`
    height: 100vh;
    @media (max-width: 600px) {
            max-height:100%;
        }
    position:fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    
    opacity:0;
    width: 0;
    transition: opacity .9s cubic-bezier(0.68, -0.6, 0.32, 1.6), width .9s cubic-bezier(0.68, -0.6, 0.32, 1.6), visibility 0s ;
`;
const List = styled.ul`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    list-style: none;
    text-align:center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    padding-inline-start: 0;

`;
const Item = styled.li`
    margin: 1rem;
`;
const Link = styled.a`
    &:link,
    &:visited {
        border-radius: 35px;
        display: inline-block;
        font-size: 3rem;
        padding: 1rem 2rem;
        color: ${fondoColorClaro};
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        font-family:'Playfair Display', serif;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${fondoColorClaro} 50%);
        background-size: 220%;
        transition: all .4s;
        @media (max-width: 600px) {
            font-size:1rem;
        }

        span {
            margin-right: 1.5rem;
            display: inline-block;
        }
    }
    
    &:hover,
    &:active {
        background-position: 100%;
        color: ${textoFondoColor};
        transform: translateX(1rem);
    }
`;
const Menu = () => {

    return ( 
        <div className="navigation">
            <Checkbox type="checkbox"  className="navigation__checkbox" id="navi-toggle"/>

            <Button htmlFor="navi-toggle" className="navigation__button">
                <Icon className="navigation__icon">&nbsp;</Icon>
            </Button>

            <Background className="navigation__background">&nbsp;</Background>

            <Navigation className="navigation__nav">
                <List className="navigation__list">
                    <Item className="navigation__item"><Link href="#" className="navigation__link"><span>01</span>Sobre mi</Link></Item>
                    <Item className="navigation__item"><Link href="#" className="navigation__link"><span>02</span>Mis habilidades</Link></Item>
                    <Item className="navigation__item"><Link href="#" className="navigation__link"><span>03</span>Proyectos</Link></Item>
                    <Item className="navigation__item"><Link href="#" className="navigation__link"><span>04</span>Contacto</Link></Item>
                    
                </List>
            </Navigation>
        </div>
    );
}
 
export default Menu;