import StarRatingCourse from "./StarRatingCourse"
import "./ReviewForm.css"
const ReviewForm = (props) => {
  return (
    <div className="container col-6 row-3 bg-white wrapper">
      <div className="">
        Give a review
      </div>
      <div classNAme="form-group flex-col">
        <StarRatingCourse/>
        <label for="exampleFormControlTextarea1">Write your review:</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
        <button onClick={submitReview} className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

const submitReview = (e) => {
  e.preventDefault();
  console.log("cac")
}

export default ReviewForm;