import React from "react";

import "./CourseSpecialty.css";

import {Link, Outlet} from "react-router-dom";

function CourseSpecialty() {
  return (
    <>
      <Link to='/home/one'>One</Link>
      <Link to='/home/two'>Two</Link>
      <Outlet />
    </>
  );
}

export default CourseSpecialty;
