import React from 'react';
import TemplateDefault from '@components/templates/TemplateDefault';
import Header from '@components/organisms/Header';
import Content from '@components/organisms/Content';

export const Home = () => {
  return (
    <TemplateDefault title='Fernanda Calistene Nutricionista' description='...'>
      <Header />
      <Content>
        <div className='container'>
          <div className='row'>
            <div className='col'>Blog</div>
          </div>
        </div>
      </Content>
    </TemplateDefault>
  );
};

export default Home;
