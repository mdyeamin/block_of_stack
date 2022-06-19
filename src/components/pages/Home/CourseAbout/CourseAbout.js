import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BsStickies} from "react-icons/bs";
import courseAboutVideoDemo from "../../../../img/courseAboutImg/courseAbout.png";
import "./CourseAbout.css";

const CourseAbout = () => {
  const [aboutText, setAboutText] = useState([]);
  useEffect(() => {
    fetch("./CourseAbout.json")
      .then((res) => res.json())
      .then((data) => setAboutText(data));
  }, []);

  return (
    <>
      {
        <Container className='m-auto'>
          <Row>
            <h1 className='my-5'>What you can learn from this course:</h1>
            <Col md='6'>
              <div className='px-3'>
                <h3>Upcoming Payment System</h3>
                <img
                  src={courseAboutVideoDemo}
                  className='img-fluid'
                  round
                  alt=''
                />
              </div>
            </Col>
            <Col md='6'>
              <Row className='justify-content-md-center'>
                {/* data map */}
                {aboutText.map((text) => (
                  <Col md={6} key={text?.id}>
                    <BsStickies />
                    <p className='text-start m-auto w-75'>{text?.title}</p>
                  </Col>
                ))}

                <div className='mt-5'>
                  <h3 className='text-start m-auto mb-3'>Remember That it</h3>
                  <p className='text-start m-auto'>
                    But bad news for those who are a little fooled. There are
                    questions after every video. There is a final quiz at the
                    end of each module. And after each project there is a
                    take-away homework.
                  </p>
                  <span></span>
                  <p className='text-start'>
                    If one cannot become a web developer by following this
                    course, no one else in the world can make him a web
                    developer.
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default CourseAbout;
