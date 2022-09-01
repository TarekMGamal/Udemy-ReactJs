import React from "react";
import Courses from "./courses/Courses";
import coursesSectionStyle from "./CoursesSection.module.css";

function coursesSection() {
  return (
    <div>
      <h3>Expand your career opportunities with Python</h3>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <button className={coursesSectionStyle.exploreButton}>
        Explore Python
      </button>
      <Courses />
    </div>
  );
}

export default coursesSection;
