import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import CoursePage from "./components/coursePage/CoursePage";
import NavBarSection from "./components/navbarSection/NavBarSection";
import { useEffect, useState } from "react";

function App() {
  const [HomePageData, setHomePageData] = useState();
  const [CourseData, setCourseData] = useState();

  useEffect(() => {
    fetch("https://api.npoint.io/73b880b5c0a10a42b9fb")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setHomePageData(json);
      });

    fetch("https://api.npoint.io/01485aaee696c8e359a6")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCourseData(json);
      });
  }, []);

  if (HomePageData === undefined || CourseData === undefined) {
    return <div>Loading</div>;
  } else {
    return (
      <DataProvider value={{ homePage: HomePageData, coursePage: CourseData }}>
        <NavBarSection />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/course/:courseID" element={<CoursePage />}></Route>
        </Routes>
      </DataProvider>
    );
  }
}

export default App;
