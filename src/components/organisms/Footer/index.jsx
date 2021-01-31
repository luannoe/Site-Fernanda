import React from 'react';
import FooterWrapper from './style';

import MountainsSVG from '@assets/img/mountains.jsx';
import Theme from '@css/theme';

export const Footer = () => {
  return (
    <>
      <MountainsSVG color={Theme.colors.secondary} />

      <footer css={theme => FooterWrapper({ theme })} id='contato'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 pr-lg-5'>
              <h3>Fernanda Calistene</h3>
              <p>
                Me siga no Instagram:{' '}
                <a
                  href='https://www.instagram.com/fer.calistene/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  @fer.calistene
                </a>
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <h3>Contatos</h3>
              <p className='mb-2'>
                <strong>Whatsapp</strong>: (31) 99328-7275
              </p>
              <p>
                <strong>E-mail</strong>: contato@nutrifernanda.com.br
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
