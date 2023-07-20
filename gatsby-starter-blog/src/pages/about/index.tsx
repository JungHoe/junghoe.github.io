import React from 'react';
import Layout from '@/components/layout';
import { AboutInterace } from '@/types';

const About: React.FC<AboutInterace> = ({ location }) => {
  return (
    <Layout location={location} title="about">
      <div>어바웃</div>
    </Layout>
  );
};

export default About;
