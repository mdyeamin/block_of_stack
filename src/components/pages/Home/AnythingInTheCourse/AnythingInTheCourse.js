import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import anythingImg from "../../../../img/slider/slide6.png";
function AnythingInTheCourse() {
  const [courseAnything, setCourseAnything] = useState([]);
  useEffect(() => {
    fetch("./courseanything.json")
      .then((res) => res.json())
      .then((data) => setCourseAnything(data));
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <h1>Anything in the course</h1>
          <Col md-6>
            <img className='img-fluid w-75' src={anythingImg} alt='' />
          </Col>
          <Col md-6>
            <div className='anything-main-area'>
              <div
                className='accordion accordion-flush anything-area'
                id='accordionFlushExample'
              >
                {courseAnything.map((anything) => (
                  <div
                    className='accordion-item anything-item'
                    key={anything?.id}
                  >
                    <h2 className='accordion-header' id={anything.id}>
                      {/* id */}
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={
                          anything.dataBsTatger
                        } /* dataBsTatger */
                        aria-expanded='false'
                        aria-controls={anything.ariaControls} /* ariaControls */
                      >
                        {anything.title}
                      </button>
                    </h2>

                    <div
                      id={anything.ariaControls} /* ariaControls */
                      className='accordion-collapse collapse'
                      aria-labelledby={anything.id} /* id */
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body. */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AnythingInTheCourse;
