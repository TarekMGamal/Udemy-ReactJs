import React from "react";
import courseStyle from "./Course.module.css";

function Course(props) {
  return (
    <div className={courseStyle.course}>
      <img className={courseStyle.courseImage} src={props.courseData.image} alt="course"/>
      <h3>{props.courseData.title}</h3>
      <div>{props.courseData.author}</div>
      <div>
        {props.courseData.rating + "/5 (" + props.courseData.people + ")"}
      </div>
      <div>{props.courseData.price}</div>
    </div>
  );
}

export default Course;
