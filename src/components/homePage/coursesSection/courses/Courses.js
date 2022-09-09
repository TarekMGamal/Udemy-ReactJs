import React from "react";
import Course from "../course/Course";
import "./Courses.css";

function Courses({ courses }) {
  return (
    <div className="courses">
      {courses.map((courseData) => {
        return <Course key={courseData.id} courseData={courseData} />;
      })}
    </div>
  );
}

export default Courses;
