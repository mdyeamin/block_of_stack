import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";

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
            <h1>One</h1>
          </Col>
          <Col md-6>
            {courseAnything.map((anything) => (
              <div class='accordion' id='accordionExample'>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id={anything.id}>
                    <button
                      class='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={anything.dataBsTatger}
                      aria-expanded='true'
                      aria-controls={anything.ariaControls}
                    >
                      {anything.title}
                    </button>
                  </h2>
                  <div
                    id={anything.ariaControls}
                    class='accordion-collapse collapse show'
                    aria-labelledby={anything.id}
                    data-bs-parent='#accordionExample'
                  >
                    <div class='accordion-body'>
                      {/* <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go
                  within the <code>.accordion-body</code>, though the
                  transition does limit overflow. */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AnythingInTheCourse;
