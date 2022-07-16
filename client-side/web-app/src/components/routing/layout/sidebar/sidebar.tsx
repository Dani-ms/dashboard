import { INDEX_ROUTE } from 'src/components/templates/index/index-routes';
import { Nav } from 'react-bootstrap';
import {
  faChalkboardTeacher,
  faChartSimple,
  faFile,
  faGear,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  menuHtmlId: string;
  className: string;
};

/*
  TODO: add menu items
*/

export function Sidebar(props: Props) {
  return (
    <>
      <Nav
        defaultActiveKey={INDEX_ROUTE.getHref()}
        className={`flex-column bg-secondary h-100 ${props.className}`}
      >
        <Nav.Item>
          <Nav.Link href={INDEX_ROUTE.getHref()}>
            <FontAwesomeIcon icon={faChalkboardTeacher} className="py-1 pe-2" />{' '}
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
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faFile} className="py-1 pe-2" />
            Reports
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <FontAwesomeIcon icon={faGear} className="py-1 pe-2" />
            Customers
          </Nav.Link>
          <hr></hr>
          <Nav.Link eventKey="link-2">
            {' '}
            <FontAwesomeIcon icon={faGear} className="py-1 pe-2" />
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
