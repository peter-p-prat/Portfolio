import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import { useQuery } from "graphql-hooks";
import Carousel from 'nuka-carousel';

import Skill from './Skill';

import { Resaltado } from './ui/theme';


const Titulo = styled.h1`
    display: inline;
    text-align: center;
    font-size: 3rem;
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: center 100%;
    background-image: linear-gradient(120deg, ${Resaltado} 0%,${Resaltado} 100%);
`;
const Categoria = styled.h2`
    text-align: center;
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
`;
const Grid = styled.div`
    max-width: 90vw;
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    align-items: center;
    @media(min-width:1200px){
        max-width:85vw;
    }
`;
const Item = styled.div`
    place-self: center stretch;
`;
const Sliderwrap = styled.div`
    height: 100vh;
    width:80vw;
`;
const Slide = styled.div`
    height: 300px;
    width:200px;
    background-color:orange;
    text-align: center;
    border-radius: 7px;
`;
const Probando = styled(Carousel)`
max-width:80vw;
`;
const Skills = (props) => {



    const QUERY_SKILLS = `
        {
            allFrontends(orderBy: _createdAt_ASC) {
                nombre
                experiencia
                icono
            },
            allBackends(orderBy: _createdAt_ASC) {
                nombre
                experiencia
                icono
            }
            allTools {
                nombre
                icono
            }
        }
      
    `;

    const { loading, error, data} = useQuery(QUERY_SKILLS, {
        variables: {
        limit: 30
        }
    });

    if (loading) return ( 
        <Fragment>
            
            <Wrapper ref={props.refProp}>
                <Titulo>Skills</Titulo>
                <Categoria>FrontEnd</Categoria>
                <p>...Trayendo mis skills del CMS...</p>
                <Categoria>BackEnd</Categoria>
                <p>...Trayendo mis skills del CMS...</p>
                <Categoria>Herramientas</Categoria>
                <p>...Trayendo mis skills del CMS...</p>
            </Wrapper>
        </Fragment>
     );

    if (error) return "algo malo paso";
  

    return ( 
        <Fragment>
            
            
            
           
            <Wrapper ref={props.refProp}>
                <Titulo>Skills</Titulo>
                <Categoria>FrontEnd</Categoria>
                <Probando defaultControlsConfig={{
                    nextButtonStyle: {
                        borderRadius: "50%",
                        height: 40,
                        width:40,
                        marginRight: 15
                    },
                    prevButtonStyle:  {
                        borderRadius: "50%",
                        height: 40,
                        width:40,
                        marginLeft: 15
                    },
                    nextButtonText: '>',
                    prevButtonText: '<',
                    pagingDotsStyle: {
                        
                    }
                    }}>
            {data.allFrontends.map(frontend => (
                        <Item key={frontend.nombre}>
                            <Skill key={frontend.nombre} nombre={frontend.nombre} icono={ frontend.icono.icono } experiencia={frontend.experiencia}/>
                        </Item>
                    ))}
            </Probando>
               
                <Grid>
                    {data.allFrontends.map(frontend => (
                        <Item key={frontend.nombre}>
                            <Skill key={frontend.nombre} nombre={frontend.nombre} icono={ frontend.icono.icono } experiencia={frontend.experiencia}/>
                        </Item>
                    ))}
                </Grid>
                <Categoria>BackEnd</Categoria>
                <Grid>
                    {data.allBackends.map(backend => (
                        <Item>
                            <Skill key={backend.nombre} nombre={backend.nombre} icono={ backend.icono.icono } experiencia={backend.experiencia}/>
                        </Item>
                    ))}
                </Grid>
                <Categoria>Herramientas</Categoria>
                <Grid>
                    {data.allTools.map(tool => (
                        <Item>
                            <Skill key={tool.nombre} nombre={tool.nombre} icono={ tool.icono.icono } experiencia={false}/>
                        </Item>
                    ))}
                </Grid>
            </Wrapper>
        </Fragment>
        
     );
}
 
export default Skills;