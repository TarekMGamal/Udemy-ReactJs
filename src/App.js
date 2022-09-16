import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import "./App.css";
import HomePage from "./components/homePage/HomePage";
import CoursePage from "./components/coursePage/CoursePage";
import NavBarSection from "./components/navbarSection/NavBarSection";

function App() {
  let data;

  fetch("https://api.npoint.io/44834ec1db9c1d5b9885")
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      data = jsonData;
    });

  return (
    <DataProvider data={data}>
      <NavBarSection />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/course/:courseID" element={<CoursePage />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
