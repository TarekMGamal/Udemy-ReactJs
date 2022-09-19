import { InfoCircleFill, Globe, BadgeCcFill } from "react-bootstrap-icons";
import ReactStars from "react-rating-stars-component";
import "./CourseDescription.css";
import { DataContext } from "../../../contexts/DataContext";
import { useContext } from "react";

function CourseDescription() {
  let courseData = useContext(DataContext);
  courseData = courseData.coursePage;
  let instructors = courseData.instructors;
  let instructorsString = "";
  for (let i in instructors) {
    instructorsString += instructors[i]["name"];
    if (i < instructors.length - 1) instructorsString += ", ";
  }

  return (
    <div className="courseHeader">
      <div className="wrapper">
        <div>
          {courseData.path1 +
            " > " +
            courseData.path2 +
            " > " +
            courseData.path3}
        </div>
        <h4>
          {courseData.title}
          Course
        </h4>
        <p>{courseData.headline}</p>
        <div className="otherData">
          <div>{courseData.stars}</div>
          <ReactStars value={courseData.stars} size={20} edit={false} />
          <div>({courseData.ratings} ratings)</div>
          <div>{courseData.students} students</div>
        </div>
        <div>Created by {instructorsString}</div>
        <div className="otherData">
          <div>
            <InfoCircleFill /> Last updated {courseData.lastUpdated}
          </div>
          <div>
            <Globe /> {courseData.lang}
          </div>
          <div>
            <BadgeCcFill /> {courseData.cc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDescription;
