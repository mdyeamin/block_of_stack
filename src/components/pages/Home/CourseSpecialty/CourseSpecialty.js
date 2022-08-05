import React from "react";

import "./CourseSpecialty.css";

import {Link, Outlet} from "react-router-dom";

function CourseSpecialty() {
  return (
    <>
      <Link to='/one'>What is the specialty of this course?</Link>
      <Link to='/two'>How will this course work?</Link>
      <Outlet />
    </>
  );
}

export default CourseSpecialty;
