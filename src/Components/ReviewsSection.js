import React from 'react';
import styled from 'styled-components';

import Title from '../Components/Title';
import { InnerLayout } from '../styled/Layouts';
import ReviewItem from './ReviewItem';

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title={'Reviews'} span={'Reviews'}></Title>
      <InnerLayout>
        <div className='reviews'>
          <ReviewItem
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate suscipit ea totam voluptatum impedit, facere '
            }
          ></ReviewItem>
          <ReviewItem
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate suscipit ea totam voluptatum impedit, facere '
            }
          ></ReviewItem>
          <ReviewItem
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate suscipit ea totam voluptatum impedit, facere '
            }
          ></ReviewItem>
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ReviewsSection;
