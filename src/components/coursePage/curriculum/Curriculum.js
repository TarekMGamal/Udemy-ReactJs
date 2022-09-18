import CurriculumItem from "./curriculumItem/CurricilumItem";
import "./Curriculum.css";
import { DataContext } from "../../../contexts/DataContext";
import { useContext, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Text } from "react";

function Curriculum() {
  let courseData = useContext(DataContext);
  courseData = courseData.coursePage;
  let content = courseData.content;
  let content1 = [],
    content2 = [];

  let cnt = 0;
  for (let i in content) {
    let section = content[i];
    let lectures = section["lectures"];
    cnt += lectures.length;

    if (i < content.length / 2) {
      content1.push(content[i]);
    } else {
      content2.push(content[i]);
    }
  }

  const [open, setOpen] = useState(false);
  const [expandAll, setExpandAll] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  if (courseData === undefined) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <h4 className="courseContentHeader">Course content</h4>
        <div className="cont">
          <div className="left">
            {content.length} sections • {cnt} lectures
          </div>
          <button
            className="expandAllButton"
            onClick={() => {
              setExpandAll(!expandAll);
            }}
          >
            Expand all sections
          </button>
        </div>
        <div className="contentContainer">
          {content1.map((element) => {
            return (
              <div>
                <CurriculumItem
                  className="section"
                  data={element}
                  expandState={expandAll}
                />
              </div>
            );
          })}
          <Collapse in={open}>
            <div>
              {content2.map((element) => {
                return (
                  <div className="sectionWrapper">
                    <CurriculumItem data={element} expandState={expandAll} />
                  </div>
                );
              })}
            </div>
          </Collapse>
          <button
            className="showMoreButton"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? "show less" : "show more"}
          </button>
        </div>
        <h4 className="courseContentHeader">Description</h4>
        <p>
          {openDescription ? "" : courseData.description.substring(0, 1000) + "..."}
        </p>
        <Collapse in={openDescription}>
          <p>{courseData.description}</p>
        </Collapse>
        <button
          className="showMoreButtonDescription"
          onClick={() => {
            setOpenDescription(!openDescription);
          }}
        >
          {openDescription ? "show less" : "show more"}
        </button>
      </>
    );
  }
}

export default Curriculum;
