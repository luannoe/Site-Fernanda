import React from 'react';
import TemplateDefault from '@components/templates/TemplateDefault';
import Button from '@components/atoms/Button';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import Content from '@components/organisms/Content';
import ServicesWrapper from '@css/services';

import { TiLeaf, TiHeartOutline } from 'react-icons/ti';
import { AiOutlineWoman } from 'react-icons/ai';

import FernandaAtendimento from '@assets/img/fernanda-atendimento.jpg';

export const Services = () => {
  const headerIsTransparent = false;

  return (
    <TemplateDefault
      title='Nutricionista Fernanda – Atendimento online e presencial'
      description='Especialista em vegetarianismo, veganismo e saúde da mulher. Vou te ajudar a ter uma vida mais saudável!'
    >
      <Header transparent={headerIsTransparent} />
      <Content hasHeader={!headerIsTransparent}>
        <div
          css={theme =>
            ServicesWrapper({ theme, hasHeader: !headerIsTransparent })
          }
        >
          <div className='services-banner'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-12 pr-5'>
                  <h1>Atendimentos</h1>
                </div>
              </div>
            </div>
          </div>

          <div className='services-services' id='servicos'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-6 photo-column'>
                  <div className='photo'>
                    <img src={FernandaAtendimento} />
                  </div>
                </div>

                <div className='col-12 col-lg-6 resume'>
                  <p>
                    Os atendimentos nutricionais são voltados a promover uma
                    alimentação equilibrada e consciente, de forma
                    individualizada, onde a abordagem é escolhida juntamente com
                    o cliente no momento da consulta, levando em consideração
                    seus objetivos e sua história alimentar.
                  </p>

                  <p>
                    Podem ou não ser prescritos planos alimentares e/ou
                    suplementos nutricionais totalmente personalizados e
                    adequados aos seus hábitos e necessidades.
                  </p>
                </div>

                <hr />

                <div className='col-12'>
                  <div className='service'>
                    <TiLeaf />
                    <div>
                      <h3>Vegetarianismo e veganismo</h3>
                      <p>
                        Indivíduos adultos e adolescentes que não consomem carne
                        e outros alimentos de origem animal, ou que desejam
                        parar ou diminuir o consumo dos mesmos, e que buscam uma
                        nutricionista atualizada e capacitada em nutrição
                        vegetariana.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='service mt-5'>
                    <AiOutlineWoman />
                    <div>
                      <h3>Saúde da mulher</h3>
                      <p>
                        Mulheres adultas e adolescentes que lidam com sintomas
                        da TPM, Síndrome do Ovário Policístico, acne,
                        endometriose, menopausa e climatério, candidíase etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='service mt-5'>
                    <TiHeartOutline />
                    <div>
                      <h3>Emagrecimento saudável</h3>
                      <p>
                        Indivíduos adultos, homens e mulheres, que consomem ou
                        não alimentos de origem animal e que desejam emagrecer
                        sem dietas da moda, de forma saudável e duradoura, por
                        meio da mudança de hábitos e estilo de vida.
                      </p>
                    </div>
                  </div>
                </div>

                <hr />

                <div className='col-12'>
                  <h2 className='mb-4'>Como funciona?</h2>
                  <p>
                    Os atendimentos são on-line, pela plataforma do Google Meet.
                    A comunicação antes e depois da consulta é feita via e-mail
                    ou WhatsApp.
                  </p>
                  <h3>Estrutura do atendimento:</h3>
                  <ul>
                    <li>Anamnese (entrevista inicial)</li>
                    <li>Avaliação ou solicitação de exames bioquímicos</li>
                    <li>Avaliação alimentar</li>
                    <li>Definição da melhor conduta junto ao cliente</li>
                    <li>
                      Em cada retorno, novas condutas são estabelecidas de
                      acordo com os resultados alcançados
                    </li>
                  </ul>

                  <p>
                    O pagamento é feito via transferência bancária, PIX ou
                    cartão de crédito através do PicPay.
                  </p>
                </div>

                <div className='col-12 mt-5'>
                  <Button
                    color='secondaryAccent'
                    hoverEffect='transform'
                    className='mx-auto'
                    href='https://api.whatsapp.com/send?phone=5531993287275&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.'
                    target='_blank'
                  >
                    Agendar consulta
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

export default Services;
