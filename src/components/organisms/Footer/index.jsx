import React from 'react';
import FooterWrapper from './style';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import MountainsSVG from '@assets/img/mountains.jsx';
import Theme from '@css/theme';

export const Footer = () => {
  return (
    <>
      <MountainsSVG color={Theme.colors.secondary} />

      <footer css={theme => FooterWrapper({ theme })} id='contato'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='mb-0'>Fernanda Calistene S. Oliveira</h3>
              <p className='mt-0'>CRN9 24466/P</p>
              <div className='social'>
                <a
                  href='mailto:calistenefernanda@gmail.com'
                  title='Entre em contato pelo E-mail'
                  target='_blank'
                  rel='noreferrer'
                >
                  <HiOutlineMail />
                </a>
                <a
                  href='https://api.whatsapp.com/send?phone=5531993287275&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.'
                  title='Entre em contato pelo WhatsApp'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaWhatsapp />
                </a>
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
      </footer>
    </>
  );
};

export default Footer;
