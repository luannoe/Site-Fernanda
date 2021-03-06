import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '@components/atoms/Button';
import { FiCalendar } from 'react-icons/fi';

// Styles
import HeaderWrapper from './style';

// Images
import Logo from '@assets/img/logo.svg';
import LogoDraw from '@assets/img/logo-draw.svg';
import LogoWhite from '@assets/img/logo-white.svg';

import menu from './menu.json';

export const Header = ({ transparent }) => {
  const [hasScroll, setHasScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHasScroll(window.scrollY > 2);
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const menuNav = (
    <nav>
      <ul>
        {menu.map(menuItem => (
          <li key={menuItem.label}>
            <a
              href={menuItem.url}
              title={menuItem.title}
              className='menu-link'
              onClick={() => setMenuOpen(false)}
            >
              {menuItem.label}
            </a>
          </li>
        ))}
        <li>
          <Button
            icon={<FiCalendar />}
            color={hasScroll || !transparent ? 'primaryGradient' : 'offWhite'}
            type={hasScroll || !transparent ? 'normal' : 'outline'}
            opacity={0.85}
            href='https://api.whatsapp.com/send?phone=5531993287275&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento.'
            target='_blank'
          >
            Agendar consulta
          </Button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header
      css={theme => HeaderWrapper({ theme, transparent, hasScroll, menuOpen })}
    >
      <div className='container'>
        <div className='header-content'>
          <div className='header-logo-wrapper'>
            <a href='/' onClick={() => setMenuOpen(false)}>
              <img
                src={hasScroll ? LogoDraw : transparent ? LogoWhite : Logo}
                alt='Logo Fernanda Calistene Nutricionista'
              />
            </a>
          </div>
          <div className='header-menu-wrapper'>
            <div className='mobile-nav'>
              <div
                className='hamburger-menu'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className='hamburger-menu-icon' />
              </div>

              <div className='mobile-nav-wrapper'>{menuNav}</div>
            </div>

            <div className='desktop-nav'>{menuNav}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  transparent: PropTypes.bool
};

export default Header;
