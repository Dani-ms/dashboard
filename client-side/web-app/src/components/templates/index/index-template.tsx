import React from 'react';
import { Chart } from 'src/components/root-frame/components/chart';
import { FeaturedInfo } from 'src/components/root-frame/components/featuredInfo';
import { Layout } from 'src/components/routing/layout/layout';
import { INDEX_ROUTE } from './index-routes';

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
