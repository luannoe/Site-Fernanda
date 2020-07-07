import React from 'react';
import TemplateDefault from '@components/templates/TemplateDefault';
import Button from '@components/atoms/Button';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import Content from '@components/organisms/Content';
import HomeWrapper from '@css/home';

import { TiLeaf, TiHeartOutline } from 'react-icons/ti';

import LogoDraw from '@assets/img/Logo-draw.svg';

import { AiOutlineWoman } from 'react-icons/ai';

export const Home = () => {
  return (
    <TemplateDefault title='Fernanda Calistene Nutricionista' description='...'>
      <Header />
      <Content>
        <div css={theme => HomeWrapper({ theme })}>
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
                    <Button color='offWhite' className='mr-3'>
                      Agende sua consulta agora!
                    </Button>

                    <Button color='secondary'>Como posso te ajudar?</Button>
                  </div>
                </div>
                <div className='col-sm-6 pl-5'>
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
                </div>
              </div>
            </div>
          </div>

          <div className='home-about'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className='home-about-icon'>
                    <img src={LogoDraw} />
                  </div>
                </div>
                <div className='col-sm-8'>
                  <div className='home-about-content'>
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

                    <div className='photos mt-5 pt-3'>
                      <div className='row'>
                        <div className='col-4'>
                          <div className='card'>
                            <img src='https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' />
                          </div>
                        </div>
                        <div className='col-4'>
                          <div className='card with-content'>
                            <h3>Me conheça melhor!</h3>
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical.
                            </p>
                            <Button color='white'>Saiba mais</Button>
                          </div>
                        </div>
                        <div className='col-4'>
                          <div className='card'>
                            <img src='https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <Button color='secondaryAccent' className='mx-auto'>
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
