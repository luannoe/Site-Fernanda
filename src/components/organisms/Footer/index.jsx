import React from 'react';
import FooterWrapper from './style';

import MountainsSVG from '@assets/img/mountains.jsx';
import Theme from '@css/theme';

export const Footer = () => {
  return (
    <>
      <MountainsSVG color={Theme.colors.secondary} />

      <footer css={theme => FooterWrapper({ theme })}>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-8 pr-lg-5'>
              <h3>Fernanda Calistene</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
            <div className='col-sm-4'>
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
