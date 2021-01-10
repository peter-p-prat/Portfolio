import React, { Fragment, useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useQuery } from "graphql-hooks";
import Proyecto from './Project copy';
import { converter } from '../helper';
import { fondoColor, Resaltado } from './ui/theme';
const Wrapper = styled.div`
    
    background-color: ${fondoColor};
    margin: 0;
    padding: 0.1 1rem;
    text-align:center;

`;

const Grid = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    align-items: center;
    padding: 2rem 2rem;
    @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
        padding: 2rem 3rem;
    };
    @media(min-width: 460px) {
        grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
        padding: 2rem 3rem;
    }
`;

const Waves = styled.div`
    margin:0;
    padding:3rem 0 0 0;
    position:relative;
    
    overflow-x: hidden;
    svg {
        display: block;
        width: 104%;
        margin:0;
        padding: 0;
        background-color: ${fondoColor};
    }
`;
const Titulo = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 3rem;
    display: inline;
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: center 100%;
    background-image: linear-gradient(120deg, ${Resaltado} 0%,${Resaltado} 100%);
`;

const Svg = styled.svg`
    height:clamp(1rem, 8vw, 8rem);
    padding: 0.1rem;
    margin: 0;
`;


const Projectos = (props) => {
    console.log(props);
    const [proyectos, setProyectos] = useState({});
    const [consultar, setConsultar] = useState(false);
    const QUERY_PROYECTOS = `
            {
            allProyectos(orderBy: _createdAt_ASC) {
                nombre
                linkarepo
                linkasitio
                tecnologias
                mockup {
                    responsiveImage(imgixParams: {fit: max, w: 800, h: 600}) {
                        srcSet
                        webpSrcSet
                        sizes
                        src
                        width
                        height
                        aspectRatio
                    }
                }
            }
        }
    `;
    const { loading, error, data} = useQuery(QUERY_PROYECTOS, {
        variables: {
        limit: 10
        }
    });
    if (loading) return ( 
        <Fragment>
            <Waves>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">          
                    {/* <path fill="#526d85" fill-opacity="1" d="M0,32L24,53.3C48,75,96,117,144,154.7C192,192,240,224,288,208C336,192,384,128,432,106.7C480,85,528,107,576,112C624,117,672,107,720,117.3C768,128,816,160,864,186.7C912,213,960,235,1008,250.7C1056,267,1104,277,1152,245.3C1200,213,1248,139,1296,96C1344,53,1392,43,1416,37.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path> */}
                    <path fill={props.theme.mode === 'dark' ? '#222' : '#e3e3e3'} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path> 
                    {/* <path fill="#768fa6" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,90.7C320,75,400,53,480,80C560,107,640,181,720,186.7C800,192,880,128,960,112C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}
                </svg>
            </Waves>
            <Wrapper>
                <Titulo>Proyectos</Titulo>
                <p>Loading projects from CMS</p>
            </Wrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                {/* <path fill="#526d85" fill-opacity="1" d="M0,32L24,53.3C48,75,96,117,144,154.7C192,192,240,224,288,208C336,192,384,128,432,106.7C480,85,528,107,576,112C624,117,672,107,720,117.3C768,128,816,160,864,186.7C912,213,960,235,1008,250.7C1056,267,1104,277,1152,245.3C1200,213,1248,139,1296,96C1344,53,1392,43,1416,37.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path> */}
                <path fill={props.theme.mode === 'dark' ? "#768fa6" : "#c9c8ac"} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path> 
                {/* <path fill="#768fa6" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,90.7C320,75,400,53,480,80C560,107,640,181,720,186.7C800,192,880,128,960,112C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}
            </svg>
        </Fragment>
     );
    if (error) return "algo malo paso";
 
    console.log(data.allProyectos)

    
    return ( 
        <Fragment>
            <Waves>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">          
                    {/* <path fill="#526d85" fill-opacity="1" d="M0,32L24,53.3C48,75,96,117,144,154.7C192,192,240,224,288,208C336,192,384,128,432,106.7C480,85,528,107,576,112C624,117,672,107,720,117.3C768,128,816,160,864,186.7C912,213,960,235,1008,250.7C1056,267,1104,277,1152,245.3C1200,213,1248,139,1296,96C1344,53,1392,43,1416,37.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path> */}
                    <path fill={props.theme.mode === 'dark' ? '#222' : '#e3e3e3'}  d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path> 
                    {/* <path fill="#768fa6" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,90.7C320,75,400,53,480,80C560,107,640,181,720,186.7C800,192,880,128,960,112C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}
                </svg>
            </Waves>
            <Wrapper>
                <Titulo>Proyectos</Titulo>
                
                <Grid>
                {data.allProyectos.map(proyecto => (
                    <Proyecto key={proyecto.nombre} nombre={proyecto.nombre} tecnologias={proyecto.tecnologias.techs} enlace={proyecto.linkasitio} repo={proyecto.linkarepo} imagen={proyecto.mockup.responsiveImage.src} />
                
                ))}
                    {/* {datos.map(dato => (
                        <Proyecto key={dato.nombre} nombre={dato.nombre} tecnologias={dato.tecnologias}/>
                    ))} */}
                    
                    
                </Grid>
            </Wrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                {/* <path fill="#526d85" fill-opacity="1" d="M0,32L24,53.3C48,75,96,117,144,154.7C192,192,240,224,288,208C336,192,384,128,432,106.7C480,85,528,107,576,112C624,117,672,107,720,117.3C768,128,816,160,864,186.7C912,213,960,235,1008,250.7C1056,267,1104,277,1152,245.3C1200,213,1248,139,1296,96C1344,53,1392,43,1416,37.3L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path> */}
                <path fill={props.theme.mode === 'dark' ? "#768fa6" : "#c9c8ac"} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path> 
                {/* <path fill="#768fa6" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,90.7C320,75,400,53,480,80C560,107,640,181,720,186.7C800,192,880,128,960,112C1040,96,1120,128,1200,128C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path> */}
            </svg>
        </Fragment>
     );
}
 
export default withTheme(Projectos);