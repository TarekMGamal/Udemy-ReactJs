import "./App.css";
import CoursesSection from "./components/coursesSection/CoursesSection.js";

function App({ title, description, exploreButtonContent, courses }) {
  return (
    <CoursesSection
      title={title}
      description={description}
      exploreButtonContent={exploreButtonContent}
      courses={courses}
    />
  );
}

export default App;
