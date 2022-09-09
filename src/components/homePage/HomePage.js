import CoursesSection from "./coursesSection/CoursesSection";
import HeaderSection from "./headerSection/HeaderSection";

function HomePage({ title, description, exploreButtonContent, courses }) {
  return (
    <>
      <HeaderSection />
      <CoursesSection
        title={title}
        description={description}
        exploreButtonContent={exploreButtonContent}
        courses={courses}
      />
    </>
  );
}

export default HomePage;
