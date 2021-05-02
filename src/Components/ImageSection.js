import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className='left-content'>
        <img src={resume} alt='' />
      </div>
      <div className='right-content'>
        <div className='sub-title'>
          <h4>
            I am <span>Shikshya Gautam</span>
          </h4>
        </div>

        <p className='paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nesciunt
          officia voluptatibus eveniet dignissimos veniam suscipit laborum nulla
          provident labore! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </p>
        <div className='about-info'>
          <div className='info-title'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>

          <div className='info'>
            <p>: Shikshya Gautam</p>
            <p>: 23</p>
            <p>: Nepali</p>
            <p>: English, Nepali, Indian</p>
            <p>: Nepal, Bharatpur-11 Chitwan</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={'Download Cv'}></PrimaryButton>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
