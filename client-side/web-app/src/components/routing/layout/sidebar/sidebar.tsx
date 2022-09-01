import { INDEX_ROUTE } from 'src/components/templates/index/index-routes';
import { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {
  faChalkboardTeacher,
  faChartSimple,
  faFile,
  faGear,
  faBars,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  menuHtmlId: string;
  className: string;
};

export function Sidebar(props: Props) {
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
      <Navbar collapseOnSelect expand="lg" expanded={expanded}>
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
        </Navbar.Toggle>
        <Navbar.Collapse id={props.menuHtmlId}>
          <Nav
            defaultActiveKey={INDEX_ROUTE.getHref()}
            className={`flex-column bg-secondary h-100 ${props.className}`}
          >
            <Nav.Item>
              <Nav.Link href={INDEX_ROUTE.getHref()}>
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className="py-1 pe-2"
                />{' '}
                Overview
              </Nav.Link>
              <Nav.Link eventKey="link-1">
                <FontAwesomeIcon icon={faChartSimple} className="py-1 pe-2" />
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
              <hr></hr>
              <Nav.Link eventKey="link-5">
                {' '}
                <FontAwesomeIcon icon={faGear} className="py-1 pe-2" />
                Settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
