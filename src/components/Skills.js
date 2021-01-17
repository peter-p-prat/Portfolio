import React, {Fragment, useState, useEffect} from 'react';
import styled, { withTheme } from 'styled-components';
import { useQuery } from "graphql-hooks";
import Carousel from 'nuka-carousel';
import Skill from './Skill';
import { Resaltado, fondoColor, botones, botonesHover } from './ui/theme';
import useWindowWidth from '../hooks/useWindowWidth';
import Spinner from './ui/Spinner';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

const Wrapperwrapper = styled.div`
    position:relative;
    margin:0;
    padding:0;
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
    margin-top:2rem;
    margin-bottom:0;
`;
const Wrapper = styled.div`
    width: 100%;
    padding-top: 25vw;
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
 const Waiting = styled.div`
    height: 300px;
    max-width:65vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position:relative;
    p {
        font-weight:bold;
    }
 `;
const Slider = styled(Carousel)`
    max-width:65vw;
    margin-bottom: 3rem;
    
    .slider-frame {
        padding-top:2rem !important;
        @media(max-width: 600px) {
            padding-top:3rem !important;
        }
    };
    .margin-top {
        position: absolute;
        top: 15px !important;
    };

    .arrow {
        font-size:2.5rem !important;
        background-color: ${botones} !important;

        &:hover {
            background-color: ${botonesHover} !important;
        };

        &:active {
            background-color: ${botonesHover} !important;
        };   
    };
`;

const Spin = styled.div`
    position: relative;
    max-width: 80px;
    max-height:80px;
`;


const Skills = ({refProp, theme}) => {

    const [slidesToShow, setSlidesToShow] = useState();
    const [counter, setCounter] = useState(1);
    const width = useWindowWidth();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        setLoaded(false);

        setTimeout(() => {
            setLoaded(true);
           
        }, 3000)

    }, [])

    useEffect(() => {
        if (width < 600){
            setSlidesToShow(1)
        } else if (width < 1000) {
            setSlidesToShow(2)
        } else {
            setSlidesToShow(3)
        } 
        
    }, [width]);
    
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
            allTools (orderBy: orden_ASC){
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

        const defaultControlsConfig = {
            nextButtonStyle: {
                borderRadius: "50%",
                height: 40,
                width:40,
                marginRight: -55,
                position: "absolute",
                right: 0,
                top: -20,
                display: 'flex',
                alignItems:'center',
                justifyContent:'center'
            },
            nextButtonClassName: "arrow",
            prevButtonClassName: "arrow" ,
            prevButtonStyle:  {
                borderRadius: "50%",
                height: 40,
                width:40,
                marginLeft: -55,
                display: 'flex',
                alignItems:'center',
                justifyContent:'center'
                
            },
            nextButtonText: <span class="iconify" data-icon="bi:arrow-right-short" data-inline="false"></span>,
            prevButtonText: <span class="iconify" data-icon="bi:arrow-left-short" data-inline="false"></span>,
            pagingDotsContainerClassName: "margin-top",
            pagingDotsStyle: {
                fill: '#768fa6'
            }
        };
    return ( 
        <Fragment>
            
            
            <Wrapperwrapper ref={refProp}>
                <Waves>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">  
                        <path fill={theme.mode === 'dark' ? "#768fa6" : "#c9c8ac"} fillOpacity="1" d="M0,96L17.1,80C34.3,64,69,32,103,42.7C137.1,53,171,107,206,117.3C240,128,274,96,309,85.3C342.9,75,377,85,411,112C445.7,139,480,181,514,170.7C548.6,160,583,96,617,96C651.4,96,686,160,720,202.7C754.3,245,789,267,823,256C857.1,245,891,203,926,186.7C960,171,994,181,1029,170.7C1062.9,160,1097,128,1131,144C1165.7,160,1200,224,1234,224C1268.6,224,1303,160,1337,138.7C1371.4,117,1406,139,1423,149.3L1440,160L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>                   
                    </svg>
                </Waves>
            
                <Wrapper >
                    <Fade>
                    <HeadShake forever duration={2500}>
                        <Titulo>Skills</Titulo>
                    </HeadShake>
                    </Fade>

                    {!loaded &&
                        <Waiting>
                            <Spin>
                                <Spinner />
                            </Spin>
                            
                            <p>Descargando skills</p>
                        </Waiting>
                    }

                    { error &&
                        <Waiting>
                            <p>Ha habido un error, comprueba tu conexión a internet</p>
                        </Waiting>
                    }

                    { loaded &&
                        <Fragment>
                            <Categoria>FrontEnd</Categoria>
                            <Slider  transitionMode='scroll3d' slidesToShow={slidesToShow} wrapAround={true} cellSpacing={66} defaultControlsConfig={defaultControlsConfig}>
                                {data.allFrontends.map(frontend => (
                                    <Item key={frontend.nombre}>
                                        <Skill animate={false} key={frontend.nombre} nombre={frontend.nombre} icono={ frontend.icono.icono } experiencia={frontend.experiencia}/>
                                    </Item>
                                ))}
                            </Slider>
                        
                            <Categoria>BackEnd</Categoria>
                            <Slider transitionMode='scroll3d' slidesToShow={slidesToShow} wrapAround={true} cellSpacing={66} defaultControlsConfig={defaultControlsConfig}>
                                {data.allBackends.map(backend => (
                                    <Item>
                                        <Skill animate key={backend.nombre} nombre={backend.nombre} icono={ backend.icono.icono } experiencia={backend.experiencia}/>
                                    </Item>
                                ))}
                            </Slider>

                            <Categoria>Herramientas</Categoria>
                            <Slider transitionMode='scroll3d' slidesToShow={slidesToShow} wrapAround={true} cellSpacing={66} defaultControlsConfig={defaultControlsConfig}>
                                {data.allTools.map(tool => (
                                    <Item>
                                        <Skill animate key={tool.nombre} nombre={tool.nombre} icono={ tool.icono.icono } experiencia={false}/>
                                    </Item>
                                ))}
                            </Slider>
                        </Fragment>
                    }
                </Wrapper>
            </Wrapperwrapper>
        </Fragment>
        
     );
}
 
export default withTheme(Skills);