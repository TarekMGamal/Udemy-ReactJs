import CourseCard from "./courseCard/CourseCard";
import CourseDescription from "./courseDescription/CourseDescription";
import Curriculum from "./curriculum/Curriculum";
import Instructor from "./instructor/Instructor";
import Overview from "./overview/Overview";
import Reviews from "./reviews/Reviews";
import Footer from "./footer/Footer";

function CoursePage() {
  return (
    <>
      <CourseCard courseCardData={{}} />
      <CourseDescription courseData={{}} />
      <Overview overviewData={{}} />
      <Curriculum curriculumData={{}} />
      <Instructor instructorData={{}} />
      <Reviews reviewsData={{}} />
      <Footer />
    </>
  );
}

export default CoursePage;
