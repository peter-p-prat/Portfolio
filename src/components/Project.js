import React, {useState} from 'react';
import styled from 'styled-components';
import MERNTASKS from '../images/MERNTASKS.png';

const Card = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 4rem 2.6rem -4.6rem rgba(0,0,0,0.8);
    max-width: 36rem;
    position:relative;
    margin: 5rem;
    min-width: 250px;
`;

const Image = styled.img`
    vertical-align: top;
`;

const Article = styled.article`
    position: absolute;
    background: white;
    top: 1rem;
    left: 1rem;
    border-radius: 1.25rem;
    max-width: 2.5rem;
    max-height: 2.5rem;
    transition: max-width, max-height, 0.4s ease-in-out;
`;
const Container = styled.div`
    background: white;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
`;

const Toggle = styled.input`
    position: absolute;
    width:0;
    height:0;
    bottom: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    &::before {
        content: "i";
        font-size: 1.2rem;
        font-weight:600;
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        left: -3.3rem;
        top: -3.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    };
    &:checked &::before {
        content: "\00D7";
    };
    &:checked + ${Article} {
        max-width: 65%;
        max-height: 90%;
    };
    &:checked + ${Article} > ${Container} {
        opacity: 1;
        transition: opacity 0.2s ease-in-out 0.4s;  
        width: 100%;
        height: 100%;

    };
`;



const Titulo = styled.h1`
    font-size: 2rem;
    margin: 1rem 0;
    color: #ff619b;
    font-weight: 700;
`;

const Texto = styled.p`
    color: #1f1f1f;
    margin: 1rem 0;
`;

const Project = () => {

    const [checked, setChecked] = useState(true);
    const handleCheck = () => {
        setChecked(!checked);
    }
    return ( 
        <Card className="info-card">
            <Image className="info-card__image" src={MERNTASKS}/>
            <Toggle className="info-card__toggle" type="checkbox" checked={checked} onChange={() => handleCheck()}/>
            <Article className="info-card__article"> 
                <Container className="article__container">
                    <Titulo className="article__heading">MernTasks</Titulo>
                    <Texto className="article__text">App desarrollada con react node express mongodb</Texto>
                </Container>
                </Article>
        </Card>
     );
}
 
export default Project;