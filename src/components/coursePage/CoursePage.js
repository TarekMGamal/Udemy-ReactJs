import CourseCard from "./courseCard/CourseCard";
import CourseDescription from "./courseDescription/CourseDescription";
import Curriculum from "./curriculum/Curriculum";
import Instructors from "./instructors/Instructors";
import Overview from "./overview/Overview";
import Reviews from "./reviews/Reviews";
import Footer from "./footer/Footer";
import "./CoursePage.css";

function CoursePage() {
  return (
    <>
      <CourseCard />
      <CourseDescription />
      <div className="pageBody">
        <Overview />
        <Curriculum />
        <Instructors />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
