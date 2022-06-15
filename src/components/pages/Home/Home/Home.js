import React from "react";
import Header from "../Header/Header";
import CourseAbout from "../CourseAbout/CourseAbout";
import ManageEnroll from "../ManageEnroll/ManageEnroll";
import CourseDetails from "../CourseDetails/CourseDetails";
import CourseAboutAsk from "../CourseAboutAsk/CourseAboutAsk";
const Home = () => {
  return (
    <div>
      <Header />
      {/* <ManageEnroll /> */}
      <CourseAbout />
      {/*  <CourseDetails />
      <CourseAboutAsk/> */}
    </div>
  );
};

export default Home;
