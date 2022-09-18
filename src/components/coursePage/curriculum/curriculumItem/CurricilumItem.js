import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

function CurriculumItem({ data }) {
  const [openLectures, setOpenLectures] = useState(false);
  let lectures = data.lectures;

  return (
    <>
      <button
        onClick={() => {
          setOpenLectures(!openLectures);
        }}
      >
        {data.section}
      </button>
      <Collapse in={openLectures}>
        <div>
          {lectures.map((element) => {
            return <div>{element}</div>;
          })}
        </div>
      </Collapse>
    </>
  );
}

export default CurriculumItem;
