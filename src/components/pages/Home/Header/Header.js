import React from "react";
import {Carousel, Row, Col /* CarouselItem */} from "react-bootstrap";
/* import slider1 from "../../../../img/slider/slide1.jpg";
import slider2 from "../../../../img/slider/slide2.jpg";
import slider3 from "../../../../img/slider/slide3.jpg"; */
import "./Header.css";
const Header = () => {
  return (
    <div>
      {
        <Carousel fade controls={false}>
          {/***************** first slide  *****************/}
          <Carousel.Item className='slide-color'>
            {/* <img
              className='fluidd-block w-100'
              src={slider1}
              alt='First slide'
            /> */}
            <div>
              {""}
              <Row>
                <Col md={6} xs={12}>
                  <h3 className='text-light align'>First slide label</h3>
                </Col>
                <Col md={6} xs={12}>
                  <p className='text-light align'>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** secund slide *****************/}
          <Carousel.Item className='slide-color'>
            {/* <img className='d-block w-100'
              src={slider2}
              alt='Second slide' /> */}

            <div>
              {" "}
              <Row>
                <Col md={6} xs={12}>
                  <h3 className='text-light align'>Second slide label</h3>
                </Col>
                <Col md={6} xs={12}>
                  <p className='text-light align'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** third slide  *****************/}
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='Third slide'
            /> */}

            <div>
              {""}
              <Row>
                <Col md={6} xs={12}>
                  <h3 className='text-light align'>Third slide label</h3>
                </Col>
                <Col md={6} xs={12}>
                  <p className='text-light align'>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** fourth slide  *****************/}
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='fourth slide'
            /> */}

            <div>
              {" "}
              <Row>
                <Col md={6} xs={12}>
                  <h3 className='text-light align'>Fourth slide label</h3>
                </Col>
                <Col md={6} xs={12}>
                  <p className='text-light align'>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** fifth slide  *****************/}
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='fifth slide'
            /> */}

            <div>
              {" "}
              <Row>
                <Col md={6} xs={12}>
                  <h3 className='text-light align'>Fifth slide label</h3>
                </Col>
                <Col md={6} xs={12}>
                  <p className='text-light align'>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Col>
              </Row>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          {/***************** sixth slide  *****************/}
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='sixth slide'
            /> */}

            <div>
              {" "}
              <Row>
                <Col md={6} xs={12}>
                  <h3 className='text-light align'>Sixth slide label</h3>
                </Col>
                <Col md={6} xs={12}>
                  <p className='text-light align'>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
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
