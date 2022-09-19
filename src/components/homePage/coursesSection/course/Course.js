import React from "react";
import "./Course.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Course({ courseData }) {
  let instructors = courseData.instructors;
  let instructorsString = "";
  for (let i in instructors) {
    instructorsString += instructors[i]["name"];
    if (i < instructors.length - 1) instructorsString += ", ";
  }

  return (
    <div className="course">
      <Link
        to={`/course/${courseData.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img className="courseImage" src={courseData.image} alt="course" />
        <h3>{courseData.title}</h3>
        <div>{instructorsString}</div>
        <div>
          <span className="ratingSpan">
            {courseData.rating}
            <ReactStars value={courseData.rating} size={20} edit={false} />(
            {courseData.students})
          </span>
        </div>
        <div>E£{courseData.price}</div>
      </Link>
    </div>
  );
}

export default Course;
