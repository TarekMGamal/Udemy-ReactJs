import "./Overview.css";
import { CheckLg } from "react-bootstrap-icons";

function Overview({ overviewData }) {
  return (
    <div class="overviewSection">
      <h5>What you'll learn</h5>
      <div>
        <CheckLg />
        {overviewData.overview1} Create their own Python Programs
      </div>
      <div>
        <CheckLg /> {overviewData.overview2} Become an experienced Python
        Programmer
      </div>
      <div>
        <CheckLg /> {overviewData.overview3} Parse the Web and Create their own
        Games
      </div>
    </div>
  );
}

export default Overview;
