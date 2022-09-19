import React from "react";
import Course from "../course/Course";
import "./Courses.css";
import { DataContext } from "../../../../contexts/DataContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

function Courses() {
  let CourseData = useContext(DataContext);
  const [searchParam, setSearchParam] = useSearchParams();

  let searchValue = "";
  if (searchParam.get("query"))
    searchValue = searchParam.get("query").toLowerCase();

  if (CourseData === undefined) {
    return <div>Loading</div>;
  } else {
    CourseData = CourseData.homePage;
    let courses = CourseData.courses;

    return (
      <div className="courses">
        {courses
          .filter((courseData) => {
            return courseData.title.toLowerCase().includes(searchValue);
          })
          .map((courseData) => {
            return <Course key={courseData.id} courseData={courseData} />;
          })}
      </div>
    );
  }
}

export default Courses;
