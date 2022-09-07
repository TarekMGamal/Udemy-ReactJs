import React from "react";
import courseStyle from "./Course.module.css";
import ReactStars from "react-rating-stars-component";

function Course({ courseData }) {
  return (
    <div className={courseStyle.course}>
      <img
        className={courseStyle.courseImage}
        src={courseData.image}
        alt="course"
      />
      <h3>{courseData.title}</h3>
      <div>{courseData.author}</div>
      <div>
        <span className={courseStyle.ratingSpan}>
          {courseData.rating}
          <ReactStars value={courseData.rating} size={20} edit={false} />
          ({courseData.people})
        </span>
      </div>
      <div>{courseData.price}</div>
    </div>
  );
}

export default Course;
