import "./Instructor.css";

function Instructor({ data }) {
  return (
    <div className="instructorsContainer">
      <h5>{data.name}</h5>
      <div>{data.job}</div>
      <img className="instructorImage" src={data.image} alt="instructor" />
    </div>
  );
}

export default Instructor;
