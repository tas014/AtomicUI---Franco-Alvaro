import React, { useState } from 'react';
import Layout from '../containers/Layout';
import Main from '../components/MainPage/styled';
import Article from '../components/Article';
import { Holder } from '../components/Article/styled';
import im1 from '../components/img/hendri-sabri-XnXLpjOCZe0-unsplash.jpg';
import im2 from '../components/img/inaki-del-olmo-Trn2-DwoEr0-unsplash.jpg';
import Card from '../components/SideCard';
import SlideArticle from '../components/Sliding';
import Logo from '../components/Logo'
import Paragraph from '../components/Paragraph'
import Quote from '../components/Quote'
//import ReactGlobe from 'react-globe';
// <ReactGlobe /> NO ME FUNCIONA, A VECES SE ROMPE Y A VECES TARTA 1 SIGLO EN COMPILAR


const Experiment = () => {
    const [shown, setShown] = useState(false);

    return (
        <Layout>
            <Main>
                <Holder>
                    <div>
                        <Article odd={false}>
                            <img src={im1} alt='image1' />
                            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Paragraph>
                        </Article>
                        <Article odd={false}>
                            <img src={im2} alt='image2' />
                            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Paragraph>
                        </Article>
                    </div>
                    <Card onClick={() => setShown(!shown)}>FARP</Card>
                    <SlideArticle isShown={shown}>
                        <div>
                            <Logo />
                        </div>
                        <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Paragraph>
                    </SlideArticle>
                </Holder>
            </Main>
        </Layout>
    )
}

export default Experiment