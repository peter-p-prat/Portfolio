import React, { Fragment,  useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { useQuery } from "graphql-hooks";
import Proyecto from './Proyecto';
import { fondoColor, Resaltado } from './ui/theme';
import Spinner from './ui/Spinner';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

const Wrapperwrapper = styled.div`
    position:relative;
    margin:0;
    padding:0;
`;

const Wrapper = styled.div`
    
    background-color: ${fondoColor};
    margin: 0;
    padding: 25vw 1rem 0 1rem;
    text-align:center;
`;

const Grid = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    align-items: center;
    padding: 2rem 2rem;
    @media(max-width: 512px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        padding: 2rem 0;
    }
    
    @media(min-width: 460px) {
        grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
        padding: 2rem 3rem;
    };
    @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
        padding: 2rem 3rem;
    };
`;

const Waves = styled.div`
    margin:0;
    padding:0;
    position:absolute;
    top:-1px;
    overflow-x: hidden;
    width:100%;
    svg {
        display: block;
        width: 104%;
        margin:0;
        padding: 0;
        
    }
`;
const Wavesbottom = styled.div`
    margin:0;
    padding:0;
    position:absolute;
    bottom: -21.5vw;
    overflow-x: hidden;
    width:100%;
    svg {
        display: block;
        width: 104%;
        margin:0;
        padding: 0;
        
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



const Waiting = styled.div`
height: 300px;
max-width:90%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin: 0 auto;
p{font-weight:bold}
`;

const Projects = (props) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(false);

        setTimeout(() => {
            setLoaded(true);
           
        }, 3000)

    }, [])
    const QUERY_PROYECTOS = `
            {
            allProyectos(orderBy: orden_ASC) {
                nombre
                descripcion
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

 

    
    return ( 
         <Fragment>
            
                <Wrapperwrapper ref={props.refProp}>
                <Waves>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">  
                        <path fill={props.theme.mode === 'dark' ? '#222' : '#e3e3e3'} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>                  
                    </svg>
                </Waves>
                
                <Wrapper >
                    <Fade>
                        <HeadShake forever duration={2500}>
                            <Titulo>Proyectos</Titulo>
                        </HeadShake>
                    </Fade>
            
            {!loaded &&
                    <Waiting>
                        <Spinner />
                        <p>Descargando proyectos</p>
                    </Waiting>  
            }
            {error && 
               <Waiting>
               <p>Ha habido un error, comprueba tu conexión a internet</p>
           </Waiting>
            }
            {loaded &&
                    
                    <Grid>
                    {data.allProyectos.map(proyecto => (
                        <Proyecto key={proyecto.nombre} nombre={proyecto.nombre} descripcion={proyecto.descripcion} tecnologias={proyecto.tecnologias.techs} enlace={proyecto.linkasitio} repo={proyecto.linkarepo} imagen={proyecto.mockup.responsiveImage.src} />
                    
                    ))} 
                    </Grid>
                
        }
        </Wrapper>
                <Wavesbottom>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={props.theme.mode === 'dark' ? "#768fa6" : "#c9c8ac"} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path> 
                </svg>
                </Wavesbottom>
            </Wrapperwrapper>
        </Fragment>
     );
}
 
export default withTheme(Projects);