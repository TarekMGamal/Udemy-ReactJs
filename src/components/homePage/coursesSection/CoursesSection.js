import React from "react";
import Courses from "./courses/Courses";
import "./CoursesSection.css";
import { DataContext } from "../../../contexts/DataContext";
import { useContext } from "react";

function CoursesSection() {
  let CourseData = useContext(DataContext);
  CourseData = CourseData.homePage;

  if (CourseData === undefined) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div className="description">
          <h3>{CourseData.header}</h3>
          <p>{CourseData.description}</p>
          <button className="exploreButton">Explore {CourseData.title}</button>
        </div>
        <Courses />
      </div>
    );
  }
}

export default CoursesSection;
