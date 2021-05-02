import React from 'react';
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import ReviewsSection from '../Components/ReviewsSection';
import ServicesSection from '../Components/ServicesSection';
import Title from '../Components/Title';
import { MainLayout } from '../styled/Layouts';

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About Me'} span={'About Me'}></Title>
        <ImageSection></ImageSection>
        <ServicesSection> </ServicesSection>
        <ReviewsSection></ReviewsSection>
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;
export default AboutPage;
