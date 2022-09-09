import React from "react";
import Courses from "./courses/Courses";
import "./CoursesSection.css";

function CoursesSection({ title, description, exploreButtonContent, courses }) {
  return (
    <div>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="exploreButton">{exploreButtonContent}</button>
      </div>
      <Courses courses={courses} />
    </div>
  );
}

export default CoursesSection;
