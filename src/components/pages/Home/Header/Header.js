import React, {useEffect, useState} from "react";
import {Carousel, Row, Col, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [slideData, setSlideData] = useState([]);
  useEffect(() => {
    fetch("./headerSlideData.json")
      .then((res) => res.json())
      .then((data) => setSlideData(data));
  }, []);

  return (
    <div>
      {
        <Carousel fade controls={false} className='slide-color'>
          {slideData.map((slide) => (
            <Carousel.Item>
              <div className='container'>
                {" "}
                <Row>
                  <Col md={8} xs={12} className='align'>
                    <div>
                      <h3 className='text-light '>{slide?.title}</h3>
                      <NavLink to={slide?.path}>
                        <Button variant='light'>Enroll</Button>
                      </NavLink>
                    </div>
                  </Col>

                  <Col md={4} xs={12} className='align'>
                    <p>
                      <img
                        className='d-block w-100'
                        src={slide?.img}
                        alt='First slide'
                      />
                    </p>
                  </Col>
                </Row>
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      }
    </div>
  );
};

export default Header;
