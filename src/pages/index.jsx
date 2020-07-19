import React from 'react';
import TemplateDefault from '@components/templates/TemplateDefault';
import Button from '@components/atoms/Button';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import Content from '@components/organisms/Content';
import HomeWrapper from '@css/home';

import { TiLeaf, TiHeartOutline } from 'react-icons/ti';

import LogoDraw from '@assets/img/logo-draw.svg';
import Photo from '@assets/img/foto.jpg';

import { AiOutlineWoman } from 'react-icons/ai';

export const Home = () => {
  const headerIsTransparent = false;

  return (
    <TemplateDefault title='Fernanda Calistene Nutricionista' description='...'>
      <Header transparent={headerIsTransparent} />
      <Content hasHeader={!headerIsTransparent}>
        <div
          css={theme => HomeWrapper({ theme, hasHeader: !headerIsTransparent })}
        >
          <div className='home-banner'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-sm-6 pr-5'>
                  <h5>Saúde física e mental</h5>
                  <h1>Nutricionista em Belo Horizonte</h1>
                  <p className='pb-2'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <div className='mt-4 ml-n2 d-flex'>
                    <Button
                      color='white'
                      textColor='secondaryAccentDarker'
                      className='mr-3'
                    >
                      Agende sua consulta agora!
                    </Button>
                  </div>
                </div>
                {/*<div className='col-sm-6 pl-5'>
                  <div className='row justify-content-center'>
                    <div className='col-sm-4'>
                      <div className='service-item'>
                        <TiLeaf />
                        <h3>Vegetarianismo e veganismo</h3>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='service-item'>
                        <AiOutlineWoman />
                        <h3>Saúde da mulher</h3>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      <div className='service-item'>
                        <TiHeartOutline />
                        <h3>Emagrecimento saudável</h3>
                      </div>
                    </div>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>

          <div className='home-about'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-5'>
                  <div className='home-about-icon'>
                    <img src={Photo} />
                  </div>
                </div>
                <div className='col-sm-7'>
                  <div className='home-about-content'>
                    <img
                      src={LogoDraw}
                      alt='Desenho do coração com uma folha'
                      width='80px'
                      className='mb-5'
                    />
                    <h2>Olá, sou a Fernanda Calistene!</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>

                    <Button
                      className='mt-5 ml-n2'
                      color='secondaryAccent'
                      textColor='white'
                      hoverEffect='transform'
                    >
                      Me conheça melhor
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='home-services'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className='service'>
                    <TiLeaf />
                    <h3>Vegetarianismo e veganismo</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='service'>
                    <AiOutlineWoman />
                    <h3>Saúde da mulher</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='service'>
                    <TiHeartOutline />
                    <h3>Emagrecimento saudável</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className='col-12 mt-5'>
                  <Button
                    color='secondaryAccent'
                    hoverEffect='transform'
                    className='mx-auto'
                  >
                    Conheça todos serviços
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </TemplateDefault>
  );
};

export default Home;
