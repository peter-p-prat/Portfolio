import React, {Fragment, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import apiKeys from '../apikeys';
import { Resaltado, fondoColor, h1Color } from './ui/theme';
const Titulo = styled.h1`
    display: inline;
    text-align: center;
    font-size: 3rem;
    background-size: 100% 0.5em;
    background-repeat: no-repeat;
    background-position: center 100%;
    background-image: linear-gradient(120deg, ${Resaltado} 0%,${Resaltado} 100%);
`;
const Categoria = styled.p`
    text-align: center;
    padding: 0 2rem;
`;
const Wrapper = styled.div`
    width: 100%;
    padding-bottom:4rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    
`;
const Grid = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
    @media(min-width:1200px){
        width:85vw;
    }
`;
const Item = styled.div`
    place-self: center stretch;
`;
const Form = styled.form`
    width:80%;
    padding:1.5rem;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
    input[type=text],
    input[type=email],
    textarea {   
        /* Remove First */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width:90%;
        font-size:1rem;
        border: 1px solid ${fondoColor};
        border-radius: 5px;
        transition: all .2s ease-in-out;
        padding:3px 7px;
        &:focus{
            outline: none;
            border: 2.5px solid ${fondoColor};
        }
    }
    
`;
const Label = styled.p`
    width:95%;
    max-width: 80vw;
`;

const Input = styled.input`
    max-width: 80vw;
    
    height: 1.8rem;
`;
const Textarea = styled.textarea`
    max-width: 80vw;
    height: 50vh;
    max-height:17rem;
    
`;
const Boton = styled.button`

    /* Remove First */
    -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width:90%;
        height:2rem;
        margin-top: 2rem;
        padding:3px 7px;
        font-size:1rem;
        font-weight: 600;
        border-width: ${props => props.enviando ? "2.5px " : "1px"} ;
        border-color: ${fondoColor};
        border-style: solid;
        border-radius: 5px;

        background-color: ${props => props.enviando ? "#404040" : "#4e4e4e"};
        color: ${fondoColor};

        transition: all .2s ease-in-out;
        
        &:focus{
            outline: none;
            border: 2.5px solid ${fondoColor};
            background-color: #404040;
        };
`;

const Aviso = styled.p`
        width:90%;
        height:2rem;
        margin-top: 2rem;
        padding:3px 7px;
        font-size:1rem;
        font-weight: 600;
        border: 1px solid #388e3c;
        border-radius: 5px;
        background-color: #81c784;
        color: #388e3c;
        display:flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-in-out;
`;

const Svg = styled.svg`
    height:clamp(3rem, 5rem, 8rem);
    width:clamp(3rem, 5rem, 8rem);
    padding: 0.1rem;
    margin: 0;
`;


const Mensajewrapper = styled.div`
    max-width: 80vw;
    margin:0;
    padding: 0;
    width:100%;
`;

const Contacto = () => {
    
    const [enviando, setEnviando] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [contactandome, actualizarContactandome] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleChange = e => {
        actualizarContactandome({
            ...contactandome,
            [e.target.name]: e.target.value
        });
    }
    
    const { name, email, subject, message } = contactandome;

    const onSubmit=(e)=>{
        // Prevents default refresh by the browser
        e.preventDefault();
        setEnviando(true);
        emailjs.sendForm('service_ugerwe8', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(result => {
        setEnviando(false);
        setEnviado(true);
        setTimeout(() => {
            setEnviado(false);
          }, 4000);
        //Limpiar formulario
        actualizarContactandome({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        }


    return ( 
        <Fragment>
            
            <Wrapper>
                <Titulo>Contacto</Titulo>
                <Categoria>Hola! En esta sección te voy a brindar todas las herramientas para que puedas contactarme.</Categoria>
                <Categoria>Podes enviarme un email a travez del formulario o utilizar los enlaces para dirigirte a mi LinkedIn y a mi Github</Categoria>
                <Categoria>Si tenés una propuesta laboral que crees que podria interesarme, querés hacerme algun comentario sobre mi Sitio Web o simplemente probar si todo funciona, no dudes en escribirme. Te voy a contestar a la brevedad </Categoria>
                
                <Form  onSubmit = {onSubmit}>
                    
                    <Grid>
                        <Mensajewrapper>
                            <Label>Nombre:</Label>
                            <Input name='name' type='text' placeholder='Tu nombre' value={name} onChange={handleChange} required/>
                            <Label>Email:</Label>
                            <Input name='email' type='email' placeholder='Tu email' value={email} onChange={handleChange} required/>
                            <Label>Asunto:</Label>
                            <Input name='subject' type='text' placeholder='Ingresa un asunto' value={subject} onChange={handleChange} required/>
                        </Mensajewrapper>

                        <Mensajewrapper>
                            <Label>Mensaje:</Label>
                            <Textarea name='message' type='text' placeholder='Ingresa tu mensaje' value={message} onChange={handleChange} required></Textarea>
                        </Mensajewrapper>

                    </Grid>
                    {!enviado ? 
                        <Boton type="submit" enviando={enviando}>{enviando ? "Enviando" : "Enviar"}</Boton> 
                        :
                        <Aviso>Enviado</Aviso>
                    } 
                    
                </Form>
                <div>
                    <p><Svg height="60px" version="1.1" viewBox="4 5 50 50" width="60px" xmlns="http://www.w3.org/2000/svg" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="black" stroke="none" stroke-width="1"><g id="slice" transform="translate(-900.000000, -500.000000)"/><g fill="#000000" id="github" transform="translate(11.000000, 11.000000)"><path d="M14.4252739,36.5168887 C14.4252739,36.0671729 14.4094072,34.8772272 14.4003405,33.2968305 C9.2651779,34.440294 8.18170506,30.7588994 8.18170506,30.7588994 C7.34190028,28.5719093 6.13149339,27.9897191 6.13149339,27.9897191 C4.45528384,26.8148801 6.25842744,26.8392833 6.25842744,26.8392833 C8.111438,26.9729198 9.08611021,28.7903759 9.08611021,28.7903759 C10.7328529,31.6827342 13.4064015,30.8483777 14.4592741,30.3638002 C14.6270084,29.1401549 15.1041445,28.3057984 15.6311475,27.8328415 C11.5318575,27.3552363 7.22176626,25.7306815 7.22176626,18.4771257 C7.22176626,16.4109894 7.94143703,14.7213595 9.12237709,13.3977773 C8.93310934,12.9190101 8.29843906,10.9946447 9.30371145,8.38815229 C9.30371145,8.38815229 10.8541203,7.8791716 14.3799404,10.3287864 C15.8521487,9.90928408 17.4320244,9.69778982 19.0028333,9.69081748 C20.5702423,9.69778982 22.1489846,9.90928408 23.624593,10.3287864 C27.1481464,7.8791716 28.6962885,8.38815229 28.6962885,8.38815229 C29.7038276,10.9934827 29.0702907,12.917848 28.8798896,13.3977773 C30.0630963,14.7213595 30.7771004,16.4109894 30.7771004,18.4771257 C30.7771004,25.7492744 26.4602091,27.349426 22.3473191,27.8177347 C23.0114562,28.4022491 23.6007929,29.5573331 23.6007929,31.3236588 C23.6007929,33.8546176 23.5769927,35.8963506 23.5769927,36.5168887 C23.5769927,37.0235453 23.9101946,37.6115458 24.8474666,37.4267788 C32.176775,34.9190612 37.4615385,27.8281932 37.4615385,19.4683597 C37.4615385,9.01333862 29.1949581,0.538461538 18.9994333,0.538461538 C8.80504195,0.538461538 0.538461538,9.01333862 0.538461538,19.4683597 C0.539594878,27.8305174 5.82889166,34.9260335 13.1650001,37.4291029 C14.0875387,37.6022493 14.4252739,37.017735 14.4252739,36.5168887 Z"/></g></g></Svg><Svg height="2500" width="2490" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069"/><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff"/></g></Svg></p>
                </div>
                
            </Wrapper>
        </Fragment>
        
     );
}
 
export default Contacto;