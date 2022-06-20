// import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import anythingImg from "../../../../img/slider/slide6.png";
function AnythingInTheCourse() {
  /* const [courseAnything, setCourseAnything] = useState([]);
  useEffect(() => {
    fetch("./courseanything.json")
      .then((res) => res.json())
      .then((data) => setCourseAnything(data));
  }, []); */
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
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingOne'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseOne'
                      aria-expanded='false'
                      aria-controls='flush-collapseOne'
                    >
                      Module -1: Welcome Video
                    </button>
                  </h2>
                  <div
                    id='flush-collapseOne'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingOne'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body. */}
                    </div>
                  </div>
                </div>
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseTwo'
                      aria-expanded='false'
                      aria-controls='flush-collapseTwo'
                    >
                      Module 0: Orientation. How to get ready for this course
                    </button>
                  </h2>
                  <div
                    id='flush-collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingTwo'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content. */}
                    </div>
                  </div>
                </div>
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseThree'
                      aria-expanded='false'
                      aria-controls='flush-collapseThree'
                    >
                      Module 1: Learn and Explore HTML as a Beginner
                    </button>
                  </h2>
                  <div
                    id='flush-collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingThree'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseFour'
                      aria-expanded='false'
                      aria-controls='flush-collapseFour'
                    >
                      Module 2: Learn and Explore CSS as a Beginner
                    </button>
                  </h2>
                  <div
                    id='flush-collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingFour'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseFive'
                      aria-expanded='false'
                      aria-controls='flush-collapseFive'
                    >
                      Module 3: Git, source control, GitHub and hosting
                    </button>
                  </h2>
                  <div
                    id='flush-collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingFive'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 6 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingSix'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseSix'
                      aria-expanded='false'
                      aria-controls='flush-collapseSix'
                    >
                      Module 4: Build a beautiful and professional portfolio
                      website
                    </button>
                  </h2>
                  <div
                    id='flush-collapseSix'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingSix'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 7 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingSeven'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseSeven'
                      aria-expanded='false'
                      aria-controls='flush-collapseSeven'
                    >
                      Module 5: Personal website, build a brand new website
                    </button>
                  </h2>
                  <div
                    id='flush-collapseSeven'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingSeven'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 8 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingEight'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseEight'
                      aria-expanded='false'
                      aria-controls='flush-collapseEight'
                    >
                      Module 5.5: [Bonus] Box model, pseudo class, position
                    </button>
                  </h2>
                  <div
                    id='flush-collapseEight'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingEight'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 9 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingNine'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseNine'
                      aria-expanded='false'
                      aria-controls='flush-collapseNine'
                    >
                      Module 6: HTML 5 Semantic tags, audio, video, table, form
                    </button>
                  </h2>
                  <div
                    id='flush-collapseNine'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingNine'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
                {/* 10 */}
                <div className='accordion-item anything-item'>
                  <h2 className='accordion-header' id='flush-headingTen'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseTen'
                      aria-expanded='false'
                      aria-controls='flush-collapseTen'
                    >
                      Module 7: More CSS, Icon, CSS3 animation
                    </button>
                  </h2>
                  <div
                    id='flush-collapseTen'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingTen'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {/* Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application. */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AnythingInTheCourse;
