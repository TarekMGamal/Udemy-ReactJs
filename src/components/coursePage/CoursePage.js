import CourseCard from "./courseCard/CourseCard";
import CourseDescription from "./courseDescription/CourseDescription";
import Curriculum from "./curriculum/Curriculum";
import Instructor from "./instructor/Instructor";
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
        <Instructor />
        <Reviews />
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
