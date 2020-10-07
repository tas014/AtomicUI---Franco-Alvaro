import React from 'react';
import Layout from '../containers/Layout';
import Main from '../components/MainPage/styled';
import Paragraph from '../components/Paragraph';
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import Title from '../components/Titles'


const Lista = () => {
    return (
        <Layout>
            <Main>
                <Title type='h1' primary={false}>Titularrrrrrdo</Title>
                <Paragraph page='about' highlighted={true}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
                <Logo />
                <Input type='submit' text="Clicka-Click" />
                <Input type='textArea' text="Write your answer..." />
                <Input type='text' text="Your text..." />
                <Input type='select'>
                    <option>Opcion 1</option>
                    <option>Opcion 2</option>
                    <option>Opcion 3</option>
                </Input>
                <Button primary={false} disabled={false}>ESTE ES MI HERMOSO BOTON DE MIERDA</Button>

            </Main>
        </Layout>
    )
}

export default Lista