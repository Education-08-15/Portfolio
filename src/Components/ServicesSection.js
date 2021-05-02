import React from 'react';
import { InnerLayout } from '../styled/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <Title title={'Services'} span={'services'}></Title>
        <div className='services'>
          <ServiceCard
            image={design}
            title={'Web Development'}
            paragraph={'  '}
          ></ServiceCard>
          <div className='mid-card'>
            <ServiceCard
              image={intelligence}
              title={'Artificial Intelligence'}
              paragraph={''}
            ></ServiceCard>
          </div>
          <ServiceCard
            image={gamedev}
            title={'Game Development'}
            paragraph={' '}
          ></ServiceCard>
        </div>
      </ServiceSectionStyled>
    </InnerLayout>
  );
}

const ServiceSectionStyled = styled.div`
  services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
