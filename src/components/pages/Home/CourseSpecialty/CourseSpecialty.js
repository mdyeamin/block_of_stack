import React from "react";

import "./CourseSpecialty.css";

import {Link, NavLink, Outlet} from "react-router-dom";

function CourseSpecialty() {
  return (
    <>
      <NavLink
        to='/specialty'
        className={({isActive}) => (isActive ? "csb-design" : "non-csb-design")}
      >
        What is the specialty of this course?
      </NavLink>
      <NavLink
        to='/courseSystem'
        className={({isActive}) => (isActive ? "csb-design" : "non-csb-design")}
      >
        How will this course work?
      </NavLink>
      <Outlet />
    </>
  );
}

export default CourseSpecialty;
