import React from 'react';
import { Chart } from 'src/components/templates/index/components/chart';
import { Layout } from 'src/components/routing/layout/layout';
import { INDEX_ROUTE } from './index-routes';
import { FeaturedInfo } from './components/featuredInfo';

export const IndexTemplate = () => (
  <Layout title={INDEX_ROUTE.label}>
    {() => {
      return (
        <>
          <FeaturedInfo />

          <Chart title="Sales" data={[]} />
        </>
      );
    }}
  </Layout>
);
