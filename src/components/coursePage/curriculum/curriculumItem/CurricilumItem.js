import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./CurricilumItem.css";
import { PlayCircleFill, ChevronDown, ChevronUp } from "react-bootstrap-icons";
function CurriculumItem({ data, expandState }) {
  const [openLectures, setOpenLectures] = useState(false);
  let lectures = data.lectures;
  console.log(expandState);

  return (
    <>
      <button
        className="section"
        onClick={() => {
          setOpenLectures(!openLectures);
        }}
      >
        <div className="icon">
          {openLectures ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div>{data.section}</div>
        <div className="right">{lectures.length} lectures</div>
      </button>
      <Collapse in={openLectures || expandState}>
        <div className="expandedSection">
          {lectures.map((element) => {
            return (
              <div>
                <PlayCircleFill /> {element}
              </div>
            );
          })}
        </div>
      </Collapse>
    </>
  );
}

export default CurriculumItem;
