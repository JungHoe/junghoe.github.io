import React from 'react';
import Layout from '@/components/layout';
import { CategoryInterace } from '@/types';
const Category: React.FC<CategoryInterace> = ({ location }) => {
  return (
    <Layout location={location} title="category">
      <div>카테고리</div>
    </Layout>
  );
};

export default Category;
