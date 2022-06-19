import React from "react";
import {Link} from "react-router-dom";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {GoLocation} from "react-icons/go";
import {HiOutlineMail} from "react-icons/hi";
import {IoMdCall} from "react-icons/io";
import {AiFillFacebook} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {FaGithubSquare} from "react-icons/fa";
import {BsYoutube} from "react-icons/bs";

import logo from "../../../img/logo/logo.png";
import footerImg from "../../../img/footerImg/footer-payment-img.png";
import playstore from "../../../img/footerImg/playstore.png";
function Footer() {
  return (
    <div className='bg-dark text-white py-5'>
      <Container>
        <Row className='justify-content-md-center'>
          <Row>
            <Col md-4>
              <div className='footer-logo text start'>
                <Link to='/'>
                  <img src={logo} className='App-logo logo-sizing' alt='logo' />
                </Link>
                <Link to='/' style={{textDecoration: "none"}}>
                  <Navbar.Brand className='ms-3 text-white'>
                    Block of Stack
                  </Navbar.Brand>
                </Link>
              </div>
            </Col>
            {/* <Col md-3></Col>
            <Col md-4></Col> */}
          </Row>
          <Col md='4'>
            <div className='text-start'>
              <p>
                {" "}
                <GoLocation /> Level-4, 34, Awal Centre, Banani, Dhaka
              </p>
              <p>
                {" "}
                <HiOutlineMail /> Official: basic@codeofstack.com
              </p>
              <p>
                {" "}
                <IoMdCall /> Helpline : 01999988882 , 01999988882 , 01999988882
                ,01322901104 (Available : Sat - Thu, 10:00 AM to 7:00 PM)
              </p>
              <img src={playstore} alt='' />
            </div>
          </Col>
          <Col md='3' className="text-start">
            <p>About us</p>
            <p>Success</p>
            <p>Refund policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>App Privacy Policy</p>
            <div className='social-icons d-flex justify-content-md-center '>
              <div className='social mx-2 font-25 fs-3'>
                <AiFillFacebook />
              </div>
              <div className='social mx-2 font-25 fs-3'>
                <FaInstagramSquare />
              </div>
              <div className='social mx-2 font-25 fs-3'>
                <AiFillLinkedin />
              </div>
              <div className='social mx-2 font-25 fs-3'>
                <FaGithubSquare />
              </div>
              <div className='social mx-2 font-25 fs-3'>
                <BsYoutube />
              </div>
            </div>
          </Col>
          <Col md='4'>
            <img src={footerImg} alt='' />
          </Col>
        </Row>
      </Container>
      <p className='mt-5'>copyright &copy; blockofstack.com</p>
    </div>
  );
}

export default Footer;
