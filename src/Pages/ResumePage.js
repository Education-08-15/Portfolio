import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout } from '../styled/Layouts';
import Resume from '../Components/Resume';

function ResumePage() {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
