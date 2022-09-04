import React from "react";
import Course from "../course/Course";
import coursesStyle from "./Courses.module.css";

function Courses({ courses }) {
  return (
    <div className={coursesStyle.courses}>
      {courses.map((courseData) => {
        return (
          <Course
            key={courseData.id}
            courseData={courseData}
          />
        );
      })}
    </div>
  );
}

export default Courses;
