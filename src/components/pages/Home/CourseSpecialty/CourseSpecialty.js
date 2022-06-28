import React from "react";
import {useState} from "react";
import "./CourseSpecialty.css";
import One from "../One/One";
import Two from "../Two/Two";

function CourseSpecialty() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div id='toggole-button' className='d-flex justify-content-center'>
        <div
          className={({isActive}) => (isActive ? "color" : "nonColor")}
          onClick={() => setShow(true)}
        >
          BOne
        </div>
        <div
          className={({isActive}) => (isActive ? "color" : "nonColor")}
          onClick={() => setShow(false)}
        >
          BTwo
        </div>
      </div>
      {show ? <One /> : <Two />}
    </div>
  );
}

export default CourseSpecialty;
