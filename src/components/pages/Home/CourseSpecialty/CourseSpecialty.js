import React from "react";

import "./CourseSpecialty.css";

import {Link, Outlet} from "react-router-dom";

function CourseSpecialty() {
  return (
    <>
      <Link to='/one'>One</Link>
      <Link to='/two'>Two</Link>
      <Outlet />
    </>
  );
}

export default CourseSpecialty;
