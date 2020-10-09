import React from 'react';
import Layout from '../containers/Layout';
import Main from '../components/MainPage/styled';
import Paragraph from '../components/Paragraph';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Titles'
import Comentario from '../components/Comentario'
import Divcont from '../components/Divcont'
import Quote from '../components/Quote'


const Lista = () => {
    return (
        <Layout>
            <Main>


                <Divcont>
                    <Comentario>//titulo</Comentario>
                    <Title type='h1' primary={false}>Titulo - <span>type1</span></Title>
                    <Title type='h2' primary={false}>Titulo - <span>type2</span></Title>
                    <Title type='h3' primary={false}>Titulo - <span>type3</span></Title>




                    <Comentario>//parrafo</Comentario>
                    <Paragraph page='about' highlighted={true}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Paragraph>


                    <Comentario>//botones</Comentario>
                    <Button primary={true} disabled={false} error={false}>Boton</Button>
                    <Button primary={false} disabled={true} error={false}>Boton</Button>
                    <Button primary={false} disabled={false} error={true}>Boton</Button>


                    <Comentario>//Cita</Comentario>
                    <Quote>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Quote>




                    <Comentario>//logo</Comentario>
                    <Logo />




                    <Comentario>//inputs</Comentario>
                    <Input type='select'>
                        <option>Opcion 1</option>
                        <option>Opcion 2</option>
                        <option>Opcion 3</option>
                    </Input>
                    <Input type='text' text="Lean123" />
                    <Input type='text' text="Your text..." />
                    <Input type='textArea' text="Ola ke ase" />
                    <Input type='submit' text="Send" />







                </Divcont>


            </Main>
        </Layout>
    )
}

export default Lista