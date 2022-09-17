import {
  PlayBtn,
  FileEarmark,
  Download,
  Infinity,
  Phone,
  CardText,
} from "react-bootstrap-icons";
import "./CourseCard.css";
import { DataContext } from "../../../contexts/DataContext";
import { useContext } from "react";

function CourseCard() {
  let courseData = useContext(DataContext);
  courseData = courseData.coursePage;

  return (
    <div className="courseCard">
      <img src={courseData.image} alt="course" className="courseCardImg" />
      <div className="courseCardBody">
        <h3>E£{courseData.price}</h3>
        <button className="addCartBtn">Add to cart</button>
        <button>Buy now</button>
        <div className="d-flex justify-content-center">
          30-Day Money-Back Guarantee
        </div>
        <div>
          <h4>This course includes:</h4>
          <div>
            <PlayBtn />
            {courseData.hours + " on-demand video"}
          </div>
          <div>
            <FileEarmark />
            {courseData.articles + " articles"}
          </div>
          <div>
            <Download />
            {courseData.recources + " downloadable resources"}
          </div>
          <div>
            <Infinity />
            Full lifetime access
          </div>
          <div>
            <Phone />
            Access on mobile and TV
          </div>
          <div>
            <CardText />
            Certificate of completion
          </div>
          <div className="d-flex justify-content-between">
            <span>Share</span>
            <span>Gift this course</span>
            <span>Apply Coupon</span>
          </div>
        </div>
      </div>
      <div className="courseCardFooter">
        <h4>Training 5 or more people?</h4>
        <div>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </div>
        <button>Try Udemy Business</button>
      </div>
    </div>
  );
}

export default CourseCard;
