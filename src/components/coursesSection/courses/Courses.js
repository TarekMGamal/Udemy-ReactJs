import React from "react";
import Course from "../course/Course";
import coursesStyle from "./Courses.module.css";

function Courses() {
  let courses = [
    {
      id: 1,
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain,The Codex",
      image: "https://img-c.udemycdn.com/course/480x270/394676_ce3d_5.jpg",
      price: "E£679.99",
      rating: 4.0,
      people: "2,948",
    },
    {
      id: 2,
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/480x270/396876_cc92_7.jpg",
      price: "E£1,599.99",
      rating: 4.0,
      people: "17,999",
    },
    {
      id: 3,
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz, Coding FAcutly Solutaions",
      image: "https://img-c.udemycdn.com/course/480x270/405878_e5a0_3.jpg",
      price: "E£679.99",
      rating: 3.0,
      people: "1,781",
    },
    {
      id: 4,
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      image: "https://img-c.udemycdn.com/course/480x270/426570_1b91_3.jpg",
      price: "E£319.99",
      rating: 2.0,
      people: "2,773",
    },
    {
      id: 5,
      image: "https://img-c.udemycdn.com/course/480x270/449532_2aa9_7.jpg",
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      price: "E£519.99",
      rating: 5.0,
      people: "2,930",
    },
  ];

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
