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
    <TemplateDefault
      title='Fernanda Calistene Nutricionista - Taiobeiras - MG'
      description='Especialista em vegetarianismo, veganismo e saúde da mulher. Vou te ajudar a ter uma vida mais saudável!'
    >
      <Header transparent={headerIsTransparent} />
      <Content hasHeader={!headerIsTransparent}>
        <div
          css={theme => HomeWrapper({ theme, hasHeader: !headerIsTransparent })}
        >
          <div className='home-banner'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-12 col-lg-6 pr-5'>
                  <h5>Saúde física e mental</h5>
                  <h1>Nutricionista em Taiobeiras</h1>
                  <p className='pb-2'>
                    Especialista em vegetarianismo, veganismo e saúde da mulher.
                    Vou te ajudar a ter uma vida mais saudável!
                  </p>
                  <div className='mt-4 ml-n2 d-flex'>
                    <Button
                      color='white'
                      textColor='secondaryAccentDarker'
                      className='mr-3'
                      href='https://api.whatsapp.com/send?phone=5531993287275&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.'
                      target='_blank'
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

          <div className='home-about' id='sobre'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-5'>
                  <div className='home-about-icon'>
                    <img src={Photo} />
                  </div>
                </div>
                <div className='col-12 col-lg-7'>
                  <div className='home-about-content'>
                    <img
                      src={LogoDraw}
                      alt='Desenho do coração com uma folha'
                      width='80px'
                      className='mb-5'
                    />
                    <h2>Olá, sou a Fernanda Calistene!</h2>
                    <p>
                      Referência em Nutrição vegetariana e vegana além do
                      atendimento com excelência. Meu atendimento é baseado na
                      individualidade do paciente, buscando sempre aliar
                      escolhas alimentares eficientes que levem em consideração
                      estágio de vida, preferências alimentares, estilo de vida,
                      necessidades nutricionais, presença de sintomas e metas
                      individuais. Atendo bebês, crianças, gestantes, adultos e
                      idosos.
                    </p>
                    <p>
                      Me formei em Nutrição pela Universidade Federal de Viçosa
                      em 2019 e desde então venho ajudando as pessoas a levarem
                      uma vida mais saudável.
                    </p>

                    <Button
                      className='mt-5 ml-n2'
                      color='secondaryAccent'
                      textColor='white'
                      hoverEffect='transform'
                      href='tel:+5531993287275'
                    >
                      Ligue agora!
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='home-services' id='servicos'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-md-4'>
                  <div className='service'>
                    <TiLeaf />
                    <h3>Vegetarianismo e veganismo</h3>
                    <p>
                      Aprenda mais sobre esse estilo de vida e como fazer a
                      transição de forma saudável.
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-4'>
                  <div className='service'>
                    <AiOutlineWoman />
                    <h3>Saúde da mulher</h3>
                    <p>
                      Atendimento nutricional individualizado e personalizado
                      para cada fase da sua vida.
                    </p>
                  </div>
                </div>
                <div className='col-12 col-md-4'>
                  <div className='service'>
                    <TiHeartOutline />
                    <h3>Emagrecimento saudável</h3>
                    <p>
                      Emagreça sem sofrimento, de forma leve, descontraída e
                      saudável!
                    </p>
                  </div>
                </div>
                <div className='col-12 mt-5'>
                  <Button
                    color='secondaryAccent'
                    hoverEffect='transform'
                    className='mx-auto'
                    href='https://api.whatsapp.com/send?phone=5531993287275&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.'
                    target='_blank'
                  >
                    Para mais informações, clique aqui
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
