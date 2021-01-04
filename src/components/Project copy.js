import React, {useState} from 'react';
import styled from 'styled-components';
import MERNTASKS from '../images/MERNTASKS.png';
import {  iconClosedColor, iconOpenedColor, menuColor1, textoFondoColor, fondoColorClaro, sombraColorHover } from './ui/theme';

const Card = styled.div`
    place-self: center center;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 4rem 2.6rem -4.6rem rgba(0,0,0,0.8);
    max-width: 36rem;
    position:relative;
    min-width: 250px;
    height: fit-content;
    box-shadow: 0 1rem 0.5rem ${sombraColorHover};
`;

const Image = styled.img`
    vertical-align: top;
    width:100% ;
    height: auto;
`;




const Boton = styled.label`
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    background-color: ${iconClosedColor};
    height: 2rem;
    width: 2rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    border-radius:50%;
    z-index: 500;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.2);
    text-align: center;
    transition: background-color .8s cubic-bezier(0.83, 0, 0.17, 1);
    cursor: pointer;

    span {
        position: relative;
        margin-top:0.95rem;
        font-weight: bold;
        &,
        &::before,
        &::after {
            width: 0.85rem;
            height: 1px;
            background-color: ${iconOpenedColor};;
            display: inline-block;
        };

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all 0s;
        };

        &::before { top: -.5rem; };
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
    height: 1%;
    width: 1%;
    opacity: 0;
    border-radius: 18px;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background-image: radial-gradient(${menuColor1}, ${menuColor1});
    z-index: 400;
    transition: all .8s cubic-bezier(0.83, 0, 0.17, 1);
    //transform: scale(50);
`;

const Navigation = styled.nav`
    height: 80%;
    width: 70%;
    @media (max-width: 600px) {
            max-height:100%;
        }
    position:absolute;
    bottom: 0;
    right: 0;
    
    z-index: 401;
    
    opacity:0;
    width: 0;
    transition: opacity 1.5s cubic-bezier(0.68, -0.6, 0.32, 1.6), width .9s cubic-bezier(0.83, 0, 0.17, 1), visibility 0s ;
`;
const List = styled.ul`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    list-style: none;
    text-align:center;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin:0 0 0 -1rem;
    padding:0;
`;

const Probando = styled.a`
text-decoration: none;
white-space: nowrap;
height:clamp(15px, 4vw, 25px);
width: fit-content;
padding: 0.5rem;
margin: 0;
display: flex;
align-items: center;
border-radius:15px;
background-color: transparent;
color:red;
transition: background-color 1.5s, color 1.5s, visibility 0s;

&:hover {
    background-color: ${props => props.gitHub ? '#DA552F' : 'red'};
    color:white;
};

span {
    font-size:clamp(0.7rem, 3vw , 1rem);
}
i{
    margin-right: 0.5rem;
    margin-left: 0.3rem;
}
`;

const Svg = styled.svg`
    max-height: 30px;
    max-width: 30px;
    margin: 0;
    padding: 0;
`;


const Visit = styled.span`

visibility: hidden;
&:hover {
    visibility: visible;
    color: white;
}
`;

const Check = styled.input`
    display: none;

    //Funcionalidad
    &:checked ~ ${Background} {
        /* transform: scale(80);
        opacity: 0.992;
        */
        height: 80%;
        width: 80%;
        
        opacity: 0.992;
    };

    &:checked ~ ${Navigation} {
        opacity:1;
        height: 80%;
        width: 80%;
        border-radius: 10px;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    };

    &:not(:checked) ~ ${Navigation} {
        visibility: hidden;
    };
    &:not(:checked) ~ ${Boton} ${Icon} {
        margin-top: 6.3px;
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: black;
        ::before {
            visibility: hidden;
        }
        ::after {
            visibility: hidden;
        }
    ;}
    &:not(:checked) ~ ${Probando}  {
        visibility: hidden;
    }
    &:checked + ${Boton} {
        background-color: ${iconOpenedColor};
    };
    
    &:checked + ${Boton} ${Icon} {
        background-color: transparent;
    };
    &:checked + ${Boton} ${Icon}::before {
        transform: rotate(135deg);
        top:0;
        background-color: ${iconClosedColor};
    };
    &:checked + ${Boton} ${Icon}::after {
        transform: rotate(-135deg);
        top:0;
        background-color: ${iconClosedColor};
    }
`;


const Titulo = styled.h1`
    
    margin: 1rem 1rem 0 1rem ;
    color: #ff619b;
    font-weight: 700;
    font-size: clamp(0.5rem, 1rem, 3.5rem);
    max-width: 70%;
`;

const Texto = styled.p`
    color: #1f1f1f;
    margin: 1rem;
`;
const Listado = styled.div`
    margin-top: 0;
    padding-top: 0.5rem;
    margin-left:1rem;
    display: flex;
    flex-wrap: wrap;
    max-height:100%;
`;

const Item = styled.div`
    /* max-width:40px;
    max-height:40px; */
`;



const Proyecto = ({nombre, tecnologias}) => {

    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    };
    let i= 1;
    // console.log(tecnologias)

    return ( 
        <Card >
            <Image src={MERNTASKS}/>
            <div >
            <Check type="checkbox" checked={checked}  id={nombre}/>

            <Boton htmlFor={nombre} onClick={() => handleCheck()} >
                <Icon >{checked ? "" : "i"}</Icon>
            </Boton>

            <Background >&nbsp;</Background>

            <Navigation >
                <Titulo>{nombre}</Titulo>
                <Listado>
                    {tecnologias ? tecnologias.map( tecnologia => (
                        <Item key={i++}>{tecnologia}</Item>
                    )) : "Cargando"}
                </Listado>
                
                <List >
                    <Probando>
                        <i class="gg-link"></i>
                        <span>Ir al sitio</span>
                    </Probando>

                    <Probando gitHub>
                        <Svg height="60px" version="1.1" viewBox="0 0 60 60" width="60px" xmlns="http://www.w3.org/2000/svg" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="black" stroke="none" stroke-width="1"><g id="slice" transform="translate(-900.000000, -500.000000)"/><g fill="#000000" id="github" transform="translate(11.000000, 11.000000)"><path d="M14.4252739,36.5168887 C14.4252739,36.0671729 14.4094072,34.8772272 14.4003405,33.2968305 C9.2651779,34.440294 8.18170506,30.7588994 8.18170506,30.7588994 C7.34190028,28.5719093 6.13149339,27.9897191 6.13149339,27.9897191 C4.45528384,26.8148801 6.25842744,26.8392833 6.25842744,26.8392833 C8.111438,26.9729198 9.08611021,28.7903759 9.08611021,28.7903759 C10.7328529,31.6827342 13.4064015,30.8483777 14.4592741,30.3638002 C14.6270084,29.1401549 15.1041445,28.3057984 15.6311475,27.8328415 C11.5318575,27.3552363 7.22176626,25.7306815 7.22176626,18.4771257 C7.22176626,16.4109894 7.94143703,14.7213595 9.12237709,13.3977773 C8.93310934,12.9190101 8.29843906,10.9946447 9.30371145,8.38815229 C9.30371145,8.38815229 10.8541203,7.8791716 14.3799404,10.3287864 C15.8521487,9.90928408 17.4320244,9.69778982 19.0028333,9.69081748 C20.5702423,9.69778982 22.1489846,9.90928408 23.624593,10.3287864 C27.1481464,7.8791716 28.6962885,8.38815229 28.6962885,8.38815229 C29.7038276,10.9934827 29.0702907,12.917848 28.8798896,13.3977773 C30.0630963,14.7213595 30.7771004,16.4109894 30.7771004,18.4771257 C30.7771004,25.7492744 26.4602091,27.349426 22.3473191,27.8177347 C23.0114562,28.4022491 23.6007929,29.5573331 23.6007929,31.3236588 C23.6007929,33.8546176 23.5769927,35.8963506 23.5769927,36.5168887 C23.5769927,37.0235453 23.9101946,37.6115458 24.8474666,37.4267788 C32.176775,34.9190612 37.4615385,27.8281932 37.4615385,19.4683597 C37.4615385,9.01333862 29.1949581,0.538461538 18.9994333,0.538461538 C8.80504195,0.538461538 0.538461538,9.01333862 0.538461538,19.4683597 C0.539594878,27.8305174 5.82889166,34.9260335 13.1650001,37.4291029 C14.0875387,37.6022493 14.4252739,37.017735 14.4252739,36.5168887 Z"/></g></g></Svg>
                        <span>Ir al Repo</span>
                    </Probando>
                    
                    
                </List>
            </Navigation>
        </div>
        </Card>
     );
}
 
export default Proyecto;