import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import Instructor from "./instructor/Instructor";
import "./Instructors.css";

function Instructors() {
  let data = useContext(DataContext);
  let instructors = data.coursePage;
  instructors = instructors.instructors;

  return (
    <>
      <h4 className="left">Instructors</h4>
      <div className="instructor">
        {instructors.map((element) => {
          return <Instructor data={element} />;
        })}
      </div>
    </>
  );
}

export default Instructors;
