import React from 'react';
import TemplateDefault from '@components/templates/TemplateDefault';
import Button from '@components/atoms/Button';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import Content from '@components/organisms/Content';
import HomeWrapper from '@css/home';

import { TiLeaf, TiHeartOutline } from 'react-icons/ti';
import { AiOutlineWoman } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import LogoDraw from '@assets/img/logo-draw.svg';
import Photo from '@assets/img/fernanda.jpg';

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
                <div className='col-12 pr-5'>
                  <h5>Seja bem-vind@</h5>
                  <h1 className='mb-2'>Nutricionista em Taiobeiras</h1>
                  <p className='mb-0'>
                    Foco em nutrição vegetariana e vegana, saúde da mulher e
                    prevenção de doenças.
                  </p>
                  <p className='pb-2'>
                    Te ajudo a ter uma alimentação mais saudável e consciente!
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
                      Nutricionista formada pela Universidade Federal de Viçosa,
                      acredito no cuidado a saúde por meio da alimentação
                      natural, simples e afetiva, sem modismos!
                    </p>
                    <p>
                      A nutrição que pratico leva em consideração preferências
                      alimentares, estilo de vida, metas e necessidades
                      nutricionais individuais. Com foco na prevenção de
                      doenças, meu principal objetivo é auxiliar as pessoas na
                      busca por mais qualidade de vida através da alimentação.
                    </p>
                    <p className='quotes'>
                      <span>
                        A mudança de hábitos alimentares deve ser gradual e
                        prazerosa para que seja duradoura! Se alimentar é muito
                        mais que um ato fisiológico, engloba crenças, valores,
                        emoções e sentimentos.
                      </span>
                    </p>

                    <div className='social'>
                      <a
                        href='https://www.instagram.com/nutrifernandacalistene'
                        title='Perfil no Instagram'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href='https://www.linkedin.com/in/fernanda-calistene/'
                        title='Perfil no LinkedIn'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
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
                      Emagreça sem dietas da moda, de forma leve, descontraída e
                      saudável!
                    </p>
                  </div>
                </div>
                <div className='col-12 mt-4'>
                  <Button
                    color='secondaryAccent'
                    hoverEffect='transform'
                    className='mx-auto'
                    href='/atendimentos'
                  >
                    Mais informações
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
