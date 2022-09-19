import "./Overview.css";
import { CheckLg } from "react-bootstrap-icons";
import { DataContext } from "../../../contexts/DataContext";
import { useContext } from "react";

function Overview() {
  let courseData = useContext(DataContext);
  courseData = courseData.coursePage;
  let overview = courseData.overview;

  return (
    <div className="overviewSection">
      <h5>What you'll learn</h5>
      <div>
        {overview.map((element) => {
          return (
            <div>
              <CheckLg /> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Overview;
