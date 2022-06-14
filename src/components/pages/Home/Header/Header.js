import React from "react";
import {
  Carousel,
  Row,
  Col ,
  
} from "react-bootstrap";
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
          <Carousel.Item className='slide-color'>
            {/* <img
              className='fluidd-block w-100'
              src={slider1}
              alt='First slide'
            /> */}
            <div className='container-md'>
              {""}
              <Row>
                <Col md={8} xs={12}>
                  <h3 className='text-light align'>First slide label</h3>
                </Col>
                <Col md={4} xs={12}>
                  <p className='text-light align'>
                    <img
                      className='fluidd-block w-100'
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
          <Carousel.Item className='slide-color'>
            {/* <img className='d-block w-100'
              src={slider2}
              alt='Second slide' /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12}>
                  <h3 className='text-light align'>Second slide label</h3>
                </Col>
                <Col md={4} xs={12}>
                  <p className='text-light align'>
                    <img
                      className='fluidd-block w-100'
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
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='Third slide'
            /> */}

            <div className='container'>
              {""}
              <Row>
                <Col md={8} xs={12}>
                  <h3 className='text-light align'>Third slide label</h3>
                </Col>
                <Col md={4} xs={12}>
                  <p className='text-light align'>
                    <img
                      className='fluidd-block w-100'
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
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='fourth slide'
            /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12}>
                  <h3 className='text-light align'>Fourth slide label</h3>
                </Col>
                <Col md={4} xs={12}>
                  <p className='text-light align'>
                    <img
                      className='fluidd-block w-100'
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
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='fifth slide'
            /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12}>
                  <h3 className='text-light align'>Fifth slide label</h3>
                </Col>
                <Col md={4} xs={12}>
                  <p className='text-light align'>
                    <img
                      className='fluidd-block w-100'
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
          <Carousel.Item className='slide-color'>
            {/*  <img
              className='d-block w-100 '
              src={slider3}
              alt='sixth slide'
            /> */}

            <div className='container'>
              {" "}
              <Row>
                <Col md={8} xs={12}>
                  <h3 className='text-light align'>Sixth slide label</h3>
                </Col>
                <Col md={4} xs={12}>
                  <p className='text-light align'>
                    <img
                      className='fluidd-block w-100'
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
