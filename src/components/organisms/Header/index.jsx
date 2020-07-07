import React, { useState, useEffect } from 'react';

// Components
import Button from '@components/atoms/Button';
import { FiCalendar } from 'react-icons/fi';

// Styles
import HeaderWrapper from './style';

// Images
import Logo from '@assets/img/logo.svg';

import menu from './menu.json';

export const Header = ({ transparent }) => {
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHasScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header css={theme => HeaderWrapper({ theme, transparent, hasScroll })}>
      <div className='container'>
        <div className='header-content'>
          <div className='header-logo-wrapper'>
            <a href='/'>
              <img src={Logo} alt='Logo Fernanda Calistene Nutricionista' />
            </a>
          </div>
          <div className='header-menu-wrapper'>
            <nav>
              <ul>
                {menu.map(menuItem => (
                  <li key={menuItem.label}>
                    <a href={menuItem.url} title={menuItem.title}>
                      {menuItem.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Button icon={<FiCalendar />}>Agendar consulta</Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
