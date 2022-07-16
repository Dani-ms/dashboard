import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

export function FeaturedInfo() {
  return (
    <>
      <Container className="featured pt-5 mx-auto">
        <div className="featuredItem">
          <Row>
            <Col sm={12} md={4}>
              <span className="featuredTitle"> Revenue</span>
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

            <Col sm={12} md={4}>
              <span className="featuredTitle"> Sales</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney"> $2,415 </span>
                <span className="featuredMoneyRate">
                  11.4{' '}
                  <FontAwesomeIcon icon={faArrowUp} className="featuredIcon" />
                </span>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <span className="featuredTitle"> Cost</span>
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
