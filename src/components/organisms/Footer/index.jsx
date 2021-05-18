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
              <h3 className='mb-0'>Fernanda Calistene S. Oliveira</h3>
              <p className='mt-0'>CRN9 24466/P</p>
              <p>
                Me siga no Instagram:{' '}
                <a
                  href='https://www.instagram.com/nutri.fernandacalistene/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#fff', textDecoration: 'underline' }}
                >
                  @nutri.fernandacalistene
                </a>
              </p>
            </div>

            <div className='col-12 col-md-6'>
              <h3>Contatos</h3>
              <p className='mb-0'>
                <strong>Whatsapp</strong>: (31) 99328-7275
              </p>
              <p className='mb-0'>
                <strong>E-mail</strong>: contato@nutrifernanda.com.br
              </p>
              <p>
                <strong>LinkedIn</strong>: @fernanda-calistene
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
