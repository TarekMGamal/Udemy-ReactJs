import CurriculumItem from "./curriculumItem/CurricilumItem";
import "./Curriculum.css";
import { DataContext } from "../../../contexts/DataContext";
import { useContext, useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function Curriculum() {
  let courseData = useContext(DataContext);
  courseData = courseData.coursePage;
  let content = courseData.content;
  let content1 = [],
    content2 = [];
  for (let i in content) {
    if (i < content.length / 2) {
      content1.push(content[i]);
    } else {
      content2.push(content[i]);
    }
  }

  const [open, setOpen] = useState(false);

  if (courseData === undefined) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <div>
          <div className="contentContainer">
            {content1.map((element) => {
              return (
                <div>
                  <CurriculumItem data={element} />
                </div>
              );
            })}
            <Collapse in={open}>
              <div className="contentContainer">
                {content2.map((element) => {
                  return (
                    <div>
                      <CurriculumItem data={element} />
                    </div>
                  );
                })}
              </div>
            </Collapse>
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? "show less" : "show more"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Curriculum;
