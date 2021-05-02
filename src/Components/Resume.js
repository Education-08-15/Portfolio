import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'resume'} />
      <InnerLayout>
        <div className='small-title'>
          <SmallTitle icon={briefcase} title={'Working Experience'} />
        </div>
        <div className='resume-content'>
          <ResumeItem
            year={'2020 - present'}
            title={'Fronted-Developer'}
            subTitle={'Freelancer'}
            text={
              'I am exploring my knowledge in the field of information technology as a freelencer in frontened developement.'
            }
          />
          <ResumeItem
            year={'2021- Present'}
            title={'Search Engine Optimization'}
            subTitle={'Nepal Seo Company'}
            text={' working as an intern '}
          />
          <ResumeItem
            year={'2021'}
            title={'React Developer'}
            subTitle={'Nepal Seo Company'}
            text={'Intern. '}
          />
        </div>
        <div className='small-title u-small-title-margin'>
          <SmallTitle icon={school} title={'Educational Qualifications'} />
        </div>
        <div className='resume-content '>
          <ResumeItem
            year={'2002 - 2014'}
            title={'School Leaving Certificate'}
            subTitle={'Prerana Higher Secondary English Boarding School'}
            text={' '}
          />
          <ResumeItem
            year={'2014 - 2016'}
            title={'Science-Stream'}
            subTitle={'Aroma College'}
            text={' '}
          />
          <ResumeItem
            year={'2017 - present'}
            title={'Bachelors Of Computer Science & Information Technology'}
            subTitle={'Tribhuwan University'}
            text={' '}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
