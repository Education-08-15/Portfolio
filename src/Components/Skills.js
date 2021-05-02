import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styled/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My Skills'} span={'my skills'} />
      <InnerLayout>
        <div className='skills'>
          <ProgressBar title={'HTML5'} width={'60%'} text={'60%'} />
          <ProgressBar title={'CSS3'} width={'60%'} text={'60%'} />
          <ProgressBar title={'JAVASCRIPT'} width={'65%'} text={'65%'} />
          <ProgressBar title={'JAVA'} width={'30%'} text={'30%'} />
          {/* <ProgressBar title={'PYTHON'} width={'95%'} text={'95%'} /> */}
          <ProgressBar title={'React JS'} width={'70%'} text={'70%'} />
          <ProgressBar title={'Bash-Scripting'} width={'50%'} text={'50%'} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
