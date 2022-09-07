import React from 'react';
import { Chart } from 'src/components/templates/index/components/chart';
import { Layout } from 'src/components/routing/layout/layout';
import { INDEX_ROUTE } from './index-routes';
import { FeaturedInfo } from './components/featuredInfo';
import { Col, Container, Row } from 'react-bootstrap';

export const IndexTemplate = () => (
  <Layout title={INDEX_ROUTE.label}>
    {() => {
      return (
        <>
          <FeaturedInfo />
          <div className="d-flex">
            <Container>
              <Row>
                <Chart title="Revenue" data={[]} />
                <Chart title="Sales" data={[]} />
                <Chart title="Cost" data={[]} />
              </Row>
            </Container>
          </div>
        </>
      );
    }}
  </Layout>
);
