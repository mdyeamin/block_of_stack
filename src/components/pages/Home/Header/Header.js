import React from "react";
import {Carousel, Row, Col, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import slide1 from "../../../../img/slider/slide1.png";
import slide2 from "../../../../img/slider/slide2.png";
import slide3 from "../../../../img/slider/slide3.png";
import slide4 from "../../../../img/slider/slide4.png";
import slide5 from "../../../../img/slider/slide5.png";
import slide6 from "../../../../img/slider/slide6.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {
        <Carousel fade controls={false} className='slide-color'>
          {/***************** first slide  *****************/}
          <Carousel.Item>
            {/* <img
              className='d-block w-100'
              src={slider1}
              alt='First slide'
            /> */}
            <div className='container'>
              {""}
              <Row>
                <Col md={8} xs={12} className='align'>
                  <div>
                    <h3 className='text-light'>
                      First slide label carusal item
                    </h3>
                    <NavLink to='/checkout'>
                      <Button variant='light'>Enroll</Button>
                    </NavLink>
                  </div>
                </Col>
                <Col md={4} xs={12} className='align'>
                  <p>
                    <img
                      className='d-block w-100'
                      src={slide1}
                      alt='First slide'
                    />
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          {/***************** secund slide *****************/}
          <Carousel.Item>
            {/* <img className='d-block w-100'
              src={slider2}
              alt='Second slide' /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12} className='align'>
                  <div>
                    <h3 className='text-light'>
                      Second slide label carusal item
                    </h3>
                    <NavLink to='/checkout'>
                      <Button variant='light'>Enroll</Button>
                    </NavLink>
                  </div>
                </Col>
                <Col md={4} xs={12} className='align'>
                  <p>
                    <img
                      className='d-block w-100'
                      src={slide2}
                      alt='First slide'
                    />
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** third slide  *****************/}
          <Carousel.Item>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='Third slide'
            /> */}

            <div className='container'>
              {""}
              <Row>
                <Col md={8} xs={12} className='align'>
                  <div>
                    <h3 className='text-light'>
                      Third slide label carusal item
                    </h3>
                    <NavLink to='/checkout'>
                      <Button variant='light'>Enroll</Button>
                    </NavLink>
                  </div>
                </Col>
                <Col md={4} xs={12} className='align'>
                  <p>
                    <img
                      className='d-block w-100'
                      src={slide3}
                      alt='First slide'
                    />
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** fourth slide  *****************/}
          <Carousel.Item>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='fourth slide'
            /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12} className='align'>
                  <div>
                    <h3 className='text-light '>
                      Fourth slide label carusal item
                    </h3>
                    <NavLink to='/checkout'>
                      <Button variant='light'>Enroll</Button>
                    </NavLink>
                  </div>
                </Col>
                <Col md={4} xs={12} className='align'>
                  <p>
                    <img
                      className='d-block w-100'
                      src={slide4}
                      alt='First slide'
                    />
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** fifth slide  *****************/}
          <Carousel.Item>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='fifth slide'
            /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12} className='align'>
                  <div>
                    <h3 className='text-light '>
                      Fifth slide label carusal item
                    </h3>
                    <NavLink to='/checkout'>
                      <Button variant='light'>Enroll</Button>
                    </NavLink>
                  </div>
                </Col>
                <Col md={4} xs={12} className='align'>
                  <p>
                    <img
                      className='d-block w-100'
                      src={slide5}
                      alt='First slide'
                    />
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** sixth slide  *****************/}
          <Carousel.Item>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='sixth slide'
            /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12} className='align'>
                  <div>
                    <h3 className='text-light '>
                      Sixth slide label carusal item
                    </h3>
                    <NavLink to='/checkout'>
                      <Button variant='light'>Enroll</Button>
                    </NavLink>
                  </div>
                </Col>
                <Col md={4} xs={12} className='align'>
                  <p>
                    <img
                      className='d-block w-100'
                      src={slide6}
                      alt='First slide'
                    />
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      }
    </div>
  );
};

export default Header;
