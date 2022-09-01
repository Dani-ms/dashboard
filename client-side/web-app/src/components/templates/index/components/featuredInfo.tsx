import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

export function FeaturedInfo() {
  return (
    <>
      <Container className="featured pt-5 mx-auto text-center">
        <div className="featuredItem">
          <Row>
            <Col
              sm={12}
              md={3}
              className="card bg-tertiary shadow-sm py-3 text-center me-2"
            >
              <h3> Revenue</h3>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $2,415 </span>
                <span className="featuredMoneyRate">
                  -11.4{' '}
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="featuredIcon color-danger negative"
                  />
                </span>
              </div>
            </Col>

            <Col
              sm={12}
              md={3}
              className="card bg-secondary shadow-sm py-3 text-center me-2"
            >
              <h3> Sales</h3>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $2,415 </span>
                <span className="featuredMoneyRate">
                  11.4{' '}
                  <FontAwesomeIcon icon={faArrowUp} className="featuredIcon" />
                </span>
              </div>
            </Col>
            <Col
              sm={12}
              md={3}
              className="card bg-primary shadow-sm py-3 text-center "
            >
              <h2> Cost</h2>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $2,415 </span>
                <span className="featuredMoneyRate">
                  -11.4{' '}
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="featuredIcon negative"
                  />
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
