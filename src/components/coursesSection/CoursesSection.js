import React from "react";
import Courses from "./courses/Courses";
import coursesSectionStyle from "./CoursesSection.module.css";

function CoursesSection({ title, description, exploreButtonContent, courses }) {
  return (
    <div>
      <div className={coursesSectionStyle.description}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={coursesSectionStyle.exploreButton}>
          {exploreButtonContent}
        </button>
      </div>
      <Courses courses={courses} />
    </div>
  );
}

export default CoursesSection;
