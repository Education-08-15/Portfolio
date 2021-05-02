import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function HomePage() {
  return (
    <HomePageStyled>
      <div className='p-particles-js'>
        <Particle></Particle>
      </div>
      <div className='typography'>
        <h1>
          Hi I'm <span> Shikshya Gautam</span>
        </h1>
        <p>
          Hello Everyone there!. I'm an undergraduate student currently
          exploring my knowledge in the field of tech. I'm currentl studying
          BSC.CSIT(Bachelors Of Computer Science And Information Technology) in
          Tribhuvan University. I'm exploring my knowledge to work as a
          FullStack Developer and a Network Engineer.
        </p>
        <div className='icons'>
          <a
            href='https://www.facebook.com/shiksha.gautam.921'
            className='icon i-facebook'
          >
            <FacebookIcon></FacebookIcon>
          </a>
          <a
            href='https://www.linkedin.com/in/shiksha-gautam-668751167/'
            className='icon i-linkedin'
          >
            <LinkedinIcon></LinkedinIcon>
          </a>
          <a
            href='https://github.com/Education-08-15'
            className='icon i-github'
          >
            <GithubIcon></GithubIcon>
          </a>
          <a
            href='https://twitter.com/Shikshy74393916'
            className='icon i-twitter'
          >
            <TwitterIcon></TwitterIcon>
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          /* background-color: var(--primary-color); */
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-facebook {
        &:hover {
          border: 2px solid lightblue;
          color: lightblue;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid green;
          color: green;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid blueviolet;
          color: blueviolet;
        }
      }
      .i-twitter {
        &:hover {
          border: 2px solid blue;
          color: blue;
        }
      }
    }
  }
`;
export default HomePage;
