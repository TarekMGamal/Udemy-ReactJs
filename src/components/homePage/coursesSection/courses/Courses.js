import React from "react";
import Course from "../course/Course";
import "./Courses.css";
import { DataContext } from "../../../../contexts/DataContext";
import { useContext } from "react";

function Courses() {
  let CourseData = useContext(DataContext);

  if (CourseData === undefined) {
    return <div>Loading</div>;
  } else {
    CourseData = CourseData.homePage;
    let courses = CourseData.courses;

    return (
      <div className="courses">
        {courses.map((courseData) => {
          return <Course key={courseData.id} courseData={courseData} />;
        })}
      </div>
    );
  }
}

export default Courses;
