import 'src/components/ui-kit/global-styles/global-styles';

import { graphql, useStaticQuery } from 'gatsby';
import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { throwError } from 'src/logic/app-internals/utils/throw-error';
import { Header } from './header/header';
import { GQLLayoutQuery } from './layout._graphql-generated_';
import { Col, Container, Row } from 'react-bootstrap';
import { Footer } from './footer/footer';

type Props = {
  children: () => ReactNode;
  title: string;
  noContainment?: boolean;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
};

export function Layout(props: Props) {
  const { site } = useStaticQuery<GQLLayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteMetadata = site?.siteMetadata || throwError();
  const siteTitle = siteMetadata.title || throwError();

  const title = `${props.title} - ${siteTitle}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="min-vh-100 d-flex flex-column align-items-stretch">
        <Container>
          <Row>
            <Col sm={1} md={2}>
              <Header
                menuHtmlId="page-header-menu"
                className="sticky-top flex-column bg-secondary h-100"
              />
            </Col>
            <Col>
              <main
                className={`flex-fill ${
                  props.noContainment ? '' : 'container'
                } ${props.noTopPadding ? '' : 'pt-3'} ${
                  props.noBottomPadding ? '' : 'pb-3'
                }`}
              >
                {props.children()}
              </main>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}
