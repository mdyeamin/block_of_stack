import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BsStickies} from "react-icons/bs";
import "./CourseAbout.css";

const CourseAbout = () => {
  return (
    <>
      {
        <Container className='m-auto'>
          <Row>
            <h1>What you can learn from this course:</h1>
            <Col md='6'></Col>
            <Col md='6'>
              <Row className='justify-content-md-center'>
                <Col md={6} className='  '>
                  <BsStickies />
                  <p className='text-start w-75'>
                    Quickly learn HTML and CSS by watching a few videos and make
                    two great websites. And Segular links can be shared with
                    anyone.
                  </p>
                </Col>
                <Col md={6} className='  '>
                  <BsStickies />
                  <p className='text-start w-75'>
                    The nutshell of the popular framework called bootstrap will
                    fry. Then he will make two e-commerce websites with that.
                    What fun!
                  </p>
                </Col>
                <Col md={6} className='  '>
                  <BsStickies />
                  <p className='text-start w-75'>
                    Six main things about JavaScript, problem solving with
                    JavaScript, interview questions and answers. Even ES6 will
                    make your knowledge useful
                  </p>
                </Col>
                <Col md={6} className='  '>
                  <BsStickies />
                  <p className='text-start w-75'>
                    There is live calculation of bank deposit, withdraw with
                    JavaScript. Then there is the e-commerce site shopping cart
                    accounting system
                  </p>
                </Col>
                <Col md={6} className='  '>
                  <BsStickies />
                  <p className='text-start w-75'>
                    The idea of ​​server, loading JSON data by calling REST API,
                    node, mongodb (database), debugging with chrome devtool will
                    be given.
                  </p>
                </Col>
                <Col md={6} className='  '>
                  <BsStickies />
                  <p className='text-start w-75'>
                    The most important aspect of the course is that a website
                    full of the world's most popular jobs in the JavaScript
                    Framework (React) is shown from scratch to zero.
                  </p>
                </Col>

                <div>
                  <h3 className='text-start'>Remember That it</h3>
                  <p className='text-start'>
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
