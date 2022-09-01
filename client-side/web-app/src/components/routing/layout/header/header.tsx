import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import * as styles from './header.module.scss';
import { LinkAnchor } from 'src/components/ui-kit/protons/link-anchor/link-anchor';
import { INDEX_ROUTE } from 'src/components/templates/index/index-routes';
import { Nav } from 'react-bootstrap';
import { PROJECT_NAME } from '@app/shared/project-details';
import { missingCssClass } from 'src/components/ui-kit/core/utils/missing-css-class';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faChartSimple,
  faFile,
  faGear,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  menuHtmlId: string;
  className: string;
};

/*
  TODO: add menu items
*/

export function Header(props: Props) {
  const [expanded, replaceExpanded] = useState<boolean>(false);

  const expandMenu = () => {
    replaceExpanded(true);
  };

  const collapseMenu = () => {
    replaceExpanded(false);
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (expanded) {
        collapseMenu();
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <>
      <header className={`border-bottom ${props.className}`}>
        <div className="container py-5 px-3 mx-auto">
          <div className="d-none d-lg-block">
            <LinkAnchor className="px-2 mx-auto " href={INDEX_ROUTE.getHref()}>
              <span className="badge bg-primary ">
                <span className="h5">{PROJECT_NAME}</span>
              </span>
            </LinkAnchor>
          </div>

          <Navbar
            bg="secondary"
            collapseOnSelect
            expand="lg"
            expanded={expanded}
          >
            <Navbar.Toggle
              onClick={() => {
                if (expanded) {
                  collapseMenu();
                } else {
                  expandMenu();
                }
              }}
              aria-controls={props.menuHtmlId}
            >
              <FontAwesomeIcon icon={faBars} />
              <LinkAnchor className="px-2 mx-auto" href={INDEX_ROUTE.getHref()}>
                <span className="badge bg-primary ">
                  <span className="h5">{PROJECT_NAME}</span>
                </span>
              </LinkAnchor>
            </Navbar.Toggle>

            <Navbar.Collapse id={props.menuHtmlId}>
              <div className="container bg-secondary px-3">
                <Nav className="flex-column">
                  <Nav.Item>
                    <Nav.Link href="ABOUT_ROUTE.getHref()">
                      {' '}
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="py-1 pe-2"
                      />{' '}
                      Overview
                    </Nav.Link>
                    <Nav.Link eventKey="link-1">
                      {' '}
                      <FontAwesomeIcon
                        icon={faChartSimple}
                        className="py-1 pe-2"
                      />{' '}
                      Growth
                    </Nav.Link>

                    <Nav.Link eventKey="link-2">
                      <FontAwesomeIcon icon={faToolbox} className="py-1 pe-2" />
                      Customers
                    </Nav.Link>
                    <Nav.Link eventKey="link-3">
                      <FontAwesomeIcon icon={faFile} className="py-1 pe-2" />
                      Reports
                    </Nav.Link>
                    <Nav.Link eventKey="link-4">
                      <FontAwesomeIcon icon={faGear} className="py-1 pe-2" />
                      Customers
                    </Nav.Link>

                    <Nav.Link eventKey="link-5">
                      {' '}
                      <FontAwesomeIcon icon={faGear} className="py-1 pe-2" />
                      Settings
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      {expanded ? (
        <div
          role="switch"
          onClick={() => {
            collapseMenu();
          }}
          onKeyUp={(e) => {
            if (e.code === 'Space') {
              collapseMenu();
            }
          }}
          className={styles['header__backdrop'] || missingCssClass()}
          aria-checked={true}
          tabIndex={-1}
        />
      ) : null}
    </>
  );
}
