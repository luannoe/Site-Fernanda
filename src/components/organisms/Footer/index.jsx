import React from 'react';
import FooterWrapper from './style';

export const Footer = () => {
  return (
    <footer css={theme => FooterWrapper({ theme })}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5 pr-lg-5'>
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
          <div className='col-sm-3 px-lg-5'>
            <h3>Benefícios</h3>
            <ul>
              <li>Benefício #01.</li>
              <li>Benefício #02.</li>
              <li>Benefício #03.</li>
              <li>Benefício #04.</li>
              <li>Benefício #05.</li>
            </ul>
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
  );
};

export default Footer;
